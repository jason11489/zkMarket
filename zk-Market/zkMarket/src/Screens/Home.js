import React from "react";
import {
    Image,
    ImageBackground,
    ScrollView,
    StyleSheet,
    Text,
    View
} from "react-native";

function Home({navigation}) {
    return (
        <ScrollView>
            <ImageBackground
                source={require('../image/Background.png')}
                style={styles.backgroundImage
}></ImageBackground>
            <Text
                style={{
                    width: 93,
                    height: 22,
                    color: 'white',
                    fontSize: 20,
                    fontFamily: 'NanumSquareOTF_ac',
                    fontWeight: '700',
                    letterSpacing: 0.80,
                    left: 28,
                    top: 64,
                    position: 'absolute'
                }}>zkMarket</Text>
            <Image
                source={require('../image/shopping_bag.png')}
                style={[
                    styles.shopping, {
                        zIndex: 3
                    }
                ]}/>
            <View
                style={{
                    width: 10,
                    height: 10,
                    right: 18,
                    top: 62,
                    backgroundColor: '#FFA323',
                    borderRadius: 101.25,
                    position: 'absolute'
                }}/>
            <View style={styles.Today_Special_circle}>
                <Text style={styles.Today_Special}>Today's Special</Text>
            </View>
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
        height: 755,
        backgroundColor: 'rgba(0, 0, 0, 0.70)',
        backdropFilter: 'blur(3px)',
        position: 'absolute'
    },
    shopping: {
        width: 24,
        height: 24,
        position: 'absolute',
        right: 19,
        top: 62
    },
    Today_Special: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        position: 'relative'
    },
    Today_Special_circle: {
        left: 27,
        top: 130,
        width: 96,
        height: 15,
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 4,
        paddingBottom: 4,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        position: 'absolute',
        backgroundColor:'white'
    }

})

export default Home;