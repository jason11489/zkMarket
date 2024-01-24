import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from "../../Screens/Home";
import Buy_book from "../Buy/Buy_book";
import Book_flat from "./Book_flat";

const Homestack = createStackNavigator();

function HomeStackScreen() {
    return (
        <Homestack.Navigator
            initialRouteName="Home_2"
            screenOptions={{headerShown : false}}
        >
            <Homestack.Screen name="Home_2" component={Home} />
            <Homestack.Screen name="Book_flat" component={Book_flat} />
            <Homestack.Screen name="Buy_book" component={Buy_book} />

        </Homestack.Navigator>
    );
};


export default HomeStackScreen;