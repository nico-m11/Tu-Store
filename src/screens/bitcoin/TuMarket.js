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
import Loader from "../components/Loader";

export const TuMarket = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [listData, setListData] = useState([]); // salvo i dati del fetch
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    Data();
  }, []);

  {
    /** fetch data GET COMPARA TU*/
  }
  const Data = () => {
    setLoader(true);
    fetch(
      "https://api.tu-store.soluzionitop.cloud/api/offers?sale_channel_id=2",
      {
        method: "GET",
        headers: {
          Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRVTzYiLCJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjY5Mjg2OTk4LCJleHAiOjE2NzE5NjUzOTh9.BT-aKLt5R6KTduXXGSFyAQNfQph55h7YyrgZ4pNfOF0",
        },
      }
    )
      .then((res) => {
        setLoader(false);
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
        title={t("Tu Market")}
        isSearch={true}
      />
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingTop: 25,
          paddingHorizontal: 15,
        }}
      >
        {loader === false ? (
          <>
            <ScrollView showsVerticalScrollIndicator={true}>
              {/*** fetch data */}
              <View>
                {listData.map((element, index) => (
                  <>
                    <TouchableOpacity
                    key={index}
                      activeOpacity={0.8}
                      onPress={() =>
                        navigation.navigate("Details", { item: element })
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
                          source={{ uri: element.partners.image }}
                          style={{ width: 45, height: 30, marginRight: 15 }}
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
                              {element.appCashback.map(
                                (el) => " cash " + el.cashback + "€"
                              )}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </>
                ))}
              </View>
            </ScrollView>
          </>
        ) : (
          <>
            <Loader visible={true} />
          </>
        )}
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
