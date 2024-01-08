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
import Sell from './src/Screens/Sell';

const Stack = createStackNavigator();

// useEffect(() => {   setImmediate(() => {     SplashScreen.hide();   }, 1000)
// })

const Tab = createBottomTabNavigator();

function App() {

    return (
        <NavigationContainer>
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
                        shadowOpacity: 0.18,
                        shadowRadius: 7
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
                    headerShown: false
                })
}>
                <Tab.Screen name="Home" component={Home}/>
                <Tab.Screen name="Search" component={Search}/>
                <Tab.Screen name="Sell" component={Sell}/>
                <Tab.Screen name="Library" component={Library}/>

            </Tab.Navigator>
        </NavigationContainer>

    );
}

export default App;
