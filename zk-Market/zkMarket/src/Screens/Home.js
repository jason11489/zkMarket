import React from "react";
import { Image, ImageBackground, ScrollView, StyleSheet, Text } from "react-native";

function Home({navigation}) {
    return (
        <ScrollView>
            <ImageBackground
                source={require('../image/Background.png')}
                style={[
                    styles.backgroundImage, {
                        zIndex: 1
                    }
                ]}></ImageBackground>
            <Text
                style={[
                    {
                        color: 'white',
                        fontSize: 20,
                        fontFamily: 'NanumSquareOTF_ac',
                        fontWeight: '700',
                        letterSpacing: 0.80,
                        left: 28,
                        top: -50
                    }, {
                        zIndex: 2
                    }
                ]}>zkMarket</Text>
            <Image source={require('../image/shopping_bag.png')} style={[styles.shopping,{zIndex:3}] } />
        </ScrollView>
        // <View style={styles.container}>     <ImageBackground
        // source={require('../image/Background.png')} style={styles.backgroundImage}>
        // <Button title="Go to Login" onPress={() => navigation.navigate("Login")}/>
        // </ImageBackground> </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        width: '100%',
        height: '561.3%',
        background: 'rgba(0, 0, 0, 0.70)',
        backdropFilter: 'blur(3px)'
    },
    shopping: {
        width: 16,
        height: 20,
        background: '#F8FAFF'
    }
})

export default Home;