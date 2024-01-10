import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { useCallback } from "react";

import DocumentPicker, { types } from 'react-native-document-picker';
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

function Description_book({navigation: {
        navigate
    }, route}) {
    const [fileResponse, setFileResponse] = useState([]);

    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({presentationStyle: 'fullScreen',type:[types.pdf]});
            setFileResponse(response);
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
                <TouchableOpacity onPress={() => navigation.navigate("Sell_2")}>
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
                    <Text style={styles.upload_text}>Upload the file (PDF / Word )</Text>
                </TouchableOpacity>
            </View>

            <View style={Publish_style.next_button}>
                <TouchableOpacity
                    title="Next"
                    onPress={() => console.log(route.params)}
                    style={Publish_style.Touchable}>
                    <Text style={Publish_style.button_style}>Next
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Description_book;