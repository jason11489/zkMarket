/**
 *
 * txHash -> log 확인
 * 누군지 알려줘야함 : pk_enc ? sk_enc ? eoa
 *
 *
 */

import _ from 'lodash';
import { default as contracts } from "../contracts";
import { web3 } from "../contracts/web3";
import Encryption from "../crypto/encryption";
import db from '../db';
import { addPrefixHex } from "../utils/types";

import mimc from '../crypto/mimc';
import types from '../utils/types';

import napi_func from '../npai_rs/index';

import mtree from '../crypto/mtree';

/**
 *
 * sk_enc
 * txHash
 *
 */
const acceptTradeController = async (req, res) => {
    console.log("req.body = ", req.body)
    const txHash = req.body.txHash;
    console.log("txHash = ", txHash)

    const receipt = await web3
        .eth
        .getTransactionReceipt(addPrefixHex(txHash), async (err, receipt) => {
            if (err) {
                console.log(err);
                return res.send(false);
            }
            return receipt;
        })

    console.log("event data = ", receipt.logs[0].data);

    // check event
    const event = web3
        .eth
        .abi
        .decodeLog([
            {
                type: 'address',
                name: 'sender'
            }, {
                type: 'uint256[]',
                name: 'c0'
            }, {
                type: 'uint256[]',
                name: 'c1'
            }, {
                type: 'uint256[]',
                name: 'c2'
            }, {
                type: 'uint256',
                name: 'idx'
            }
        ], receipt.logs[0].data, receipt.logs[0].topics);

    console.log("decode event = ", types.decStrToHex(event.c0[0]));

    // Get root from contract
    const rt = await sendgetrootTx();
    console.log("root = ", rt);

    console.log("receipt = ", receipt)

    const hK = req.body.hK;
    const writerInfo = await db
        .data
        .getDataInfo('h_k', hK.toLocaleLowerCase())

    // console.log(     "check book exist = ",     await
    // checkRegisterDataTx(types.hexStrToDec(writerInfo.h_ct)) )

    const ENA_writer = writerInfo.addr_;

    const pk_enc_x = writerInfo.pk_enc_x;

    const pk_peer = {
        "pkEnc": {
            "x": BigInt(writerInfo.pk_enc_x),
            "y": BigInt(writerInfo.pk_enc_y)
        }
    }

    const CT_order = types.decStrToHex(event.c0[0])
    // const CT_order = parseTxLog(receipt)[0];
    console.log("CT order = ,", CT_order);
    const G_r = {
        "x": types.decStrToHex(event.c0[0]),
        "y": types.decStrToHex(event.c0[1])
    };
    const c1 = {
        "x": types.decStrToHex(event.c1[0]),
        "y": types.decStrToHex(event.c1[1])
    };
    const c2 = [
        types.decStrToHex(event.c2[0]),
        types.decStrToHex(event.c2[1]),
        types.decStrToHex(event.c2[2]),
        types.decStrToHex(event.c2[3]),
        types.decStrToHex(event.c2[4])
    ];

    const pct = new Encryption.zkmarketpCT(G_r, c1, c2);
    const sk_enc = writerInfo.sk_enc;

    const zkmarket_pct = new Encryption.publicKeyEncryption();

    const Order = zkmarket_pct.zkMarketDec(pct, sk_enc);

    // Make nf,cm,cmAzeroth
    const mimc7 = new mimc.MiMC7();
    const cm = mimc7.hash(ENA_writer, Order[2], Order[3], hK, Order[0]);
    console.log("seller's sk = ", writerInfo.sk_enc);
    console.log("seller's ENA_writer = ", ENA_writer);
    const nf = mimc7.hash(writerInfo.sk_enc, cm);
    const o_wallet = mimc7.hash(Order[2], Order[3], hK, Order[0]);
    const cmAzeroth = mimc7.hash(o_wallet, 0, 0, Order[3], ENA_writer);

    const penc = new Encryption.publicKeyEncryption();

    const plaintext = [writerInfo.enc_key];

    const pk_cons = {
        "pkEnc": {
            "x": BigInt(types.hexStrToDec(Order[0])),
            "y": BigInt(types.hexStrToDec(Order[1]))
        }
    }

    const [CT_k, CT_k_r, CT_k_key] = penc.zkMarketEnc(pk_cons, ...plaintext);

    console.log("cm = ", types.hexStrToDec(cm).toString());

    // make merkle tree proof

    const merkle_leaf_pos = event.idx - 1;

    console.log("idx = ", merkle_leaf_pos);
    console.log("idx = ", types.addPrefixHex(types.decStrToHex(merkle_leaf_pos)));

    const path = await sendmarket_getMerklePath(merkle_leaf_pos);
    // const path = await sendmarket_getMerklePath(event.idx);
    const mtData = mtree(rt, path, merkle_leaf_pos);

    console.log("mtdata = ", mtData.toIntermediateHashesArray())

    console.log("path = ", path);

    console.log("cm = ", cm);

    const inputs = {
        rt: rt,
        nf: types
            .hexStrToDec(nf)
            .toString(),
        cmAzeroth: types
            .hexStrToDec(cmAzeroth)
            .toString(),
        hk: types
            .hexStrToDec(hK)
            .toString(),
        addrseller: types
            .hexStrToDec(ENA_writer)
            .toString(),
        gRX: CT_k
            .c0
            .x
            .toString(),
        gRY: CT_k
            .c0
            .y
            .toString(),
        c1X: CT_k
            .c1
            .x
            .toString(),
        c1Y: CT_k
            .c1
            .y
            .toString(),
        ctK: types
            .hexStrToDec(CT_k.c2[0])
            .toString(),
        cm: types
            .hexStrToDec(cm)
            .toString(),
        leafPos: merkle_leaf_pos.toString(),
        //tree proof
        treeProof: path,
        skseller: types
            .hexStrToDec(sk_enc)
            .toString(),
        kData: types
            .hexStrToDec(writerInfo.enc_key)
            .toString(),
        pkbuyerX: types
            .hexStrToDec(Order[0])
            .toString(),
        pkbuyerY: types
            .hexStrToDec(Order[1])
            .toString(),
        r: types
            .hexStrToDec(Order[2])
            .toString(),
        fee: types
            .hexStrToDec(Order[3])
            .toString(),
        oazeroth: types
            .hexStrToDec(o_wallet)
            .toString(),
        ctKKeyX: CT_k_key
            .x
            .toString(),
        ctKKeyY: CT_k_key
            .y
            .toString(),
        ctKX: CT_k_key
            .x
            .toString(),
        ctKR: types
            .hexStrToDec(CT_k_r)
            .toString(),
        tkAddr: "0",
        tkId: "0"
    }

    console.log("check = ", inputs)

    // napi_func.init() 실행하게 되면 contract, sever 코드 고쳐야한다잉
    // console.log("zk snark init = ", napi_func.init());
    const _proof = await napi_func.prove(inputs);
    const proof = JSON.parse(_proof)
    console.log("proof = ", proof);
    const contract_proof = [
        types.addPrefixHex(proof.A[0]),
        types.addPrefixHex(proof.A[1]),
        types.addPrefixHex(proof.B[1]),
        types.addPrefixHex(proof.B[0]),
        types.addPrefixHex(proof.B[3]),
        types.addPrefixHex(proof.B[2]),
        types.addPrefixHex(proof.C[0]),
        types.addPrefixHex(proof.C[1])
    ]

    const contract_input = [
        types.addPrefixHex(types.decStrToHex(inputs.rt)),
        types.addPrefixHex(types.decStrToHex(inputs.nf)),
        types.addPrefixHex(types.decStrToHex(inputs.cmAzeroth)),
        types.addPrefixHex(types.decStrToHex(inputs.hk)),
        // types.addPrefixHex(types.decStrToHex(inputs.addrseller)),
        types.addPrefixHex(types.decStrToHex(inputs.addrseller)),
        types.addPrefixHex(types.decStrToHex(inputs.gRX)),
        types.addPrefixHex(types.decStrToHex(inputs.gRY)),
        types.addPrefixHex(types.decStrToHex(inputs.c1X)),
        types.addPrefixHex(types.decStrToHex(inputs.c1Y)),
        types.addPrefixHex(types.decStrToHex(inputs.ctK))
    ];

    const audit_pk = {
        "x": BigInt(req.body.apk_x),
        "y": BigInt(req.body.apk_y)
    }

    // console.log("audit pk = ",audit_pk) console.log("pk_peer  = ",pk_peer)
    // console.log("typeof o_wallet  = ",typeof o_wallet) console.log("typeof
    // Order[3]  = ",typeof Order[3]) console.log("typeof ENA_writer  = ",typeof
    // ENA_writer) console.log("o_wallet  = ",o_wallet) console.log("Order[3]  =
    // ",Order[3]) console.log("ENA_writer  = ",ENA_writer)

    const [cm_ct_k, cm_ct_k_r, cm_ct_k_key] = penc.Enc(
        audit_pk,
        pk_peer,
        o_wallet,
        '0x0',
        '0x0',
        Order[3],
        ENA_writer
    );

    const check_dec_pCT = penc.Dec(cm_ct_k, writerInfo.sk_enc, false);

    console.log("dec pCT = ", check_dec_pCT)
    console.log("dec pCT[sk] = ", writerInfo.sk_enc)

    // console.log("ENA writer = ", ENA_writer);
    // console.log(
    //     "contract pCT note = ",
    //     types.addPrefixAndPadHexFromArray(cm_ct_k.toList())
    // );

    const cat = await sendgetrootTx();
    console.log("root = ", cat);

    let _rec = await sendacceptTx(
        contract_proof,
        contract_input,
        types.addPrefixAndPadHexFromArray(cm_ct_k.toList()),
        ENA_writer,
        0x0
    )
    console.log(_rec)

    // db
    //     .trade
    //     .INSERT_TRADE({
    //         buyer_addr: types.subtractPrefixHex(req.body.Addr),
    //         buyer_sk: _.get(writerInfo, 'sk_enc'),
    //         buyer_pk: pk_cons
    //             .pkEnc
    //             .x
    //             .toString(16),
    //         title: _.get(writerInfo, 'title'),
    //         h_k: hK.toLocaleLowerCase()
    //     })

    return res.send("good!!");
}

