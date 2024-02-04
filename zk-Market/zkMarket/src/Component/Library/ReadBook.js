import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Pdf from 'react-native-pdf';
import { ReadBook_style } from "../../CSS/ReadBook_style";
import httpCli from '../../http';

function ReadBook({navigation, route}) {

    const [bookdata, setbookdata] = useState();


    useEffect(() => {
        async function data_() {
            const _t = await AsyncStorage.getItem('pk_enc')
            
            res = await httpCli.get(`content/getData/${route.params.hK}/${_t}`)

            // console.log(res.data.text.slice(0,20))
            setbookdata(res.data.text)
            // console.log(res.data)

        }
        data_();
        // console.log("tiger ",bookdata[1])

    },[])


    return (
        <SafeAreaView style={ReadBook_style.container}>
            <View style={{
                    height: 11
                }}/>
            <View style={{
                    flexDirection: 'row'
                }}>
                <TouchableOpacity onPress={() => navigation.navigate("Mybook", route.params)}>
                    <Image
                        style={ReadBook_style.arrow_back}
                        source={require("../../image/Library/arrow_back_ios.png")}/>
                </TouchableOpacity>
                <Text style={ReadBook_style.header_text}>Library</Text>
            </View>
            <View
                style={{
                    flex: 1,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    marginTop: 25
                }}>
                <Pdf
                    trustAllCerts={false}
                    source={{uri : `data:application/pdf;base64,${bookdata}`}}
                    style={{
                        flex: 1,
                        width: '100%',
                        height: '100%'
                    }}/>

            </View>
        </SafeAreaView>
    );
}

export default ReadBook