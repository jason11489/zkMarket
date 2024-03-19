import { Linking } from "react-native";

export const gozkWallet = async () => {
    const appUrl = `zkwallet://`;
    Linking.openURL(appUrl).catch(err => console.log("error in deep link with zk walle"));
}