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
import { Formik } from 'formik';
import * as yup from 'yup'
import * as DocumentPicker from 'expo-document-picker';
import {SelectList} from 'react-native-dropdown-select-list';

export const TesoScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const pickDocument = async () => {

    let result = await DocumentPicker.getDocumentAsync({});
    
    alert(result.uri);
    
    console.log(result);
    
    }
  
    const[selected,setSelected] = React.useState("");

    const data = [
    {key:'1',value:'ITALIA' },
    {key:'2',value:'SPAGNA' },
    {key:'3',value:'FRANCIA' },
    {key:'4',value:'GERMANIA' }

    ];

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      < Button
        title="Select Document"
        onPress={pickDocument}
        />

        <SelectList 
        data={data} 
        setSelected={(val)=>setSelected(val)}
//        boxStyles={{backgroundColor:}}
        /> 
  
    </View>

  );
};
