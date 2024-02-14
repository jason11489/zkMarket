import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from "../../Screens/Home";
import Bestseller from "../Buy/Bestseller";
import Buy_book from "../Buy/Buy_book";
import Buycomplete from "../Buy/Buycomplete";
import RegisterDone from "../Login/RegisterDone";
import RegisterUser from "../Login/RegisterUser";

const Homestack = createStackNavigator();

function HomeStackScreen() {
    return (
        <Homestack.Navigator
            initialRouteName="Home_2"
            screenOptions={{
                headerShown: false,
                if(_route = "Buy_book") {
                    this.tabBarStyle.display='none'
                }
            }}>
            <Homestack.Screen name="Home_2" component={Home}/>
            <Homestack.Screen name="Buy_book" component={Buy_book} />
            <Homestack.Screen name="Buycomplete" component={Buycomplete}/>
            <Homestack.Screen name="RegisterUser" component={RegisterUser}/>
            <Homestack.Screen name="RegisterDone" component={RegisterDone} />
            <Homestack.Screen name="Bestseller" component={Bestseller} />
        </Homestack.Navigator>
    );
};

export default HomeStackScreen;