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
import DocumentPicker , { types } from 'react-native-document-picker';    


export const TesoScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
  );



  // const [fileResponse, setFileResponse] = useState([]);

  // const handleDocumentSelection = async () => {
  //   try {
  //     const response = await DocumentPicker.pick({
  //      //presentationStyle: 'fullScreen',
  //       type: [DocumentPicker.types.allFiles],
  //     });
  //     console.log('res:    '  + JSON.stringify(response))
  //     console.log('res:    '  + response.uri)
  //     console.log('res:    '  + response.type)

  //     setFileResponse(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

 

  // return (
  //   <SafeAreaView 
  //   //style={styles.container} 
  //   >
  //     <StatusBar barStyle={'dark-content'} />
  //     {fileResponse.map((file, index) => (
  //       <Text
  //         key={index.toString()}
  //         //style={styles.uri}
  //         numberOfLines={1}
  //         ellipsizeMode={'middle'}>
  //         {file?.uri}
  //       </Text>
  //     ))}
  //     <Button title="Select 📑" onPress={handleDocumentSelection} />
  //   </SafeAreaView>
  // );


  // return (
  //   <SafeAreaView style={{ ...ConstantStyle.container }}>
  //     <CustomHeader
  //       navigation={navigation}
  //       title={t("Teso")}
  //       //isMain={true}
  //       isSearch={true}
  //     />
  //     <View
  //       style={{
  //         backgroundColor: Colors.white,
  //         borderTopLeftRadius: 30,
  //         borderTopRightRadius: 30,
  //         flex: 1,
  //       }}
  //     >
  //       <ScrollView showsVerticalScrollIndicator={true}>
  //       < StatusBar /> 
  //       < Button title = "Select " />
  //       </ScrollView>
  //     </View>
  //     {/* <ExitModel
  //       onCancel={() => setExitModel(!exitModel)}
  //       title={t("exit_Text")}
  //       cancel={t("cancel")}
  //       btnName={t("exit")}
  //       btnOnPress={() => BackHandler.exitApp()}
  //       visible={exitModel}
  //     /> */}
  //   </SafeAreaView>
  // );
};
