import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { Library_style } from "../CSS/Library_style";

function Library({navigation : {navigate}}) {

    return (
        <SafeAreaView style={Library_style.container}>
            <View style={{
                    flexDirection: 'row'
                }}>
                <Text style={Library_style.title_style}>
                    Library
                </Text>
                <Image
                    style={Library_style.card_style}
                    source={require("../image/Library/Card.png")}/>
                <TouchableOpacity onPress={() => navigate("Library_2")}><Image
                    style={Library_style.menu_style}
                    source={require("../image/Library/menu.png")}/>
                </TouchableOpacity>
                
            </View>
        </SafeAreaView>

    );
}

export default Library;