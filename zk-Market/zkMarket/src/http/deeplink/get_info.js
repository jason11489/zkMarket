import { Linking } from "react-native";

export const get_info = async (publish_data) => {

    const appUrl = `zkwallet://getinfo`;
    console.log(appUrl);

    Linking.openURL(appUrl).catch(err => console.log("error in deep link with zk wallet // get info"));
}