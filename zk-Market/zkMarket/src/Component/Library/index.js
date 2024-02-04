import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Library from "../../Screens/Library";
import Mybook from "./Mybook";
import ReadBook from "./ReadBook";

const Publish = createStackNavigator();

function LibraryStackScreen() {
    return (
        <Publish.Navigator
            initialRouteName="Library_2"
            screenOptions={{headerShown : false}}
        >
            <Publish.Screen name="Library_2" component={Library} />
            <Publish.Screen name="Mybook" component={Mybook} />
            <Publish.Screen name="ReadBook" component={ReadBook} />
        </Publish.Navigator>
    );
};


export default LibraryStackScreen;