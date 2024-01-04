import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import * as React from 'react';
import { Image } from 'react-native';

// import { useEffect } from 'react'; import SplashScreen from
// 'react-native-splash-screen';

import Home from './src/Screens/Home';
import Library from './src/Screens/Library';
import Search from './src/Screens/Search';
import Sell from './src/Screens/Sell';

const Stack = createStackNavigator();

// useEffect(() => {   setImmediate(() => {     SplashScreen.hide();   }, 1000)
// })

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
    let iconImagePath;

    if (name == 'Home') {
        iconImagePath = require('./src/image/home.png');
    } else if (name == 'Search') {
        iconImagePath = require('./src/image/Search.png');
    } else if (name == 'Sell') {
        iconImagePath = require('./src/image/Sell.png');
    } else if (name == 'Library') {
        iconImagePath = require('./src/image/Library.png');
    }
    return (
        <Image
            style={{
                width: 25,
                height: 26,
          viewBox: "0 0 25 26",
                fill : "none",
            }}
            source={iconImagePath}/>
    );
};

function App() {

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Home'
                screenOptions={({route}) => ({
                    tabBarLabel: route.name,
                    tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
                  tabBarActiveBackgroundColor: '#FFF',

                    tabBarLabelStyle: {
                        color: '#232323',
                        fontSize: 12.09,
                        fontFamily: 'NanumSquareOTF_ac',
                        fontWeight: '700',
                      wordWrap: 'break-word',
                        width : 393,
                    }
                })}>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Search" component={Search}/>
                <Tab.Screen name="Sell" component={Sell}/>
                <Tab.Screen name="Library" component={Library}/>

            </Tab.Navigator>
        </NavigationContainer>

    );
}

export default App;
