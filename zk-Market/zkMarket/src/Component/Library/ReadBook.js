import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import {
    Dimensions,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import Pdf from 'react-native-pdf';
import { ReadBook_style } from "../../CSS/ReadBook_style";
import httpCli from '../../http';

function ReadBook({navigation, route}) {

    const [bookdata, setbookdata] = useState();
    const [page, setpage] = useState();
    const [totalpage, settotalpage] = useState();

    // console.log(route.params.title)

    useEffect(() => {
        async function data_() {
            const _t = await AsyncStorage.getItem('pk_enc')
            res = await httpCli.get(`content/getData/${route.params.hK}/${_t}`)
            setbookdata(res.data.text)
        }
        data_();

    }, [])
    let tab_navi;
    useLayoutEffect(() => {
        tab_navi = navigation.getParent();
        tab_navi.setOptions({
            tabBarStyle: {
                display: 'none'
            }
        })
        navigation.setOptions({
            headerShown: true,
            headerTitle: () => (
                <View>
                    <Text style={ReadBook_style.header_text}>{route.params.title}</Text>
                </View>
            ),
            headerLeft: ({onPress}) => (
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
                        navigation.navigate("Mybook", route.params)
                    }}>
                    <Image
                        style={ReadBook_style.arrow_back}
                        source={require("../../image/Library/arrow_back_ios.png")}/>
                </TouchableOpacity>
            )
        })
    }, [navigation]);

    return (
        <SafeAreaView style={ReadBook_style.container}>
            <View style={{
                    height: 90
                }}/>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    top: -27
                }}>
                <Pdf
                    trustAllCerts={false}
                    source={{
                        uri: `data:application/pdf;base64,${bookdata}`
                    }}
                    horizontal={true}
                    onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                        settotalpage(numberOfPages)
                    }}
                    onPageChanged={(page, numberOfPages) => {
                        console.log(`Current page: ${page}`);
                        setpage(page);
                    }}
                    style={{
                        flex: 1,
                        width: Dimensions
                            .get('window')
                            .width,
                        height: Dimensions
                            .get('window')
                            .height,
                        backgroundColor: 'white'
                    }}/>
            </View>

            <View
                style={{
                    shadowColor: 'gray',
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    shadowOffset: {
                        height: -1,
                        width: -1
                    }
                }}>
                <View
                    style={{
                        width: "100%",
                        height: 71,
                        backgroundColor: 'white',
                        top: 30,
                        textAlign: 'center'
                    }}>
                    <Text
                        style={{
                            color: '#232323',
                            fontSize: 14,
                            fontFamily: 'NanumSquareOTF_ac',
                            fontWeight: '400',
                            textAlign: 'center',
                            top:15
                        }}>{page} / {totalpage}</Text>
                </View>

            </View>
        </SafeAreaView>
    );
}

export default ReadBook