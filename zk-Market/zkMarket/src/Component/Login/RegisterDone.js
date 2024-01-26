import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { React } from "react";

import { get_info } from "../../http/deeplink/get_info";

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
        left: 27,
        top: 165,
        textAlign:'center'
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
        borderRadius: 13,
        borderColor: 'gray',
        backgroundColor: 'transparent',
        borderWidth: 0.5,
        left: 24,
        top: -210
    },
    add: {
        width: 24,
        height: 24,
        top: 44,
        left: 161
    },
    add_2: {
        width: 34,
        height: 34,
        top: 73,
        left: 156
    },
    text_2: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '800',
        left: 102,
        top: 54
    }
});

function RegisterDone({navigation, route}) {

    console.log(route);

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
                    get_info();
                }}>
                <View>
                    <View style={styles.account_block}>
                        <Image style={styles.add_2} source={require("../../image/Register/add_2.png")}/>
                        <Image style={styles.add} source={require("../../image/Register/add.png")}/>
                        <Text style={styles.text_2}>My accounts</Text>
                    </View>
                </View>
            </TouchableOpacity>

            <Text
                style={{
                    color: '#E6E9EE',
                    fontSize: 14,
                    fontFamily: 'NanumSquareOTF_ac',
                    fontWeight: '400',
                    top: -70,
                    textAlign:'center'
                }}>Let's start zkMarket</Text>
        </SafeAreaView>
    );
}

export default RegisterDone;