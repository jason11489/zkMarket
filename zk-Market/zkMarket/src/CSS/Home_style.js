import { StyleSheet } from "react-native";

export const home_styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundImage: {
        width: '100%',
        height: 755,
        backgroundColor: 'rgba(0, 0, 0, 0.70)',
        backdropFilter: 'blur(3px)',
        position: 'absolute'
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
    }
})
