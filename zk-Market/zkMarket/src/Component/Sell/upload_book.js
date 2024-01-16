import React, { useCallback, useState } from "react";
import {
    Alert,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import DocumentPicker from 'react-native-document-picker';
import { launchImageLibrary } from 'react-native-image-picker';
import { Publish_style } from "../../CSS/Publish_style";

import { handlePublish } from "../../http/deeplink/register";

styles = StyleSheet.create({
    first_text: {
        color: '#232323',
        fontSize: 24,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        top: 40,
        left: 37,
        height: 105
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
    },upload_blue: {
        width: 321,
        height: 52,
        backgroundColor: '#F8FAFF',
        borderRadius: 5,
        borderColor: '#387BFF',
        left: 34,
        top: 20,
        flexDirection: 'row',
        borderWidth:1.5,
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

function file(fileResponse) {
    console.log(fileResponse[0].name)
    return (<Text style={styles.upload_text}>{fileResponse[0].name}</Text>)
}

function Upload_book({navigation: {
        navigate
    }, route}) {
    const [fileResponse, setFileResponse] = useState([]);
    const [showView1, setShowView1] = useState(false);

    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({
                copyTo : 'cachesDirectory',
                presentationStyle: 'fullScreen',
            });
            await setFileResponse(response);
            await setShowView1(true);
            console.log(response);
            route.params.book_uri = response[0].uri;
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
        const localUri = pick_img.assets[0].uri;
        const uriPath = localUri.split("//").pop();
        const imageName = localUri.split("/").pop();
        route.params.cover_img = localUri;
    })

    return (
        <SafeAreaView style={Publish_style.container}>
            <View style={Publish_style.first_line}>
                <TouchableOpacity onPress={() => navigate("Book_price",route.params)}>
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
                <View style={Publish_style.slide_bar_5}/>
            </View>
            <Text style={Publish_style.page_num}>5/5</Text>
            <Text style={styles.first_text}>Please upload{"\n"}
                the cover image of book</Text>
            <View
                style={{
                    flexDirection: 'row',
                    height: 20,
                    left: 38
                }}>
                <Image
                    style={styles.sub_text_img}
                    source={require('../../image/sell/blue.png')}/>
                <Text style={styles.sub_text}>Up to 3 pages (500 kb) can be uploaded.</Text>
            </View>

            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row'
                    }}
                    onPress={image_pick}>

                    <View>
                        {
                            showView1_image
                                ? (
                                    <View style={styles.upload_blue}>
                                        <View
                                            style={{
                                                flexDirection: 'row'
                                            }}>
                                            <Image
                                                style={styles.upload_img}
                                                source={require('../../image/sell/upload_blue.png')}/>
                                            <Text style={styles.upload_text_blue}>Upload the image file</Text>
                                        </View>
                                    </View>
                                )
                                : (
                                    <View style={styles.upload}>
                                        <View
                                            style={{
                                                flexDirection: 'row'
                                            }}>
                                            <Image
                                                style={styles.upload_img}
                                                source={require('../../image/sell/upload.png')}/>
                                            <Text style={styles.upload_text}>Upload the image file</Text>
                                        </View>
                                    </View>

                                )
                        }
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{height:150}} />

            <Text style={styles.first_text}>Please upload{"\n"}
                the PDF file of the book</Text>
            <View
                style={{
                    flexDirection: 'row',
                    height: 20,
                    left: 38
                }}>
                <Image
                    style={styles.sub_text_img}
                    source={require('../../image/sell/blue.png')}/>
                <Text style={styles.sub_text}>Up to 100mb can be uploaded.</Text>
            </View>

            <View>
                <TouchableOpacity
                    style={{
                        flexDirection: 'row'
                    }}
                    onPress={handleDocumentSelection}>

                    <View>
                        {
                            showView1
                                ? (
                                    <View style={styles.upload_blue}>
                                        <View
                                            style={{
                                                flexDirection: 'row'
                                            }}>
                                            <Image
                                                style={styles.upload_img}
                                                source={require('../../image/sell/upload_blue.png')}/>
                                            <Text style={styles.upload_text_blue}>Upload the PDF file</Text>
                                        </View>
                                    </View>
                                )
                                : (
                                    <View style={styles.upload}>
                                        <View
                                            style={{
                                                flexDirection: 'row'
                                            }}>
                                            <Image
                                                style={styles.upload_img}
                                                source={require('../../image/sell/upload.png')}/>
                                            <Text style={styles.upload_text}>Upload the txt file</Text>
                                        </View>
                                    </View>

                                )
                        }
                    </View>
                </TouchableOpacity>
            </View>

            <View style={Publish_style.next_button}>
                <TouchableOpacity
                    style={Publish_style.Touchable}
                    title="Next"
                    onPress={() => {
                        try{
                            handlePublish(route.params);
                        } catch (err) {
                            Alert.alert(err)
                        }
                        console.log(route.params)
                    }}>
                    <Text style={Publish_style.button_style}>Next
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Upload_book;