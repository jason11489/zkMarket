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
        top: 35,
        left: 38,
        width: 278,
        height: 25
    },
    input_box: {
        width: 328,
        height: 52,
        backgroundColor: '#F8FAFF',
        borderRadius: 8,
        overflow: 'hidden',
        justifyContent: 'flex-start',
        alignItems: 'center',
        top: 40,
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
    }
})

function Book_price({navigation: {
        navigate
    }, route}) {
    return (
        <SafeAreaView style={Publish_style.container}>
            <View style={Publish_style.first_line}>
                <TouchableOpacity onPress={() => navigate("Description_book")}>
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
                <View style={Publish_style.slide_bar_4}/>
            </View>
            <Text style={Publish_style.page_num}>4/5</Text>

            <Text style={styles.first_text}>Please enter{"\n"}
                the price of the book</Text>
            <Text style={styles.second_text}>Price</Text>

            <TextInput
                style={styles.input_box}
                placeholder="Enter the price of book"
                placeholderTextColor='#909398'
                onChangeText={(text) => {
                    route.params.price = text
                }} />
            
            <Image style={{width:370,height:160,left:19,top : 100}} source={require('../../image/sell/price.png')}/>
            
            <View style={{
                    height: 115
                }}/>

            <View style={Publish_style.next_button}>
                <TouchableOpacity
                    title="Next"
                    onPress={() => navigate("Upload_book",route.params)}
                    style={Publish_style.Touchable}>
                    <Text style={Publish_style.button_style}>Next
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Book_price;