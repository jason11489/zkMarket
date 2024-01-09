import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";

import { Publish_style } from "../../CSS/Publish_style";

function Description_book({navigation}) {
    return (
        <SafeAreaView style={Publish_style.container}>
            <View style={Publish_style.first_line}>
                <TouchableOpacity onPress={() => navigation.navigate("Book_type")}>
                    <Image
                        style={Publish_style.back}
                        source={require('../../image/sell/arrow_back_ios.png')}/>
                </TouchableOpacity>
                <Text style={Publish_style.first_line_text_2}>
                    Basic_information
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Sell_2")}>
                    <Image style={Publish_style.x_back_2} source={require('../../image/sell/X.png')}/>
                </TouchableOpacity>
            </View>
            <View style={Publish_style.second_line}>
                <View style={Publish_style.slide_bar}/>
                <View style={Publish_style.slide_bar_3}/>
            </View>
            <Text style={Publish_style.page_num}>3/5</Text>

            <View style={Publish_style.next_button}>
                <TouchableOpacity
                    title="Next"
                    onPress={() => navigation.navigate("Book_price")}>
                    <Text style={Publish_style.button_style}>Next
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Description_book;