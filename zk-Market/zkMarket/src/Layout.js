import { Button, View } from 'react-native';


const Layout = () => {
    const next = () => {
    console.log("button");
}

    return (
        <View>
            <Button title="next page"
                color="#2c2c2c"
                onPress={next} />
        </View>
    );
};

export default Layout;