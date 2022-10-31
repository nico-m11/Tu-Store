import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  BackHandler,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { useTranslation } from "react-i18next";
import ExitModel from "../components/ExitModel";
import { Provider } from "react-redux";

export const TesoScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [listData, setListData] = useState([]); // salvo i dati del fetch

  useEffect(() => {
    Data();
  }, []);


  {/** fetch data GET COMPARA TU*/}
  const Data = () => {
    fetch(
      "https://be.control-room.app/api/salesChannels?page=1&limit=10&code=ComparaTu",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRVTzYiLCJpZCI6NiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjY1MTQ4MDU5LCJleHAiOjE2Njc4MjY0NTl9.ake1PT2VGDret0lEFtXDTEA_HQR3CS5nVIFkeVF8XFI",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((value) => {
        //console.log(value)
        setListData(value.items); // salvo nel array i dati del fetch
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
        {/*** fetch title */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{marginLeft: 30, marginTop: 10, marginBottom: 30}}>
            {listData.map((element, index) => (
              <View>
                <Text key={index} style={{fontSize: 20}}>{element.code}</Text>
              </View>
            ))}
          </View>
          {/*** fetch data */}
          <View>
            {listData.map((element, index) =>
              element.offers.map((el, i) => (
                <View style={{ marginLeft: 30, marginBottom: 3}}>
                   <Image
                    source={{ uri: el.image }}
                    style={{ width: 45, height: 45, marginRight: 15 }}
                  />
                  <Text key={i}>{el.name}</Text>
                  <Text key={i}>{el.value}</Text>
                </View>
              ))
            )}
          </View>
        </ScrollView>
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
