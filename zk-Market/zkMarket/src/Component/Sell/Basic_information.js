import React from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
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
        lineHeight: 35,
        top: 40,
        left: 37,
    },
    second_text: {
        color: '#232323',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        letterSpacing: 0.16,
        lineHeight: 37,
        top: 90,
        left:37
    }
})

function Basic_information({ navigation }) {
    
    Publish_data = {
        Title: null,
        Author: null,
        Publisher: null,
        Table_of_contents: null,
        book_type_1: null,
        book_type_2: null,
        description_pdf: null,
        price: null,
        cover_img: null,
        book_pdf:null,
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
            <View style={Publish_style.next_button}>
                <TouchableOpacity
                    title="Next"
                    style={Publish_style.Touchable}
                    onPress={() => navigation.navigate("Book_type", Publish_style)}>
                    <Text style={Publish_style.button_style}>Next
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Basic_information;