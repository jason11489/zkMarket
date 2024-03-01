import Ganache from "./ganahce";
import { getContractFormatProof } from "./utils";
import { ContractJson, sendTransaction } from "./web3";
import Web3Interface from "./web3.interface";

export default class tradeContract extends Web3Interface {
    constructor(endPoint, contractAddress) {
        super(endPoint);
        this.instance = new this.eth.Contract(ContractJson.abi, contractAddress);
        this.contractMethod = this.instance.methods;
        this.contractAddress= contractAddress;
    }


    async isRegisteredUser(addr) {
        return this.localContractCall(
            this.contractMethod.isRegisteredUser(addr)
        )
    }

    async getUserPK(address) {
        return this.localContractCall(
            this.contractMethod.getUserPk(address)
        )
    }

    async registData(
        inputs,
        userEthAddress = Ganache.getAddress(),
        userEthPrivateKey = Ganache.getPrivateKey(),
    ) {
        const gas = await this.contractMethod.registData(inputs).estimateGas();

        return await this.sendContractCall(
            this.contractMethod.registData(inputs),
            userEthAddress,
            userEthPrivateKey,
            gas
        )
    }

    async isRegisteredData(hCt) {
        return this.localContractCall(
            this.contractMethod.isRegistered(hCt)
        )
    }

    async acceptTrade(
        h_k,
        snarkInput,
        userEthAddress = Ganache.getAddress(),
        userEthPrivateKey = Ganache.getPrivateKey()
    ) {
        return await sendTransaction(
            this,
            this.instance.methods.acceptOrder(
                getContractFormatProof(h_k, 'AcceptTrade'),
                snarkInput.toSnarkVerifyFormat()
            ),
            '100000000',
            userEthAddress,
            userEthPrivateKey
        )
    }
}