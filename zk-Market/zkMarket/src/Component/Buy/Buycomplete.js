import { SafeAreaView } from "react-native";

import { React } from "react";
import { buy_book } from "../../CSS/Buy_style";

function Buycomplete({navigation, route}) {

    console.log(Object.keys(route.params))


    return (
        <SafeAreaView style={buy_book.container}>
            <Text>lfjadk;</Text>
        </SafeAreaView>
    );
}

export default Buycomplete;