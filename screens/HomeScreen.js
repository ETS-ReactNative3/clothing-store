import React from "react";
import { FlatList, View } from "react-native";
import { CATEGORIES, PRODUCTS } from "../data/dummy-data";

import CategoriesPage from "../components/CategoriesPage";
import styles from "../assets/styles";


const HomeScreen = ({ navigation }) => {
    const HomePage = ({ item }) => {
        return (
            <CategoriesPage
                title={item.title}
                Image={item.imageUrl}
                onSelect={() => {
                    let arr = PRODUCTS.filter(product => product.categoryIds[0] == item.id);
                    let numberOfcategories = arr.length;
                    navigation.navigate("ObjectsPage", {
                        categoryId: item.id,
                        categoryName: item.title,
                        categoryAmount: numberOfcategories,
                    });
                }}
            />

        );
    };

    return (
        <View style={styles.backGround}>
            <FlatList
                keyExtractor={(item) => item.id}
                data={CATEGORIES}
                renderItem={HomePage}
                numColumns={3}
            />
        </View>
    );
};

HomeScreen.navigationOptions = {
    headerTitle: "Shop App",
};


export default HomeScreen;