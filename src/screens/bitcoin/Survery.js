import React, { useState, Component, useEffect } from "react";
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
import CheckBox from "react-native-check-box";
import { Input } from "react-native-elements";

export const Survery = ({ navigation, route }) => {
  //console.log(item);
  const { t, i18n } = useTranslation();
  const width = Dimensions.get("window").width - 60;
  const [isSelected, setSelection] = useState(false);

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
              {/**
               * first questiion
               */}
              <View>
                <Text>{t("first_question")}</Text>
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"BOllette"}
                />

                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Affitto"}
                />

                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"trasporti"}
                />

                <Text>Altro</Text>
                <Input />
              </View>
              {/**
               * secondo question
               */}
              <View>
                <Text>{t("second_question")}</Text>
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"1"}
                />

                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"2"}
                />

                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"3"}
                />

                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"4"}
                />

                <Text>Altro</Text>
                <Input />

                <View>
                  <Text>{t("secondo_media question")}</Text>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"1"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"2"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"3"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"4"}
                  />
                  <Text>Altro</Text>
                  <Input />
                </View>
              </View>

              {/**
               * terz question
               */}
              <View>
                <Text>{t("terz question")}</Text>
                <View>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"No"}
                  />
                  <Input />
                </View>
                <View>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Dipendente"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"<10k"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"11-30k"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"31-50k"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={">50k"}
                  />
                </View>

                <View>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Autonomi"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"<250k"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"250-500k"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={">500k"}
                  />
                </View>
              </View>

              {/**
               * quart question
               */}

              <View>
                <Text>Hai Beni Di Proprietà</Text>
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"si"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"No"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Immobiliare"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Veicoli"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Preziosi"}
                />
                <Text>Altro</Text>
                <Input />

                <View>
                  <Text>Sono assicurati?</Text>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Si"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"No"}
                  />
                </View>
              </View>

              {/**
               * quint question
               */}

              <View>
                <Text>Hai assicurazioni a veicoli</Text>
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Si"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"No"}
                />
                <View>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Auto"}
                  />
                  <Input />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"moto"}
                  />
                  <Input />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Mezzi"}
                  />
                  <Input />
                </View>
              </View>

              {/**
               * sest
               */}
              <View>
                <Text>Hai altre assicurazioni ?</Text>
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Si"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"No"}
                />
                <View>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Vita"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Infortuni"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Responsabilità civile"}
                  />
                  <Text>Altro</Text>
                  <Input />
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
