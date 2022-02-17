import * as React from 'react';
// NavigationContainer - gives the root navigator.
import { NavigationContainer } from '@react-navigation/native';
// createNativeStackNavigator - create stack navigation
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {  } from 'react-native';
import { Ionicons as Icon } from "react-native-vector-icons";
import styles from '../assets/styles';


// import screens:
import BasketScreen from '../screens/BasketScreen';
import ObjectsPageScreen from '../screens/ObjectsPageScreen';
import HomeScreen from '../screens/HomeScreen';
import PaymentScreen from '../screens/PaymentScreen';
import AboutProductScreen from '../screens/AboutProductScreen';
import SuccessScreen from '../screens/SuccessScreen';

import {BASKET} from '../data/dummy-data';

const Stack = createNativeStackNavigator();

export default function ClothingNavigator(props) {
  
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions = {({navigation}) => ({
          headerTintColor: 'black',
          headerRight: () => (
            <Icon
              onPress={() => 
                navigation.navigate("Shopping basket",{numOfProd: BASKET.length})
              }
              name="basket"
              style={styles.styleIcons}
            />
          ),

        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={() => ({ title: "Clothing-Shop" })} />
        <Stack.Screen
          name="ObjectsPage"
          component={ObjectsPageScreen}
          options={({ route }) => ({ title:route.params.categoryName})}
        />
        <Stack.Screen
          name="AboutProduct"
          component={AboutProductScreen}
          options={({ route }) => ({ title: route.params.productName })}
        />
        <Stack.Screen 
          name="Shopping basket" 
          component={BasketScreen}
          options={({route}) => ({ title: 'Shopping bsket '})}
          />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="Success" component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}