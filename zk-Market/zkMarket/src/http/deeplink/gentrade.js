import { Linking } from "react-native";

export const gentrade = async (data) => {

    const image_data = encodeURIComponent(data.image_data);

    const appUrl = `zkwallet://genTrade/${data.addrDel}/${data.addrPeer}/${data.pk_enc_x}/${data.pk_enc_y}/${data.hK}/1/${data.fee}/${image_data}/${data.title}/${data.author}`;
    // console.log(appUrl);

    Linking.openURL(appUrl).catch(err => console.log("error in deep link with zk wallet // get info"));
}