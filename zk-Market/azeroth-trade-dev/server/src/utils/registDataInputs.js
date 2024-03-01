import Config from "../config";
import CurveParam from "../crypto/curveParam";
import Encryption from "../crypto/encryption";
import mimc from "../crypto/mimc";
import FileSystem, { rawFileToBigIntString } from "../utils/file";
import math from "../utils/math";
import types from "../utils/types";


export default class RegistDataInputs {
    data     = null;
    addr_peer= null;
    h_k      = null;
    h_ct     = null;
    CT_data  = null;
    CT_r     = null;
    dataEncKey = null;

    constructor(EC_TYPE=Config.EC_TYPE){ 
        this.curveParam = CurveParam(EC_TYPE);
    }


    uploadDataFromStr(str){
        const utf8buf = Buffer.from(str, 'utf-8');
        const hexStr = rawFileToBigIntString(utf8buf).padEnd(
            Config.textFileByteLen*2, "0"
        );
        this.uploadDataFromHexStr(hexStr);
    }

    uploadDataFromHexStr(hexStr){
        const hexStrPad = hexStr.padEnd(Config.dataBlockNum * CurveParam().blockBytes * 2, '0');
        this.uploadData(FileSystem.hexStringToBigIntArr(hexStrPad));
    }

    uploadData(data){
        try{
            this.checkData(data)
        }
        catch(err){
            console.log(err.message);
            return;
        }
        this.data = data;
    }

    uploadAddrPeer(addr_peer){
        this.addr_peer = addr_peer;
    }

    uploadsCTdataAndEncKey(sCTdata, dataEncKey){
        this.dataEncKey = dataEncKey.toString();
        this.CT_r    = sCTdata.r;
        this.CT_data = sCTdata.ct;
    }

    encryptData() {
        if(this.CT_data != null || this.CT_r != null){
            throw new Error("CT is already exsist");
        }
        const dataEncKey = types.decStrToHex( math.randomFieldElement(this.curveParam.prime));
        const symEnc = new Encryption.symmetricKeyEncryption(dataEncKey);
        const sCTdata = symEnc.Enc(this.data);
        this.uploadsCTdataAndEncKey(sCTdata, dataEncKey);
    }

    getsCtData(){
        return new Encryption.sCTdata(this.CT_r, this.CT_data).toJson();
    }

    getEncKey(){
        return this.dataEncKey;
    }

    gethCt(){
        return this.h_ct;
    }
    
    gethK(){
        return this.h_k.toLocaleLowerCase();
    }
    


    hashArr(arr){
        const mimc7 = new mimc.MiMC7();
        for(let i=0; i<arr.length; i++){
            mimc7.hashUpdate(arr[i]);
        }
        return mimc7.hashGetOuptut();
    }

    checkData(data){
        const error = Error("data format Error");
        if (!Array.isArray(data)) {
            throw error;
        }
        if (data.length != Config.dataMaxBlockNum){
            throw error;
        }
        for(let i=0; i<Config.dataMaxBlockNum; i++){
            if(! types.isBigIntFormat(data[i])){
                throw error;
            }
        }
    }
}