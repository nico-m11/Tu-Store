import React, { useState } from "react";
import { SafeAreaView, Text, View, ScrollView } from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Colors } from "../../themes/colors";
import CustomHeader from "../components/CustomHeader";
import ImgPicker from "../components/ImagePicker";
import { Input } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import MainButton from "../components/MainButton";
import { useToast, Box } from "native-base";
import { useTranslation } from "react-i18next";

export const EditProfile = ({ navigation, route }) => {
  const { t, i18n } = useTranslation();
  //image picker
  const [selectedImage, setSelectedImage] = useState();
  const imageTakenHandler = (imagePath) => {
    setSelectedImage(imagePath);
  };
  // password show and hide
  const [show, setShow] = useState(false);
  const passwordShow = () => setShow(!show);
  //toast show
  const toast = useToast();
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={t("edit_profile")} />
      <View
        style={{
          backgroundColor: Colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={{ marginTop: 15 }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <ImgPicker onImageTaken={imageTakenHandler} />
            <View style={{ flexDirection: "column", flex: 1 }}>
              <View style={{ marginTop: 20, flex: 3 }}>
                <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                  {t("name_label")}
                </Text>
                <Input
                  placeholder={t("name_label")}
                  containerStyle={{
                    marginTop: 8,
                    marginBottom: -10,
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    width: "97%",
                    height: 45,
                  }}
                  inputStyle={{ ...Fonts.Black14Medium }}
                  secureTextEntry={false}
                />
                <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                  {t("email_label")}
                </Text>
                <Input
                  placeholder={t("email_placeholder")}
                  containerStyle={{
                    marginTop: 8,
                    marginBottom: -10,
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    width: "97%",
                    height: 45,
                  }}
                  inputStyle={{ ...Fonts.Black14Medium }}
                  keyboardType="email-address"
                  secureTextEntry={false}
                />
                <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                  {t("mobile_label")}
                </Text>
                <Input
                  placeholder={t("mobile_placeholder")}
                  containerStyle={{
                    marginTop: 8,
                    marginBottom: -10,
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    width: "97%",
                    height: 45,
                  }}
                  inputStyle={{ ...Fonts.Black14Medium }}
                  secureTextEntry={false}
                  keyboardType="number-pad"
                />
                <Text style={{ ...Fonts.Grey14Bold, marginHorizontal: 15 }}>
                  {t("password_label")}
                </Text>
                <Input
                  placeholder={t("password_label")}
                  containerStyle={{
                    marginTop: 8,
                    marginBottom: -18,
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                  inputContainerStyle={{
                    borderBottomWidth: 0,
                    ...ConstantStyle.shadow,
                    backgroundColor: Colors.white,
                    borderRadius: 10,
                    paddingHorizontal: 15,
                    width: "97%",
                    height: 45,
                  }}
                  inputStyle={{ ...Fonts.Black14Medium }}
                  rightIcon={
                    <Ionicons
                      name={show ? "eye" : "eye-off"}
                      color={Colors.grey}
                      size={20}
                      style={{ marginLeft: 15 }}
                      onPress={passwordShow}
                    />
                  }
                  secureTextEntry={show ? false : true}
                />
              </View>
              <View
                style={{
                  marginHorizontal: 15,
                  flex: 1,
                  justifyContent: "flex-end",
                  marginVertical: 40,
                }}
              >
                <MainButton
                  name={t("update")}
                  onPress={() => {
                    navigation.navigate("Profile"),
                      toast.show({
                        render: () => {
                          return (
                            <Box
                              bg={{
                                linearGradient: {
                                  colors: ["#0076DE", "#00D6D6"],
                                  start: [0, 0],
                                  end: [1, 0],
                                },
                              }}
                              px="4"
                              py="2"
                              rounded="md"
                              mb={5}
                              _text={{ ...Fonts.White14Medium }}
                            >
                              {t("profile_updated")}
                            </Box>
                          );
                        },
                      });
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
