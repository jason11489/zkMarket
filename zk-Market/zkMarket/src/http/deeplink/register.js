import { Linking } from "react-native";

export const handlePublish = async (publish_data) => {

    const description_encode = encodeURIComponent(publish_data.description);
    const book_url_encode = encodeURIComponent(publish_data.book_uri);
    const image_url_encode = encodeURIComponent(publish_data.cover_img);

    const appUrl = `zkmarket://register/${publish_data.Title}/${publish_data.Author}/${publish_data.Publisher}/${publish_data.Table_of_contents}/${publish_data.page_num}/${publish_data.book_type_1}/${publish_data.book_type_2}/${description_encode}/${publish_data.price}/${image_url_encode}/${book_url_encode}`;
    console.log(appUrl);

    Linking.openURL(appUrl).catch(err => console.log("error in deep link with zk wallet // publis"));
}