import fs from 'fs';
import _ from "lodash";
import { dbPath } from "../config";
import db from "../db";
import wallet from "../wallet";

/*
    send Info list :
            addrDel,
            addrPeer,
            pkEncPeer,
            hK,
            feeDel,
            feePeer
*/
export const getContentListController = async (req, res) => {
    console.log('getContentListController')
    console.log("req = ", _.get(req.params, 'pk_enc'))

    const sk_enc = _.get(req.query, 'sk_enc');
    const pk_enc = _.get(req.params, 'pk_enc');

    let dataInfoList = []
    if (pk_enc == undefined) {
        dataInfoList = await db
            .data
            .getAllDataInfo();
        console.log("Get all data")
    } else {
        const pk = String(pk_enc).slice(2).toLowerCase()
        console.log("pk_enc = ", pk)
        dataInfoList = await db.trade.SELECT_TRADE({ buyer_pk: pk });
        console.log("datalist = ",dataInfoList)
        // for (
        //     const [i, e] of(await db.trade.SELECT_TRADE({buyer_addr: pk})).entries()
        // ) {
        //     dataInfoList.push(await db.data.getDataInfo('h_k', _.get(e, 'h_k')))
        //     console.log("check for buyer list")
        // }
    }

    if (dataInfoList == undefined) {
        console.log("check for buyer list fail")
        return res.send([false]);
    }
    
    // console.log('dataInfoList : ', dataInfoList); const formData = new
    // FormData();
    const contentList = []

    for (let i = 0; i < dataInfoList.length; i++) {
        const _data = await toFrontFormat(dataInfoList[i]);
        contentList.push(_data)
        // console.log("check data info list = ", _data)
    }
    // console.log("check content list = ",contentList[0])
    res.send([true,contentList]);
}

export const getImgController = async (req, res) => {
    const filePath = dbPath + 'image/' + req
        .params
        .imgName

        res
        .sendFile(filePath)
}

export const getDataController = async (req, res) => {
    console.log('getDataController')
    console.log(req.params)

    // const flag = await db
    //     .trade
    //     .IS_VALID_TRADE({
    //         h_k: _.get(req.params, 'h_k'),
    //         pk_enc: _.get(req.params, 'pk_enc')
    //     })
    // console.log(flag)

    const dataPath = _.get(
        (await db.data.getDataPath(_.get(req.params, 'h_k'))),
        'data_path'
    )
    // console.log(dataPath, flag)

    // if (dataPath && flag) {
        const fileData = fs.readFileSync(dataPath, 'utf-8')
        // console.log(_.get(JSON.parse(fileData), 'text'))
        return res.send(fileData)
    // }

    res.send('');
}

export const toFrontFormat = async (data) => {
    console.log(data);
    let publisher_;
    let table_of_contents_;
    let page_num_;
    let book_type_1_;
    let book_type_2_;
    let image_data_;
    let title_;
    let description_;
    let author_;
    console.log("check file path = ", _.get(data, 'h_k'));
    const dataPath = _.get(
        (await db.data.getDataPath(_.get(data, 'h_k'))),
        'data_path'
    )
    if (dataPath) {
        const fileData = fs.readFileSync(dataPath, 'utf-8')
        publisher_ = _.get(JSON.parse(fileData), 'publisher');
        table_of_contents_ = _.get(JSON.parse(fileData), 'table_of_contents');
        page_num_ = _.get(JSON.parse(fileData), 'page_num');
        book_type_1_ = _.get(JSON.parse(fileData), 'book_type_1');
        book_type_2_ = _.get(JSON.parse(fileData), 'book_type_2');
        image_data_ = _.get(JSON.parse(fileData), 'image_data');
        title_ = _.get(JSON.parse(fileData), 'title')
        author_ = _.get(JSON.parse(fileData), 'author')
        description_ = _.get(JSON.parse(fileData), 'desc')

        // console.log(_.get(JSON.parse(fileData), 'text'))
    }
    if (data == undefined) 
        return '';
    return {
        title: title_,
        description: description_,
        addrPeer: _.get(data, 'addr_'),
        addrDel: wallet.delegateServerKey.pk.ena,
        pkEnc: _.get(data, 'pk_enc'),
        author: author_,
        hK: _.get(data, 'h_k'),
        img_path: _.get(data, 'cover_path'),
        fee: data['fee'],
        publisher: publisher_,
        table_of_contents: table_of_contents_,
        page_num: page_num_,
        book_type_1: book_type_1_,
        book_type_2: book_type_2_,
        image_data : image_data_
    }
}

export default {getContentListController}