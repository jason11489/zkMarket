import React from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
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
    second_text: {
        color: '#232323',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        letterSpacing: 0.16,
        // lineHeight: 37,
        top: 55,
        left: 37,
        width: 278,
        height: 25
    },
    input_box: {
        width: 318,
        height: 52,
        backgroundColor: '#F8FAFF',
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: 'center',
        top: 55,
        left: 38,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 16,
        color: 'black',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        letterSpacing: 0.16,
        fontWeight: 900
    },
    tabel_input_box: {
        width: 220,
        height: 52,
        backgroundColor: '#F8FAFF',
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: 'center',
        top: 55,
        left: 38,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 16,
        color: 'black',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        letterSpacing: 0.16,
        fontWeight: 900
    },
    page_input_box: {
        width: 85,
        height: 52,
        backgroundColor: '#F8FAFF',
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: 'center',
        top: 55,
        left: 51,
        paddingTop: 14,
        paddingBottom: 14,
        paddingLeft: 16,
        color: 'black',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        letterSpacing: 0.16,
        fontWeight: 900
    }
})

function Basic_information({navigation}) {

    Publish_data = {
        Title: null,
        Author: null,
        Publisher: null,
        Table_of_contents: null,
        page_num:null,
        book_type_1: null,
        book_type_2: null,
        description_pdf: null,
        price: null,
        cover_img: null,
        book_pdf: null
    }

    return (
        <SafeAreaView style={Publish_style.container}>
            <View style={Publish_style.first_line}>
                <Text style={Publish_style.first_line_text}>
                    Basic_information
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Sell_2")}>
                    <Image style={Publish_style.x_back} source={require('../../image/sell/X.png')}/>
                </TouchableOpacity>
            </View>
            <View style={Publish_style.second_line}>
                <View style={Publish_style.slide_bar}/>
                <View style={Publish_style.slide_bar_1}/>
            </View>
            <Text style={Publish_style.page_num}>1/5</Text>
            <Text style={styles.first_text}>Please enter basic{"\n"}
                information of the book</Text>
            <Text style={styles.second_text}>Title</Text>
            <TextInput
                style={styles.input_box}
                placeholder="Enter the title of book"
                placeholderTextColor='#909398'
                onChangeText={(text) => {
                    Publish_data.Title = text
                }}/>
            <View style={{
                    height: 20
                }}/>
            <Text style={styles.second_text}>Author</Text>
            <TextInput
                style={styles.input_box}
                placeholder="Enter the Author’s name of book"
                placeholderTextColor='#909398'
                onChangeText={(text) => {
                    Publish_data.Author = text
                }}/>
            <View style={{
                    height: 20
                }}/>

            <Text style={styles.second_text}>Publisher</Text>
            <TextInput
                style={styles.input_box}
                placeholder="Enter the Publisher (Optional)"
                placeholderTextColor='#909398'
                onChangeText={(text) => {
                    Publish_data.Publisher = text
                }}/>
            <View style={{
                    height: 20
                }}/>

            <Text style={styles.second_text}>Table of contents</Text>
            <View style={{
                    flexDirection: 'row'
                }}>
                <TextInput
                    style={styles.tabel_input_box}
                    placeholder="Enter the table"
                    placeholderTextColor='#909398'
                    onChangeText={(text) => {
                        Publish_data.Table_of_contents = text
                    }} />
                <TextInput
                    style={styles.page_input_box}
                    placeholder="page P"
                    placeholderTextColor='#909398'
                    onChangeText={(text) => {
                        Publish_data.page_num = text
                    }}/>
            </View>

            <View style={{height:100}} />

            <View style={Publish_style.next_button}>
                <TouchableOpacity
                    title="Next"
                    style={Publish_style.Touchable}
                    onPress={() => navigation.navigate("Book_type", Publish_data)}>
                    <Text style={Publish_style.button_style}>Next
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Basic_information;