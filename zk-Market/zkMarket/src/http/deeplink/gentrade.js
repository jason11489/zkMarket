import { Linking } from "react-native";

export const gentrade = async (data) => {

    const appUrl = `zkmarket://genTrade/${data.addrDel}/${data.addrPeer}/${data.pkEncPeer}/${hK}/1/${fee}`;
    console.log(appUrl);

    Linking.openURL(appUrl).catch(err => console.log("error in deep link with zk wallet // get info"));
}