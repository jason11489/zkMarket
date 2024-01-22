import { Dimensions, StyleSheet } from "react-native";

let screenWidth = Dimensions
    .get('window')
    .width;
let screenHeight = Dimensions
    .get('window')
    .height;

export const Library_style = StyleSheet.create({
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
        left: 162,
        top: 12,
        width:71
    }, card_style: {
        left: 248,
        top: 17,
        width: 20,
        height:16,
    }, menu_style: {
        width: 30,
        height: 30,
        left: 263,
        top:10
    }
})