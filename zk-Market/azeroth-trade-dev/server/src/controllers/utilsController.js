import _ from 'lodash';
import contracts from "../contracts";
import db from "../db";

export const TEST_DATA = '123 123\n fds fds \n';

let DATA_ENC_KEY = undefined;

export const getContractAddressController = (req, res) => {
    // console.log('getContractAddressController : ', contracts.tradeContract.instance.options.address)
    res.send(contracts.tradeContract.instance.options.address)
}



export const getNotesController = async (req, res) => {
    console.log(req.param, req.params)
    if(_.get(req.params, 'sk_enc') == undefined) return res.send([])

    const notes = await db.note.SELECT_NOTE_UNREAD_AND_UPDATE((_.get(req.params, 'sk_enc')).toLocaleLowerCase());

    return res.send(notes);
}

export function getDataEncKey (){
    return DATA_ENC_KEY;
}

// ---- TO TEST -----

export const getAllTrade = async (req, res) => {
    const trades = await db.trade.SELECT_ALL_TRADE()
    res.send(trades)
}


export default {
    getContractAddressController,
    getDataEncKey
}