const getEoaAddrFromReceipt = (receipt) => {
    try {
        const logs = parseTxLog(receipt)[0][0];
        console.log("logs = ", logs)
        for (let i = 0; i < logs.length; i++) {
            if (logs[i] != '0') {
                return logs.slice(i);
            }
        }
        return logs;
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const sendacceptTx = async (proof, inputs, ct, addr, enaIndex) => {
    try {
        const receipt = await contracts
            .tradeContract
            .acceptTrade(proof, inputs, ct, addr, enaIndex)
        console.log("check receipt in accept tx = ", receipt)
        return receipt;
    } catch (error) {
        console.log("accept tx error = ", error)
        return undefined;
    }
}

const sendgetrootTx = async () => {
    try {
        const receipt = await contracts
            .tradeContract
            .market_getRootTop()
        console.log("check receipt in accept tx = ", receipt)
        return receipt;
    } catch (error) {
        console.log("root tx = ", error);
        return undefined;
    }
}

const sendmarket_getMerklePath = async (index) => {
    try {
        const receipt = await contracts
            .tradeContract
            .market_getMerklePath(index)
        return receipt;
    } catch (error) {
        console.log("path tx = ", error);
        return undefined;
    }
}

const checkRegisterDataTx = async (inputs) => {
    try {
        const receipt = await contracts
            .tradeContract
            .isRegisteredData(inputs)
        console.log("check receipt = ", receipt)
        return receipt;
    } catch (error) {
        return undefined;
    }
}

const parseTxLog = (receipt) => {
    let tmp = []
    let logs = _.get(receipt, 'logs') ?? receipt
    for (let i = 0; i < logs.length; i++) {
        tmp.push(parseData(logs[i].data))
    }
    return tmp
}

const parseData = (data) => {
    let tmp = []
    for (let i = 0; i < Number.parseInt(data.length / 64); i++) {
        tmp.push(data.slice(2 + 64 * i, 2 + 64 * (i + 1)))
    }
    return tmp
}

export default acceptTradeController;