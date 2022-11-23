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
import MarketData from "../../data/MarketData";
import { useTranslation } from "react-i18next";
import ExitModel from "../components/ExitModel";
import Loader from "../components/Loader";
export const ServiziScreen = ({ navigation }) => {
  const { t, i18n } = useTranslation();
  const [listDataTutela, setListDataTutela] = useState([]); // salvo i dati del fetch
  const [listDataComparaTu, setListDataComparaTu] = useState([]); // salvo i dati del fetch
  const [listDataCrediTu, setListDataCrediTu] = useState([]);
  const [listDataTuMarket, setListDataTuMarket] = useState([]);
  const [listDataAssicuraTu, setListDataAssicuraTu] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    DataTutela();
    DataComparaTu();
    DataCrediTu();
    DataTuMarket();
    DataAssicuraTu();
  }, []);

  {
    /** fetch data GET tutela*/
  }
  const DataTutela = () => {
    setLoader(true);
    fetch(
      "https://api.tu-store.soluzionitop.cloud/api/offers?sale_channel_id=3",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRVTzYiLCJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjY3OTIxNDY2LCJleHAiOjE2NzA1OTk4NjZ9.CSxPPECi4PvvpxzDF7ZfQnaoIRlvko1qB03ZMyHJp9I",
        },
      }
    )
      .then((res) => {
        setLoader(false);
        return res.json();
      })
      .then((value) => {
        //console.log(value)
        setListDataTutela(value.items); // salvo nel array i dati del fetch
      })
      .catch((err) => {
        console.log(err);
      });
  };

  {
    /** fetch data GET Compara Tu */
  }

  const DataComparaTu = () => {
    setLoader(true);
    fetch(
      "https://api.tu-store.soluzionitop.cloud/api/offers?sale_channel_id=4",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRVTzYiLCJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjY3OTIxNDY2LCJleHAiOjE2NzA1OTk4NjZ9.CSxPPECi4PvvpxzDF7ZfQnaoIRlvko1qB03ZMyHJp9I",
        },
      }
    )
      .then((res) => {
        setLoader(false);
        return res.json();
      })
      .then((value) => {
        //console.log(value)
        setListDataComparaTu(value.items); // salvo nel array i dati del fetch
      })
      .catch((err) => {
        console.log(err);
      });
  };

  {
    /** fetch data GET Credi Tu*/
  }
  const DataCrediTu = () => {
    setLoader(true);
    fetch(
      "https://api.tu-store.soluzionitop.cloud/api/offers?sale_channel_id=1",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRVTzYiLCJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjY3OTIxNDY2LCJleHAiOjE2NzA1OTk4NjZ9.CSxPPECi4PvvpxzDF7ZfQnaoIRlvko1qB03ZMyHJp9I",
        },
      }
    )
      .then((res) => {
        setLoader(false);
        return res.json();
      })
      .then((value) => {
        //console.log(value)
        setListDataCrediTu(value.items); // salvo nel array i dati del fetch
      })
      .catch((err) => {
        console.log(err);
      });
  };
  {
    /** fetch data GET TU MARKET*/
  }
  const DataTuMarket = () => {
    setLoader(true);
    fetch(
      "https://api.tu-store.soluzionitop.cloud/api/offers?sale_channel_id=2",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRVTzYiLCJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjY3OTIxNDY2LCJleHAiOjE2NzA1OTk4NjZ9.CSxPPECi4PvvpxzDF7ZfQnaoIRlvko1qB03ZMyHJp9I",
        },
      }
    )
      .then((res) => {
        setLoader(false);
        return res.json();
      })
      .then((value) => {
        //console.log(value)
        setListDataTuMarket(value.items); // salvo nel array i dati del fetch
      })
      .catch((err) => {
        console.log(err);
      });
  };
  {
    /** fetch data GET ASSICURA TU*/
  }
  const DataAssicuraTu = () => {
    setLoader(true);
    fetch(
      "https://api.tu-store.soluzionitop.cloud/api/offers?sale_channel_id=5",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRVTzYiLCJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjY3OTIxNDY2LCJleHAiOjE2NzA1OTk4NjZ9.CSxPPECi4PvvpxzDF7ZfQnaoIRlvko1qB03ZMyHJp9I",
        },
      }
    )
      .then((res) => {
        setLoader(false);
        return res.json();
      })
      .then((value) => {
        setListDataAssicuraTu(value.items); // salvo nel array i dati del fetch
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView
      style={{ ...ConstantStyle.container }}
      showsVerticalScrollIndicator={true}
    >
      <CustomHeader
        navigation={navigation}
        title={t("Servizi")}
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
        {loader === false ? (
          <>
            <ScrollView showsVerticalScrollIndicator={true}>
              {/* TUTELA */}
              <View>
                {listDataTutela.map((element, index) => (
                  <>
                    <TouchableOpacity
                    key={index}
                      activeOpacity={0.8}
                      onPress={() =>
                        navigation.navigate("Details", {
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
                          source={{ uri: element.partners.image }}
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

              {/* Compara Tu  */}
              <View>
                {listDataComparaTu.map((element, index) => (
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
                          style={{ width: 50, height: 15, marginRight: 15 }}
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
              {/* Credi Tu  */}
              <View>
                {listDataCrediTu.map((element, index) => (
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
                          style={{ width: 50, height: 55, marginRight: 15 }}
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
              {/* TuMarket */}
              <View>
                {listDataTuMarket.map((element, index) => (
                  <>
                    <TouchableOpacity
                    key={index}
                      activeOpacity={0.8}
                      onPress={() =>
                        navigation.navigate("Details", {
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
                          source={{ uri: element.partners.image }}
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
              {/* AssicuraTu */}
              <View>
                {listDataAssicuraTu.map((element, index) => (
                  <>
                    <TouchableOpacity
                    key={index}
                      activeOpacity={0.8}
                      onPress={() =>
                        navigation.navigate("Details", {
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
                          source={{ uri: element.partners.image }}
                          style={{ width: 45, height: 55, marginRight: 15 }}
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
