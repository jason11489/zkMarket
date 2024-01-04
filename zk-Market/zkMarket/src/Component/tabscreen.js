import * as React from 'react';
import { Image, StyleSheet } from 'react-native';

styles = StyleSheet.create({
    Home: {
        width: 18.14,
        height: 18.26
    },
    Search: {
        width: 17.15,
        height: 17.15
    },
    Sell: {
        width: 16.12,
        height: 18.14
    },
    Library: {
        width: 18.89,
        height: 18.89
    }
});

const TabBarIcon = (focused, name) => {
    let iconImagePath;
    let iconName;

    if (name == 'Home') {
        iconImagePath = focused
            ? require('../image/home_blue.png')
            : require('../image/home.png');
        return (<Image style={styles.Home} source={iconImagePath}/>);
    } else if (name == 'Search') {
        iconImagePath = focused
            ? require('../image/Search_blue.png')
            : require('../image/Search.png');
        return (<Image style={styles.Search} source={iconImagePath}/>);
    } else if (name == 'Sell') {
        iconImagePath = focused
            ? require('../image/Sell_blue.png')
            : require('../image/Sell.png');
        return (<Image style={styles.Sell} source={iconImagePath}/>);
    } else if (name == 'Library') {
        iconImagePath = focused
            ? require('../image/Library_blue.png')
            : require('../image/Library.png');
        return (<Image style={styles.Library} source={iconImagePath}/>);
    }
};

export default TabBarIcon;