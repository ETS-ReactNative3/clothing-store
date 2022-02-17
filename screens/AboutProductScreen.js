
import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image} from 'react-native';
import styles from '../assets/styles'
import { PRODUCTS, BASKET } from "../data/dummy-data"

export default function ProductScreen({ navigation, route }) {
  
   
  const { productId } = route.params;
  // find all data for productId:
  const selectedProduct = PRODUCTS.find((product) => product.id === productId);
  const sizesArr = selectedProduct.sizes;


  return (
    <View style={[styles.scrollViewWrapper, styles.backGround ]}>
      <ScrollView style={{marginBottom: 10}}>
          <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.txt}>{selectedProduct.title}</Text>
            <Text style={styles.txt}>Price :
            <Text  style={styles.title2}> {selectedProduct.price} $</Text>
             </Text>
          </View>
          <Text style={styles.title}>Description</Text>
          <View style={styles.listItem}>
            <Text style={styles.txt}>{selectedProduct.description}</Text>
          </View>
          <Text style={styles.title}>Sizes</Text>
          <View style={styles.listSizes}>
            <Text style={styles.txt}>{sizesArr}</Text>
          </View>
                  
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              onPress={() => {
                BASKET.push(selectedProduct)
              }}
              style={[styles.button_color, {width: 150, height: 40, marginBottom: 40}]}>
              <Text style={styles.button_text_color}>🛒Add to basket🛒</Text>
            </TouchableOpacity>
          </View>
      </ScrollView>
      <TouchableOpacity
        style={[styles.button_color, {width: 150 , marginBottom: 40, height:40}]}
        onPress={() => navigation.popToTop()}
      >
        <Text style={styles.button_text_color}>⬅️⬅️ Back to store</Text>
      </TouchableOpacity>
    </View>
  );
}
