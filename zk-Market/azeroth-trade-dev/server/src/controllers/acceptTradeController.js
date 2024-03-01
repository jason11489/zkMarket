

/**
 * 
 * txHash -> log 확인
 * 누군지 알려줘야함 : pk_enc ? sk_enc ? eoa
 * 
 * 
 */

import _ from 'lodash';
import { web3 } from "../contracts/web3";
import Encryption from "../crypto/encryption";
import db from "../db";
import { addPrefixHex } from "../utils/types";
import { toFrontFormat } from './contentRouterController';

/**
 * 
 * sk_enc
 * txHash
 * 
 */
const acceptTradeController = async (req, res) => {
    const txHash = req.body.txHash;
    console.log("req.body : ", req.body)
    
    web3.eth.getTransactionReceipt(addPrefixHex(txHash), async (err, receipt) => {
        if(err) {
            console.log(err);
            return res.send(false);
        }
        if(_.get(receipt, 'status') == false){ return res.send(false) }

        const hK = _.get(req.body,'hK')
        if( hK == undefined)  return res.send(false);

        const eoaAddr = getEoaAddrFromReceipt(receipt);
        console.log("receipt = ", receipt)
        console.log("eoaAddr = ",eoaAddr)

        console.log("all data : ", await db.data.getAllDataInfo())
        console.log("eoaAddr : ", eoaAddr.toLocaleLowerCase())
        const writerInfo = await db.data.getDataInfo(
            'h_k',
            hK.toLocaleLowerCase()
        )
        
        console.log("consumerInfo : ", writerInfo)

        const [pk_enc_cons, r_cm, fee_peer, fee_del, h_k] = getGenTradeMsgFromReceipt(receipt, _.get(writerInfo, 'sk_enc'));
        // const [pk_enc_cons, r_cm, fee_peer, fee_del, h_k] = getGenTradeMsgFromReceipt(receipt, writerKeys.sk);

        
        if(pk_enc_cons == undefined) return res.send(false);

        console.log(
            wallet.delegateServerKey.pk.ena,
            _.get(writerInfo, 'addr_'),
            pk_enc_cons,
            _.get(writerInfo, 'enc_key'),
            r_cm,
            fee_peer,
            fee_del
        )
        console.log("wallet.delegateServerKey.pk.ena = ",wallet.delegateServerKey.pk.ena)
        console.log("_.get(writerInfo, 'addr_') = ",_.get(writerInfo, 'addr_'))
        console.log("pk_enc_cons = ",pk_enc_cons)
        console.log("_.get(writerInfo, 'enc_key') = ",_.get(writerInfo, 'enc_key'))
        console.log("r_cm = ",r_cm)
        console.log("fee_peer = ",fee_peer)
        console.log("fee_del = ", fee_del)
        
        // acceptTrade start
        console.log("==========================acceptTrade start==========================")



        console.log('notes : ', notes)

        db.note.INSER_NOTES(...notes)

        console.log('notes : ', await db.note.SELECT_NOTE_UNREAD())


        // update trade LOG DB

        db.trade.INSERT_TRADE({
            buyer_addr : eoaAddr.toLocaleLowerCase(),
            // buyer_sk : _.get(writerInfo, 'sk_enc'),
            buyer_pk : pk_enc_cons.toLocaleLowerCase(),
            title : _.get(writerInfo, 'title'),
            h_k : h_k.toLocaleLowerCase(),
        })

        const textInfo = await db.data.getDataInfo(
            'h_k',
            h_k
        )
        console.log("textInfo = ", textInfo)
        console.log("format info = ",toFrontFormat(textInfo))
        return res.send(toFrontFormat(textInfo))
    })

}

// msg 
// 0 : pk_enc_cons
// 1 : r_cm
// 2 : fee_peer
// 3 : fee_del
// 4 : h_k
const getGenTradeMsgFromReceipt = (receipt, skEnc) => {
    console.log(receipt),
    console.log(parseTxLog(receipt), skEnc)
    console.log(skEnc)
    try {
        const logs = parseTxLog(receipt)[0];
        console.log("check CT = ", logs);
        const penc = new Encryption.publicKeyEncryption();
        const msg = penc.Dec(
            new Encryption.pCT(
                logs[1],
                logs[2],
                logs.slice(5)
            ),
            skEnc
        )
        console.log('msg : ', msg)
        return msg;
    } catch (error) {
        console.log(error);
        return [undefined, undefined, undefined, undefined, undefined]
    }
}

const getEoaAddrFromReceipt = (receipt) => {
    try {
        const logs = parseTxLog(receipt)[0][0];
        console.log("logs = ",logs)
        for(let i=0; i<logs.length; i++){
            if(logs[i] != '0'){
                return logs.slice(i);
            }
        }
        return logs;
    } catch (error) {
        console.log(error)
        return undefined
    }
}

const parseTxLog = (receipt) => {
    let tmp = []
    let logs = _.get(receipt, 'logs') ?? receipt
    for(let i=0; i<logs.length; i++){
        tmp.push(parseData(logs[i].data))
    }
    return tmp
}

const parseData = (data) => {
    let tmp = []
    for(let i=0; i<Number.parseInt(data.length/64); i++){
        tmp.push(data.slice(2+64*i, 2+64*(i+1)))
    }
    return tmp
}

export default acceptTradeController;