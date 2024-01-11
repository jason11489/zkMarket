import React, { useState } from "react";
import {
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import DropDownPicker from 'react-native-dropdown-picker';
import { Publish_style } from "../../CSS/Publish_style";

const styles = StyleSheet.create({
    first_text: {
        color: '#232323',
        fontSize: 24,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '600',
        // lineHeight: 35,
        top: 40,
        left: 37,
        height: 100
    },
    type: {
        width: 321,
        height: 52,
        backgroundColor: '#F8FAFF',
        borderRadius: 5,
        borderColor: '#D6DEEE',
        left: 34,
        top: 20,
        fontcolor: '#232323',
        fontSize: 16,
        fontFamily: 'NanumSquareOTF_ac',
        fontWeight: '400',
        letterSpacing: 0.56
    }
})

function Book_type({navigation: {
        navigate
    }, route}) {
    const [type_open, setOpen_type] = useState(false);
    const [field_open, setOpen_field] = useState(false);

    const [value_type, setValue_type] = useState(null);
    const [type_items, setItems_type] = useState([
        {
            label: 'Literature',
            value: 'Literature'
        }, {
            label: 'Non-literature',
            value: 'Non-literature'
        }, {
            label: 'Humanities',
            value: 'Humanities'
        }, {
            label: 'Children\'s Books',
            value: 'Children\'s Books'
        }, {
            label: 'Lifestyle',
            value: 'Lifestyle'
        }, {
            label: 'Reference book',
            value: 'Reference book'
        }
    ]);

    const [value_field, setValue_field] = useState(null);
    const [field_items, setItems_field] = useState([
        {
            label: 'Science',
            value: 'Science'
        }, {
            label: 'IT',
            value: 'IT'
        }, {
            label: 'Self-improvement',
            value: 'Self-improvement'
        }, {
            label: 'Economy / Management',
            value: 'Economy / Management'
        }
    ]);
    return (
        <SafeAreaView style={Publish_style.container}>
            <View style={Publish_style.first_line}>
                <TouchableOpacity onPress={() => navigate("Basic_information")}>
                    <Image
                        style={Publish_style.back}
                        source={require('../../image/sell/arrow_back_ios.png')}/>
                </TouchableOpacity>
                <Text style={Publish_style.first_line_text_2}>
                    Basic_information
                </Text>
                <TouchableOpacity onPress={() => navigate("Sell_2")}>
                    <Image
                        style={Publish_style.x_back_2}
                        source={require('../../image/sell/X.png')}/>
                </TouchableOpacity>
            </View>
            <View style={Publish_style.second_line}>
                <View style={Publish_style.slide_bar}/>
                <View style={Publish_style.slide_bar_2}/>
            </View>
            <Text style={Publish_style.page_num}>2/5</Text>

            <Text style={styles.first_text}>Please choose a book type</Text>
            <View style={{
                    zIndex: 10000
                }}>
                <DropDownPicker
                    open={type_open}
                    value={value_type}
                    items={type_items}
                    setOpen={setOpen_type}
                    setValue={setValue_type}
                    setItems={setItems_type}
                    placeholder={'Types'}
                    style={styles.type
}
                    dropDownContainerStyle={[
                        {
                            backgroundColor: 'white',
                            left: 34,
                            width: 321,
                            top: 70
                        }, {
                            zIndex: 0
                        }
                    ]}
                    onChangeValue={(item) => {
                        route.params.book_type_1 = item
                    }}/>
            </View>

            <View style={{
                    height: 20
                }}/>
            <View style={{
                    zIndex: 1
                }}>
                <DropDownPicker
                    open={field_open}
                    value={value_field}
                    items={field_items}
                    setOpen={setOpen_field}
                    setValue={setValue_field}
                    setItems={setItems_field}
                    placeholder={'Field / Department'}
                    style={styles.type}
                    dropDownContainerStyle={{
                        backgroundColor: 'white',
                        left: 34,
                        width: 321,
                        top: 70
                    }}
                    onChangeValue={(item) => {
                        route.params.book_type_2 = item
                    }}/>
            </View>
            <View style={{
                    height: 230
                }}/>

            <View style={Publish_style.next_button}>
                <TouchableOpacity
                    title="Next"
                    style={Publish_style.Touchable}
                    onPress={() => navigate("Description_book" , route.params)}>
                    <Text style={Publish_style.button_style}>Next
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Book_type;