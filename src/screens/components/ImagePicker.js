import React, { useState } from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Actionsheet, useDisclose } from "native-base";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Fonts } from "../../themes/fonts";
import ConstantStyle from "../../themes/styles";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";

const ImgPicker = (props) => {
  const { t, i18n } = useTranslation();
  //default image
  const [pickedImage, setPickedImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy8F8WkjCw3wQ3W1L1BebIbGk-5vUOHFhblQcPXx4ab-AePuFm8mfnE-hckn7ONttU36Q&usqp=CAU"
  );
  //bottomsheet open and close
  const { isOpen, onOpen, onClose } = useDisclose();

  //for camera

  const takeImageHandler = async () => {
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.uri);
    props.onImageTaken(image.uri);
    useDisclose();
  };

  //for  gallery image select

  const takeImageFromGalleryHandler = async () => {
    const image = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });

    setPickedImage(image.uri);
    props.onImageTaken(image.uri);
    onClose;
  };

  return (
    <View>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Text
            style={{
              ...Fonts.Black18Bold,
              lineHeight: 40,
              textAlign: "center",
            }}
          >
            {t("change_profile")}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
              paddingHorizontal: 15,
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: "purple",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  takeImageHandler();
                  onClose();
                }}
              >
                <AntDesign name="camera" size={22} color="white" />
              </TouchableOpacity>
              <Text style={{ ...Fonts.Black16Bold }}>Camera</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: "#00D6D6",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  takeImageFromGalleryHandler();
                  onClose();
                }}
              >
                <FontAwesome name="photo" size={22} color="white" />
              </TouchableOpacity>
              <Text style={{ ...Fonts.Black16Bold }}>Gallery</Text>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <TouchableOpacity
                style={{
                  height: 50,
                  width: 50,
                  borderRadius: 25,
                  backgroundColor: "red",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => {
                  setPickedImage("");
                  onClose();
                }}
              >
                <FontAwesome name="trash" size={22} color="white" />
              </TouchableOpacity>
              <Text style={{ ...Fonts.Black16Bold }}>Remove</Text>
            </View>
          </View>
        </Actionsheet.Content>
      </Actionsheet>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.imagePicker}
        onPress={onOpen}
      >
        <LinearGradient
          colors={["#0076DE", "#00D6D6"]}
          start={{ x: 0.0, y: 1.0 }}
          end={{ x: 1.0, y: 1.0 }}
          style={{
            width: 145,
            height: 145,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            ...ConstantStyle.shadow,
          }}
        >
          <View style={styles.imagePreview}>
            {!pickedImage ? (
              <Text style={{ ...Fonts.White18Bold }}>{t("no_image")}</Text>
            ) : (
              <Image style={styles.image} source={{ uri: pickedImage }} />
            )}
          </View>
          <View
            style={{
              backgroundColor: "white",
              width: 40,
              height: 40,
              borderRadius: 25,
              position: "absolute",
              left: "65%",
              top: "75%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <LinearGradient
              colors={["#0076DE", "#00D6D6"]}
              start={{ x: 0.0, y: 1.0 }}
              end={{ x: 1.0, y: 1.0 }}
              style={{
                padding: 5,
                borderRadius: 50,
                alignItems: "center",
                position: "absolute",
                left: "10%",
                ...ConstantStyle.shadow,
              }}
            >
              <AntDesign name="edit" size={22} color="white" />
            </LinearGradient>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
  },
  imagePreview: {
    width: 142,
    height: 142,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
  image: {
    width: 142,
    height: 142,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
  },
});

export default ImgPicker;
