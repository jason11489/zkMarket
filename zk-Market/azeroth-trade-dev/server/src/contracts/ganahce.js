import fs from 'fs';
import _ from 'lodash';
import { ganacheAccountKeyPath } from '../config';

const KeysJson  = JSON.parse(fs.readFileSync(ganacheAccountKeyPath, 'utf-8'));
const AddressList  = _.keys(_.get(KeysJson, 'private_keys'))

function getAddress(idx=0) {
    try {
        return "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
        // return AddressList[idx]
    } catch (error) {
        return undefined
    }
}

function getPrivateKey(idx=0) {
    try {
        return "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"
        // return _.get(_.get(KeysJson, 'private_keys'), getAddress(idx))
    } catch (error) {
        return undefined
    }
}

const Ganache = {
    getAddress,
    getPrivateKey
}

export default Ganache