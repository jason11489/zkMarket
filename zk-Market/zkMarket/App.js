import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import * as React from 'react';

// import { useEffect } from 'react'; import SplashScreen from
// 'react-native-splash-screen';

import TabBarIcon from './src/Component/tabscreen';
import Home from './src/Screens/Home';
import Library from './src/Screens/Library';
import Search from './src/Screens/Search';

const Stack = createStackNavigator();

import PublishStackScreen from './src/Component/Sell/publish_book';

// useEffect(() => {   setImmediate(() => {     SplashScreen.hide();   }, 1000)
// })

const Tab = createBottomTabNavigator();

function App() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({ route }) => ({
                    tabBarLabel: route.name,
                    tabBarIcon: ({ focused }) => TabBarIcon(focused, route.name),
                    tabBarActiveBackgroundColor: '#FFF',
                    tabBarIconStyle: {
                        width: '50%',
                        height: '100%',
                        position: 'absolute'
                    },
                    tabBarStyle: {
                        height: 95.7,
                        shadowOpacity: 0.18,
                        shadowRadius: 7,
                        display: route.name == "Sell" ? 'none': 'flex'
                    },
                    tabBarActiveTintColor: "#0055FF",
                    inactiveTintColor: "#232323",
                    tabBarLabelStyle: {
                        fontSize: 12.09,
                        fontFamily: 'NanumSquareOTF_ac',
                        fontWeight: '700',
                        marginBottom: 0,
                        position: 'absolute'
                    },
                    headerShown: false,
                    if(_route = "Sell") {
                        this.tabBarStyle.display = 'none'
                    }
                })}>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Search" component={Search}/>
                <Tab.Screen name="Sell" component={PublishStackScreen}/>
                <Tab.Screen name="Library" component={Library}/>
            </Tab.Navigator>
        </NavigationContainer>

    );
}

export default App;
