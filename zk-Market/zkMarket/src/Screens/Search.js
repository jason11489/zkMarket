import React, { useEffect, useState } from "react";
import {
    ActivityIndicator,
    FlatList,
    Image,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";
import httpCli from "../http";

import { Search_stytle } from "../CSS/Search_sytle";

function Search({navigation}) {

    const [data, setData] = useState([]);
    const [seacrhQuery, setSearchQuery] = useState("");
    const [isLoading, setisLoading] = useState(false);
    const [searchbook, setsearchbook] = useState([]);

    useEffect(() => {
        setisLoading(true);
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const res = await httpCli.get('content/list');
            setData(res.data[1]);
            // console.log(data[0].title);

            setisLoading(false);
        } catch (error) {
            console.log(error)
        }
    }

    const handleSearch = (query) => {
        setSearchQuery(query);
        handleFilter(seacrhQuery);
        console.log("result about search book = ", Object.keys(searchbook))
    }

    function handleFilter(searchBook) {
        setsearchbook(
            data.filter((data) => data.title.toUpperCase().includes(searchBook.toUpperCase()))
        )
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
    const render_search_result = (item, index) => (

        <View style={Search_stytle.flat_list}>
            <Text
                style={{
                    color: '#C7C8CC',
                    fontSize: 14,
                    fontFamily: 'NanumSquareOTF_ac',
                    fontWeight: '700',
                    top: 35
                }}>0{index + 1}</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Buy_book", item)}>
                <View
                    style={{
                        flexDirection: 'row',
                        left: 20
                    }}>
                    <View style={Search_stytle.image_shadow}>
                        <Image
                            style={[Search_stytle.render_img, Search_stytle.image_shadow]}
                            source={{
                                uri: `data:image/png;base64,${item.image_data}`
                            }}/>
                    </View>
                    <View
                        style={{
                            left: 17,
                            top: 17
                        }}>
                        <Text
                            style={{
                                color: '#232323',
                                fontSize: 14,
                                fontFamily: 'NanumSquareOTF_ac',
                                fontWeight: '600',
                                width: 200
                            }}>{item.title}</Text>
                        <Text
                            style={{
                                width: '100%',
                                color: '#C7C8CC',
                                fontSize: 12,
                                fontFamily: 'NanumSquareOTF_ac',
                                fontWeight: '600',
                                top: 5
                            }}>{item.author}</Text>
                    </View>
                </View>

            </TouchableOpacity>
        </View>

    )

    const render_image = (item, index) => (
            <View style={Search_stytle.flat_list}>
                <Text
                    style={{
                        color: '#C7C8CC',
                        fontSize: 14,
                        fontFamily: 'NanumSquareOTF_ac',
                        fontWeight: '700',
                        top: 35
                    }}>0{index + 1}</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Buy_book", item)}>
                    <View
                        style={{
                            flexDirection: 'row',
                            left: 20,
                        }}>
                        <View style={Search_stytle.image_shadow}>
                            <Image
                                style={[Search_stytle.render_img, Search_stytle.image_shadow]}
                                source={{
                                    uri: `data:image/png;base64,${item.image_data}`
                                }}/>
                        </View>
                        <View
                            style={{
                                left: 17,
                                top: 17
                            }}>
                            <Text
                                style={{
                                    color: '#232323',
                                    fontSize: 14,
                                    fontFamily: 'NanumSquareOTF_ac',
                                    fontWeight: '600',
                                    width: 200
                                }}>{item.title}</Text>
                            <Text
                                style={{
                                    width: '100%',
                                    color: '#C7C8CC',
                                    fontSize: 12,
                                    fontFamily: 'NanumSquareOTF_ac',
                                    fontWeight: '600',
                                    top: 5
                                }}>{item.author}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
    )

    return (
        <SafeAreaView style={Search_stytle.container}>
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
                        ? (
                            <View
                                style={{
                                    left: 20,
                                    top: 31
                                }}>
                                <Text
                                    style={{
                                        color: '#6D6F75',
                                        fontSize: 20,
                                        fontFamily: 'NanumSquareOTF_ac',
                                        fontWeight: '700'
                                    }}>
                                    Search
                                </Text>
                                <View
                                    style={{
                                        height: 10
                                    }} />
                                {
                                    searchbook.length == 0
                                        ? (
                                            <View
                                                style={{
                                                    height: 100
                                                }}>
                                                <Text
                                                    style={{
                                                        color: '#909398',
                                                        fontSize: 16,
                                                        fontFamily: 'NanumSquareOTF_ac',
                                                        fontWeight: '400',
                                                        textAlign: 'center',
                                                        top: 40
                                                    }}>
                                                    No Book
                                                </Text>
                                            </View>
                                        )
                                        : (
                                            <FlatList
                                                data={searchbook}
                                                renderItem={({item, index}) => render_search_result(item, index)}/>
                                        )
                                }
                                <View
                                    style={{
                                        height: 20
                                    }}/>
                                <View
                                    style={{
                                        width: 362,
                                        backgroundColor: '#E6E9EE',
                                        height: 1,
                                        left: -7
                                    }}/>
                                <View
                                    style={{
                                        height: 31
                                    }}/>
                                <Text
                                    style={{
                                        color: '#6D6F75',
                                        fontSize: 20,
                                        fontFamily: 'NanumSquareOTF_ac',
                                        fontWeight: '700'
                                    }}>
                                    Recent
                                </Text>
                                <View
                                    style={{
                                        height: 15
                                    }} />
                                <FlatList
                                    data={data}
                                    renderItem={({ item, index }) => render_image(item, index)}
                                    />
                            </View>
                        )
                        : (
                            <View>
                                <View
                                    style={{
                                        left: 37
                                    }}>
                                    <View
                                        style={{
                                            height: 45
                                        }}/>
                                    <Text
                                        style={{
                                            color: '#387BFF',
                                            fontSize: 32,
                                            fontFamily: 'NanumSquareOTF_ac',
                                            fontWeight: '700'
                                        }}>Find your Books!</Text>
                                    <View
                                        style={{
                                            height: 12
                                        }}/>
                                    <Text
                                        style={{
                                            color: '#909398',
                                            fontSize: 16,
                                            fontFamily: 'NanumSquareOTF_ac',
                                            fontWeight: '400',
                                            height: 23
                                        }}>Find the favorite book for you</Text>
                                    <Text
                                        style={{
                                            color: '#909398',
                                            fontSize: 16,
                                            fontFamily: 'NanumSquareOTF_ac',
                                            fontWeight: '400'
                                        }}>in my 'Finding Book Taste' below!</Text>
                                    <View
                                        style={{
                                            height: 30
                                        }}/>
                                    <View
                                        style={{
                                            width: 362,
                                            backgroundColor: '#E6E9EE',
                                            height: 1,
                                            left: -21
                                        }}/>
                                </View>
                                <View
                                    style={{
                                        left: 30,
                                        top: 25
                                    }}>

                                    <View
                                        style={{
                                            width: 70,
                                            height: 30,
                                            borderRadius: 16,
                                            backgroundColor: "#387BFF"
                                        }}>
                                        <Text
                                            style={{
                                                color: '#F8FAFF',
                                                fontSize: 16,
                                                fontFamily: 'NanumSquareOTF_ac',
                                                fontWeight: '400',
                                                letterSpacing: 0.16,
                                                textAlign: 'center',
                                                top: 5
                                            }}>Types</Text>
                                    </View>

                                </View>
                            </View>
                        )
                }
            </View>
        </SafeAreaView>
    )
}

export default Search;