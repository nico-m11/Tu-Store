import React, { useState, useEffect } from "react";
import { SafeAreaView, View, StyleSheet, TouchableOpacity } from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import { Radio } from "native-base";
import { useTranslation } from "react-i18next";
import { getLanguage, setLanguage } from "../../navigation/AccountNavigator";
import Loader from "../components/Loader";

export const Language = ({ navigation, route }) => {
  const [languageCode, setLanguageCode] = useState();
  const { t, i18n } = useTranslation();
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    selectedLanguage();
  }, []);

  async function selectedLanguage() {
    try {
      setLoader(true);
      const language = await getLanguage();
      language !== null ? setLanguageCode(language) : null;
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  }

  async function changeLanguage(code) {
    try {
      setLoader(true);
      await setLanguage(code).then((res) => {
        setLanguageCode(code);
        setLoader(false);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <SafeAreaView
      style={{
        ...ConstantStyle.container,
      }}
    >
      <CustomHeader navigation={navigation} title={t("languages")} />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={{ marginTop: 15, marginHorizontal: 15 }}>
          <Radio.Group
            value={languageCode}
            onChange={(code) => {
              changeLanguage(code);
            }}
          >
            <TouchableOpacity
              style={{ ...styles.languageOption, ...ConstantStyle.shadow }}
              onPress={() => changeLanguage("en")}
            >
              <Radio
                value="en"
                colorScheme="primary"
                size="lg"
                my={1}
                _text={{ ...Fonts.Black16Regular }}
              >
                {t("english")}
              </Radio>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.languageOption,
                ...ConstantStyle.shadow,
              }}
              onPress={() => changeLanguage("hi")}
            >
              <Radio
                value="hi"
                colorScheme="primary"
                size="lg"
                my={1}
                _text={{ ...Fonts.Black16Regular }}
              >
                {t("hindi")}
              </Radio>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.languageOption, ...ConstantStyle.shadow }}
              onPress={() => changeLanguage("ar")}
            >
              <Radio
                value="ar"
                colorScheme="primary"
                size="lg"
                my={1}
                _text={{ ...Fonts.Black16Regular }}
              >
                {t("arabic")}
              </Radio>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.languageOption, ...ConstantStyle.shadow }}
              onPress={() => changeLanguage("id")}
            >
              <Radio
                value="id"
                colorScheme="primary"
                size="lg"
                my={1}
                _text={{ ...Fonts.Black16Regular }}
              >
                {t("indonesian")}
              </Radio>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.languageOption, ...ConstantStyle.shadow }}
              onPress={() => changeLanguage("chi")}
            >
              <Radio
                value="chi"
                colorScheme="primary"
                size="lg"
                my={1}
                _text={{ ...Fonts.Black16Regular }}
              >
                {t("chinese")}
              </Radio>
            </TouchableOpacity>
          </Radio.Group>
        </View>
      </View>
      <Loader visible={loader} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  languageOption: {
    width: "99%",
    backgroundColor: Colors.white,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    marginTop: 12,
    justifyContent: "space-between",
  },
});
