import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { React } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#232323"
    },
    text: {
        color: 'white',
        fontSize: 32,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        width: 300,
        height: 77,
        left: 45,
        top: 165,
        textAlign: 'center'
    },
    back_1: {
        width: 226,
        height: 226,
        left: 252,
        top: 124,
        borderRadius: 999
    },
    back_2: {
        width: 90,
        height: 90,
        left: 3,
        borderRadius: 999
    },
    back_3: {
        width: 118,
        height: 118,
        left: 104,
        borderRadius: 999
    },
    account_block: {
        width: 345,
        height: 214,

        left: 24,
        top: -210
    },
    add: {
        width: 24,
        height: 24,
        top: -383,
        left: 184
    },
    add_2: {
        width: 17,
        height: 17,
        top: -363,
        left: 187.5
    },
    text_2: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        textAlign: 'center',
        top: -370
    }
});

function RegisterDone({navigation, route}) {

    console.log("check route = ", typeof route.params.userEOA);

    async function setinfo() {
        await AsyncStorage.setItem("pk_own", route.params.pk_own);
        await AsyncStorage.setItem("pk_enc_x", route.params.pk_enc_x);
        await AsyncStorage.setItem("pk_enc_y", route.params.pk_enc_y);
        await AsyncStorage.setItem("sk_enc", route.params.userSk);
        await AsyncStorage.setItem("userEOA", route.params.userEOA);
        await AsyncStorage.setItem("userENA", route.params.userENA);
    }
    setinfo()

    let value
    async function check_info() {
        value = await AsyncStorage.getItem("userEOA");
    }
    check_info()
    console.log("check userEOA = ", value)

    const tabbar_open = () => {
        const tab_navi = navigation.getParent();
        tab_navi.setOptions({
            tabBarStyle: {
                height: 95.7,
                shadowColor: 'gray',
                shadowOpacity: 0.25,
                shadowRadius: 4,
                shadowOffset: {
                    height: -4,
                    width: -4
                }
            }
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Thank you!{"\n"}
                Enjoy your Reading</Text>
            <View
                style={{
                    shadowColor: 'gray',
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    shadowOffset: {
                        height: 30,
                        width: 30
                    }
                }}>
                <Image
                    style={styles.back_1}
                    source={require("../../image/Register/back1.png")}
                    blurRadius={30}/>
                <Image
                    style={styles.back_2}
                    source={require("../../image/Register/back2.png")}
                    blurRadius={30}/>
                <Image
                    style={styles.back_3}
                    source={require("../../image/Register/back3.png")}
                    blurRadius={30}/>
            </View>
            <TouchableOpacity
                onPress={() => {
                    console.log("tiger");
                    tabbar_open();
                    navigation.navigate("Home_2");
                }}>
                <View>
                    <Image
                        style={styles.account_block}
                        source={require("../../image/Register/complete_back.png")}/>
                    <Image
                        style={styles.add_2}
                        source={require("../../image/Register/unlock.png")}/>
                    <Image style={styles.add} source={require("../../image/Register/tiger.png")}/>
                    <Text style={styles.text_2}>My accounts</Text>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 14,
                            fontFamily: 'NanumSquareOTF_ac',
                            fontWeight: '400',
                            top: -365,
                            textAlign: 'center'
                        }}>zkMarket's Wallet</Text>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 12,
                            fontFamily: 'NanumSquareOTF_ac',
                            fontWeight: '700',
                            textAlign: 'center',
                            top: -355
                        }}>`{route.params.userEOA.substr(0,5)}..`</Text>
                </View>
            </TouchableOpacity>

            <Text
                style={{
                    color: '#E6E9EE',
                    fontSize: 14,
                    fontFamily: 'NanumSquareOTF_ac',
                    fontWeight: '400',
                    top: -70,
                    textAlign: 'center'
                }}>Let's start zkMarket</Text>
        </SafeAreaView>
    );
}

export default RegisterDone;