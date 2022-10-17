import React, { useState } from "react";
import { Modal, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { Colors } from "../../themes/colors";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { Fontisto } from "@expo/vector-icons";
import StarRating from "react-native-star-rating";
import MainButton from "./MainButton";
import { useTranslation } from "react-i18next";

const FeedbackModel = (props) => {
  const { t, i18n } = useTranslation();
  const { height, width } = Dimensions.get("window");
  //star rating
  const [startCount, setStarCount] = useState(2);
  return (
    <Modal animationType="fade" transparent={true} visible={props.modalVisible}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000000cd",
        }}
      >
        <View
          style={{
            width: width - 60,
            backgroundColor: Colors.white,
            borderRadius: 10,
            alignItems: "center",
            paddingBottom: 20,
            ...ConstantStyle.shadow,
          }}
        >
          <View
            style={{
              width: 160,
              height: 160,
              backgroundColor: Colors.white,
              borderRadius: 100,
              alignSelf: "center",
              alignItems: "center",
              justifyContent: "center",
              top: -80,
              marginBottom: -80,
              ...ConstantStyle.shadow,
            }}
          >
            <Fontisto name="like" size={85} color={Colors.primary} />
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: 20,
            }}
          >
            <Text style={{ ...Fonts.Black22Bold, marginVertical: 15 }}>
              {t("feedback_text")}
            </Text>
            <Text style={{ ...Fonts.Grey16Medium, textAlign: "center" }}>
              {t("feedback_sub_text")}
            </Text>
          </View>
          <View style={{ marginVertical: 10 }}>
            <StarRating
              disabled={false}
              emptyStar="star-o"
              fullStar="star"
              iconSet="FontAwesome"
              maxStars={5}
              rating={startCount}
              selectedStar={(rating) => setStarCount(rating)}
              fullStarColor={Colors.yellow}
              emptyStarColor={Colors.grey}
              starStyle={{ marginTop: 15, marginHorizontal: 10 }}
              starSize={45}
            />
          </View>
          <View style={{ width: "50%", marginTop: 15 }}>
            <MainButton name={t("submit")} onPress={props.onPress} />
          </View>
          <TouchableOpacity activeOpacity={0.7} onPress={props.cancleModel}>
            <Text
              style={{
                ...Fonts.Primary16Bold,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              {t("not_now")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};
export default FeedbackModel;
