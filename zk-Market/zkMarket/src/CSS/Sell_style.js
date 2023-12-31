import { Dimensions, StyleSheet } from "react-native";

let screenWidth = Dimensions
    .get('window')
    .width;
let screenHeight = Dimensions
    .get('window')
    .height;

export const Sell_style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        backdropFilter: 'blur(3px)',
        position: 'absolute',
        top: 60
    },
    first_line: {
        top: 10,
        flexDirection: 'row',
        left: 28
    },
    back: {
        width: 24,
        height: 24
    },
    des_sell: {
        flexDirection: 'col',
        top: 43,
        left: 50
    },
    des_text: {
        color: 'black',
        fontSize: 32,
        fontFamily: 'Pretendard',
        fontWeight: '600'
    },
    des_text_2: {
        color: '#6D6F75',
        fontSize: 18,
        fontFamily: 'Pretendard',
        fontWeight: '400',
        top: 10
    },
    publish_book: {
        // width: 361,
        // height: 53,
        // backgroundColor: '#387BFF',
        // // backgroundColor:'transparent',
        // borderRadius: 6.05,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'inline-flex',
        // left: 17,
        top: 510
    },
    button_style: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18.14,
        fontFamily: 'Pretendard',
        fontWeight: '700',
        lineHeight: 19.65,
        top : 15
    },
    gif_img: {
        flex: 1,
        // left:8,
        width: 400,
        height: '90%',
        backgroundColor: 'transparent',
        backdropFilter: 'blur(3px)',
        position: 'absolute',
        left: -10
    },
    slide_bar: {
        backgroundColor: '#E6E9EE',
        borderRadius: 2,
        width: 74,
        height: 4,
        left: 108,
        top: 8
    },
    slide_bar_2: {
        backgroundColor: '#6397FF',
        borderRadius: 2,
        left: 35,
        top: 8,
        width: 37,
        height: 4
    },
    first_view: {
        flex: 1,
        width: screenWidth,
        height: screenHeight
    },
    second_view: {
        flex: 1,
        width: screenWidth,
        height: screenHeight
    },
    library_text: {
        width: 67,
        height: 24,
        left: 162,
        top : 28,
        color: '#232323',
        fontSize: 20,
        fontFamily: 'Pretendard',
        fontWeight: '500',
        letterSpacing: 0.16,
    },
    tab_style: {
        // top : 58,
        
    }
})