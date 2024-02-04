import AsyncStorage from "@react-native-async-storage/async-storage";
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
import { Library_style } from "../CSS/Library_style";
import httpCli from "../http";
function Library({navigation: {
        navigate
    }}) {

    const [isRefreshing, setIsRefreshing] = useState(false);

    const [book_sell_list, setbook_list] = useState([]);
    const [buyer_addr, setbuyer_addr] = useState();

    useEffect(() => {
        let res;
        async function data_() {
            const addr = await AsyncStorage.getItem('userEOA');
            setbuyer_addr(addr)
            console.log("buyer_addr = ", addr)
            res = await httpCli.get(`content/list/${addr}`);
            console.log("check respone of server", res.data[1][0].title)
            // console.log("check respone of 22222",Object.keys(res.data[1][0]))
            await setbook_list(res.data)

        }

        data_();

    }, []);
    const render_image = ({item}) => (
        <View style={Library_style.flat_list}>
            <TouchableOpacity onPress={() => navigate("Mybook", item)}>
                <View style={Library_style.image_shadow}>
                    <Image
                        style={[Library_style.render_img, Library_style.image_shadow]}
                        source={{
                            uri: `data:image/png;base64,${item.image_data}`
                        }}/>
                </View>
                <Text style={Library_style.author_style}>{item.title}</Text>
                <Text style={Library_style.publisher_style}>/ {item.author}</Text>
            </TouchableOpacity>
        </View>
    )

    const handleRefresh = async () => {
        setIsRefreshing(true)
        console.log("refreshing")
        console.log("buyer_addr = ", buyer_addr)

        res = await httpCli.get(`content/list/${buyer_addr}`);
        console.log("check = ",res.data[0].title)
        await setbook_list(res.data)
        setIsRefreshing(false)
    }

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
            <View style={{
                    height: 30
                }}></View>
            <View style={Library_style.BestSeller_box}>
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
                        }}>Recent</Text>
                </View>
                <View style={{
                        height: 5
                    }}/>
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
                    }}>Buy List</Text>
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

export default Library;