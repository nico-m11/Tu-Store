import React, { useState, useEffect } from "react";
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
import MainButton from "../components/MainButton";
import { useTranslation } from "react-i18next";

export const Tutela = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [listData, setListData] = useState([]); // salvo i dati del fetch

  useEffect(() => {
    Data();
  }, []);

  {
    /** fetch data GET COMPARA TU*/
  }
  const Data = () => {
    fetch("https://be.control-room.app/api/offers?sale_channel_id=3&limit=10", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRVTzYiLCJpZCI6NiwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjY3OTAwOTcxLCJleHAiOjE2NzA1NzkzNzF9.523N8oDpL_AufsFeSydhthNFrIls_0Q1ttA3LGHT8TQ",
      },
    })
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
        title={t("Tutela")}
        //isMain={true}
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
        <View style={{ marginTop: 15 }}>
          <ScrollView showsVerticalScrollIndicator={true}>
            {/*** fetch data */}
            <View
              style={{
                backgroundColor: Colors.white,
                borderRadius: 10,
                //marginTop: 10,
                marginHorizontal: 15,
                //marginBottom: 25,
                //paddingTop: 15,
               // ...ConstantStyle.shadow,
              }}
            >
              <View>
                {listData.map((element, index) => (
                  <>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() =>
                        navigation.navigate("CoinDetails", {
                          item: element,
                        })
                      }
                      style={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexDirection: "row",
                        marginHorizontal: 15,
                        marginVertical: 12,
                      }}
                    >
                      <View style={{ alignItems: "center" }}>
                        <Image
                          source={{ uri: element.image }}
                          style={{ width: 80, height: 45, marginRight: 15 }}
                        />
                      </View>
                      <View style={{ flex: 1 }}>
                        <View
                          style={{
                            alignItems: "center",
                            justifyContent: "space-between",
                            flexDirection: "row",
                          }}
                        >
                          <Text
                            style={{
                              ...Fonts.Black16Medium,
                              textAlign: "left",
                            }}
                          >
                            {element.name}
                          </Text>
                          <View>
                            <Text
                              style={{
                                ...Fonts.Black16Regular,
                                textAlign: "right",
                              }}
                            ></Text>

                            <Text
                              style={{
                                ...Fonts.Green14Medium,
                                textAlign: "right",
                              }}
                            >
                              {element.value !== "0"
                                ? element.value + "€"
                                : "0€"}
                            </Text>

                            <Text
                              style={{
                                ...Fonts.Red14Medium,
                                textAlign: "right",
                              }}
                            >
                              CashBack
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </>
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
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
