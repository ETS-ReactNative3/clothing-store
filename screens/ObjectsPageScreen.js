import React from 'react';
import {FlatList, View } from 'react-native';
import styles from '../assets/styles'
import { PRODUCTS } from '../data/dummy-data';
import ProductsPage from '../components/ProductsPage';

export default function ObjectsPageScreen({ route, navigation }) {
  const { categoryId } = route.params;
  // array of all products - belong to that category

  const products = PRODUCTS.filter(product => product.categoryIds[0] == categoryId);
  // Call ItemsGrid
  const renderItem = ({ item }) => {
    return (
      <ProductsPage
        Image={item.imageUrl}
        title={item.title}
        price={item.price}
        itemId={item.id}
        fullItem={item}
        onSelectProduct={() => { navigation.navigate("AboutProduct", { productId: item.id, productName: item.title }); }}
      />
    )
  }

  return (
    <View style={styles.backGround}>
      <FlatList
        keyExtractor={item => item.id}
        data={products}
        renderItem={renderItem}
        numColumns={3}
      />
    </View>
    

  );
}

