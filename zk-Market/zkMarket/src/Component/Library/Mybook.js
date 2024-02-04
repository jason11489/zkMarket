import { useState } from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { TabBar, TabView } from 'react-native-tab-view';
import { Mybook_style } from "../../CSS/Mybook_style";
import GradientText from "../../CSS/gradient_text";

const FirstRoute = ({data}) => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
        <View
            style={{
                width: 360,
                height: 316,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#909398',
                top: 30,
                left: 18
            }}>
            <Text
                style={{
                    color: '#010101',
                    fontSize: 15,
                    fontFamily: 'Noto Serif',
                    fontWeight: '500',
                    top: 35,
                    left: 20,
                    backgroundColor: 'rgba(255, 163, 35, 0.14)',
                    width: 255
                }}>
                "At once a celebration of music and
            </Text>
            <View style={{
                    height: 10
                }}/>
            <Text
                style={{
                    color: '#010101',
                    fontSize: 15,
                    fontFamily: 'Noto Serif',
                    fontWeight: '500',
                    top: 35,
                    left: 20,
                    backgroundColor: 'rgba(255, 163, 35, 0.14)',
                    width: 319
                }}>
                also a cautionary tale about legacy, privilege,
            </Text>
            <View style={{
                    height: 10
                }}/>
            <Text
                style={{
                    color: '#010101',
                    fontSize: 15,
                    fontFamily: 'Noto Serif',
                    fontWeight: '500',
                    top: 35,
                    left: 20,
                    backgroundColor: 'rgba(255, 163, 35, 0.14)',
                    width: 150
                }}>
                and creative genius."
            </Text>
            <View style={{
                    height: 55
                }}/>
            <GradientText
                style={{
                    color: 'black',
                    fontSize: 15,
                    fontFamily: 'NanumSquareOTF_ac',
                    fontWeight: '400',
                    left: 20,
                    width: 320
                }}>
                like this book very much, because the girl in this book is like me. First, she
                always asks her mother if she loves her or not. I always ask my mother how much
                she loves me. Next, she likes to play tricks. I also play tricks on my parents.
                So I like this book.{"\n"}
                An Inuit girl wondered if her mother loves her or not. So she asked her mother.
                “How much do you love me?” The girl wondered if her mother still loves her when
                she had annoyed her mother.
            </GradientText>

        </View>

    </View>
);

const SecondRoute = ({data}) => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
        <View
            style={{
                width: 360,
                height: 316,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#909398',
                top: 30,
                left: 18
            }}>
            <Text
                style={{
                    color: '#010101',
                    fontSize: 15,
                    fontFamily: 'Noto Serif',
                    fontWeight: '500',
                    top: 35,
                    left: 20,
                    backgroundColor: 'rgba(255, 163, 35, 0.14)',
                    width: 255
                }}>
                "At once a celebration of music and
            </Text>
            <View style={{
                    height: 10
                }}/>
            <Text
                style={{
                    color: '#010101',
                    fontSize: 15,
                    fontFamily: 'Noto Serif',
                    fontWeight: '500',
                    top: 35,
                    left: 20,
                    backgroundColor: 'rgba(255, 163, 35, 0.14)',
                    width: 319
                }}>
                also a cautionary tale about legacy, privilege,
            </Text>
            <View style={{
                    height: 10
                }}/>
            <Text
                style={{
                    color: '#010101',
                    fontSize: 15,
                    fontFamily: 'Noto Serif',
                    fontWeight: '500',
                    top: 35,
                    left: 20,
                    backgroundColor: 'rgba(255, 163, 35, 0.14)',
                    width: 150
                }}>
                and creative genius."
            </Text>
            <View style={{
                    height: 55
                }}/>
            <GradientText
                style={{
                    color: 'black',
                    fontSize: 15,
                    fontFamily: 'NanumSquareOTF_ac',
                    fontWeight: '400',
                    left: 20,
                    width: 320
                }}>
                like this book very much, because the girl in this book is like me. First, she
                always asks her mother if she loves her or not. I always ask my mother how much
                she loves me. Next, she likes to play tricks. I also play tricks on my parents.
                So I like this book.{"\n"}
                An Inuit girl wondered if her mother loves her or not. So she asked her mother.
                “How much do you love me?” The girl wondered if her mother still loves her when
                she had annoyed her mother.
            </GradientText>

        </View>

    </View>
);

const ThirdRoute = () => (
    <View
        style={{
            flex: 1,
            backgroundColor: 'white'
        }}>
        <View
            style={{
                width: 360,
                height: 316,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#909398',
                top: 30,
                left: 18
            }}>
            <Text
                style={{
                    color: '#010101',
                    fontSize: 15,
                    fontFamily: 'Noto Serif',
                    fontWeight: '500',
                    top: 35,
                    left: 20,
                    backgroundColor: 'rgba(255, 163, 35, 0.14)',
                    width: 255
                }}>
                "At once a celebration of music and
            </Text>
            <View style={{
                    height: 10
                }}/>
            <Text
                style={{
                    color: '#010101',
                    fontSize: 15,
                    fontFamily: 'Noto Serif',
                    fontWeight: '500',
                    top: 35,
                    left: 20,
                    backgroundColor: 'rgba(255, 163, 35, 0.14)',
                    width: 319
                }}>
                also a cautionary tale about legacy, privilege,
            </Text>
            <View style={{
                    height: 10
                }}/>
            <Text
                style={{
                    color: '#010101',
                    fontSize: 15,
                    fontFamily: 'Noto Serif',
                    fontWeight: '500',
                    top: 35,
                    left: 20,
                    backgroundColor: 'rgba(255, 163, 35, 0.14)',
                    width: 150
                }}>
                and creative genius."
            </Text>
            <View style={{
                    height: 55
                }}/>
            <GradientText
                style={{
                    color: 'black',
                    fontSize: 15,
                    fontFamily: 'NanumSquareOTF_ac',
                    fontWeight: '400',
                    left: 20,
                    width: 320
                }}>
                like this book very much, because the girl in this book is like me. First, she
                always asks her mother if she loves her or not. I always ask my mother how much
                she loves me. Next, she likes to play tricks. I also play tricks on my parents.
                So I like this book.{"\n"}
                An Inuit girl wondered if her mother loves her or not. So she asked her mother.
                “How much do you love me?” The girl wondered if her mother still loves her when
                she had annoyed her mother.
            </GradientText>

        </View>

    </View>
);

