import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import * as React from 'react';

// import { useEffect } from 'react'; import SplashScreen from
// 'react-native-splash-screen';

import TabBarIcon from './src/Component/tabscreen';
import Search from './src/Screens/Search';

const Stack = createStackNavigator();

import HomeStackScreen from './src/Component/Home';
import LibraryStackScreen from './src/Component/Library';
import PublishStackScreen from './src/Component/Sell/publish_book';

import { Linking } from 'react-native';

export const Tab = createBottomTabNavigator();

function App() {
    
    const config = {
        screens: {
            Home: {
                screens: {
                    Book_flat: '/book_flat',
                    Buy_book: '/buy_book',
                    RegisterDone: '/registerDone/:userENA/:userEOA/:pk_own/:pk_enc/:userSk/:privateKey',
                    Buycomplete : '/buycomplete/:image_data/:Title/:Author'
                }
            },
            Search: '/search',
            Sell: {
                screens: {
                    Basic_information: '/Basic_information',
                    Book_price: '/Book_price',
                    Book_type: '/Book_type',
                    Description_book: '/Description_book',
                    Upload_book: '/Upload_book',
                    Complete: '/Complete'
                }
            },
            Library: {
                screens: {
                    Library: '/Library'
                }
            }
        }
    }
    const linking = {
        prefixes: ['zkmarketv2://'],
        async getInitialURL() {
            const url = await Linking.getInitialURL();
            // if (url != null) {     return null; }
            return url;
        },
        subscribe(listener) {
            console.log('linking subscribe to ', listener);
            const onReceiveURL = (event) => {
                const {url} = event;
                console.log('link has url', url, event);
                return listener(url);
            };
            Linking.addEventListener('url', onReceiveURL);
            return() => {
                console.log('linking unsubscribe to ', listener);
                // Linking.removeEventListener('url', onReceiveURL);
            };
        },
        config
    }

    return (
        <NavigationContainer linking={linking}>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({route}) => ({
                    tabBarLabel: route.name,
                    tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
                    tabBarActiveBackgroundColor: '#FFF',
                    tabBarIconStyle: {
                        width: '50%',
                        height: '100%',
                        position: 'absolute'
                    },
                    tabBarStyle: {
                        height: 95.7,
                        display: route.name == "Sell"
                            ? 'none'
                            : 'flex',
                        shadowColor: 'gray',
                        shadowOpacity: 0.25,
                        shadowRadius: 4,
                        shadowOffset: {
                            height: -4,
                            width: -4
                        }
                    },
                    // tabBarActiveTintColor: "#0055FF", inactiveTintColor: "#232323",
                    tabBarLabelStyle: {
                        fontSize: 12.09,
                        fontFamily: 'NanumSquareOTF_ac',
                        fontWeight: '700',
                        marginBottom: 0,
                        position: 'absolute'
                    },
                    headerShown: false
                })}>
                <Tab.Screen name="Home" component={HomeStackScreen}/>
                <Tab.Screen name="Search" component={Search}/>
                <Tab.Screen name="Sell" component={PublishStackScreen}/>
                <Tab.Screen name="Library" component={LibraryStackScreen}/>
            </Tab.Navigator>
        </NavigationContainer>

    );
}

export default App;
