import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View
} from "react-native";
import httpCli from "../http";

import { Search_stytle } from "../CSS/Search_sytle";

function Search() {

    const [data, setData] = useState([]);
    const [seacrhQuery, setSearchQuery] = useState("");
    const [isLoading, setisLoading] = useState(false);

    useEffect(() => {
        setisLoading(true);
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const res = await httpCli.get('content/list');
            setData(res.data[1][0]);
            // console.log(Object.keys(data));

            setisLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
    }

    if (isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <ActivityIndicator size={'large'} color="#5500dc"/>
            </View>
        )
    }

    return (
        <SafeAreaView style={Search_stytle.container}>
            <ScrollView style={Search_stytle.Scroll_style}>
                <View style={Search_stytle.first_line}>
                    <Text style={Search_stytle.zkMarket_text}>
                        zkMarket
                    </Text>
                    <Image
                        style={Search_stytle.shopping_bag}
                        source={require('../image/shopping_bag_gray.png')}/>
                </View>
                <View style={Search_stytle.Search_book}>
                    <View style={Search_stytle.Seacrh_background}/>
                    <Image
                        style={Search_stytle.Search_icon}
                        source={require('../image/search_gray.png')}/>
                    <TextInput
                        style={Search_stytle.Search_bar}
                        placeholder="Search for what you want"
                        placeholderTextColor='#909398'
                        value={seacrhQuery}
                        onChangeText={(query) => {
                            handleSearch(query)
                        }}/>
                </View>
                <View style={Search_stytle.last_line}>
                    {
                        seacrhQuery
                            ? (<Text>dsfaasdf</Text>)
                            : (
                                <Image style={Search_stytle.img} source={require('../image/search_img.png')}/>
                            )
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Search;