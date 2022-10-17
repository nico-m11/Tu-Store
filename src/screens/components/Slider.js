import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from "react-native";
import { Colors } from "../../themes/colors";

const images = [
  require("../../../assets/images/reward4.png"),
  require("../../../assets/images/reward.png"),
  require("../../../assets/images/reward2.png"),
  require("../../../assets/images/reward3.png"),
];

const WIDTH = Dimensions.get("screen").width;
const HEIGHT = Dimensions.get("window").height;

const Slider = () => {
  const [imgActive, setimgActive] = useState(0);

  const onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide != imgActive) {
        setimgActive(slide);
      }
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.wrap}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
        >
          {images.map((e, index) => (
            <Image key={e} resizeMode="cover" style={styles.image} source={e} />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {images.map((e, index) => (
            <Text
              key={e}
              style={imgActive == index ? styles.dotActive : styles.dot}
            >
              {" "}
              ⬤
            </Text>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
  image: {
    width: WIDTH - 25,
    height: HEIGHT * 0.4,
    marginHorizontal: 12,
  },
  wrapDot: {
    position: "absolute",
    bottom: -30,
    flexDirection: "row",
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: Colors.primary,
  },
  dot: {
    margin: 3,
    color: Colors.grey,
  },
});
export default Slider;
