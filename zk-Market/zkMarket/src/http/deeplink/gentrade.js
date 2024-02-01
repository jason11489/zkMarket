import { Linking } from "react-native";

export const gentrade = async (data) => {

    const image_data = encodeURIComponent(data.image_data);

    const appUrl = `zkmarket://genTrade/${data.addrDel}/${data.addrPeer}/${data.pkEnc}/${data.hK}/1/${data.fee}/${image_data}/${data.title}/${data.author}`;
    // console.log(appUrl);

    Linking.openURL(appUrl).catch(err => console.log("error in deep link with zk wallet // get info"));
}