// const renderScene = SceneMap(     {first: FirstRoute, second: SecondRoute,
// third: ThirdRoute} );

const renderScene = ({route}) => {
    switch (route.key) {
        case "first":
            return <FirstRoute data={route}/>;
        case "second":
            return <SecondRoute/>;
        case "third":
            return <ThirdRoute/>;
        default:
            return null;
    }
};

function Mybook({navigation, route}) {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: 'first',
            title: 'Memo / Highlight'
        }, {
            key: 'second',
            title: 'Statistics'
        }, {
            key: 'third',
            title: 'Review'
        }
    ]);

    console.log(Object.keys(route.params))
    // console.log(route.params)

    const renderLabel = ({route}) => {
        return (
            <View>
                <Text
                    style={{
                        backgroundColor: 'black'
                    }}>
                    {route.title}
                </Text>
            </View>
        )
    }

    return (
        <SafeAreaView style={Mybook_style.container}>
            <View style={{
                    height: 11
                }}/>
            <View style={{
                    flexDirection: 'row'
                }}>
                <TouchableOpacity onPress={() => navigation.navigate("Library_2")}>
                    <Image
                        style={Mybook_style.arrow_back}
                        source={require("../../image/Library/arrow_back_ios.png")}/>
                </TouchableOpacity>
                <Text style={Mybook_style.header_text}>Library</Text>
            </View>
            <View style={{
                    height: 28
                }}/>
            <View style={{
                    flexDirection: 'row'
                }}>
                <Image
                    style={Mybook_style.image}
                    source={{
                        uri: `data:image/png;base64,${route.params.image_data}`
                    }}/>
                <View style={{
                        paddingLeft: 50
                    }}>
                    <View
                        style={{
                            flexDirection: 'row'
                        }}>
                        <View style={Mybook_style.book_type_back}>
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 12,
                                    fontFamily: 'Pretendard',
                                    fontWeight: '400',
                                    textAlign: 'center'
                                }}>
                                {route.params.book_type_1}
                            </Text>
                        </View>
                        <View
                            style={{
                                width: 40,
                                height: 17,
                                borderRadius: 64,
                                borderWidth: 1,
                                borderColor: '#F3981A',
                                top: 9,
                                left: 10,
                                flexDirection: 'row'
                            }}>
                            <Image
                                style={{
                                    top: 2,
                                    left: 3
                                }}
                                source={require("../../image/Library/Star_2.png")}/>
                            <Text
                                style={{
                                    color: '#F3981A',
                                    fontSize: 12,
                                    fontFamily: 'Pretendard',
                                    fontWeight: '600',
                                    left: 5
                                }}>4.6</Text>
                        </View>
                    </View>
                    <Text style={Mybook_style.book_name}>{route.params.title}</Text>
                    <Text style={Mybook_style.author}>{route.params.author}</Text>
                    <Text style={Mybook_style.read_text}>Read now</Text>
                    <TouchableOpacity
                        onPress={() => {
                            console.log("go read")
                            navigation.navigate("ReadBook",route.params)
                        }}>

                        <View
                            style={{
                                width: 30,
                                height: 30,
                                top: 90,
                                left: 167,
                                backgroundColor: 'black',
                                borderRadius: 999
                            }}/>
                        <View
                            style={{
                                shadowColor: '#000',
                                shadowOpacity: 0.25,
                                shadowRadius: 5,
                                shadowOffset: {
                                    height: 2,
                                    width: 0
                                }
                            }}>
                            <Image
                                style={Mybook_style.goread}
                                source={require("../../image/Library/goread.png")}/>
                        </View>
                    </TouchableOpacity>

                </View>
            </View>
            <View style={{
                    height: 30
                }}/>

            <TabView
                navigationState={{
                    index,
                    routes
                }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{
                    width: '100%'
                }}
                renderTabBar={props => (
                    <TabBar
                        {...props}
                        indicatorStyle={{
                            backgroundColor: "#387BFF",
                            borderRadius: 2,
                            width: 110,
                            height: 2,
                            left: 11
                        }}
                        contentContainerStyle={{
                            justifyContent: "center"
                        }}
                        style={{
                            top: 10,
                            backgroundColor: "white",
                            shadowColor: 'rgba(137.28, 137.28, 137.28, 0.25)',
                            shadowOpacity: 0.8,
                            shadowRadius: 5,
                            shadowOffset: {
                                height: -3,
                                width: 10
                            },
                            height: 48,
                            borderBottomColor: 'gray'
                            // shadowColor: "transparent",

                        }}
                        pressColor={"transparent"}
                        renderLabel={({route, focused, color}) => (
                            <Text
                                style={{
                                    color: '#232323',
                                    fontSize: 14,
                                    fontFamily: 'NanumSquareOTF_ac',
                                    fontWeight: '500',
                                    width: 150,
                                    textAlign: 'center'
                                }}>
                                {route.title}
                            </Text>
                        )}/>
                )}/>
        </SafeAreaView>
    );
}

export default Mybook;