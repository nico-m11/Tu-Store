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
import SearchableDropdown from "react-native-searchable-dropdown";
import SelectDropdown from "react-native-select-dropdown";
import { render } from "react-dom";
import { useForm } from "react-hook-form";
import { value, CheckBox } from "@rneui/base";

export const TestScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [checked, setChecked] = React.useState(false);
  console.log(checked);
  return (
    <View style={{ marginTop: "10%", marginLeft: "2%" }}>
      <CheckBox
        style={{backgroundColor:'#e0e0e0'}}
        center
        checked={checked}
        checkedColor="blue"
        checkedTitle="Si"
        containerStyle={{ width: "25%" }}
        onIconPress={() => setChecked(!checked)}
        size={30}
        title="Si"
        uncheckedColor="#e0e0e0"
      />
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
