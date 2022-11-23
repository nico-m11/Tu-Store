import React, { useEffect, useState, Component } from "react";
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

export const TesoScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    DocumentPicker.pickMultiple(result)
    alert(result.uri);

    console.log(result);
  };


  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button title="Select Document" onPress={pickDocument} 
        allowMultiSelection={ytrue}
      />
    </View>
  );
};
