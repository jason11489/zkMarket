import { StyleSheet } from "react-native";
export const home_styles = StyleSheet.create({
    scrollViewContainer: {
        // flexGrow: 1,
        backgroundColor: 'white',
        flex: 1
    },
    container: {
        flex: 1
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: 607,
        backgroundColor: 'rgba(0, 0, 0, 0.70)',
        backdropFilter: 'blur(3px)',
        position: 'absolute'
    },
    slider: {
        height: 607,
        slideCount: 4
    },
    shopping: {
        width: 24,
        height: 24,
        position: 'absolute',
        right: 19,
        top: 62
    },
    yellow_dot: {
        width: 10,
        height: 10,
        right: 18,
        top: 62,
        backgroundColor: '#FFA323',
        borderRadius: 101.25,
        position: 'absolute'
    },
    zkMarket_text: {
        width: 93,
        height: 22,
        color: 'white',
        fontSize: 20,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '700',
        letterSpacing: 0.80,
        left: 28,
        top: 64,
        position: 'absolute'
    },
    Today_Special: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        position: 'absolute'
    },
    Today_Special_circle: {
        left: 27,
        top: 130,
        width: 116,
        height: 23,
        // paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        position: 'absolute',
        backgroundColor: 'transparent',
        borderColor: 'white',
        borderWidth: 1
    },
    text_3: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '700',
        left: 27,
        top: 165,
        position: 'absolute'
    },
    text_4: {
        color: '#F8FAFF',
        fontSize: 14,
        fontFamily: 'Noto Serif',
        fontWeight: '600',
        position: 'absolute',
        right:145,
        top: 335
    },
    text_5: {
        color: '#909398',
        fontSize: 12,
        fontFamily: 'Noto Serif',
        fontWeight: '400',
        position: 'absolute',
        right: 143,
        top: 355
    },
    rate: {
        textAlign: 'right',
        color: '#F8FAFF',
        fontSize: 14,
        fontFamily: 'Noto Serif',
        fontWeight: '400',
        position: 'absolute',
        left: 230,
        top: 374
    },
    star_1: {
        width: 11.03,
        height: 10.49,
        position: 'absolute',
        left: 172,
        top: 378
    },
    star_2: {
        width: 11.03,
        height: 10.49,
        position: 'absolute',
        left: 183.6,
        top: 378
    },
    star_3: {
        width: 11.03,
        height: 10.49,
        position: 'absolute',
        left: 195.2,
        top: 378
    },
    star_4: {
        width: 11.03,
        height: 10.49,
        position: 'absolute',
        left: 206.8,
        top: 378
    },
    star_5: {
        width: 6,
        height: 11,
        position: 'absolute',
        left: 218,
        top: 378
    },
    bookcover_3: {
        borderRadius: 5,
        position: 'absolute',
        left: 300,
        top: 170,
        width: 240,
        height: 338,
    },
    bookcover_4: {
        borderRadius: 5,
        position: 'absolute',
        left: 269,
        top: 201,
        width: 240,
        height: 338,
    },
    bookcover_5: {
        borderRadius: 5,
        position: 'absolute',
        left: 339,
        top: 141,
        width: 240,
        height: 338,
    },
    bestseller_text: {
        color: '#232323',
        fontSize: 24,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        position: 'absolute',
        left: 16,
        top: 632
    },
    text_6: {
        textAlign: 'right',
        color: '#F8FAFF',
        fontSize: 18,
        fontFamily: 'Noto Serif',
        fontWeight: '500',
        position: 'absolute',
        top: 423,
        right:155
    },
    text_7: {
        textAlign: 'right',
        fontSize: 11,
        // backgroundColor: lineargradient()
    },
    gradient_box: {
        flex: 1,
        position: 'absolute',
        top: 463,
        right: 155
    },
    bar: {
        width: 111,
        height: 4,
        backgroundColor: '#387BFF',
        borderRadius: 2,
        left: 27,
        top: 579,
        position: 'absolute'
    },
    bar_2: {
        width: 278,
        height: 4,
        backgroundColor: '#F8FAFF',
        borderRadius: 2,
        position: 'absolute',
        left: 27,
        top: 579
    },
    slider_page_num: {
        color: '#F8FAFF',
        fontSize: 14,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '700',
        lineHeight: 19.60,
        left: 317,
        top: 571
    },
    slider_triangle: {
        width: 13,
        height: 13,
        left: 350,
        top: 574,
        position: 'absolute'
    },
    Best_seller: {
        position: 'absolute',
        width: 400,
        height: 300,
        left: 5,
        top: 633
    },
    Keyword_img: {
        // position: 'absolute',
        width: 400,
        height: 600,
        left: -2,
        top: 10
    },
    Times_Best_sellers: {
        width: 400,
        height: 300,
        left: -8,
        top: 30
    },
    Award_winners: {
        width: 400,
        height: 300,
        left: -2,
        top: 41
    },
    flat_list: {
        margin: 13,
    },
    render_img: {
        width: 93,
        height: 139,
        borderRadius: 5
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
        top: 5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 93,
        textAlign:'center'
    },
    publisher_style: {
        color: '#909398',
        fontSize: 12,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        top: 4,
        textAlign:'center'
    },
    price_style: {
        color: '#232323',
        fontSize: 14,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '700',
        top: 5,
        textAlign:'center'
    },
    go_to_book_list: {
        height: 20,
        width:45,
        borderRadius: 24,
        // backgroundColor: 'red',
        // position: 'absolute',
        // top: 614,
        // left: 323,
        borderColor: '#0055FF',
        borderWidth: 1,
        backgroundColor:'transparent'
    },
    more_text: {
        color: '#0055FF',
        fontSize: 13,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        height: 15,
        width:35,
        position: 'absolute',
        top: 1,
        left: 7
    }
})
