import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  BackHandler,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import MarketData from "../../data/MarketData";
import { useTranslation } from "react-i18next";
import ExitModel from "../components/ExitModel";
import { Provider } from "react-redux";

export const TesoScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [listData, setListData] = useState([]);

  useEffect(() => {
    Data();
  }, []);

  const Data = () => {
    fetch("https://be.control-room.app/api/salesChannels?page=1&limit=10", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRVTzYiLCJpZCI6NiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjY1MTQ4MDU5LCJleHAiOjE2Njc4MjY0NTl9.ake1PT2VGDret0lEFtXDTEA_HQR3CS5nVIFkeVF8XFI",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        var data = value.items;
        console.log(data)
        setListData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader
        navigation={navigation}
        title={t("Teso")}
        isMain={true}
        isSearch={true}
      />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
        >
        {listData.map((value, index) => {
          console.log(value)
          
    
        

          // if(value.code === 'CompraTu') {
          //  console.log(value.offers)
          // } else if (value.code === 'CrediTu') {

          // } else if (value.code === ' AssicuraTu') {

          // } else if(value.code === 'TuMarket') {

          // } else if(value.code === 'Tutela') {

          // } 
  
          // console.log(products[0].name)
          // return(
          //   <View key={index} style={{marginTop: 50}}>
          //     <Text key= {products[0].id} >{products[0].name}</Text>
          //   </View>
          // );
        })}
      </View>
      {/* <ExitModel
        onCancel={() => setExitModel(!exitModel)}
        title={t("exit_Text")}
        cancel={t("cancel")}
        btnName={t("exit")}
        btnOnPress={() => BackHandler.exitApp()}
        visible={exitModel}
      /> */}
    </SafeAreaView>
  );
};
