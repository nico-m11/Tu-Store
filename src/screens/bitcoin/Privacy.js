import React, { useState } from "react";
import { SafeAreaView, Text, View,ScrollView} from "react-native";
import MainButton from "../components/MainButton";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { useTranslation } from "react-i18next";
import { value, CheckBox } from "@rneui/base";

export const Privacy = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
  const [checked, setChecked] = useState(false);
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={t("privacy_policy")} />
      <ScrollView>
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={{ marginHorizontal: 15, marginVertical: 25 }}>
              <MainButton name={t("questions")}  onPress={() =>
                        navigation.navigate("Survery", {
                          //item: element,
                        })
                      } />
        </View>
        
        <View style={{ marginTop: 15, marginHorizontal: 15 }}>
        <View>
                <View>
                  <Text style={{ ...Fonts.Black14Medium }}>
                    Io sottoscritto, dichiarando di aver letto e compreso
                    l’informativa sopra riportata ai sensi dell'art. 13 del GDPR
                    2016/679 e presto il mio consenso per le seguente finalità:
                  </Text>
                  <Text style={{ ...Fonts.Black14Medium }}>
                    3.1.a) al tra6amento dei miei da4 personali per le finalità
                    di marke4ng dire6o del Titolare o della società controllate
                    o controllan4 (al fine di ricevere newsle6ers, materiale
                    informa4vo, promozionale e/o partecipare a ricerche di
                    mercato, mediante tu] i mezzi di comunicazione disponibili,
                    automa4zza4 e non, anche a6raverso società terze
                    specializzate)
                  </Text>

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
                  <Text style={{ ...Fonts.Black14Medium }}>
                      3.1.b) al tra6amento dei miei da4 personali per finalità di
                    profilazione delle tue potenziali abitudini, le preferenze
                    personali, gli interessi, il comportamento, l’ubicazione,
                    per poter4 offrire prodo] e servizi sempre più ada] ai tuoi
                    reali interessi ed esigenze e poter elaborare offerte e
                    comunicazioni commerciali personalizzate.
                  </Text>
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
                  <Text style={{ ...Fonts.Black14Medium }}>
                    3.1.c) comunicazione dei miei da4 personali a sogge] Terzi
                    (es. aziende partner commerciali) per le loro proprie
                    finalità di marke4ng al fine di ricevere offerte
                    personalizzate di beni o servizi a]nen4 i servizi richies4.
                  </Text>
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
          <Text style={{ ...Fonts.Black18Bold }}>{t("treatment")}</Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("Text_treatment")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}> {t("object")} </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("Text_object")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}> {t("treatment_low")} </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("tratment_low_text")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}> {t("mood_treat")} </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("mood_text")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}> {t("data_consequence")} </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("data_con_text")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}> {t("data_access")} </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("data_access_text")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}> {t("data_comunication")} </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("data_com_text")}</Text>
          <Text style={{ ...Fonts.Black18Bold, marginTop: 15 }}> {t("Rights")} </Text>
          <Text style={{ ...Fonts.Black14Medium }}>{t("rights_text")}</Text>

        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};
