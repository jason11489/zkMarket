import { Dimensions, StyleSheet } from "react-native";

let screenWidth = Dimensions
    .get('window')
    .width;
let screenHeight = Dimensions
    .get('window')
    .height;

export const Publish_style = StyleSheet.create({
    container: {
        flex: 1,
        width: screenWidth,
        height: screenHeight,
        backgroundColor: 'white'
    },
    first_line: {
        top: 10,
        flexDirection: 'row'
    },
    second_line: {
        top: 20,
        flexDirection: 'row',
        left: 61,
        height: 30
    },
    first_line_text: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        lineHeight: 22.40,
        left: 133,
        // width: 128, height:22,
    },
    x_back: {
        width: 28,
        height: 28,
        left: 217,
        top: -2
    },
    first_line_text_2: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        lineHeight: 22.40,
        left: 109,
        // width: 128, height:22,
    },
    x_back_2: {
        width: 28,
        height: 28,
        left: 183,
        top: -2
    },
    slide_bar: {
        backgroundColor: '#E6E9EE',
        borderRadius: 2,
        width: 272,
        height: 4
    },
    slide_bar_1: {
        backgroundColor: '#6397FF',
        borderRadius: 2,
        width: 54,
        height: 4,
        left: -272,
    },
    slide_bar_2: {
        backgroundColor: '#6397FF',
        borderRadius: 2,
        width: 108,
        height: 4,
        left: -272
    },
    slide_bar_3: {
        backgroundColor: '#6397FF',
        borderRadius: 2,
        width: 162,
        height: 4,
        left: -272
    },
    slide_bar_4: {
        backgroundColor: '#6397FF',
        borderRadius: 2,
        width: 216,
        height: 4,
        left: -272
    },
    slide_bar_5: {
        backgroundColor: '#6397FF',
        borderRadius: 2,
        width: 272,
        height: 4,
        left: -272
    },
    next_button: {
        // width: 361,
        // height: 53,
        // backgroundColor: '#387BFF',
        // borderRadius: 6.05,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex',
        top: 120
    },
    Touchable: {
        width: 361,
        height: 53,
        backgroundColor: '#387BFF',
        borderRadius: 6.05
    },
    button_style: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18.14,
        fontFamily: 'Pretendard',
        fontWeight: '700',
        lineHeight: 19.65,
        top:15
    },
    page_num: {
        color: '#6D6F75',
        fontSize: 14,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        textTransform: 'uppercase',
        letterSpacing: 3,
        left: 182
    },
    back: {
        width: 24,
        height: 24,
        left: 20
    }
})