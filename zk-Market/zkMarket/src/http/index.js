import axios from 'axios';

const httpCli = axios.create();

const iosURL = 'http://127.0.0.1:10801'

httpCli.defaults.baseURL = iosURL;
httpCli.defaults.timeout = 250000;

export const registerDataQuery = async (
    data,
    addr_azeroth,
    pk_own,
    pk_enc,
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
    const formData = new FormData();
    
    formData.append('data', data);
    formData.append('addr_peer', addr_azeroth);
    formData.append('pk_own', pk_own);
    formData.append('pk_enc', pk_enc);
    formData.append('sk_enc', sk_enc);
    formData.append('eoa', eoa);
    formData.append('title', title);
    formData.append('desc', desc)
    formData.append('author', author)
    formData.append('fee', fee)
    formData.append('localURI', localURI)
    formData.append('publisher', publisher)
    formData.append('table_of_contents', table_of_contents)
    formData.append('page_num', page_num)
    formData.append('book_type_1', book_type_1)
    formData.append('book_type_2', book_type_2)

    console.log("tiger _1")
    const res = await httpCli.post('/data/register', formData)
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