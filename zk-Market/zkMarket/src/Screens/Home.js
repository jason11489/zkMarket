import React from "react";
import { Image, ImageBackground, ScrollView, Text, View } from "react-native";
import { home_styles } from "../CSS/Home_style";
import GradientText from "../CSS/gradient_text";

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
            <Image source={require('../image/star_half.png')} style={home_styles.star_5}/>
            <Image
                source={require('../image/bookcover_05.png')}
                style={home_styles.bookcover_5}/>
            <Image
                source={require('../image/bookcover_03.png')}
                style={home_styles.bookcover_3}/>
            <Image
                source={require('../image/bookcover_04.png')}
                style={home_styles.bookcover_4}/>

            <Text style={home_styles.text_6}>“Maybe we are all fools, {"\n"}one way or another.”</Text>
            <View style={home_styles.gradient_box}>
                <GradientText style={home_styles.text_7}>2019: Under cover of darkness,{"\n"}Kate flees London for ramshackle{"\n"}Weyward Cottage, inherited from a{"\n"}great aunt she barely remembers.{"\n"}With its tumbling ivy and{"\n"}overgrown garden, the cottage is{"\n"}worlds away from the abusive{"\n"}partner who tormented Kate. But{"\n"}she begins to suspect that her great{"\n"}aunt had a secret. One that lurks in{"\n"}the bones of the cottage,</GradientText>
            </View>
            {/* <Text style={home_styles.text_7}>2019: Under cover of darkness,{"\n"}Kate flees London for ramshackle{"\n"}Weyward Cottage, inherited from a{"\n"}great aunt she barely remembers.{"\n"}With its tumbling ivy and{"\n"}overgrown garden, the cottage is{"\n"}worlds away from the abusive{"\n"}partner who tormented Kate. But{"\n"}she begins to suspect that her great{"\n"}aunt had a secret. One that lurks in{"\n"}the bones of the cottage,</Text> */}
            <Text style={home_styles.bestseller_text}>Bestsellers</Text>
            <View style={home_styles.bar_2} />
            <View style={home_styles.bar} />
            <Text style={home_styles.slider_page_num}>1/3</Text>
            <Image style={home_styles.slider_triangle} source={require('../image/Polygon.png')} />
        </ScrollView>
        // <View style={styles.container}>     <ImageBackground
        // source={require('../image/Background.png')} style={styles.backgroundImage}>
        // <Button title="Go to Login" onPress={() => navigation.navigate("Login")}/>
        // </ImageBackground> </View>
    );
}

export default Home;