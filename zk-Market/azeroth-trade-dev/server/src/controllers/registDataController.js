import fs from 'fs';
import _ from 'lodash';
import { dbPath } from "../config";
import { default as contracts } from "../contracts";
import db from "../db";
import snarks from "../snarks";
import types, { hexToInt } from '../utils/types';
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
        console.log("req.bod : ", req.body)
        
        const isRegistered = await contracts.tradeContract.isRegisteredUser(types.addPrefixAndPadHex(req.body.addr_peer))
        if(!isRegistered) {
            try {
                const registUserReceipt = await contracts.tradeContract.zkMarketRegisterUser(
                    req.body.addr_peer,
                    req.body.pk_own,
                    JSON.parse(req.body.pk_enc),
                    req.body.eoa
                )
                console.log(registUserReceipt)
                if(!_.get(registUserReceipt, 'status')) return res.send(false);
            } catch (error) {
                console.log(error)
                return res.send(false);
            }
        }

        // register data tx data =================================
        const snarkInput = new snarks.registDataInput();

        snarkInput.uploadDataFromStr(req.body.data);

        snarkInput.uploadAddrPeer(req.body.addr_peer);

        snarkInput.encryptData();

        snarkInput.makeSnarkInput();

        // await snarks.registDataProver.uploadInputAndRunProof(snarkInput.toSnarkInputFormat(),'_'+snarkInput.gethK());

        // CONTRACT ==============================
        // const contractFormatProof = getContractFormatProof(snarkInput.gethK(), snarks.registDataProver.CircuitType)
        const contractFormatInputs= snarkInput.toSnarkVerifyFormat();
        console.log("contractFormatInputs = ", contractFormatInputs);
        
        try {
            await sendRegisterDataTx(contractFormatInputs)
        } catch (error) {
            console.log(error)
            return res.send(false);
        }
        
        console.log(req.body, hexToInt(req.body.eoa).toString(16).toLocaleLowerCase());
        
        let pkEnc = JSON.parse(req.body.pk_enc);
        db.data.insertData(
            req.body.title,
            req.body.desc,
            req.body.author,
            req.body.pk_own,
            req.body.sk_enc,
            _.get(pkEnc, 'x'),
            req.body.addr_peer,
            hexToInt(req.body.eoa).toString(16).toLocaleLowerCase(),
            snarkInput.gethK(),
            snarkInput.gethCt(),
            req.body.fee,
            snarkInput.getEncKey(),
            dbPath + 'data/' + snarkInput.gethK() + '.json',
            1
        )

        let registerDataJson =  _.merge(
            {
                "text" : req.body.data,
                "ct_data" : JSON.parse(snarkInput.getsCtData()),
                'enc_key' : snarkInput.getEncKey(),
                'h_ct'  : snarkInput.gethCt(),
                'data_path' : dbPath  + 'data/' + snarkInput.gethK() + '.json',
                'h_k': snarkInput.gethK(),
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

        fs.writeFileSync(dbPath + 'data/' + snarkInput.gethK().toLocaleLowerCase() + '.json', JSON.stringify(registerDataJson));
        console.log("good!!")
        res.send(true);
    } catch (error) {
        console.log(error);
        res.send(false);
    }
    
}

const sendRegisterDataTx = async (proof, inputs) =>{
    try {
        const receipt = await contracts.tradeContract.registData(
            proof,
            inputs,
        )
        return _.get(receipt, 'status');
    } catch (error) {
        return undefined;
    }
}

const getPkEncX = (pk_enc) => {
    return JSON.parse(pk_enc)['x'];
}

const parseReq = (req) => {

}

export default registDataController;