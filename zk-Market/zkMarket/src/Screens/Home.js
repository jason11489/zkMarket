import React from "react";
import { Button, Text, View } from "react-native";

function Home({ navigation }) {
    return (
        <View>
            <Text>Home!</Text>
            <Button
                title="Go to Login"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    );
}

export default Home;