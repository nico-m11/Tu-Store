import React,{ useState, Component, useEffect } from "react";
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

export const Survery = ({ navigation, route }) => {
  //console.log(item);
  const { t, i18n } = useTranslation();
  const width = Dimensions.get("window").width - 60;

 
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={"Survery"} isStar={false} />
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
<Text>hjbhbbh</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
