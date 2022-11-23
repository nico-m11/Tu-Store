import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { LinearGradient } from "expo-linear-gradient";
import { LineChart } from "react-native-chart-kit";
import { Link } from "native-base";
import { useTranslation } from "react-i18next";
import * as DocumentPicker from "expo-document-picker";

export const Details = ({ navigation, route }) => {
  const item = route.params.item;
  //console.log(item);
  const { t, i18n } = useTranslation();
  const width = Dimensions.get("window").width - 60;

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});

    alert(result.uri);

    console.log(result);
  };

  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={item.name} isStar={false} />
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
            <View
              style={{
                backgroundColor: Colors.white,
                // borderRadius: 10,
                //marginTop: 10,
                marginHorizontal: 15,
                //marginBottom: 25,
                paddingTop: 15,
              }}
            >
              <View style={{ alignItems: "center" }}>
                <Image
                  source={{ uri: item.partners.image }}
                  style={{
                    width: "100%",
                    height: 200,
                    marginTop: 0,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    ...Fonts.Black16Regular,
                    textAlign: "center",
                    marginTop: 20,
                  }}
                >
                  {item.appDescription.map((el) => el.description)}
                </Text>

                <Text
                  style={{
                    ...Fonts.Green14Medium,
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Price: {item.value !== "0" ? item.value + "€" : "0€"}
                </Text>

                <Text
                  style={{
                    ...Fonts.Red14Medium,
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Cashback:{" "}
                  {item.appCashback.map((el) =>
                    " cash " + el.cashback !== 0
                      ? el.cashback + "" + "€"
                      : 0 + "" + "€"
                  )}
                </Text>
              </View>
              <View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button title="Select Document" onPress={pickDocument} />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
