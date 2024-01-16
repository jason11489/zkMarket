import axios from 'axios';

const httpCli = axios.create();

const iosURL = 'http://127.0.0.1:10801'

httpCli.defaults.baseURL = iosURL;
httpCli.defaults.timeout = 250000;

export const test = async () => {
    const res = await httpCli.post('/data/register', { test: "test" })
    return URL;
}

export default httpCli;