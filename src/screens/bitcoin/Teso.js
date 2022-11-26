import React, { useEffect, useState, Component } from "react";
import {
  SafeAreaView,
  Text,
  Item,
  TextInput,
  View,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Picker,
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
//import { Picker } from '@react-native-picker/picker';

export const TesoScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);

    console.log(result);
  };

  const [dataCheck, setDataCheck] = useState([
    { name: "nico" },
    { name: "Pco" },
    { name: "boh" },
  ]);

  const onValueChange = (item, index) => {
    const newData = [...dataCheck];
    newData[index].isCheck = !item.isCheck;
    setDataCheck(newData);
  };

  const yupSchema = yup.object().shape({
    language: yup.string().required(),
  });

  const initialValues = {
    language: "",
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Select Document"
        onPress={pickDocument}
        allowMultiSelection={true}
      />

      <View>
        <Text>Select option</Text>
        {dataCheck.map((item, index) => {
          return (
            <CheckBox
              title={item.name}
              checked={item.isCheck || false}
              onPress={(val) => onValueChange(item, index)}
              key={item.name}
            />
          );
        })}
      </View>
      <View>
        
      </View>
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
