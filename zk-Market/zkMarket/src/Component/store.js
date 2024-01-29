import AsyncStorage from '@react-native-async-storage/async-storage';


export const saveData = async (key, value) => {
    await AsyncStorage.setItem(key, value);
}

export const getData = async (key) => {
    value = await AsyncStorage.getItem(key);
    return value;
}