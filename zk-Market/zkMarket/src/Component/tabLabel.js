import { StyleSheet } from 'react-native';

styles = StyleSheet.create({
    Normal: {
        textAlign: 'center',
        color: '#232323',
        fontSize: 12.09,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '700',
        wordWrap: 'break-word'
    },
    focuse: {
        textAlign: 'center',
        color: '#0055FF',
        fontSize: 12.09,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '700',
        wordWrap: 'break-word'
    }

});

const TabLabel = (focused, name) => {
    if (focused) {return styles.focuse } else { return styles.Normal}
};

export default TabLabel;