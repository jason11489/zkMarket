import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Library from "../../Screens/Library";

const Publish = createStackNavigator();

function LibraryStackScreen() {
    return (
        <Publish.Navigator
            initialRouteName="Library_2"
            screenOptions={{headerShown : false}}
        >
            <Publish.Screen name="Library_2" component={Library} />
        </Publish.Navigator>
    );
};


export default LibraryStackScreen;