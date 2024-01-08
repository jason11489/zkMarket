import React from "react";
import {
    Image,
    ImageBackground,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { Sell_style } from "../CSS/Sell_style";

function Sell({navigation}) {
    return (
        <SafeAreaView style={Sell_style.container}>
            <ImageBackground
                source={require('../image/sell/sell_back.png')}
                style={Sell_style.background} />
            <ImageBackground
                source={require('../image/sell/Sell_img.gif')}
                style={Sell_style.gif_img}
            />
            <View style={Sell_style.first_line}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image
                        style={Sell_style.back}
                        source={require('../image/sell/arrow_back_ios.png')}/>
                </TouchableOpacity>
            </View>
            <View style={Sell_style.des_sell}>
                <Text style={Sell_style.des_text}>
                    Shall we start{"\n"}publishing books{"\n"}conveniently?
                </Text>
                <Text style={Sell_style.des_text_2}>
                    It takes about 20 minutes to register{"\n"}for book publication.
                </Text>
            </View>
            {/* <View style={Sell_style.gif_img}>
                <Image source={require('../image/sell/Sell_img.gif')}/>
            </View> */}
            <View style={Sell_style.publish_book}>
                <TouchableOpacity
                    title="Publishing my book"
                    onPress={() => navigation.navigate("Home")}>
                    <Text style={Sell_style.button_style}>Publishing my book
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
}

export default Sell;