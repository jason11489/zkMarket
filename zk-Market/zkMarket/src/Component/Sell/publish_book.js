import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Sell from "../../Screens/Sell";
import Basic_information from "./Basic_information";
import Book_price from "./book_price";
import Book_type from "./book_type";
import Complete from "./complete";
import Description_book from "./description_book";
import Upload_book from "./upload_book";



const Publish = createStackNavigator();

function PublishStackScreen() {
    return (
        <Publish.Navigator
            initialRouteName="Sell_2"
            screenOptions={{headerShown : false}}
        >
            <Publish.Screen name="Sell_2" component={Sell} />
            <Publish.Screen name="Basic_information" component={Basic_information} />
            <Publish.Screen name="Book_price" component={Book_price} />
            <Publish.Screen name="Book_type" component={Book_type} />
            <Publish.Screen name="Description_book" component={Description_book} />
            <Publish.Screen name="Upload_book" component={Upload_book} />
            <Publish.Screen name="Complete" component={Complete}/>
        </Publish.Navigator>
    );
};


export default PublishStackScreen;