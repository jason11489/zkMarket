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
                    style={{
                        flex: 1,
                        width: Dimensions
                            .get('window')
                            .width,
                        height: "100%",
                        backgroundColor: 'white'
                    }}/>

            </View>
        </SafeAreaView>
    );
}

export default ReadBook