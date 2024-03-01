import axios from 'axios';

const httpCli = axios.create();

const iosURL = 'http://127.0.0.1:10801'

httpCli.defaults.baseURL = iosURL;
httpCli.defaults.timeout = 250000;

export const registerDataQuery = async (
    data,
    addr_azeroth,
    pk_own,
    pk_enc_x,
    pk_enc_y,
    sk_enc,
    eoa,
    title,
    desc,
    author,
    fee,
    localURI,
    publisher,
    table_of_contents,
    page_num,
    book_type_1,
    book_type_2,
) => {
    console.log("registerDataQuery function");

    const res = await httpCli.post('/data/register', {
        'data': data,
        'addr_peer': addr_azeroth,
        'pk_own': pk_own,
        'pk_enc_x': pk_enc_x,
        'pk_enc_y': pk_enc_y,
        'sk_enc': sk_enc,
        'eoa': eoa,
        'title': title,
        'desc': desc,
        'author': author,
        'fee': fee,
        'localURI': localURI,
        'publisher': publisher,
        'table_of_contents': table_of_contents,
        'page_num': page_num,
        'book_type_1': book_type_1,
        'book_type_2': book_type_2,
    }, null)
    console.log("tiger _2")

    // console.log(res);
    return res
}

const pkEncPreprocess = (pk_enc) => {
    let tmp = {}
    tmp['x'] = pk_enc['x'].toString(16);
    tmp['y'] = pk_enc['y'].toString(16);
    return JSON.stringify(tmp, null, 2);
}

export default httpCli;