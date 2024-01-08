import * as React from 'react';
import { Image, StyleSheet, View } from 'react-native';

styles = StyleSheet.create({
    Home: {
        width: 24,
        height: 25,
        // position: 'absolute',
        top: 0
    },
    rectangle: {
        width: 10,
        height: 10,
        backgroundColor: "red",
        top: 22
    },
    Search: {
        width: 19.15,
        height: 19.15,
        // position: 'absolute',
        top: -2
    },
    Sell: {
        width: 24.18,
        height: 24.18,
        // position: 'absolute',
        top: 0
    },
    Library: {
        width: 25.19,
        height: 25.19,
        // position: 'absolute',
        top: 0
    },
    rectangle: {
        width: 50.46,
        height: 3.03,
        backgroundColor: '#0055FF',
        borderRadius: 2.02,
        position: 'absolute',
        top: -22,
        left: -14
    }, search_rectangle: {
        width: 50.46,
        height: 3.03,
        backgroundColor: '#0055FF',
        borderRadius: 2.02,
        position: 'absolute',
        top: -24,
        left: -17
    }
});

const TabBarIcon = (focused, name) => {
    let iconImagePath;
    let iconName;

    if (name == 'Home') {
        iconImagePath = focused
            ? require('../image/home_blue.png')
            : require('../image/home.png');
        if (focused) {
            return (
                <View><View style={styles.rectangle}/><Image style={styles.Home} source={iconImagePath}/></View>
            );
        } else {
            return (<Image style={styles.Home} source={iconImagePath}/>)
        }
    } else if (name == 'Search') {
        iconImagePath = focused
            ? require('../image/Search_blue.png')
            : require('../image/Search.png');
        if (focused) {
            return (
                <View><View style={styles.search_rectangle}/><Image style={styles.Search} source={iconImagePath}/></View>
            );
        } else {
            return (<Image style={styles.Search} source={iconImagePath}/>)
        }
    } else if (name == 'Sell') {
        iconImagePath = focused
            ? require('../image/Sell_blue.png')
            : require('../image/Sell.png');
        if (focused) {
            return (
                <View><View style={styles.rectangle}/><Image style={styles.Sell} source={iconImagePath}/></View>
            );
        } else {
            return (<Image style={styles.Sell} source={iconImagePath}/>)
        }
    } else if (name == 'Library') {
        iconImagePath = focused
            ? require('../image/Library_blue.png')
            : require('../image/Library.png');
        if (focused) {
            return (
                <View><View style={styles.rectangle}/><Image style={styles.Library} source={iconImagePath}/></View>
            );
        } else {
            return (<Image style={styles.Library} source={iconImagePath}/>)
        }
    }
};

export default TabBarIcon;