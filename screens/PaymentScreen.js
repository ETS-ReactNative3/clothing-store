import React from 'react';
import { useForm} from 'react-hook-form';
import { Text, View, ScrollView } from "react-native";
import styles from '../assets/styles';
import { FormBuilder } from 'react-native-paper-form-builder';
import { Button } from 'react-native-paper';



export default function PaymentScreen({ navigation, route }) {
  const { control, setFocus, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      country: '',
      city: '',
      address: '',
    },
    mode: 'onChange',
  });

  return (
    <View style={styles.containerStyle}>
      <View style={styles.backGround}>
      <ScrollView width="10%" display="flex" contentContainerStyle={[styles.stylePayment]}>
          <Text style={styles.titles}> 🧾 Buyer Information 🧾</Text>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={[
              {
                type: 'text',
                name: 'firstName',
                rules: {
                  required: {
                    value: true,
                    message: 'Enter the first name〰️',
                  },
                },
                textInputProps: {
                  label: 'First Name〰️',
                },
              },
              {
                type: 'text',
                name: 'lastName',

                rules: {
                  required: {
                    value: true,
                    message: 'Enter the last name〰️',
                  },
                },
                textInputProps: {
                  label: 'Last Name〰️',
                },
              },
              {
                type: 'email',
                name: 'email',

                rules: {
                  required: {
                    value: true,
                    message: 'Enter the email📩',
                  },
                  pattern: {
                    value:
                      /[A-Za-z0-9._-]{3,}@[a-zA-Z]{3,}([.][c][o][m])|([.][a-zA-Z]{4}|[.][a-zA-Z]{2}[.][a-zA-Z]{2})/,
                    message: 'Email not required',
                  },
                },
                textInputProps: {
                  label: 'Email 📩',
                },
              },
              {
                type: 'text',
                name: 'phone number',
                rules: {
                  required: {
                    value: true,
                    message: 'Enter the phone number📱',
                  },
                  minLength: {
                    value: 10,
                    message: 'The phone number must consist of at least 10 digits',
                  },
                  maxLength: {
                    value: 10,
                    message: 'The phone number must consist of at most 10 digits',
                  },
                },
                textInputProps: {
                  label: 'Phone Number📱',
                },
              },
              {
                type: 'text',
                name: 'country',
                rules: {
                  required: {
                    value: true,
                    message: 'Enter the country🌎',
                  },
                  minLength: {
                    value: 2,
                    message: 'min Country 2 characters',
                  },
                  maxLength: {
                    value: 20,
                    message: 'max Country 20 characters',
                  },
                },
                textInputProps: {
                  label: 'Country🌎',
                },
              },
              {
                type: 'text',
                name: 'city',
                rules: {
                  required: {
                    value: true,
                    message: 'Enter the city🏢',
                  },
                  minLength: {
                    value: 2,
                    message: 'Min City 2 characters',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Max City 20 characters',
                  },
                },
                textInputProps: {
                  label: 'City🏢',
                },
              },
              {
                type: 'text',
                name: 'address',
                rules: {
                  required: {
                    value: true,
                    message: 'Enter the address📇',
                  },
                  minLength: {
                    value: 2,
                    message: 'Min Address 2 characters',
                  },
                  maxLength: {
                    value: 20,
                    message: 'Max Address 20 characters',
                  },
                },
                textInputProps: {
                  label: 'Address📇',
                },
              },
            ]}
          />
          
          <Text style={styles.titles}> 🧾 Credit Card Information 🧾 </Text>
          <FormBuilder
            control={control}
            setFocus={setFocus}
            formConfigArray={[
              {
                type: 'text',
                name: 'Card Id',

                rules: {
                  required: {
                    value: true,
                    message: 'Enter the card id🆔',
                  },
                  minLength:{
                    value: 9,
                    message: 'The card min ID must be at least 9 number'
                  },
                  maxLength:{
                    value: 9,
                    message: 'The card max ID must be at least 9 number'
                  }
                },
                textInputProps: {
                  label: 'Card ID🆔',
                },
              },
              {
                type: 'text',
                name: 'card name',
                rules: {
                  required: {
                    value: true,
                    message: 'Enter the card name〰️',
                  },
                },
                textInputProps: {
                  label: 'Card Name〰️',
                },
              },
              {
                type: 'text',
                name: 'card number',

                rules: {
                  required: {
                    value: true,
                    message: 'Enter the card number💳',
                  },
                  minLength: {
                    value: 16,
                    message: 'The card number min be at least 16 digits',
                  },
                  maxLength: {
                    value: 16,
                    message: 'The card number max be at least 16 digits',
                  },
                  pattern: {
                    value:
                           /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
                          ,
                    message: 'The card number is incorrect',
                  },
                },
                textInputProps: {
                  label: 'Card Number💳',
                },
              },
              {
                type: 'text',
                name: 'date',
                rules: {
                  required: {
                    value: true,
                    message: 'Enter the card date💳',
                  },
                  minLength: {
                    value: 5,
                    message: 'the min date is at least 5 digits (within "/or \")',
                  },
                  maxLength: {
                    value: 5,
                    message: 'the max date is at least 5 digits (within "/or \")',
                  },
                  pattern: {
                    value: /^(0[1-9]|1[0-2])\/?(2[3-9]|[3-9][0-9])$/,
                    message: 'invalid date',
                  }
                },
                textInputProps: {
                  label: 'Date💳',
                },
              },
              {
                type: 'text',
                name: 'ccv',
                rules: {
                  required: {
                    value: true,
                    message: 'Enter the card ccv💳',
                  },
                  minLength: {
                    value: 3,
                    message: 'The CCV min be at least 3 digits',
                  },
                  maxLength: {
                    value: 3,
                    message: 'The CCV max be at least 3 digits',
                  },
                  pattern: {
                    value: /^([0-9]{3})$/,
                  }
                },
                textInputProps: {
                  label: 'CCV💳',
                },
              },
            ]}
          />
          <Button
            mode={'contained'}
            onPress={handleSubmit((data) => {
              navigation.navigate("Success", {firstName:data.firstName, lastName:data.lastName, country: data.country, city: data.city, address: data.address})
            })}>
            Click to pay
          </Button>
        </ScrollView>
      </View>
    </View>
  );
}
