import React from "react";
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

import { Sell_style } from "../CSS/Sell_style";


function Sell({navigation}) {

    
    return (
        <SafeAreaView style={Sell_style.container}>
            <View style={Sell_style.first_line}>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <Image
                        style={Sell_style.back}
                        source={require('../image/sell/arrow_back_ios.png')}/>
                </TouchableOpacity>
                <View style={Sell_style.slide_bar}/>
                <View style={Sell_style.slide_bar_2}/>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} pagingEnabled>
                <View style={Sell_style.first_view}>
                    <ImageBackground
                        source={require('../image/sell/sell_back.png')}
                        style={Sell_style.background}/>
                    <ImageBackground
                        source={require('../image/sell/Sell_img.gif')}
                        style={Sell_style.gif_img}/>
                    <View style={Sell_style.des_sell}>
                        <Text style={Sell_style.des_text}>
                            Shall we start{"\n"}publishing books{"\n"}conveniently?
                        </Text>
                        <Text style={Sell_style.des_text_2}>
                            It takes about 20 minutes to register{"\n"}for book publication.
                        </Text>
                    </View>
                    <View style={Sell_style.publish_book}>
                        <TouchableOpacity
                            title="Publishing my book"
                            onPress={() => navigation.navigate("Basic_information")}>
                            <Text style={Sell_style.button_style}>Publishing my book
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={Sell_style.second_view}>
                    <Text style={Sell_style.library_text}>Library</Text>

                </View>

            </ScrollView>

        </SafeAreaView>
    );
}

export default Sell;