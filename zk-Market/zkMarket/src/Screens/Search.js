import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

import { Search_stytle } from "../CSS/Search_sytle";

function Search() {
    return (
        <SafeAreaView style={Search_stytle.container}>
            <ScrollView style={Search_stytle.Scroll_style}>
                <View
                    style={Search_stytle.first_line}>
                    <Text style={Search_stytle.zkMarket_text}>
                        zkMarket
                    </Text>
                    <Image style={Search_stytle.shopping_bag} source={require('../image/shopping_bag_gray.png')} />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

export default Search;