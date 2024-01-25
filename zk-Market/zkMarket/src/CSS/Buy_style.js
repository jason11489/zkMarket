import { StyleSheet } from "react-native";

export const buy_book = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    first_line: {
        top: 10,
        flexDirection: 'row',
        left: 28,
        width: "100%"
    },
    back: {
        width: 24,
        height: 24
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
    heart: {
        width: 21,
        height: 19,
        left: 145
    },
    bag: {
        width: 18,
        height: 23,
        left: 175,
        top: -3
    },
    Best_seller: {
        backgroundColor: '#387BFF',
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        display: 'inline-flex',
        height: 25,
        width: 82,
        left: 113
    },
    star: {
        backgroundColor: 'white',
        borderRadius: 64,
        borderColor: '#F3981A',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        display: 'inline-flex',
        height: 25,
        width: 52,
        left: 147,
        flexDirection: 'row'
    },
    book_cover: {
        width: 169,
        height: 249,
        top: 6,
        left: 111,
        borderRadius: 8
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
    title: {
        color: '#232323',
        fontSize: 24,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '800',
        lineHeight: 33.60,
        height: 43,
        top: 21,
        textAlign: 'center',
        width: "100%"
    },
    author: {
        color: '#6D6F75',
        fontSize: 14,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        lineHeight: 19.60,
        top: 17,
        textAlign: 'center',
        width: "100%",
        height: 23
    },
    price: {
        color: '#387BFF',
        fontSize: 20,
        fontFamily: 'Noto Serif',
        fontWeight: '600',
        textTransform: 'uppercase',
        textAlign: 'center',
        width: "100%",
        top: 20
    },
    info: {
        backgroundColor: '#F8FAFF',
        borderRadius: 8,
        flexDirection: 'row',
        width: 360,
        height: 85,
        textAlign: 'center',
        left: 19
    },
    info_text: {
        color: '#909398',
        fontSize: 12,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        top: 20,
        textAlign: 'center'
    },
    info_text_2: {
        color: '#232323',
        fontSize: 14,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '700',
        textAlign: 'center',
        top: 25
    },
    line: {
        backgroundColor: '#C7C8CC',
        height: 42,
        width: 1,
        top: 21
    },
    keyword: {
        color: '#232323',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '700'
    },
    keyword_circle: {
        borderRadius: 64,
        borderColor: '#387BFF',
        width: 118,
        height: 25,
        borderWidth: 1,
        backgroundColor: 'white',
        left: 20
    },
    keyword_text: {
        color: '#387BFF',
        fontSize: 14,
        fontFamily: 'Pretendard',
        fontWeight: '400',
        textAlign: 'center',
        top:2
    }
})