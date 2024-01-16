import { Linking } from "react-native";

export const handlePublish = async (publish_data) => {


    const appUrl = `zkmarket://register/:${publish_data.Title}/:${publish_data.Author}/:${publish_data.Publisher}
    /:${publish_data.Table_of_contents}/:${publish_data.page_num}/:${publish_data.book_type_1}/:${publish_data.book_type_2}/:${publish_data.description}/:${publish_data.price}/:${publish_data.cover_img}/:${publish_data.book_uri}`;
    console.log(appUrl);

    Linking.openURL(appUrl).catch(err => console.log("error in deep link with zk wallet // publis"));
}