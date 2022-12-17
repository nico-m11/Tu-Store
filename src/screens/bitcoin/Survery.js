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
import CheckBox from "react-native-check-box";
import { Input } from "react-native-elements";

export const Survery = ({ navigation, route }) => {
  //console.log(item);
  const { t, i18n } = useTranslation();
  const width = Dimensions.get("window").width - 60;
  const [isSelected, setSelection] = useState(false);

  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={t("Survery")} isStar={false} />
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
              <View  >
                <Text>{t("first_question")}</Text>
                <CheckBox 
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Bollette"}
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
                  style={{ flex: 1, padding: 10}}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"4"}
                />

                <Text>Altro</Text>
                <Input 
    
                />

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
                <Text>{t("third_question")}</Text>
                <View>
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
                <Text>{t("fourth_question")}</Text>
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

              {/**
               * settimo
               */}
              <View>
                <Text>Hai mai richiesto un finanziamento?</Text>
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
                    rightText={"Personale"}
                  />
                  <Text>con quali istituti?</Text>
                  <Input />
                  <Text>importo?</Text>
                  <Input />
                  <Text>Quando?</Text>
                  <Input />
                </View>
                <View>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Aziendale"}
                  />
                  <Text>Con quali instituti?</Text>
                  <Input />
                  <Text>Importo ?</Text>
                  <Input />
                  <Text>Quando</Text>
                  <Input />
                </View>
              </View>
              {/**
               * ottavo
               */}
              <Text>Che gestore utilizza per gas e luce ?</Text>
              <CheckBox
                style={{ flex: 1, padding: 10 }}
                // onClick={() => {
                // }}
                isChecked={isSelected}
                rightText={"Casa"}
              />
              <Input />
              <CheckBox
                style={{ flex: 1, padding: 10 }}
                // onClick={() => {
                // }}
                isChecked={isSelected}
                rightText={"Azienda"}
              />
              <Input />
              <View>
                <Text>Che gestore utilizza per il telefono e wifi?</Text>
                <Text>Casa</Text>
                <Input />
                <Text>Azienda</Text>
                <Input />
              </View>

              {/**
               * nove
               */}
              <View>
                <View>
                  <Text>Hai un abbonamento per la pay TV?</Text>
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
                <View>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"SKy"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Netflix"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Amazon Prime"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Disney+"}
                  />
                  <Text>Altro</Text>
                  <Input />
                </View>
              </View>
              {/**
               * dieci
               */}
              <View>
                <View>
                  <Text>E' present sui social network principali ?</Text>
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
                <View>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Facebook"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Instagram"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Tik Tok"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Twitter"}
                  />
                  <Text>Altro</Text>
                  <Input />
                </View>
              </View>
              {/**
               * undici
               */}
              <View>
                <View>
                  <Text>Hai un buisiness online ?</Text>
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
                <View>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Google"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Sito Web"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Ecommerce"}
                  />
                  <Text>Altro </Text>
                  <Input />
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
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Mai"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"1/3"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"3+"}
                  />
                </View>
                <View>
                  <Text>Hai un avvocato di fiducia ?</Text>
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
               * tredici
               */}
              <View>
                <View>
                  <Text>Quanto viaggi in un anno ?</Text>
                </View>
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Vacanza Quante volte?"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"<5"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"5-10"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={">10"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Solo"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Coppia"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Bambini > 12"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Gruppi"}
                />
              </View>
              <View>
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Lavoro Quante volte?"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"<3"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"3-6"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"> 6"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Sceglie l'azienda"}
                />
                <CheckBox
                  style={{ flex: 1, padding: 10 }}
                  // onClick={() => {
                  // }}
                  isChecked={isSelected}
                  rightText={"Ha autonomia di scelta"}
                />
              </View>
              {/**
               * quattordici
               */}
              <View>
                <View>
                  <Text>Per la prossima vacanza sceglieresti:</Text>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Europa/mediterraneo"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Lungo raggio"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Villaggio"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Crociera"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Città e tour "}
                  />
                </View>
                <View>
                  <Text>Come prenota i viaggi ?</Text>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"smartphone"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Online"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Agenzia Viaggi"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"Altro"}
                  />
                  <Input />
                </View>
              </View>

              {/**
               * finale accetto trattamento dei dati
               */}
              <View>
                <View>
                  <Text>
                    Io sottoscritto, dichiarando di aver le6o e compreso
                    l’informativa sopra riportata ai sensi dell'art. 13 del GDPR
                    2016/679 e presto il mio consenso per le seguente finalità:
                  </Text>
                  <Text>
                    3.1.a) al tra6amento dei miei da4 personali per le finalità
                    di marke4ng dire6o del Titolare o della società controllate
                    o controllan4 (al fine di ricevere newsle6ers, materiale
                    informa4vo, promozionale e/o partecipare a ricerche di
                    mercato, mediante tu] i mezzi di comunicazione disponibili,
                    automa4zza4 e non, anche a6raverso società terze
                    specializzate)
                  </Text>
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
                    rightText={"NO"}
                  />
                  <Text>
                    3.1.b) al tra6amento dei miei da4 personali per finalità di
                    profilazione delle tue potenziali abitudini, le preferenze
                    personali, gli interessi, il comportamento, l’ubicazione,
                    per poter4 offrire prodo] e servizi sempre più ada] ai tuoi
                    reali interessi ed esigenze e poter elaborare offerte e
                    comunicazioni commerciali personalizzate.
                  </Text>
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
                    rightText={"NO"}
                  />
                  <Text>
                    3.1.c) comunicazione dei miei da4 personali a sogge] Terzi
                    (es. aziende partner commerciali) per le loro proprie
                    finalità di marke4ng al fine di ricevere offerte
                    personalizzate di beni o servizi a]nen4 i servizi richies4.
                  </Text>
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"SI"}
                  />
                  <CheckBox
                    style={{ flex: 1, padding: 10 }}
                    // onClick={() => {
                    // }}
                    isChecked={isSelected}
                    rightText={"NO"}
                  />
                </View>

              </View>
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
