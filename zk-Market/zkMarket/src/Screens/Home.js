import React from "react";
import { Button, ImageBackground, StyleSheet, View } from "react-native";

function Home({navigation}) {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../image/Background.png')}
                style={styles.backgroundImage}>
                <Button title="Go to Login" onPress={() => navigation.navigate("Login")}/>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        flex : 1,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.70)',
        backdropFilter: 'blur(3px)',
        resizeMode:'cover',
    }
})

export default Home;