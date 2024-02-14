import { StyleSheet } from "react-native";

export const Search_stytle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    Scroll_style: {
        backgroundColor: 'white'
    },
    first_line: {
        // width: '100%',
        // height: '100%',
        top : 10,
        position: 'relative',
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        // display: 'inline-flex',
        left: 28
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
        left: 219
    },
    Search_book: {
        top:30,
        // width: '100%',
        // height: '100%',
        flexDirection: 'row',
        // justifyContent: 'flex-start',
        // alignItems: 'flex-start',
        // display: 'inline-flex',
        left: 9
    },
    Seacrh_background: {
        width: 352,
        height: 44,
        left: 11,
        backgroundColor: '#F8FAFF',
        borderRadius: 22,
        // overflow: 'hidden',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        // display: 'inline-flex'
    },
    Search_icon: {
        width: 24,
        height: 24,
        left: -320,
        top: 10
    },
    Search_bar: {
        backgroundColor: 'transparent',
        left: -300,
        top: 10,
        width: 260,
        height: 24,
        fontSize: 14,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '700'
    },
    last_line: {
        // width: '100%',
        // height: '100%',
        top:40,
        position: 'relative',
        flex:1
    },
    img: {
        left : -10,
        width: 410,
        height: 590,
        top:-10,
        position: 'relative',
        flex:1
    },flat_list: {
        margin: 13,
        flexDirection: 'row',
        // height:100
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
    render_img: {
        width: 60,
        height: 81,
        borderRadius: 5
    },

})