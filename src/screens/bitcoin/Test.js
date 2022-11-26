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

export const TestScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();

  const [serverData, setServerData] = useState([]);
  const [onlyData, setOnlyData] = useState('');

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

  console.log(onlyData.name)

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
                <Text style={styles.headingText}>
                  Searchable Dropdown from Dynamic Array from Server
                </Text>
                <SearchableDropdown
                  onTextChange={(text) => console.log(text)}
                  //On text change listner on the searchable input
                  onItemSelect={(item) => setOnlyData(item)}
                  //onItemSelect called after the selection from the dropdown
                  containerStyle={{ padding: 5 }}
                  // onItemSelect={(itemValue) =>
                  //   formik.setFieldValue("language", itemValue)
                  // }
                
                  //suggestion container style
                  textInputStyle={{
                    //inserted text style
                    padding: 12,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    backgroundColor: "#FAF7F6",
                  }}
                  itemStyle={{
                    //single dropdown item style
                    padding: 10,
                    marginTop: 2,
                    backgroundColor: "#FAF9F8",
                    borderColor: "#bbb",
                    borderWidth: 1,
                  }}
                  itemTextStyle={{
                    //text style of a single dropdown item
                    color: "#222",
                  }}
                  itemsContainerStyle={{
                    //items container style you can pass maxHeight
                    //to restrict the items dropdown hieght
                    maxHeight: "50%",
                  }}
                  items={serverData}
                  //mapping of item array
                  defaultIndex={2}
                  //default selected item index
                  placeholder="placeholder"
                  //place holder for the search input
                  resetValue={false}
                  //reset textInput Value with true and false state
                  underlineColorAndroid="transparent"
                  //To remove the underline from the android input
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
