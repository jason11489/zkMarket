import fs from 'fs';
import _ from 'lodash';
import { dbPath } from '../config';
import { default as contracts } from "../contracts";
import { hexToDec } from '../contracts/utils';
import Encryption from '../crypto/encryption';
import mimc from '../crypto/mimc';
import db from '../db';
import { hexStringToBigIntArr } from '../utils/file';
import { randomFieldElement } from '../utils/math';
import { decStrToHex } from '../utils/types';
/**
 * 
 * body : {
 *  "data"      <-- utf8 데이터     proof
 *  "addr_peer" <-- azerothENA 주소 proof
 * 
 *  "pk_own"    <-- register User / DB에 저장
 *  "pk_enc"    <-- register User / DB에 저장
 *  "eoa"       <-- 판매자 ETH 주소
 * 
 *  "sk_enc"    <-- DB에 저장해야함.
 *  "title"     <-- DB에 저장해야함.
 *  "desc"      <-- DB에 저장해야함.
 *  "author"    <-- DB에 저장해야함.
 *  "image"     <-- 처리 되있음
 * }
 */

// 1. proof 생성
// 2. tx전송
// 3. db에 저장


    
const registDataController = async (req, res) => {
    try {
        console.log("tiger is best");
        console.log("addr_peer : ", req.body.addr_peer)
        
        // CONTRACT ==============================

        // Todo
        // make CT
        // const registData_input = new RegistDataInputs();
        // registData_input.uploadDataFromHexStr(req.body.data);
        // registData_input.encryptData();

        const buffer = Buffer.from(req.body.data, 'base64');
        const data_hex = buffer.toString('hex');
        const data_slice = hexStringToBigIntArr(data_hex);

        console.log("data_slice length  = ",  data_slice)

        const data_key = decStrToHex(randomFieldElement())
        const registerData_enc = new Encryption.symmetricKeyEncryption(data_key);
        console.log("data_key = ", data_key)
        const CT_data = registerData_enc.Enc(...data_slice)

        // make h_ct

        const mimc7 = new mimc.MiMC7();
        const h_ct = mimc7.hash(...CT_data.ct);
        console.log("h_ct = ",h_ct)
        // maek h_K

        const h_k = mimc7.hash(req.body.addr_peer,data_key);
        console.log("h_k = ",typeof h_k)

        
        
        try {
            await sendRegisterDataTx(hexToDec(h_ct))
        } catch (error) {
            console.log(error)
            console.log("tiger 2222")
            return res.send(false);
        }
        try {
            await checkRegisterDataTx(hexToDec(h_ct))
        } catch (error) {
            console.log(error)
            console.log("tiger 2222")
            return res.send(false);
        }
        
        // console.log(req.body, hexToInt(req.body.eoa).toString(16).toLocaleLowerCase());
        
        let pkEnc_x = req.body.pk_enc_x;
        let pkEnc_y = req.body.pk_enc_y;
        
        console.log("pkEnc1 = ",req.body.pk_enc)
        db.data.insertData(
            req.body.title,
            req.body.desc,
            req.body.author,
            req.body.pk_own,
            req.body.sk_enc,
            pkEnc_x,
            pkEnc_y,
            req.body.addr_peer,
            req.body.eoa,
            h_k,
            h_ct,
            req.body.fee,
            data_key,
            dbPath + 'data/' + h_k + '.json',
            1
        )

        let registerDataJson =  _.merge(
            {
                "text" : req.body.data,
                "ct_data" : CT_data,
                'enc_key': data_key,
                'pk_enc_x' : pkEnc_x,
                'pk_enc_y' : pkEnc_y,
                'h_ct'  : h_ct,
                'data_path' : dbPath  + 'data/' + h_k + '.json',
                'h_k': h_k,
                'title': req.body.title,
                'desc': req.body.desc,
                'author' : req.body.author,
                'fee': req.body.fee,
                'image_data' : req.body.localURI,
                'publisher' : req.body.publisher,
                'table_of_contents' : req.body.table_of_contents,
                'page_num' : req.body.page_num,
                'book_type_1' : req.body.book_type_1,
                'book_type_2' : req.body.book_type_2,
            },
        req.body)

        fs.writeFileSync(dbPath + 'data/' + h_k + '.json', JSON.stringify(registerDataJson));
        console.log("good!!")
        res.send(true);
    } catch (error) {
        console.log(error);
        res.send(false);
    }
    
}

const sendRegisterDataTx = async (inputs) =>{
    try {
        const receipt = await contracts.tradeContract.registData(
            inputs
        )
        console.log("check receipt = ",receipt)
        return _.get(receipt, 'status');
    } catch (error) {
        return undefined;
    }
}


const checkRegisterDataTx = async (inputs) =>{
    try {
        const receipt = await contracts.tradeContract.isRegisteredData(
            inputs
        )
        console.log("check receipt = ",receipt)
        return _.get(receipt, 'status');
    } catch (error) {
        return undefined;
    }
}

const getPkEncX = (pk_enc) => {
    return JSON.parse(pk_enc)['x'];
}



export default registDataController;