import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import AwesomeAlert from 'react-native-awesome-alerts';
import { Publish_style } from "../../CSS/Publish_style";

const styles = StyleSheet.create({
    first_text: {
        color: '#232323',
        fontSize: 24,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        // lineHeight: 35,
        top: 40,
        left: 37,
        height: 100
    },
    second_text: {
        color: '#232323',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        letterSpacing: 0.16,
        // lineHeight: 37,
        top: 35,
        left: 38,
        width: 278,
        height: 25
    },
    input_box: {
        width: 328,
        height: 52,
        backgroundColor: '#F8FAFF',
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: 'center',
        top: 40,
        left: 38,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 16,
        color: 'black',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        letterSpacing: 0.16,
        fontWeight: 900
    },
    alert_button: {
        width: 290,
        height: 53,
        backgroundColor: '#387BFF',
        borderRadius: 6.05
    },
    alert_button_text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18.14,
        fontFamily: 'Pretendard',
        fontWeight: '700',
        lineHeight: 19.65,
        top: 10
    },
    alert_title: {
        color: '#232323',
        fontSize: 24,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        lineHeight: 29.76,
        width: 180,
        textAlign: 'center',
        top: -20,
        left:45
    }, alert_msg: {
        color: '#6D6F75',
        fontSize: 18,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        lineHeight: 25.20,
        left:10
    }, alert_total: {
        color: '#232323',
        fontSize: 18,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '800',
        lineHeight: 25.20,
    },
    dollor: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '500',
        lineHeight: 25.20,
        textAlign: 'right',
        flex: 1,
        right:10
    },
    dollor_2: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '500',
        lineHeight: 25.20,
        textAlign: 'right',
        flex: 1,
        right:10

    }, dollor_total: {
        color: '#387BFF',
        fontSize: 24,
        fontFamily: 'Noto Serif',
        fontWeight: '700',
        textTransform: 'uppercase',
        textAlign: 'right',
        flex: 1,
        right:10
    }
})

function Book_price({navigation: {
        navigate
    }, route}) {

    const [showAlert, setShowAlert] = useState(false);
    const [price, setprice] = useState();
    return (
        <SafeAreaView style={Publish_style.container}>
            <View style={Publish_style.first_line}>
                <TouchableOpacity onPress={() => navigate("Description_book")}>
                    <Image
                        style={Publish_style.back}
                        source={require('../../image/sell/arrow_back_ios.png')}/>
                </TouchableOpacity>
                <Text style={Publish_style.first_line_text_2}>
                    Basic_information
                </Text>
                <TouchableOpacity onPress={() => navigate("Sell_2")}>
                    <Image
                        style={Publish_style.x_back_2}
                        source={require('../../image/sell/X.png')}/>
                </TouchableOpacity>
            </View>
            <View style={Publish_style.second_line}>
                <View style={Publish_style.slide_bar}/>
                <View style={Publish_style.slide_bar_4}/>
            </View>
            <Text style={Publish_style.page_num}>4/5</Text>

            <Text style={styles.first_text}>Please enter{"\n"}
                the price of the book</Text>
            <Text style={styles.second_text}>Price</Text>

            <TextInput
                style={styles.input_box}
                placeholder="Enter the price of book"
                placeholderTextColor='#909398'
                onChangeText={(text) => setprice(text)}/>
            <Image
                style={{
                    width: 370,
                    height: 160,
                    left: 19,
                    top: 100
                }}
                source={require('../../image/sell/price.png')}/>

            <View style={{
                    height: 115
                }}/>

            <View style={Publish_style.next_button}>
                <TouchableOpacity title="Next"
                    // onPress={() => navigate("Upload_book",route.params)}
                    onPress={() => setShowAlert(!showAlert)} style={Publish_style.Touchable}>
                    <Text style={Publish_style.button_style}>Next
                    </Text>
                </TouchableOpacity>
            </View>
            <AwesomeAlert
                show={showAlert}
                contentStyle={{height:300}}
                closeOnTouchOutside={true}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                confirmText="Confirm"
                confirmButtonColor="#DD6B55"
                confirmButtonStyle={styles.alert_button}
                confirmButtonTextStyle={styles.alert_button_text}
                customView={
                    <View>
                    <View >
                        <Image
                    style={{
                        left:120,
                        width: 26.6,
                                height: 30,
                        top:-30
                    }}
                    source={require('../../image/sell/coin.png')}/>
                <Text style={styles.alert_title}>Your Final Price is as follows</Text>
                    </View>
                    <View style={{flexDirection: 'row',top:10,width:'100%'}}>
                        <Text style={styles.alert_msg}>
                        Measured price
                        </Text>
                        <Text style={styles.dollor}>$ {price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row',top:20 }}>
                        <Text style={styles.alert_msg}>
                        Fee
                        </Text>
                        <Text style={styles.dollor_2}>$ 1</Text>
                    </View>
                    <View style={{backgroundColor: '#C7C8CC', border: '#C7C8CC',width:267,height:1,top:30,left:5}} />
                    <View style={{ flexDirection: 'row',top:50,left:10 }}>
                        <Text style={styles.alert_total}>
                        Subtotal
                        </Text>
                        <Text style={styles.dollor_total}>$ {Number(price) + 1}</Text>
                    </View>
                        </View>
                }
                onConfirmPressed={() => {
                    setShowAlert(false)
                    if (price) {
                        route.params.price = Number(price)+1
                    }
                    navigate("Upload_book", route.params)
                    // console.log(route.params)
                }}/>
        </SafeAreaView>
    );
}

export default Book_price;