import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from "react";
import {
    FlatList,
    Image,
    ImageBackground,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { home_styles } from "../CSS/Home_style";
import GradientText from "../CSS/gradient_text";
import httpCli from "../http";

function Home({navigation}) {

    const [book_sell_list, setbook_list] = useState([]);
    const [VIEW, setVIEW] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    let value;

    useEffect(() => {
        let res;
        async function data_() {
            const tab_navi = navigation.getParent();
            tab_navi.setOptions({
                tabBarStyle: {
                        height: 95.7,
                        shadowColor: 'gray',
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        shadowOffset: {
                            height: -4,
                            width: -4
                        }
                    }
            })
            res = await httpCli.get('content/list');
            console.log("check respone of server", res.data[0])
            // console.log("check respone of 22222",Object.keys(res.data[1][0]))
            await setbook_list(res.data)
            
        }

        data_();
        async function check_info() {
            value = await AsyncStorage.getItem('userEOA');
            // value = getData('userEOA');
            if (value === null) {
                console.log("tiger")
                navigation.navigate("RegisterUser");
            }
        }
        check_info()
        
    },[]);
    

    
    
    const render_image = ({ item }) => (
        <View style={home_styles.flat_list}>
            <TouchableOpacity onPress={() => navigation.navigate("Buy_book", item)}>
                <View style={home_styles.image_shadow}>
                    <Image
                        style={[home_styles.render_img, home_styles.image_shadow]}
                        source={{
                            uri: `data:image/png;base64,${item.image_data}`
                        }} />
                </View>
                <Text style={home_styles.author_style}>{item.author}</Text>
                <Text style={home_styles.publisher_style}>/ {item.publisher}</Text>
                <Text style={home_styles.price_style}>${item.fee}
                </Text>
            </TouchableOpacity>
        </View>
    )
    
    return (
        <View style={home_styles.scrollViewContainer}>
            {
                book_sell_list[0]
                    ? (
                        <ScrollView
                            style={{
                                backgroundColor: 'white'
                            }}>
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
                            <Text style={home_styles.text_4}>{book_sell_list[1][0].title}</Text>
                            <Text style={home_styles.text_5}>/ {book_sell_list[1][0].author}</Text>
                            <Text style={home_styles.rate}>4.6</Text>
                            <Image source={require('../image/star_fill.png')} style={home_styles.star_1}/>
                            <Image source={require('../image/star_fill.png')} style={home_styles.star_2}/>
                            <Image source={require('../image/star_fill.png')} style={home_styles.star_3}/>
                            <Image source={require('../image/star_fill.png')} style={home_styles.star_4}/>
                            <Image source={require('../image/star_half.png')} style={home_styles.star_5} />
                            {/* <Image
                                source={{uri:book_sell_list[1][0].data[0].image_data}}
                                style={home_styles.bookcover_5} /> */}
                            <View style={home_styles.image_shadow_white}>
                                <Image
                                    source={{uri : `data:image/png;base64,${book_sell_list[1][0].image_data}`}}
                                    style={home_styles.bookcover_5}/>
                                <Image
                                    source={{uri : `data:image/png;base64,${book_sell_list[1][0].image_data}`}}
                                    style={home_styles.bookcover_3}/>
                                <Image
                                    source={{uri : `data:image/png;base64,${book_sell_list[1][0].image_data}`}}
                                        style={home_styles.bookcover_4} />
                            </View>

                            <Text style={home_styles.text_6}>"{book_sell_list[1][0].description}"</Text>
                            <View style={home_styles.gradient_box}>
                                <GradientText style={home_styles.text_7}>2019: Under cover of darkness,{"\n"}Kate flees London for ramshackle{"\n"}Weyward Cottage, inherited from a{"\n"}great aunt she barely remembers.{"\n"}With its tumbling ivy and{"\n"}overgrown garden, the cottage is{"\n"}worlds away from the abusive{"\n"}partner who tormented Kate. But{"\n"}she begins to suspect that her great{"\n"}aunt had a secret. One that lurks in{"\n"}the bones of the cottage,</GradientText>
                            </View>
                            {/* <Text style={home_styles.text_7}>2019: Under cover of darkness,{"\n"}Kate flees London for ramshackle{"\n"}Weyward Cottage, inherited from a{"\n"}great aunt she barely remembers.{"\n"}With its tumbling ivy and{"\n"}overgrown garden, the cottage is{"\n"}worlds away from the abusive{"\n"}partner who tormented Kate. But{"\n"}she begins to suspect that her great{"\n"}aunt had a secret. One that lurks in{"\n"}the bones of the cottage,</Text> */}
                            <View
                                style={{
                                    height: -10
                                }}/>
                            <Text style={home_styles.bestseller_text}>Bestsellers</Text>
                            <View style={home_styles.bar_2}/>
                            <View style={home_styles.bar}/>
                            <Text style={home_styles.slider_page_num}>1/3</Text>

                            

                            <Image
                                style={home_styles.slider_triangle}
                                source={require('../image/Polygon.png')}/>
                            <View
                                style={{
                                    height: 625
                                }}></View>
                            <TouchableOpacity
                                style={{top: -6,left: 323,height: 20,width:45}}
                                onPress={() => navigation.navigate("Library")}>
                                <View style={home_styles.go_to_book_list}></View>
                                <Text style={home_styles.more_text}>
                                    more
                                </Text>
                            </TouchableOpacity>
                            <FlatList
                                horizontal={true}
                                data={book_sell_list[1]}
                                renderItem={render_image}/>
                            <Image
                                style={home_styles.Keyword_img}
                                source={require('../image/Keywords_for_you.png')}/>
                            <Image
                                style={home_styles.Times_Best_sellers}
                                source={require('../image/Times_Best_sellers.png')}/>
                            <Image
                                style={home_styles.Award_winners}
                                source={require('../image/Award_winners.png')}/>
                            <View
                                style={{
                                    borderColor: 'white',
                                    height: 50
                                }}></View>

                        </ScrollView>
                    )
                    :<ScrollView
                            style={{
                                backgroundColor: 'white'
                            }}>
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
                            {/* <Image
                                source={{uri:book_sell_list.data[0].image_data}}
                                style={home_styles.bookcover_5} /> */}
                            <View style={home_styles.image_shadow_white}>
                                <Image
                                    source={require('../image/bookcover_05.png')}
                                    style={home_styles.bookcover_5}/>
                                <Image
                                    source={require('../image/bookcover_03.png')}
                                    style={home_styles.bookcover_3}/>
                                <Image
                                    source={require('../image/bookcover_04.png')}
                                        style={home_styles.bookcover_4} />
                            </View>

                            <Text style={home_styles.text_6}>“Maybe we are all fools,{"\n"}one way or another.”</Text>
                            <View style={home_styles.gradient_box}>
                                <GradientText style={home_styles.text_7}>2019: Under cover of darkness,{"\n"}Kate flees London for ramshackle{"\n"}Weyward Cottage, inherited from a{"\n"}great aunt she barely remembers.{"\n"}With its tumbling ivy and{"\n"}overgrown garden, the cottage is{"\n"}worlds away from the abusive{"\n"}partner who tormented Kate. But{"\n"}she begins to suspect that her great{"\n"}aunt had a secret. One that lurks in{"\n"}the bones of the cottage,</GradientText>
                            </View>
                            {/* <Text style={home_styles.text_7}>2019: Under cover of darkness,{"\n"}Kate flees London for ramshackle{"\n"}Weyward Cottage, inherited from a{"\n"}great aunt she barely remembers.{"\n"}With its tumbling ivy and{"\n"}overgrown garden, the cottage is{"\n"}worlds away from the abusive{"\n"}partner who tormented Kate. But{"\n"}she begins to suspect that her great{"\n"}aunt had a secret. One that lurks in{"\n"}the bones of the cottage,</Text> */}
                            <View
                                style={{
                                    height: -10
                                }}/>
                            <Text style={home_styles.bestseller_text}>Bestsellers</Text>
                            <View style={home_styles.bar_2}/>
                            <View style={home_styles.bar}/>
                            <Text style={home_styles.slider_page_num}>1/3</Text>

                            

                            <Image
                                style={home_styles.slider_triangle}
                                source={require('../image/Polygon.png')}/>
                            <View
                                style={{
                                    height: 625
                                }}></View>
                            <TouchableOpacity
                                style={{top: -6,left: 323,height: 20,width:45}}
                                onPress={() => navigation.navigate("Book_flat")}>
                                <View style={home_styles.go_to_book_list}></View>
                                <Text style={home_styles.more_text}>
                                    more
                                </Text>
                            </TouchableOpacity>
                            {/* <FlatList
                                horizontal={true}
                                data={book_sell_list.data}
                                renderItem={render_image}/> */}

                            <Image
                                style={home_styles.Keyword_img}
                                source={require('../image/Keywords_for_you.png')}/>
                            <Image
                                style={home_styles.Times_Best_sellers}
                                source={require('../image/Times_Best_sellers.png')}/>
                            <Image
                                style={home_styles.Award_winners}
                                source={require('../image/Award_winners.png')}/>
                            <View
                                style={{
                                    borderColor: 'white',
                                    height: 50
                                }}></View>

                        </ScrollView>
            }

        </View>
        // <View style={styles.container}>     <ImageBackground
        // source={require('../image/Background.png')} style={styles.backgroundImage}>
        // <Button title="Go to Login" onPress={() => navigation.navigate("Login")}/>
        // </ImageBackground> </View>
    );
}

export default Home;