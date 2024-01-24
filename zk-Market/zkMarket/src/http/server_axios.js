import axios from 'axios';
import { Platform } from 'react-native';

const httpCli = axios.create();

const androidURL = 'http://10.0.2.2:10801'
const iosURL = 'http://127.0.0.1:10801'

httpCli.defaults.baseURL = Platform.OS === 'ios'
    ? iosURL
    : androidURL;
httpCli.defaults.timeout = 250000;

export const makeURL = (base, params) => {
    let URL = base;
    let keys = Object.keys(params);
    let values = keys.map((key) => params[key]);

    for (let i = 0; i < keys.length; i++) {
        URL += (
            i === 0
                ? '?'
                : '&'
        ) + keys[i] + '=' + values[i];
    }
    console.log(URL)
    return URL;
}

export default httpCli;