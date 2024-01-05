import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";

import { home_styles } from "../CSS/Home_style";

function Home({navigation}) {
    return (
        <ScrollView>
            <ImageBackground
                source={require('../image/Background.png')}
                style={home_styles.backgroundImage}></ImageBackground>
            <Text style={home_styles.zkMarket_text}>zkMarket</Text>
            <Image
                source={require('../image/shopping_bag.png')}
                style={home_styles.shopping}/>
            <View style={home_styles.yellow_dot}/>
            <View style={home_styles.Today_Special_circle}>
                <Text style={home_styles.Today_Special}>Today's Special</Text>
            </View>
        </ScrollView>
        // <View style={styles.container}>     <ImageBackground
        // source={require('../image/Background.png')} style={styles.backgroundImage}>
        // <Button title="Go to Login" onPress={() => navigation.navigate("Login")}/>
        // </ImageBackground> </View>
    );
}

export default Home;