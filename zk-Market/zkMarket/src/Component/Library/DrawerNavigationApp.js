import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';

function HomeScreen({navigation}) {
    return (<View>
        <Text>Home</Text>
    </View>);
}

function SettingScreen({navigation}) {
    return (<View>
        <Text>Setting</Text>
    </View>);
}
const Drawer = createDrawerNavigator();

function DrawerNavigationApp() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Setting" component={SettingScreen}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigationApp;