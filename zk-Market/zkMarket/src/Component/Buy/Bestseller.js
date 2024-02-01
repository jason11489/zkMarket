import React, { useEffect, useState } from "react";
import {
    FlatList,
    Image,
    RefreshControl,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import { Bestseller_style } from "../../CSS/Bestseller_style";
import httpCli from "../../http";

function Bestseller({navigation: {
        navigate
    }}) {
    const [isRefreshing, setIsRefreshing] = useState(false);

    const [book_sell_list, setbook_list] = useState([]);

    useEffect(() => {
        let res;
        async function data_() {
            res = await httpCli.get('content/list');
            console.log("check respone of server", res.data[0])
            // console.log("check respone of 22222",Object.keys(res.data[1][0]))
            await setbook_list(res.data)

        }

        data_();

    }, []);
    const render_image = ({item}) => (
        <View style={Bestseller_style.flat_list}>
            <TouchableOpacity onPress={() => navigate("Buy_book", item)}>
                <View style={Bestseller_style.image_shadow}>
                    <Image
                        style={[Bestseller_style.render_img, Bestseller_style.image_shadow]}
                        source={{
                            uri: `data:image/png;base64,${item.image_data}`
                        }}/>
                </View>
                <Text style={Bestseller_style.author_style}>{item.author}</Text>
                <Text style={Bestseller_style.publisher_style}>/ {item.publisher}</Text>
            </TouchableOpacity>
        </View>
    )

    const handleRefresh = async () => {
        setIsRefreshing(true)
        console.log("tiger")
        res = await httpCli.get('content/list');
        // console.log("check respone of server", res.data[0]) console.log("check
        // respone of 22222",Object.keys(res.data[1][0]))
        await setbook_list(res.data)
        setIsRefreshing(false)
    }

    return (
        <SafeAreaView style={Bestseller_style.container}>
            <View style={{
                    flexDirection: 'row'
                }}>
                <TouchableOpacity
                    onPress={() => {
                        navigate("Home_2")
                    }}>
                    <Image
                        style={{
                            width: 24,
                            height: 24,
                            left: 20,
                            top: 12
                        }}
                        source={require('../../image/sell/arrow_back_ios.png')}/>
                </TouchableOpacity>
                <Text style={Bestseller_style.title_style}>
                    Bestsellers
                </Text>
                <Image
                    style={Bestseller_style.card_style}
                    source={require("../../image/Library/Card.png")}/>
                <TouchableOpacity onPress={() => navigate("Library_2")}><Image
                    style={Bestseller_style.menu_style}
                    source={require("../../image/Library/menu.png")}/>
                </TouchableOpacity>
            </View>
            <View style={{
                    height: 30
                }}></View>
            <View style={Bestseller_style.BestSeller_box}>
                <View
                    style={{
                        flexDirection: 'row'
                    }}>
                    <Text
                        style={{
                            color: '#232323',
                            fontSize: 20,
                            fontFamily: 'NanumSquareOTF_ac',
                            fontWeight: '700',
                            lineHeight: 27.70,
                            left: 16,
                            top: 10,
                            width: 186
                        }}>Bestsellers in Top 5</Text>
                    <Image
                        style={{
                            top: 14,
                            left: 20,
                            width: 18,
                            height: 17
                        }}
                        source={require("../../image/Library/Star.png")}/>
                </View>
                <FlatList horizontal={true} data={book_sell_list[1]} renderItem={render_image}/>
            </View>
            <View
                style={{
                    width: 393,
                    height: 48,
                    borderBottomColor: '#F5F6F9',
                    borderBottomWidth: 1
                }}>
                <Text
                    style={{
                        color: '#232323',
                        fontSize: 16,
                        fontFamily: 'NanumSquareOTF_ac',
                        fontWeight: '600',
                        letterSpacing: 0.16,
                        textAlign: 'center',
                        top: 12
                    }}>ALL</Text>
            </View>
            <FlatList
                refreshControl={<RefreshControl refreshing = {
                    isRefreshing
                }
                onRefresh = {
                    () => handleRefresh()
                } />}
                numColumns={3}
                data={book_sell_list[1]}
                renderItem={render_image}/>
        </SafeAreaView>

    );
}

export default Bestseller;