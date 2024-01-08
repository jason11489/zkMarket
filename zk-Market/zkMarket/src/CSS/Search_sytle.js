import { StyleSheet } from "react-native";

export const Search_stytle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    Scroll_style: {
        backgroundColor: 'white'
    },
    first_line: {
        width: '100%',
        height: '100%',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        display: 'inline-flex',
        left : 28
    },
    zkMarket_text: {
        width: 93,
        height: 22,
        color: '#6397FF',
        fontSize: 20,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '700',
        letterSpacing: 0.80
    },
    shopping_bag: {
        width: 24,
        height: 24,
        left : 219
    }

})