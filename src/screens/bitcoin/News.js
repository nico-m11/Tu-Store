import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import CustomHeader from "../components/CustomHeader";
import Images from "../../themes/Images";
import { useTranslation } from "react-i18next";

export const NewsScreen = ({ navigation }) => {
  const NewData = [
    {
      id: 1,
      image: Images.news1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ipsum, in.",
      date: "12-02-2021",
    },
    {
      id: 2,
      image: Images.news2,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ipsum, in.",
      date: "12-02-2021",
    },
    {
      id: 3,
      image: Images.news3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ipsum, in.",
      date: "12-02-2021",
    },
    {
      id: 4,
      image: Images.news4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ipsum, in.",
      date: "12-02-2021",
    },
    {
      id: 5,
      image: Images.news5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ipsum, in.",
      date: "12-02-2021",
    },
    {
      id: 6,
      image: Images.news6,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ipsum, in.",
      date: "12-02-2021",
    },
    {
      id: 7,
      image: Images.news7,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ipsum, in.",
      date: "12-02-2021",
    },
    {
      id: 8,
      image: Images.news8,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ipsum, in.",
      date: "12-02-2021",
    },
    {
      id: 9,
      image: Images.news9,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ipsum, in.",
      date: "12-02-2021",
    },
    {
      id: 10,
      image: Images.news10,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque aliquam ipsum, in.",
      date: "12-02-2021",
    },
  ];
  const { height, width } = Dimensions.get("window");
  const { t, i18n } = useTranslation();
  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader title={t("news")} navigation={navigation} />
      <View
        style={{
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={{ marginTop: 15 }}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              marginVertical: 10,
            }}
          >
            {NewData.length > 0
              ? NewData.map((item, index) => {
                  return (
                    <TouchableOpacity
                      key={index + ""}
                      activeOpacity={0.7}
                      onPress={() => navigation.navigate("NewsDetails")}
                      style={{
                        flexDirection: "row",
                        marginHorizontal: 15,
                        marginBottom: 15,
                        alignItems: "center",
                      }}
                    >
                      <View style={{ flex: 0.85 }}>
                        <Image
                          style={{
                            width: width * 0.25,
                            height: 85,
                            borderRadius: 10,
                          }}
                          source={item.image}
                        />
                      </View>
                      <View style={{ flex: 2 }}>
                        <Text
                          style={{ ...Fonts.Black14Medium, textAlign: "left" }}
                        >
                          {item.text}
                        </Text>
                        <Text
                          style={{ ...Fonts.Grey12Medium, textAlign: "left" }}
                        >
                          {item.date}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                })
              : null}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
