import { Dimensions, StyleSheet } from "react-native";

let screenWidth = Dimensions
    .get('window')
    .width;
let screenHeight = Dimensions
    .get('window')
    .height;

export const Bestseller_style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title_style: {
        color: '#232323',
        fontSize: 20,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '700',
        letterSpacing: 0.16,
        left: 122,
        top: 12,
        textAlign: 'center'
    },
    card_style: {
        left: 215,
        top: 17,
        width: 20,
        height: 16
    },
    menu_style: {
        width: 30,
        height: 30,
        left: 263,
        top: 10
    },
    flat_list: {
        margin: 13
    },
    render_img: {
        width: 93,
        height: 139,
        borderRadius: 5,
        left: 10,
        margin: 4
    },
    image_shadow_white: {
        shadowColor: 'white',
        shadowOpacity: 0.25,
        shadowRadius: 4,
        shadowOffset: {
            height: 7,
            width: -7
        }
    },
    image_shadow: {
        shadowColor: '#000',
        shadowOpacity: 0.25,
        shadowRadius: 5,
        shadowOffset: {
            height: 2,
            width: 0
        }
    },
    author_style: {
        color: '#232323',
        fontSize: 14,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        top: 2,
        justifyContent: 'center',
        width: 93,
        textAlign: 'center',
        left: 17
    },
    publisher_style: {
        color: '#909398',
        fontSize: 12,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        textAlign: 'center',
        left: 17,
        width: 93
    },
    price_style: {
        color: '#232323',
        fontSize: 14,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '700',
        top: 4,
        left: 8
    },
    BestSeller_box: {
        width: 393,
        height: 230,
        backgroundColor:'#F8FAFF'
    }
})