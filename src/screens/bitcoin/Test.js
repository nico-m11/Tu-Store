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
import { StyleSheet } from "react-native";
import { CheckBox } from "@rneui/themed";
import SearchableDropdown from "react-native-searchable-dropdown";
import SelectDropdown from "react-native-select-dropdown";

export const TestScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const [serverData, setServerData] = useState([]);
  const [onlyData, setOnlyData] = useState("");

  useEffect(() => {
    fetch("https://aboutreact.herokuapp.com/demosearchables.php")
      .then((response) => response.json())
      .then((responseJson) => {
        //Successful response from the API Call
        setServerData(responseJson.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const yupSchema = yup.object().shape({
    language: yup.string().required(),
  });

  const initialValues = {
    language: "",
  };

  const countries = ["Egypt", "Canada", "Australia", "Ireland"]



  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <Formik
          initialValues={initialValues}
          validationSchema={yupSchema}
          onSubmit={(values) => Alert.alert(JSON.stringify(values))}
        >
          {(formik) => (
            <>
              <View>
                <SelectDropdown
                  data={countries}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    // text represented after item is selected
                    // if data array is an array of objects then return selectedItem.property to render after item is selected
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    // text represented for each item in dropdown
                    // if data array is an array of objects then return item.property to represent item in dropdown
                    return item;
                  }}
                />

                {/* <Picker
                    selectedValue={formik.values.language}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue) =>
                      formik.setFieldValue("language", itemValue)
                    }
                  >
                    <Picker.Item value={initialValues.language} key={0} />
                    <Picker.Item label="JavaScript" value="js" />
                  </Picker> */}
              </View>

              <Button title="Submit" onPress={formik.handleSubmit} />
            </>
          )}
        </Formik>
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
