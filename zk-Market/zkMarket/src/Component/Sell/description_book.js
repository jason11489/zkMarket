import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import RNFS from 'react-native-fs';

import { useCallback } from "react";

import DocumentPicker from 'react-native-document-picker';
import { Publish_style } from "../../CSS/Publish_style";

const styles = StyleSheet.create({
    first_text: {
        color: '#232323',
        fontSize: 24,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        top: 40,
        left: 37,
        height: 100
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
    upload_text: {
        color: '#C7C8CC',
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
    }
})
function file(fileResponse) {
    console.log(fileResponse)
    console.log(fileResponse.name)
    return (<Text style={styles.upload_text}>{fileResponse.name}</Text>)
}

const readtxtFile = async (filePath) => {
    try {
        const info = await RNFS.readFile(filePath, 'ascii')
        console.log(info)
        return info
    } catch (error) {
        console.error('Error reading file:', error);
    }
}

function Description_book({navigation: {
        navigate
    }, route}) {
    const [fileResponse, setFileResponse] = useState([]);
    const [showView1, setShowView1] = useState(false);

    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pickSingle({
                // mode : 'open',
                copyTo : 'cachesDirectory',
                presentationStyle: 'fullScreen',
            });
            await setFileResponse(response);
            await setShowView1(true);
            console.log(fileResponse)
            route.params.description = await RNFS.readFile(response.uri,'utf8');
        } catch (err) {
            console.warn(err);
        }
    }, []);

    return (
        <SafeAreaView style={Publish_style.container}>
            <View style={Publish_style.first_line}>
                <TouchableOpacity onPress={() => navigate("Book_type")}>
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
                <View style={Publish_style.slide_bar_3}/>
            </View>
            <Text style={Publish_style.page_num}>3/5</Text>
            <Text style={styles.first_text}>Please upload the{"\n"}
                description file for the book</Text>

            <View style={styles.upload}>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row'
                    }}
                    onPress={handleDocumentSelection}>
                    <Image
                        style={styles.upload_img}
                        source={require('../../image/sell/upload.png')}/>
                    <View>
                        {
                            showView1
                                ? (
                                    <View>
                                        {file(fileResponse)}
                                    </View>
                                )
                                : (
                                    <View>
                                        <Text style={styles.upload_text}>Upload the file (PDF / Word )</Text>
                                    </View>
                                )
                        }

                    </View>
                </TouchableOpacity>
            </View>

            <View style={{
                    height: 300
                }}/>

            <View style={Publish_style.next_button}>
                <TouchableOpacity
                    title="Next"
                    onPress={() => {
                        console.log("route check", route.params)
                        navigate("Book_price", route.params)
                        // console.log(readtxtFile(route.params.description_pdf[0].fileCopyUri))
                    }}
                    style={Publish_style.Touchable}>
                    <Text style={Publish_style.button_style}>Next
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Description_book;