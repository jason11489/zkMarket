import { SafeAreaView, Text } from "react-native";

import { React, useLayoutEffect } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { buy_book } from "../../CSS/Buy_style";
import { gentrade } from "../../http/deeplink/gentrade";

function Buy_book({navigation, route}) {

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
            <View style={buy_book.first_line}>
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
                    <Image
                        style={buy_book.back}
                        source={require('../../image/sell/arrow_back_ios.png')}/>
                </TouchableOpacity>
                <View style={buy_book.slide_bar}/>
                <View style={buy_book.slide_bar_2}/>
                <Image source={require("../../image/Buy/heart.png")} style={buy_book.heart}/>
                <Image source={require("../../image/Buy/bag.png")} style={buy_book.bag}/>
            </View>
            <View style={{
                    height: 50
                }}></View>
            <View style={{
                    flexDirection: 'row'
                }}>
                <View style={buy_book.Best_seller}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 14,
                            fontFamily: 'Pretendard',
                            fontWeight: '400'
                        }}>Best seller</Text>
                </View>
                <View style={buy_book.star}>
                    <Image
                        source={require("../../image/Buy/star.png")}
                        style={{
                            width: 9.5,
                            height: 9.5
                        }}/>
                    <Text
                        style={{
                            color: '#F3981A',
                            fontSize: 14,
                            fontFamily: 'Pretendard',
                            fontWeight: '600'
                        }}>4.4</Text>
                </View>
            </View>

            <View style={buy_book.image_shadow}>
                <Image
                    source={{
                        uri: `data:image/png;base64,${route.params.image_data}`
                    }}
                    style={buy_book.book_cover}/>
            </View>
            <Text style={buy_book.title}>{route.params.title}</Text>
            <Text style={buy_book.author}>By {route.params.author}</Text>
            <Text style={buy_book.price}>$ {route.params.fee}</Text>
            <View style={{
                    height: 45
                }}></View>
            <View
                style={{
                    width: "100%",
                    height: 100
                }}>
                <View style={buy_book.info}>
                    <View
                        style={{
                            width: 120,
                            height: 85
                        }}>
                        <Image
                            style={{
                                left: 50.5,
                                top: 15
                            }}
                            source={require("../../image/Buy/buyer.png")}/>
                        <Text style={buy_book.info_text}>Buyer</Text>
                        <Text style={buy_book.info_text_2}>17K+</Text>
                    </View>
                    <View style={buy_book.line}></View>
                    <View
                        style={{
                            width: 120,
                            height: 85
                        }}>
                        <Image
                            style={{
                                left: 50.5,
                                top: 15
                            }}
                            source={require("../../image/Buy/paper.png")}/>
                        <Text style={buy_book.info_text}>Print length</Text>
                        <Text style={buy_book.info_text_2}>{route.params.page_num}p</Text>
                    </View>
                    <View style={buy_book.line}></View>
                    <View
                        style={{
                            width: 120,
                            height: 85
                        }}>
                        <Image
                            style={{
                                left: 50.5,
                                top: 15
                            }}
                            source={require("../../image/Buy/language.png")}/>
                        <Text style={buy_book.info_text}>Language</Text>
                        <Text style={buy_book.info_text_2}>Eng</Text>
                    </View>
                </View>
            </View>
            <View style={{
                    left: 20
                }}>
                <View
                    style={{
                        flexDirection: 'row'
                    }}>
                    <Text style={buy_book.keyword}>Keyword</Text>
                    <View
                        style={{
                            backgroundColor: '#6397FF',
                            top: 5.5,
                            left: 12,
                            height: 7,
                            width: 7,
                            borderRadius: 100
                        }}></View>
                    <View
                        style={{
                            backgroundColor: '#6397FF',
                            height: 1,
                            width: 269,
                            top: 8.5,
                            left: 12
                        }}></View>
                </View>
            </View>
            <View style={{
                    height: 20
                }}></View>
            <View style={{
                    flexDirection: 'row'
                }}>
                <View style={buy_book.keyword_circle}>
                    <Text style={buy_book.keyword_text}>{route.params.book_type_1}</Text>
                </View>
                <View style={{
                        width: 10
                    }}></View>
                <View style={buy_book.keyword_circle}>
                    <Text style={buy_book.keyword_text}>{route.params.book_type_2}</Text>
                </View>
            </View>

            <View style={{
                    height: 50
                }}></View>
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
                        flexDirection: 'row'
                    }}>
                    <View
                        style={{
                            width: 52,
                            height: 52,
                            borderWidth: 1,
                            borderColor: '#0055FF',
                            borderRadius: 6,
                            top: 10,
                            left: 13
                        }}>
                        <Image
                            style={{
                                left: 13.5,
                                top: 12
                            }}
                            source={require("../../image/Buy/bag_blue.png")}/>
                    </View>
                    <View
                        style={{
                            // justifyContent: 'center', alignItems: 'center',
                            display: 'inline-flex'
                        }}>
                        <TouchableOpacity
                            title="Publishing my book"
                            style={{
                                width: 302,
                                height: 53,
                                backgroundColor: '#0055FF',
                                borderRadius: 6.05,
                                top: 10,
                                left: 20
                            }}
                            backgroundColor='red'
                            onPress={() => {
                                gentrade(route.params)
                                navigation.navigate("Buycomplete", route.params);
                            }
}>
                            <Text
                                style={{
                                    textAlign: 'center',
                                    color: 'white',
                                    fontSize: 18.14,
                                    fontFamily: 'Pretendard',
                                    fontWeight: '700',
                                    lineHeight: 19.65,
                                    top: 15
                                }}>Buy
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>

        </SafeAreaView>
    );
}

export default Buy_book;