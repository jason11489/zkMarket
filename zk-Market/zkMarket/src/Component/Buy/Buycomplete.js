import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";

import { React, useLayoutEffect } from "react";
import { Text } from "react-native";
import { buy_book } from "../../CSS/Buy_style";

function Buycomplete({navigation, route}) {

    console.log(Object.keys(route.params))

    let tab_navi;
    useLayoutEffect(() => {
        tab_navi = navigation.getParent();
        tab_navi.setOptions({
            tabBarStyle: {
                display: 'none'
            }
        })
    }, [navigation]);

    return (
        <SafeAreaView style={buy_book.container}>
            <TouchableOpacity
                onPress={() => {
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
                    navigation.navigate("Home_2")
                }}>
                <Image style={styles.back} source={require("../../image/Buy/X.png")}/>
            </TouchableOpacity>
            <View style={{
                    height: 120
                }}></View>
            <Image style={styles.check} source={require("../../image/Buy/check.png")}/>
            <Text style={styles.text}>Payment{"\n"}has been completed!</Text>
            <View style={{
                    height: 50
                }}/>
            <View
                style={{
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOpacity: 0.25,
                    shadowRadius: 5,
                    shadowOffset: {
                        height: 2,
                        width: 0
                    }
                }}>
                <View style={styles.book_cover}></View>
            </View>
            <Text style={styles.title}>{route.params.Title}</Text>
            <Text style={styles.author}>{route.params.Author}</Text>
            <View style={{
                    height: 103
                }}/>
            <View
                style={{
                    shadowColor: 'gray',
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    shadowOffset: {
                        height: -2,
                        width: -2
                    }
                }}>
                <View
                    style={{
                        width: "100%",
                        height: 100,
                        backgroundColor: 'white',
                        borderWidth: 0,
                        flexDirection: 'row',
                        top:45
                    }}>

                    <TouchableOpacity
                        title="Publishing my book"
                        style={{
                            width: 361,
                            height: 53,
                            backgroundColor: '#0055FF',
                            borderRadius: 6.05,
                            top: 13,
                            left: 16
                        }}
                        backgroundColor='red'
                        onPress={() => {
                            navigation.navigate("Library");
                        }}>
                        <Text
                            style={{
                                textAlign: 'center',
                                color: 'white',
                                fontSize: 18.14,
                                fontFamily: 'Pretendard',
                                fontWeight: '700',
                                lineHeight: 19.65,
                                top: 15
                            }}>My Library
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    back: {
        width: 28,
        height: 28,
        left: 349
    },
    check: {
        height: 34,
        width: 34,
        left: 180
    },
    text: {
        textAlign: 'center',
        color: '#387BFF',
        fontSize: 24,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        top: 18
    },
    book_cover: {
        height: 211,
        width: 143,
        backgroundColor: 'blue',
        borderRadius: 5
    },
    title: {
        textAlign: 'center',
        color: 'black',
        fontSize: 18,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        lineHeight: 25.20,
        top: 20
    },
    author: {
        textAlign: 'center',
        color: '#595959',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        lineHeight: 22.40,
        top: 23
    }
});

export default Buycomplete;