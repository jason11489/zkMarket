import React from "react";
import {
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { Publish_style } from "../../CSS/Publish_style";

styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    back_image: {
        flex:1,
        width: 152,
        height: 742,
        left: 221,
        zIndex: 0,
        position:'absolute'
    },
    first_text: {
        color: 'black',
        fontSize: 32,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        top: 120,
        left: 42,
        width: 305,
        height: 80
    },
    second_text: {
        color: '#6D6F75',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        width: 312,
        left: 60,
        top: 140
    },
    tiger_text: {
        color: '#387BFF',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '700',
        left: -213,
        top: 159
    },
    book_img: {
        width: 160,
        height: 250,
        left: 110,
        top: 230,
        zIndex: 1,
        borderRadius: 4.46,
        shadowColor: 'rgba(101.02, 117.92, 151.73, 0.50)',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 10
    },
    author_text: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '700',
        letterSpacing: 0.16,
        left: 143,
        top: 240
    },
    publisher_text: {
        color: '#909398',
        fontSize: 14,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        letterSpacing: 0.16,
        left: 143,
        top: 240
    },
    upload: {
        width: 321,
        height: 52,
        backgroundColor: '#F8FAFF',
        borderRadius: 5,
        borderColor: '#D6DEEE',
        left: 34,
        top: 20,
        flexDirection: 'row'
    },
    upload_blue: {
        width: 321,
        height: 52,
        backgroundColor: '#F8FAFF',
        borderRadius: 5,
        borderColor: '#387BFF',
        left: 34,
        top: 20,
        flexDirection: 'row',
        borderWidth: 1.5
    },
    upload_text: {
        color: '#C7C8CC',
        fontSize: 16,
        fontFamily: 'Pretendard',
        fontWeight: '400',
        letterSpacing: 0.16,
        left: 25,
        top: 14
    },
    upload_text_blue: {
        color: '#387BFF',
        fontSize: 16,
        fontFamily: 'Pretendard',
        fontWeight: '400',
        letterSpacing: 0.16,
        left: 25,
        top: 14
    },
    upload_img: {
        width: 15,
        height: 15,
        left: 19,
        top: 16
    },
    sub_text: {
        color: '#387BFF',
        fontSize: 14,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        letterSpacing: 0.16,
        left: 5,
        top: 1
    },
    sub_text_img: {
        width: 18,
        height: 18
    }
})

function Complete({navigation: {
        navigate
    }, route}) {
    console.log("Complete page");

    return (

        <View style={styles.container}>
            <View style={{
                    zIndex: 0
                }}>
                <ImageBackground
                    source={require("../../image/sell/complete_back.png")}
                    style={styles.back_image}></ImageBackground>
            </View>
            <View style={{
                    zIndex: 1
                }}>
                <Text style={styles.first_text}>Sales registration{"\n"}has been completed!</Text>
                <View
                    style={{
                        flexDirection: 'row'
                    }}>
                    <Text style={styles.second_text}>Books are finally registered{"\n"}after
                    </Text>
                    <Text style={styles.tiger_text}>review by the administrator</Text>
                </View>

                <View style={{
                        height: 20
                    }}></View>
                <View
                    style={{
                        flexDirection: 'row'
                    }}>
                    <Text style={styles.second_text}>Administrator review takes{"\n"}approximately
                    </Text>
                    <Text
                        style={{
                            color: '#387BFF',
                            fontSize: 16,
                            fontFamily: 'NanumSquareOTF_ac',
                            fontWeight: '700',
                            left: -147,
                            top: 160
                        }}>2 days to a week</Text>
                </View>

                <Image
                    style={styles.book_img}
                    source={{
                        uri: route.params.cover_img
                    }}/>
                <Text style={styles.author_text}>{route.params.Author}</Text>
                <Text style={styles.publisher_text}>/ {route.params.Publisher}</Text>
                <View style={{
                        height: 180
                    }}></View>
                <View style={Publish_style.next_button}>
                    <TouchableOpacity
                        style={Publish_style.Touchable}
                        title="Confirm"
                        onPress={() => {
                            console.log(route.params)
                            navigate("Sell_2")
                        }}>
                        <Text style={Publish_style.button_style}>Next
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

export default Complete;