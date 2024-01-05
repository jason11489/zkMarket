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
            <Text style={home_styles.text_3}>3 mystery novels, {"\n"}
                you'll fall in love{"\n"}with on a rainy day</Text>
            <Text style={home_styles.text_4}>The Last Thing He Told Me</Text>
            <Text style={home_styles.text_5}>/ Laura Dave</Text>
            <Text style={home_styles.rate}>4.6</Text>
            <Image source={require('../image/star_fill.png')} style={home_styles.star_1}/>
            <Image source={require('../image/star_fill.png')} style={home_styles.star_2}/>
            <Image source={require('../image/star_fill.png')} style={home_styles.star_3}/>
            <Image source={require('../image/star_fill.png')} style={home_styles.star_4}/>
            <Image source={require('../image/star_half.png')} style={home_styles.star_5} />
                        <Image
                source={require('../image/bookcover_05.png')}
                style={home_styles.bookcover_5}/>
            <Image
                source={require('../image/bookcover_03.png')}
                style={home_styles.bookcover_3} />
            <Image
                source={require('../image/bookcover_04.png')}
                style={home_styles.bookcover_4} />


            <Text style={home_styles.text_6}>“Maybe we are all fools, {"\n"}one way or another.”</Text>
            {/* <View style={home_styles.text_7}>
                <LinearGradientText
                    colors={['white', 'transparent']}
                    text="2019: Undercover of darkness,
                    Kate flees London for ramshackle
                    Weyward Cottage, inherited from a
                    great aunt she barely remembers.
                    With its tumbling ivy and
                    overgrown garden, the cottage is
                    worlds away from the abusive
                    partner who tormented Kate. But
                    she begins to suspect that her great
                    aunt had a secret. One that lurks in
                    the bones of the cottage,"
                    start={{
                        x: 0,
                        y: 0
                    }}
                    textStyle={{
                        fontSize: 12
                    }}
                    textProps={{
                        allowFontScaling: true
                    }}/>
            </View> */}
            <Text style={home_styles.text_7}>2019: Under cover of darkness,{"\n"}Kate flees London for ramshackle{"\n"}Weyward Cottage, inherited from a{"\n"}great aunt she barely remembers.{"\n"}With its tumbling ivy and{"\n"}overgrown garden, the cottage is{"\n"}worlds away from the abusive{"\n"}partner who tormented Kate. But{"\n"}she begins to suspect that her great{"\n"}aunt had a secret. One that lurks in{"\n"}the bones of the cottage,</Text>
            <Text style={home_styles.bestseller_text}>Bestsellers</Text>
        </ScrollView>
        // <View style={styles.container}>     <ImageBackground
        // source={require('../image/Background.png')} style={styles.backgroundImage}>
        // <Button title="Go to Login" onPress={() => navigation.navigate("Login")}/>
        // </ImageBackground> </View>
    );
}

export default Home;