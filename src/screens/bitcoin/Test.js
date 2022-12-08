import React, { useEffect, useState, Component, useCallback } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
  Image,
  Input,
  ScrollView,
  StatusBar,
  BackHandler,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { useTranslation } from "react-i18next";
import ExitModel from "../components/ExitModel";
import { Provider } from "react-redux";
import { Formik } from "formik";
import * as yup from "yup";
import * as DocumentPicker from "expo-document-picker";
import { SelectList } from "react-native-dropdown-select-list";
import { StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";
import SearchableDropdown from "react-native-searchable-dropdown";
import SelectDropdown from "react-native-select-dropdown";
import { render } from "react-dom";
import { useForm } from 'react-hook-form';

export const TestScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = useCallback(formData => {
    console.log(formData);
    // const requestOption = {
    //   headers: {
    //     Authorization:
    //     "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InAubWFyYXNjYTg5QGdtYWlsLmNvbSIsImlkIjo4LCJpYXQiOjE2NzA0OTcwNTEsImV4cCI6MTY3MzE3NTQ1MX0.TvaEDRJwkGQYdWXeTbutep0_GdG1qPBDhHOgOmnkEFg",
    //   },
    //   method: "POST",
    //   body: formData
    //     .fetch(
    //       "https://api.tu-store.soluzionitop.cloud/api/customers",
    //       requestOption
    //     )
    //     .then((response) => console.log(response))
    //     //.then((data) => console.log(data)),
    // };

    //var dataToSend = {formData.email, formData.password};
    //making data to send on server
    var formBody = [];
    // for (var key in dataToSend) {
    //   var encodedKey = encodeURIComponent(key);
    //   var encodedValue = encodeURIComponent(dataToSend[key]);
    //   formBody.push(encodedKey + '=' + encodedValue);
    // }
    formBody = formData;
    //POST request
    fetch('https://api.tu-store.soluzionitop.cloud/api/customers', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 
          'application/x-www-form-urlencoded;charset=UTF-8',
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InAubWFyYXNjYTg5QGdtYWlsLmNvbSIsImlkIjo4LCJpYXQiOjE2NzA0OTcwNTEsImV4cCI6MTY3MzE3NTQ1MX0.TvaEDRJwkGQYdWXeTbutep0_GdG1qPBDhHOgOmnkEFg",
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        alert(JSON.stringify(responseJson));
        console.log(responseJson);
      })
      //If response is not in json then in error
      .catch((error) => {
        alert(JSON.stringify(error));
        console.error(error);
      });

  }, []);
  const onChangeField = useCallback(
    name => text => {
      setValue(name, text);
    },
    []
  );

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  return (
    <View style={{marginLeft:40, marginTop:50}}>
      <TextInput
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder="Email"
        onChangeText={onChangeField('email')}
      />
      <TextInput
        secureTextEntry
        autoCompleteType="password"
        placeholder="Password"
        onChangeText={onChangeField('password')}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );

};

const styles = StyleSheet.create({
  // check: {
  //   alignSelf:'center',
  // },
  // checkbox: {
  //   width: 25,
  //   height: 25,
  //   borderWidth: 2,
  //   borderColor:'red',
  // }
});
