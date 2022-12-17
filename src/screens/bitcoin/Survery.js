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
  ViewBase,
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
import { value, CheckBox } from "@rneui/base";
import { Input } from "react-native-elements";

export const Survery = ({ navigation, route }) => {
  //console.log(item);
  const { t, i18n } = useTranslation();
  const width = Dimensions.get("window").width - 60;
  //definisco tutte le checkbox assegnando ad ogni uno la propria variabile
  const [checked, setChecked] = useState(false); // togliere quando creato tutto
  // prima domanda
  const [checkBollette, setCheckBollette] = useState(false);
  const [checkAffitto, setCheckAffitto] = useState(false);
  const [checktrasporti, setCheckTraporti] = useState(false);
  // seconda domanda
  const [checknumberFamily1, setChecknumberFamily1] = useState(false);
  const [checknumberFamily2, setChecknumberFamily2] = useState(false);
  const [checknumberFamily3, setChecknumberFamily3] = useState(false);
  const [checknumberFamily4, setChecknumberFamily4] = useState(false);

  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader
        navigation={navigation}
        title={t("Survery")}
        isStar={false}
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
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checkBollette}
                  checkedColor="blue"
                  checkedTitle={t("Bollette")}
                  onIconPress={() => setCheckBollette(!checkBollette)}
                  size={30}
                  title={t("Bollette")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checkAffitto}
                  checkedColor="blue"
                  checkedTitle={t("Affitto")}
                  onIconPress={() => setCheckAffitto(!checkAffitto)}
                  size={30}
                  title={t("Affitto")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checktrasporti}
                  checkedColor="blue"
                  checkedTitle={t("Trasport")}
                  onIconPress={() => setCheckTraporti(!checktrasporti)}
                  size={30}
                  title={t("Trasporti")}
                  uncheckedColor="#e0e0e0"
                />

                <Text>Altro</Text>
                <Input
                  placeholder={t("Altro")}
                  containerStyle={{
                    marginTop: 8,
                    marginBottom: -10,
                    alignItems: "left",
                    justifyContent: "start",
                    textAlign: "center",
                  }}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    width: width - 30,
                    height: 45,
                  }}
                  inputStyle={{ ...Fonts.Black14Medium }}
                  secureTextEntry={false}
                  //defaultValue= {linkedin}
                  // onChangeText={onChangeField('linkedin')}
                  //onChangeText={newText => setLinkedin(newText)}
                />
              </View>
              {/**
               * secondo question
               */}
              <View>
                <Text>{t("second_question")}</Text>
                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checknumberFamily1}
                  checkedColor="blue"
                  checkedTitle={t("1")}
                  onIconPress={() => setChecknumberFamily1(!checknumberFamily1)}
                  size={30}
                  title={t("1")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checknumberFamily2}
                  checkedColor="blue"
                  checkedTitle={t("2")}
                  onIconPress={() => setChecknumberFamily2(!checknumberFamily2)}
                  size={30}
                  title={t("2")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checknumberFamily3}
                  checkedColor="blue"
                  checkedTitle={t("3")}
                  onIconPress={() => setChecknumberFamily3(!checknumberFamily3)}
                  size={30}
                  title={t("3")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checknumberFamily4}
                  checkedColor="blue"
                  checkedTitle={t("4")}
                  onIconPress={() => setChecknumberFamily4(!checknumberFamily4)}
                  size={30}
                  title={t("4")}
                  uncheckedColor="#e0e0e0"
                />

                <Text>Altro</Text>
                <Input
                  placeholder={t("Altro")}
                  containerStyle={{
                    marginTop: 8,
                    marginBottom: -10,
                    alignItems: "left",
                    justifyContent: "start",
                    textAlign: "center",
                  }}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    width: width - 30,
                    height: 45,
                  }}
                  inputStyle={{ ...Fonts.Black14Medium }}
                  secureTextEntry={false}
                  //defaultValue= {linkedin}
                  // onChangeText={onChangeField('linkedin')}
                  //onChangeText={newText => setLinkedin(newText)}
                />

                <View>
                  <Text>{t("secondo_media question")}</Text>
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("1")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("1")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("2")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("2")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("3")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("3")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("4")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("4")}
                    uncheckedColor="#e0e0e0"
                  />
                  <Text>Altro</Text>
                  <Input
                    placeholder={t("Altro")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                </View>
              </View>

              {/**
               * terz question
               */}
              <View>
                <Text>{t("third_question")}</Text>
                <View>
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Si")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Si")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("No")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("No")}
                    uncheckedColor="#e0e0e0"
                  />
                  <Input
                    placeholder={t("Altro")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                </View>
                <View>
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Dipendente")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Dipendente")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("<10K")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("<10k")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("11-30k")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("11-30k")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("31-50k")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("31-50k")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t(">50k")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t(">50k")}
                    uncheckedColor="#e0e0e0"
                  />
                </View>

                <View>
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Autonomi")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Autonomi")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("<250k")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("<250k")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("250-500k")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("250-500k")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t(">500k")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t(">500k")}
                    uncheckedColor="#e0e0e0"
                  />
                </View>
              </View>

              {/**
               * quart question
               */}

              <View>
                <Text>{t("fourth_question")}</Text>

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Si")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Si")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("No")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("No")}
                  uncheckedColor="#e0e0e0"
                />
                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Immobilire")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Immobiliare")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Veicoli")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Veicoli")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Preziosi")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Preziosi")}
                  uncheckedColor="#e0e0e0"
                />
                <Text>Altro</Text>
                <Input
                  placeholder={t("Altro")}
                  containerStyle={{
                    marginTop: 8,
                    marginBottom: -10,
                    alignItems: "left",
                    justifyContent: "start",
                    textAlign: "center",
                  }}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    width: width - 30,
                    height: 45,
                  }}
                  inputStyle={{ ...Fonts.Black14Medium }}
                  secureTextEntry={false}
                  //defaultValue= {linkedin}
                  // onChangeText={onChangeField('linkedin')}
                  //onChangeText={newText => setLinkedin(newText)}
                />

                <View>
                  <Text>Sono assicurati?</Text>

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Si")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Si")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("No")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("No")}
                    uncheckedColor="#e0e0e0"
                  />
                </View>
              </View>

              {/**
               * quint question
               */}

              <View>
                <Text>Hai assicurazioni a veicoli</Text>

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Si")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Si")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("No")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("No")}
                  uncheckedColor="#e0e0e0"
                />
                <View>
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Auto")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Auto")}
                    uncheckedColor="#e0e0e0"
                  />
                  <Input
                    placeholder={t("Altro")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Moto")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Moto")}
                    uncheckedColor="#e0e0e0"
                  />
                  <Input
                    placeholder={t("Altro")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Mezzi")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Mezzi")}
                    uncheckedColor="#e0e0e0"
                  />
                  <Input
                    placeholder={t("Altro")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                </View>
              </View>

              {/**
               * sest
               */}
              <View>
                <Text>Hai altre assicurazioni ?</Text>

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Si")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Si")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("No")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("No")}
                  uncheckedColor="#e0e0e0"
                />
                <View>
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Vita")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Vita")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Infortuni")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Infortuni")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Responsabilità civile")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Responsabilità civile")}
                    uncheckedColor="#e0e0e0"
                  />
                  <Text>Altro</Text>
                  <Input
                    placeholder={t("Altro")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                </View>
              </View>

              {/**
               * settimo
               */}
              <View>
                <Text>Hai mai richiesto un finanziamento?</Text>

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Si")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Si")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("No")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("No")}
                  uncheckedColor="#e0e0e0"
                />
                <View>
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Personale")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Personale")}
                    uncheckedColor="#e0e0e0"
                  />
                  <Text>con quali istituti?</Text>
                  <Input
                    placeholder={t("Con quali instituti?")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                  <Text>importo?</Text>
                  <Input
                    placeholder={t("Importo")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                  <Text>Quando?</Text>
                  <Input
                    placeholder={t("Quando")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                </View>
                <View>
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Azindale")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Azindale")}
                    uncheckedColor="#e0e0e0"
                  />
                  <Text>Con quali instituti?</Text>
                  <Input
                    placeholder={t("Con quali instituzioni")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                  <Text>Importo ?</Text>
                  <Input
                    placeholder={t("Importo")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                  <Text>Quando</Text>
                  <Input
                    placeholder={t("Quando")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                </View>
              </View>
              {/**
               * ottavo
               */}
              <Text>Che gestore utilizza per gas e luce ?</Text>

              <CheckBox
                style={{ backgroundColor: "#e0e0e0" }}
                left
                checked={checked}
                checkedColor="blue"
                checkedTitle={t("Casa")}
                onIconPress={() => setChecked(!checked)}
                size={30}
                title={t("Casa")}
                uncheckedColor="#e0e0e0"
              />
              <Input
                placeholder={t("Casa")}
                containerStyle={{
                  marginTop: 8,
                  marginBottom: -10,
                  alignItems: "left",
                  justifyContent: "start",
                  textAlign: "center",
                }}
                inputContainerStyle={{
                  borderBottomWidth: 0,
                  ...ConstantStyle.shadow,
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  width: width - 30,
                  height: 45,
                }}
                inputStyle={{ ...Fonts.Black14Medium }}
                secureTextEntry={false}
                //defaultValue= {linkedin}
                // onChangeText={onChangeField('linkedin')}
                //onChangeText={newText => setLinkedin(newText)}
              />

              <CheckBox
                style={{ backgroundColor: "#e0e0e0" }}
                left
                checked={checked}
                checkedColor="blue"
                checkedTitle={t("Azienda")}
                onIconPress={() => setChecked(!checked)}
                size={30}
                title={t("Azienda")}
                uncheckedColor="#e0e0e0"
              />
              <Input
                placeholder={t("Azienda")}
                containerStyle={{
                  marginTop: 8,
                  marginBottom: -10,
                  alignItems: "left",
                  justifyContent: "start",
                  textAlign: "center",
                }}
                inputContainerStyle={{
                  borderBottomWidth: 0,
                  ...ConstantStyle.shadow,
                  backgroundColor: Colors.white,
                  borderRadius: 10,
                  paddingHorizontal: 15,
                  width: width - 30,
                  height: 45,
                }}
                inputStyle={{ ...Fonts.Black14Medium }}
                secureTextEntry={false}
                //defaultValue= {linkedin}
                // onChangeText={onChangeField('linkedin')}
                //onChangeText={newText => setLinkedin(newText)}
              />
              <View>
                <Text>Che gestore utilizza per il telefono e wifi?</Text>
                <Text>Casa</Text>
                <Input
                  placeholder={t("Casa")}
                  containerStyle={{
                    marginTop: 8,
                    marginBottom: -10,
                    alignItems: "left",
                    justifyContent: "start",
                    textAlign: "center",
                  }}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    width: width - 30,
                    height: 45,
                  }}
                  inputStyle={{ ...Fonts.Black14Medium }}
                  secureTextEntry={false}
                  //defaultValue= {linkedin}
                  // onChangeText={onChangeField('linkedin')}
                  //onChangeText={newText => setLinkedin(newText)}
                />
                <Text>Azienda</Text>
                <Input
                  placeholder={t("Azinda")}
                  containerStyle={{
                    marginTop: 8,
                    marginBottom: -10,
                    alignItems: "left",
                    justifyContent: "start",
                    textAlign: "center",
                  }}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    width: width - 30,
                    height: 45,
                  }}
                  inputStyle={{ ...Fonts.Black14Medium }}
                  secureTextEntry={false}
                  //defaultValue= {linkedin}
                  // onChangeText={onChangeField('linkedin')}
                  //onChangeText={newText => setLinkedin(newText)}
                />
              </View>

              {/**
               * nove
               */}
              <View>
                <View>
                  <Text>Hai un abbonamento per la pay TV?</Text>

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Si")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Si")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("No")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("No")}
                    uncheckedColor="#e0e0e0"
                  />
                </View>
                <View>
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Sky")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Sky")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Netflix")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Netflix")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Amazon Prime")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Amazon Prime")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Disney +")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Display +")}
                    uncheckedColor="#e0e0e0"
                  />
                  <Text>Altro</Text>
                  <Input
                    placeholder={t("Altro")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                </View>
              </View>
              {/**
               * dieci
               */}
              <View>
                <View>
                  <Text>E' present sui social network principali ?</Text>

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Si")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Si")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("No")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("No")}
                    uncheckedColor="#e0e0e0"
                  />
                </View>
                <View>
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Facebook")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Facebook")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Instagram")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Instagram")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Tik Tok")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Tik Tok")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Twitter")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Twitter")}
                    uncheckedColor="#e0e0e0"
                  />

                  <Text>Altro</Text>
                  <Input
                    placeholder={t("Altro")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                </View>
              </View>
              {/**
               * undici
               */}
              <View>
                <View>
                  <Text>Hai un buisiness online ?</Text>

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Si")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Si")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("No")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("No")}
                    uncheckedColor="#e0e0e0"
                  />
                </View>
                <View>
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Google")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Google")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Sito Web")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Sito Web")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("E-commerce")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("E-commerce")}
                    uncheckedColor="#e0e0e0"
                  />
                  <Text>Altro </Text>
                  <Input
                    placeholder={t("Altro")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                </View>
              </View>
              {/**
               * dodici
               */}
              <View>
                <View>
                  <Text>
                    Quante volte nell'ultimo anno ti sri rivolto/a ad un legale?
                  </Text>

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Mai")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Mai")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("1/3")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("1/3")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("3+")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("3+")}
                    uncheckedColor="#e0e0e0"
                  />
                </View>
                <View>
                  <Text>Hai un avvocato di fiducia ?</Text>

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Si")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Si")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("No")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("No")}
                    uncheckedColor="#e0e0e0"
                  />
                </View>
              </View>
              {/**
               * tredici
               */}
              <View>
                <View>
                  <Text>Quanto viaggi in un anno ?</Text>
                </View>

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Vacanza quante volte?")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Responsabilità civile")}
                  uncheckedColor="#e0e0e0"
                />
                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("<5")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("<5")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("5-10")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("5-10")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t(">10")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t(">10")}
                  uncheckedColor="#e0e0e0"
                />
                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Solo")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Solo")}
                  uncheckedColor="#e0e0e0"
                />
                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Coppia")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Coppia")}
                  uncheckedColor="#e0e0e0"
                />
                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Bambini > 12")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Bambini > 12")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Gruppi")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Gruppi")}
                  uncheckedColor="#e0e0e0"
                />
              </View>
              <View>
                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Lavoro quante volte?")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Responsabilità civile")}
                  uncheckedColor="#e0e0e0"
                />
                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("<3")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("<3")}
                  uncheckedColor="#e0e0e0"
                />
                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("3-6")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("3-6")}
                  uncheckedColor="#e0e0e0"
                />

                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("> 6")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("> 6")}
                  uncheckedColor="#e0e0e0"
                />
                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Sceglie l'azienda")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Responsabilità civile")}
                  uncheckedColor="#e0e0e0"
                />
                <CheckBox
                  style={{ backgroundColor: "#e0e0e0" }}
                  left
                  checked={checked}
                  checkedColor="blue"
                  checkedTitle={t("Ha un autonomia di scelta")}
                  onIconPress={() => setChecked(!checked)}
                  size={30}
                  title={t("Responsabilità civile")}
                  uncheckedColor="#e0e0e0"
                />
              </View>
              {/**
               * quattordici
               */}
              <View>
                <View>
                  <Text>Per la prossima vacanza sceglieresti:</Text>

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Europa/mediterraneo")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Europa/Mediterraneo")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Lungo raggio")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Lungo raggio")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Villaggio")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Villaggio")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Crociera")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Crociera")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Città e tour")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Città e tour")}
                    uncheckedColor="#e0e0e0"
                  />
                </View>
                <View>
                  <Text>Come prenota i viaggi ?</Text>

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Smartphone")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Smartphone")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Online")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Online")}
                    uncheckedColor="#e0e0e0"
                  />
                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Agenzia viaggi")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Agenzia Viaggi")}
                    uncheckedColor="#e0e0e0"
                  />

                  <CheckBox
                    style={{ backgroundColor: "#e0e0e0" }}
                    left
                    checked={checked}
                    checkedColor="blue"
                    checkedTitle={t("Altro")}
                    onIconPress={() => setChecked(!checked)}
                    size={30}
                    title={t("Altro")}
                    uncheckedColor="#e0e0e0"
                  />
                  <Input
                    placeholder={t("Altro")}
                    containerStyle={{
                      marginTop: 8,
                      marginBottom: -10,
                      alignItems: "left",
                      justifyContent: "start",
                      textAlign: "center",
                    }}
                    inputContainerStyle={{
                      borderBottomWidth: 0,
                      ...ConstantStyle.shadow,
                      backgroundColor: Colors.white,
                      borderRadius: 10,
                      paddingHorizontal: 15,
                      width: width - 30,
                      height: 45,
                    }}
                    inputStyle={{ ...Fonts.Black14Medium }}
                    secureTextEntry={false}
                    //defaultValue= {linkedin}
                    // onChangeText={onChangeField('linkedin')}
                    //onChangeText={newText => setLinkedin(newText)}
                  />
                </View>
              </View>

              {/**
               * finale accetto trattamento dei dati
               */}
              <View>
                <Text>
                  Tu-Store Italia Srl Via Guglielmo Marconi 29/E - 40122 Bologna
                  (Bo) – Tel 051 0476483 – tustoreitaliasrl@pec.it CF., Registro
                  Imprese Bologna e P.Iva 04005321205
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
