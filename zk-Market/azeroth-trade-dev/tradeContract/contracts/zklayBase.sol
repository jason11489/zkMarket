// Copyright (c) 2015-2020 Clearmatics Technologies Ltd
// Copyright (c) 2021-2021 Zkrypto Inc.
// SPDX-License-Identifier: LGPL-3.0+

pragma solidity ^0.8.2;

import './Tokens.sol';
import './BaseMerkleTree.sol';
import './Ownable.sol';

/// MixerBase implements the functions shared across all Mixers (regardless
/// which zkSNARK is used)
abstract contract ZklayBase is
    BaseMerkleTree,
    ERC223ReceivingContract,
    Ownable,
    NFTHolder
{
    struct CurvePoint {
        uint256 x;
        uint256 y;
    }

    struct ENA {
        uint256 sR;
        uint256[3] sCT; // contract address, tokenId, amount
    }

    struct AddressMap {
        uint256 Addr;
        uint256 PkOwn;
        CurvePoint PkEnc;
    }

    // zkTransfer fee
    uint256 private _zkTransferFee = 0;

    // Address for zkTransfer fee
    address private _addressForZkTransferFee;

    // The roots of the different updated trees
    mapping(uint256 => bool) public rtList;

    // The public list of cm (prevents invalid inputs)
    mapping(uint256 => bool) public cmList;

    // The public list of nullifiers (prevents double spend)
    mapping(uint256 => bool) public nfList;

    // The auditor's public key
    // uint256 private _APK;
    CurvePoint private _APK;
    mapping(uint256 => CurvePoint) private _APK_map;
    uint private _indexOfApk = 0;

    // The Most recent root of the Merkle tree
    uint256 private _rootTop;

    // The public list of user address
    mapping(uint256 => bool) internal _addrList;

    // List of mapping addresses corresponding to user EOA
    mapping(address => AddressMap) internal _addressMap;

    // The public list of users' encrypted accounts
    mapping(uint256 => ENA[]) internal _ENA;
    
    // Structure of the verification key and proofs is opaque, determined by
    // zk-snark verification library.
    uint256[] internal _vk;

    // Registration status of fungible token address
//    mapping(address => bool) private _tokens;

    // The number of inputs for a zk-SNARK proof
    uint256 internal constant _NUM_INPUTS = 30;

    // The unit used for public values (ether in and out), in Wei.
    // Must match the python wrappers.
    uint64 private constant _PUBLIC_UNIT_VALUE_WEI = 1;

    // The unit used for public values (ether in and out), in Ether.
    // Must match the python wrappers.
    uint64 private constant _PUBLIC_UNIT_VALUE_ETHER =
    _PUBLIC_UNIT_VALUE_WEI * (10 ** 18);

    // units of gas used * (base fee + priority fee)
    // estimated GasUsed = 2000000, (base fee + priority fee) = 10
    uint256 private _estimatedZkTransferGasFeeToWei = 200000000;

    // add addr, index, sCT for backend server caching
    event LogZkTransfer(
        uint256 nullifier,
        uint256 com,
        uint256[11] ct,
        uint256 numLeaves,
        uint256[6] ena
    );

    event LogUserRegister(uint256 addr, uint256 pkOwn, CurvePoint pkEnc);

    event LogNFT(address tokenAddress, uint256 tokenId);
    event LogNFT1155(address tokenAddress, uint256 tokenId, uint256 amount);
    /// Constructor
    constructor(
        uint256 depth,
        uint256[] memory vk,
        uint256 price,
        address toReceiveFee
    ) BaseMerkleTree(depth) {
        uint256 initialRoot = uint256(_nodes[0]);
        rtList[initialRoot] = true;
        _rootTop = initialRoot;
        _vk = vk;
        _zkTransferFee = price;
        _addressForZkTransferFee = toReceiveFee;
        // register 'Ethereum'
    }
    modifier verifyInputs(uint256[3] memory inputs) {
        // 1. Check the auditor key.
        require(
            _APK.x != uint256(0) && _APK.y != uint256(0),
            'APK does not exist'
        );

        // 2. Check the root and the nullifiers.
        require(rtList[inputs[0]], 'This root is not valid');

        require(
            !nfList[inputs[1]],
            'This nullifier has already been used'
        );
        require(
            !cmList[inputs[2]],
            'This commitment has already been used'
        );
        _;
    }

    function isNullified(uint256 nf) public view returns (bool) {
        return nfList[nf];
    }

    function getCiphertext(uint256 addr, uint256 index) public view returns(ENA memory) {
        if(getEnaLength(addr) <= index){
            return ENA(uint256(0), [uint256(0), uint256(0), uint256(0)]);
        }
        return _ENA[addr][index];
    }

    function getEnaLength(uint256 addr) public view returns(uint256) {
        return _ENA[addr].length;
    }

    function getAPK() public view returns (CurvePoint memory, uint256) {
        require(
            _APK.x != uint256(0) && _APK.y != uint256(0),
            'APK does not exist'
        );

        require(
            _APK.x == _APK_map[_indexOfApk - 1].x && _APK.y == _APK_map[_indexOfApk - 1].y,
            '500 Error, APK something wrong'
        );

        return (_APK, _indexOfApk - 1);
    }

    function getAPKfromIndex(uint256 index) public view returns (CurvePoint memory) {
        require(
            _APK_map[index].x != uint256(0) && _APK_map[index].y != uint256(0),
            'APK does not exist'
        );

        return (_APK_map[index]);
    }

    function getUserPublicKeys(address eoa)
    public
    view
    returns (
        uint256,
        uint256,
        CurvePoint memory
    )
    {
        return (
        _addressMap[eoa].Addr,
        _addressMap[eoa].PkOwn,
        _addressMap[eoa].PkEnc
        );
    }

    function getRootTop() public view returns (uint256) {
        return _rootTop;
    }

    function getMerklePath(uint256 index)
    public
    view
    returns (uint256[] memory)
    {
        bytes32[] memory merklePathBytes = _computeMerklePath(index);
        uint256[] memory merklePath = new uint256[](_DEPTH);

        //TODO: need conversion?
        for (uint256 i = 0; i < merklePathBytes.length; i++) {
            merklePath[i] = uint256(merklePathBytes[i]);
        }

        return merklePath;
    }

    function registerUser(
        uint256 addr,
        uint256 pkOwn,
        uint256[] memory pkEnc
    ) public {
        require(!_addrList[addr], 'User already exist');
        _addrList[addr] = true;

        _addressMap[msg.sender].Addr = addr;
        _addressMap[msg.sender].PkOwn = pkOwn;
        CurvePoint memory curvePointPkEnc = CurvePoint(pkEnc[0], pkEnc[1]);
        _addressMap[msg.sender].PkEnc = curvePointPkEnc;

        emit LogUserRegister(addr, pkOwn, curvePointPkEnc);
    }

    function registerAuditor(uint256[] memory apk) public onlyOwner {
        //** Can register new Apk
        // require(
        //     _APK.x == uint256(0) && _APK.y == uint256(0),
        //     'APK already exists'
        // );
        _APK_map[_indexOfApk] = CurvePoint(apk[0], apk[1]);
        _APK = _APK_map[_indexOfApk];
        _indexOfApk = _indexOfApk + 1;
    }

    function getAPKByIndex(uint index) public view returns (CurvePoint memory) {
        require(
            _APK_map[index].x != uint256(0) && _APK_map[index].y != uint256(0),
            'APK does not exist'
        );

        return _APK_map[index];
    }


    /// @notice update token ena data
    function updateENA(uint256 addr, uint256 enaIndex, uint256 sR, uint256[3] memory sCT) private{
        // 10. Update a ciphertext of ENA as follows.
        // ENA[addr] <- ct'
        require(getEnaLength(addr) >= enaIndex, 'enaIndex exceeded the range');
        if(getEnaLength(addr) == enaIndex){
            _ENA[addr].push(ENA(sR, sCT));
        } else {
            _ENA[addr][enaIndex] = ENA(sR, sCT);
        }
    }
    //_ENA[tokenID][TokenADDr][addr] = SR, sCT
    // Vpriv_in[tokenID, tokenADDR, amount] RECVaddr, Open = CT
    // sR, sCT = symm.ENC(VenaValue)
    /// @notice zkTransfer ERC-20
    /// @param proof       groth16 proof
    /// @param inputs[0]   rt
    /// @param inputs[1]   sn
    /// @param inputs[2]   pk.addr || ena
    /// @param inputs[3]   pk.Own
    /// @param inputs[4]   pk.Enc.x
    /// @param inputs[5]   pk.Enc.y
    /// @param inputs[6]   cm
    /// @param inputs[7]   sCT_New.r
    /// @param inputs[8]   sCT_New.ct
    /// @param inputs[9]   sCT_New.ct
    /// @param inputs[10]  sCT_New.ct
    /// @param inputs[11]  pubInVal [13]
    /// @param inputs[12]  pubOutVal [16]
    /// @param inputs[13]  pubTkAddr
    /// @param inputs[14]  pubTkId
    /// @param inputs[15]  ct_0.x [17]
    /// @param inputs[16]  ct_0.y [18]
    /// @param inputs[17]  ct_1.x [19]
    /// @param inputs[18]  ct_1.y [20]
    /// @param inputs[19]  ct_2.x [21]
    /// @param inputs[20]  ct_2,y [22]
    /// @param inputs[21]  ct_3.0 [23]
    /// @param inputs[22]  ct_3.1 [24]
    /// @param inputs[23]  ct_3.2 [25]
    /// @param inputs[24]  ct_3.3 [26]
    /// @param inputs[25]  ct_3.4 [27]
    /// @param toEoA       sender EOA
    function zkTransfer20(
        uint256[] memory proof,
        uint256[] memory inputs,
        address toEoA,
        uint256 enaIndex
    )
    public
    payable
    verifyInputs([inputs[0], inputs[1], inputs[6]])
    {

        require(inputs[14] == 0, "ERC 20 tokenID is not equal to zero");
        uint256 addr = inputs[2];
        // Check the user address is in the list.
        require(
            _addrList[addr],
            'Invalid User: The user isn`t in the user list'
        );
        ENA memory ena = getCiphertext(addr, enaIndex);
        uint256[] memory states = new uint256[](6);
        states[0] = _APK.x;
        states[1] = _APK.y;
        // 0
        states[2] = ena.sR;
        // 0 0 0
        states[3] = ena.sCT[0];
        states[4] = ena.sCT[1];
        states[5] = ena.sCT[2];

        require(
            _verifyZKProof(
                proof,
                _assembleZKInputsWithStates(states, inputs)
            ),
            'Invalid proof: Unable to verify the proof correctly'
        );

        // Compute a new merkle root, Update root_list.
        // rt' <- add_and_update(commit_list, c')
        // root_list.append(rt')
        _insert(bytes32(inputs[6]));
        uint256 new_merkle_root = uint256(_recomputeRoot(1));
        _addRoot(new_merkle_root);

        // Update a nullifier list by appending a new nf.
        nfList[inputs[1]] = true;

        // Update a cm list by appending a new cm.
        cmList[inputs[6]] = true;
        uint256[3] memory sCT = [inputs[8], inputs[9], inputs[10]];
        uint256[6] memory logEna = [addr, enaIndex, inputs[7], inputs[8], inputs[9], inputs[10]];
        uint256[2] memory amount = [inputs[11], inputs[12]];
        uint256[11] memory pCT = [
            inputs[15],
            inputs[16],
            inputs[17],
            inputs[18],
            inputs[19],
            inputs[20],
            inputs[21],
            inputs[22],
            inputs[23],
            inputs[24],
            inputs[25]
        ];
        emit LogZkTransfer(
            inputs[1],
            inputs[6],
            pCT,
            BaseMerkleTree._numLeaves,
            logEna
        );
//         inputs[11]  pubInVal
//         inputs[12]  pubOutVal
//         inputs[13]  pubTkAddr
//         inputs[14]  pubTkId
        _processPublic20(inputs[13], amount, toEoA);
        _transferAzerothFee();
//                ena   index  sCT_New.r sCT_New.ct
        updateENA(addr, enaIndex, inputs[7], sCT);
    }

    /// @notice zkTransfer ERC-721
    /// @dev same as the parameter of zkTransfer20
    function zkTransfer721(
        uint256[] memory proof,
        uint256[] memory inputs,
        address toEoA,
        uint256 enaIndex
    )
    public
    payable
    verifyInputs([inputs[0], inputs[1], inputs[6]])
    {
        require(inputs[11] <= 1 && inputs[12] <= 1, "ERC 721 tokenAmount must be 1 or 0");
        uint256 addr = inputs[2];
        // Check the user address is in the list.
        require(
            _addrList[addr],
            'Invalid User: The user isn`t in the user list'
        );
        ENA memory ena = getCiphertext(addr, enaIndex);
        uint256[] memory states = new uint256[](6);
        states[0] = _APK.x;
        states[1] = _APK.y;
        // 0
        states[2] = ena.sR;
        // 0 0 0
        states[3] = ena.sCT[0];
        states[4] = ena.sCT[1];
        states[5] = ena.sCT[2];

        require(
            _verifyZKProof(
                proof,
                _assembleZKInputsWithStates(states, inputs)
            ),
            'Invalid proof: Unable to verify the proof correctly'
        );

        // Compute a new merkle root, Update root_list.
        // rt' <- add_and_update(commit_list, c')
        // root_list.append(rt')
        _insert(bytes32(inputs[6]));
        uint256 new_merkle_root = uint256(_recomputeRoot(1));
        _addRoot(new_merkle_root);

         // Update a nullifier list by appending a new nf.
        nfList[inputs[1]] = true;

        // Update a cm list by appending a new cm.
        cmList[inputs[6]] = true;
        uint256[3] memory sCT = [inputs[8], inputs[9], inputs[10]];
        uint256[6] memory logEna = [addr, enaIndex, inputs[7], inputs[8], inputs[9], inputs[10]];
        uint256[2] memory amount = [inputs[11], inputs[12]];
        uint256[11] memory pCT = [
        inputs[15],
        inputs[16],
        inputs[17],
        inputs[18],
        inputs[19],
        inputs[20],
        inputs[21],
        inputs[22],
        inputs[23],
        inputs[24],
        inputs[25]
        ];
        emit LogZkTransfer(
            inputs[1],
            inputs[6],
            pCT,
            BaseMerkleTree._numLeaves,
            logEna
        );
        /// inputs[11]  pubInVal
        /// inputs[12]  pubOutVal
        /// inputs[13]  pubTkAddr
        /// inputs[14]  pubTkId
        _processPublic721(inputs[13], inputs[14], amount, toEoA);
        _transferAzerothFee();
        //        ena   index  sCT_New.r  sCT_New.ct
        updateENA(addr, enaIndex, inputs[7], sCT);
    }

    /// @notice zkTransfer ERC-1155
    /// @dev same as the parameter of zkTransfer20
    /// Only erc-1155 should not accept pubin/out as 0,0,0
    /// Be sure to fill in the token id and token address to be traded
    function zkTransfer1155(
        uint256[] memory proof,
        uint256[] memory inputs,
        address toEoA,
        uint256 enaIndex
    )
    public
    payable
    verifyInputs([inputs[0], inputs[1], inputs[6]])
    {
//        address tokenAddress = address(uint160(inputs[10]));
        uint256 addr = inputs[2];
        // Check the user address is in the list.
        require(
            _addrList[addr],
            'Invalid User: The user isn`t in the user list'
        );
        ENA memory ena = getCiphertext(addr, enaIndex);
        uint256[] memory states = new uint256[](6);
        states[0] = _APK.x;
        states[1] = _APK.y;
        // 0
        states[2] = ena.sR;
        // 0 0 0
        states[3] = ena.sCT[0];
        states[4] = ena.sCT[1];
        states[5] = ena.sCT[2];

        require(
            _verifyZKProof(
                proof,
                _assembleZKInputsWithStates(states, inputs)
            ),
            'Invalid proof: Unable to verify the proof correctly'
        );

        // Compute a new merkle root, Update root_list.
        // rt' <- add_and_update(commit_list, c')
        // root_list.append(rt')
        _insert(bytes32(inputs[6]));
        uint256 new_merkle_root = uint256(_recomputeRoot(1));
        _addRoot(new_merkle_root);

         // Update a nullifier list by appending a new nf.
        nfList[inputs[1]] = true;

        // Update a cm list by appending a new cm.
        cmList[inputs[6]] = true;
        uint256[3] memory sCT = [inputs[8], inputs[9], inputs[10]];
        uint256[6] memory logEna = [addr, enaIndex, inputs[7], inputs[8], inputs[9], inputs[10]];
        uint256[2] memory amount = [inputs[11], inputs[12]];
        uint256[11] memory pCT = [
        inputs[15],
        inputs[16],
        inputs[17],
        inputs[18],
        inputs[19],
        inputs[20],
        inputs[21],
        inputs[22],
        inputs[23],
        inputs[24],
        inputs[25]
        ];
        emit LogZkTransfer(
            inputs[1],
            inputs[6],
            pCT,
            BaseMerkleTree._numLeaves,
            logEna
        );
        /// inputs[11]  pubInVal
        /// inputs[12]  pubOutVal
        /// inputs[13]  pubTkAddr
        /// inputs[14]  pubTkId
        _processPublic1155(inputs[13], inputs[14], amount, toEoA);
        _transferAzerothFee();
        //        ena   index  sCT_New.r  sCT_New.ct
        updateENA(addr, enaIndex, inputs[7], sCT);
    }


    function _assembleZKInputsWithStates(
        uint256[] memory states,
        uint256[] memory inputs
    ) private pure returns (uint256[] memory) {
        // Define statement including APK and constant 'one' which generated from Jsnark.
        uint256 statementLength = inputs.length + states.length;

        uint256[] memory statements = new uint256[](statementLength);

        for (uint256 i = 0; i < states.length; i++) {
            statements[i] = states[i];
        }
        for (uint256 i = 0; i < inputs.length; i++) {
            statements[i + states.length] = inputs[i];
        }

        return statements;
    }

    // Implementations must implement the verification algorithm of the
    // selected SNARK.
    function _verifyZKProof(
        uint256[] memory proof,
        uint256[] memory inputs
    ) internal virtual returns (bool);

    function _addRoot(uint256 rt) internal {
        rtList[rt] = true;
        _rootTop = rt;
    }

    function _processPublic20(
        uint256 tokenAddr,
        uint256[2] memory amount,
        address EOA
    ) private {
        uint256 inAmount = amount[0];
        uint256 outAmount = amount[1];
        // If vpubIn is > 0, we need to make sure that right amount is paid
        address tokenAddress = address(uint160(tokenAddr));
        if (inAmount > 0) {
            if (tokenAddress != address(0)) {
                require(
                    msg.value == _zkTransferFee,
                    'Wrong msg.value: Value paid is not correct'
                );
                ERC20 erc20Token = ERC20(tokenAddress);
                erc20Token.transferFrom(msg.sender, address(this), inAmount);
            } else {
                inAmount *= _PUBLIC_UNIT_VALUE_WEI;
                require(
                    msg.value == (inAmount + _zkTransferFee),
                    'Wrong msg.value: Value paid is not correct'
                );
            }
        } else {
            require(
                msg.value == _zkTransferFee,
                'Wrong msg.value: Value paid is not correct'
            );
            // if (msg.value > 0) {
            //     (bool success,) = msg.sender.call{value : msg.value - _zkTransferFee}('');
            //     require(success, 'vpubIn return transfer failed');
            // }
        }

        // If vpubOut > 0 then we do a withdraw. We retrieve the
        // msg.sender and send him the appropriate value If proof is valid
        if (outAmount > 0) {

            if (tokenAddress != address(0)) {
//                require(
//                    msg.value == _zkTransferFee,
//                    'Wrong msg.value: Value paid is not correct'
//                );
                ERC20 erc20Token = ERC20(tokenAddress);
                erc20Token.transfer(EOA, outAmount);
            } else {
//                require(
//                    msg.value == (inAmount + outAmount + _zkTransferFee),
//                    'Wrong msg.value: Value paid is not correct'
//                );
                outAmount *= _PUBLIC_UNIT_VALUE_WEI;
                payable(EOA).transfer(outAmount);
            }
        }
    }

    function _processPublic721(
        uint256 tokenAddr,
        uint256 tokenId,
        uint256[2] memory amount,
        address EOA
    ) private {
        uint256 inAmount = amount[0];
        uint256 outAmount = amount[1];
        address tokenAddress = address(uint160(tokenAddr));

        require(
            msg.value == _zkTransferFee,
            'Wrong msg.value: Value paid is not correct'
        );
        if (inAmount != 0) {
            require(
                tokenAddress != address(0),
                'address is not NFT721'
            );
            ERC721 token = ERC721(tokenAddress);
            emit LogNFT(tokenAddress, tokenId);

            token.transferFrom(msg.sender, address(this), tokenId);
        }

        if (outAmount != 0) {
            require(
                tokenAddress != address(0),
                'address is not NFT721'
            );
            ERC721 token = ERC721(tokenAddress);
            emit LogNFT(tokenAddress, tokenId);
            token.transferFrom(address(this), EOA, tokenId);
        }
    }

    function _processPublic1155(
        uint256 tokenAddr,
        uint256 tokenId,
        uint256[2] memory amount,
        address EOA
    ) private {
        uint256 inAmount = amount[0];
        uint256 outAmount = amount[1];
        address tokenAddress = address(uint160(tokenAddr));
        require(
            msg.value == _zkTransferFee,
            'Wrong msg.value: Value paid is not correct'
        );
        if (inAmount >0) {
            require(
                tokenAddress != address(0),
                'address is not NFT1155'
            );
            ERC1155 token = ERC1155(tokenAddress);
            token.safeTransferFrom(msg.sender, address(this), tokenId, inAmount, '');
            emit LogNFT1155(tokenAddress, tokenId, inAmount);
        }
        if (outAmount > 0) {
            require(
                tokenAddress != address(0),
                'address is not NFT1155'
            );
            ERC1155 token = ERC1155(tokenAddress);
            token.safeTransferFrom(address(this), EOA, tokenId, outAmount, '');
            emit LogNFT1155(tokenAddress, tokenId, outAmount);
        }
    }

    // price getter setter
    function getZkTransferFee() public view returns (uint256) {
        return (_zkTransferFee);
    }

    function setZkTransferFee(uint256 price) public onlyOwner {
        // TODO bm [constant -> percent]
        _zkTransferFee = price;
    }

    // azerothPriceAddress getter setter
    function getZkTransferFeeAddress() public view returns(address) {
        return (_addressForZkTransferFee);
    }
    function setAzerothPriceAddress(address addr) public onlyOwner {
        _addressForZkTransferFee = addr;
    }

    // transfer _price to _azerothPriceAddress
    function _transferAzerothFee() private {
        (bool success,) = _addressForZkTransferFee.call{value : _zkTransferFee}('');
        require(success, 'Azeroth fee transfer failed.');
    }
}
