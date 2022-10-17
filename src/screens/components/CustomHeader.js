import React, { useState } from "react";
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  I18nManager,
  Dimensions,
} from "react-native";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import { Fonts } from "../../themes/fonts";
import { Colors } from "../../themes/colors";
import { Input } from "react-native-elements";
import ConstantStyle from "../../themes/styles";
import { useTranslation } from "react-i18next";

const CustomHeader = (props) => {
  //star icon coin details screen change
  const { height, width } = Dimensions.get("window");
  const { t, i18n } = useTranslation();
  const [iconName, setIconName] = useState("star-outline");
  return (
    <>
      <ImageBackground
        style={{
          width: width,
          height: props.isSearch ? height / 5.1 : height / 7.5,
          justifyContent: "flex-end",
        }}
        source={require("../../../assets/images/header.png")}
      >
        <View
          style={{
            flexDirection: "row",
            marginVertical: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {props.isMain ? null : (
            <View style={{ alignItems: "center", marginLeft: 15 }}>
              <Feather
                name={I18nManager.isRTL ? "chevron-right" : "chevron-left"}
                size={32}
                color={Colors.white}
                onPress={() => props.navigation.goBack()}
              />
            </View>
          )}
          <View style={{ flex: 1, marginHorizontal: 15 }}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignContent: "center",
              }}
            >
              <Text style={{ ...Fonts.White22Bold, alignContent: "center" }}>
                {props.title}
              </Text>
              {props.isStar ? (
                <TouchableOpacity
                  onPress={() => {
                    if (iconName == "star") {
                      setIconName("star-outline");
                    }
                    if (iconName == "star-outline") {
                      setIconName("star");
                    }
                  }}
                >
                  <MaterialCommunityIcons
                    name={iconName}
                    size={32}
                    color={Colors.white}
                  />
                </TouchableOpacity>
              ) : null}
            </View>
          </View>
        </View>
        {props.isSearch ? (
          <View style={{ marginVertical: 0 }}>
            <Input
              placeholder={t("search_placeholder")}
              containerStyle={{
                marginTop: 5,
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
                width: width - 30,
                height: 45,
              }}
              inputStyle={{ ...Fonts.Black14Medium }}
              secureTextEntry={false}
              leftIcon={
                <Ionicons name="search-sharp" size={22} color={Colors.grey} />
              }
            />
          </View>
        ) : null}
      </ImageBackground>
      <View>
        <ImageBackground
          style={{
            width: width,
            height: height / 7.5,
            ...StyleSheet.absoluteFillObject,
          }}
          source={require("../../../assets/images/header.png")}
        ></ImageBackground>
      </View>
    </>
  );
};
export default CustomHeader;
<MaterialCommunityIcons name="star-circle-outline" size={24} color="black" />;
