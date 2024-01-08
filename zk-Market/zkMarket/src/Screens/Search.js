import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View
} from "react-native";

import { Search_stytle } from "../CSS/Search_sytle";

function Search() {

    const [text, settext] = useState('hello');

    return (
        <SafeAreaView style={Search_stytle.container}>
            <ScrollView style={Search_stytle.Scroll_style}>
                <View style={Search_stytle.first_line}>
                    <Text style={Search_stytle.zkMarket_text}>
                        zkMarket
                    </Text>
                    <Image
                        style={Search_stytle.shopping_bag}
                        source={require('../image/shopping_bag_gray.png')}/>
                </View>
                <View style={Search_stytle.Search_book}>
                    <View style={Search_stytle.Seacrh_background}/>
                    <Image
                        style={Search_stytle.Search_icon}
                        source={require('../image/search_gray.png')}/>
                    <TextInput
                        style={Search_stytle.Search_bar}
                        placeholder="Search for what you want"
                        placeholderTextColor = '#909398'
                        onChangeText={(text) => {
                            settext(text)
                        }}/>
                </View>
                <View style={Search_stytle.last_line}>
                <Image style={Search_stytle.img} source={require('../image/search_img.png')} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Search;