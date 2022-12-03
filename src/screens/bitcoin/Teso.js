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

  useEffect(() => {
    Data();
  }, []);

  const [nonlo, setNonlo] = useState([]);
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");
  const [image8, setImage8] = useState("");
  const [image9, setImage9] = useState("");
  const [image10, setImage10] = useState("");
  const [image11, setImage11] = useState("");

  const Data = () => {
    //setLoader(true)
    fetch(
      "https://api.tu-store.soluzionitop.cloud/api/offers?sale_channel_id=3",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRVTzYiLCJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjcwMDYwMjc5LCJleHAiOjE2NzI3Mzg2Nzl9.cPlvl2t2Cr3Epvb5ybthZHepLdmRi6vk-Cr8ybfHXPs",
        },
      }
    )
      .then((res) => {
        //setLoader(false)
        return res.json();
      })
      .then((value) => {
        //console.log(value.items)
        setNonlo(value.items);
        //setListData(value.items); // salvo nel array i dati del fetch
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var appDescription = nonlo.map((el) =>
    el.appDescription.map((value) => value.document_list)
  );

  //console.log(appDescription)
  for (var i = 0; i < appDescription.length; i++) {
    var pazz = appDescription[i];
    for (var j = 0; j < pazz.length; j++) {
      var cazz = pazz[j].length;
    }
  }


  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage(result.uri);
    //console.log(result);
  };

  const pickDocument2 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage2(result.uri);
    //console.log(result);
  };

  const pickDocument3 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage3(result.uri);
    //console.log(result);
  };

  const pickDocument4 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage4(result.uri);
    //console.log(result);
  };

  const pickDocument5 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage5(result.uri);
    //console.log(result);
  };

  const pickDocument6 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage6(result.uri);
    //console.log(result);
  };

  const pickDocument7 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage7(result.uri);
    //console.log(result);
  };

  const pickDocument8 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage8(result.uri);
    //console.log(result);
  };

  const pickDocument9 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage9(result.uri);
    //console.log(result);
  };

  const pickDocument10 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage10(result.uri);
    //console.log(result);
  };

  const pickDocument11 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage11(result.uri);
    //console.log(result);
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
      {cazz === 0 ? <></> : <></>}
      {cazz === 1 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {cazz === 2 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}

      {cazz === 3 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {cazz === 4 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {cazz === 5 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument5}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {cazz === 6 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument5}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument6}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {cazz === 7 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument5}
            allowMultiSelection={true}
          />
          <Text> {image6} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument6}
            allowMultiSelection={true}
          />
          <Text> {image7} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument7}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {cazz === 8 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument5}
            allowMultiSelection={true}
          />
          <Text> {image6} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument6}
            allowMultiSelection={true}
          />
          <Text> {image7} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument7}
            allowMultiSelection={true}
          />
          <Text> {image8} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument8}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {cazz === 9 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument5}
            allowMultiSelection={true}
          />
          <Text> {image6} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument6}
            allowMultiSelection={true}
          />
          <Text> {image7} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument7}
            allowMultiSelection={true}
          />
          <Text> {image8} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument8}
            allowMultiSelection={true}
          />
          <Text> {image9} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument9}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {cazz === 10 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument5}
            allowMultiSelection={true}
          />
          <Text> {image6} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument6}
            allowMultiSelection={true}
          />
          <Text> {image7} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument7}
            allowMultiSelection={true}
          />
          <Text> {image8} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument8}
            allowMultiSelection={true}
          />
          <Text> {image9} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument9}
            allowMultiSelection={true}
          />
          <Text> {image10} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument10}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {cazz === 11 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument5}
            allowMultiSelection={true}
          />
          <Text> {image6} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument6}
            allowMultiSelection={true}
          />
          <Text> {image7} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument7}
            allowMultiSelection={true}
          />
          <Text> {image8} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument8}
            allowMultiSelection={true}
          />
          <Text> {image9} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument9}
            allowMultiSelection={true}
          />
          <Text> {image10} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument10}
            allowMultiSelection={true}
          />
          <Text> {image11} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument11}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}

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
      <View></View>
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
