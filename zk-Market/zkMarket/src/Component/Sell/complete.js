import React, { useCallback, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import DocumentPicker, { types } from 'react-native-document-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { Publish_style } from "../../CSS/Publish_style";

styles = StyleSheet.create({
    first_text: {
        color: 'black',
        fontSize: 32,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        top: 67,
        left : 42
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
    const [fileResponse, setFileResponse] = useState([]);
    const [showView1, setShowView1] = useState(false);

    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({
                presentationStyle: 'fullScreen',
                type: [types.pdf]
            });
            setFileResponse(response);
            setShowView1(true);
        } catch (err) {
            console.warn(err);
        }
    }, []);

    const [response, setImageResponse] = useState(null);
    const [showView1_image, setShowView1_image] = useState(false);
    const image_pick = useCallback(async () => {
        const pick_img = await launchImageLibrary();
        console.log(pick_img["assets"]);
        setShowView1_image(true);
        setImageResponse(pick_img["assets"]);
    })

    return (
        <SafeAreaView style={Publish_style.container}>
            <Text style={styles.first_text}>Sales registration{"\n"}has been completed!</Text>
            <View style={Publish_style.next_button}>
                <TouchableOpacity
                    style={Publish_style.Touchable}
                    title="Next"
                    onPress={() => {
                        route.params.cover_img = response;
                        route.params.book_pdf = fileResponse;
                        console.log(route.params)
                    }}>
                    <Text style={Publish_style.button_style}>Next
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Complete;