import React,{ useState, Component, useEffect } from "react";
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

export const Details = ({ navigation, route }) => {
  const item = route.params.item;
  //console.log(item);
  const { t, i18n } = useTranslation();
  const width = Dimensions.get("window").width - 60;

  useEffect(() => {
    Data();
  }, []);

  const [nonlo, setNonlo] = useState([]);
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [image5, setImage5] = useState("");
  const [image6, setImage6] = useState("");
  const [image7, setImage7] = useState("");
  const [image8, setImage8] = useState("");
  const [image9, setImage9] = useState("");
  const [image10, setImage10] = useState("");
  const [image11, setImage11] = useState("");

  const Data = () => {
    //setLoader(true)
    fetch(
      "https://api.tu-store.soluzionitop.cloud/api/offers?sale_channel_id=3",
      {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRVTzYiLCJpZCI6MSwiaXNBZG1pbiI6dHJ1ZSwiaWF0IjoxNjcwMDYwMjc5LCJleHAiOjE2NzI3Mzg2Nzl9.cPlvl2t2Cr3Epvb5ybthZHepLdmRi6vk-Cr8ybfHXPs",
        },
      }
    )
      .then((res) => {
        //setLoader(false)
        return res.json();
      })
      .then((value) => {
        //console.log(value.items)
        setNonlo(value.items);
        //setListData(value.items); // salvo nel array i dati del fetch
      })
      .catch((err) => {
        console.log(err);
      });
  };

  var appDescription = nonlo.map((el) =>
    el.appDescription.map((value) => value.document_list)
  );

  //console.log(appDescription)
  for (var i = 0; i < appDescription.length; i++) {
    var value = appDescription[i];
    for (var j = 0; j < value.length; j++) {
      var items = value[j].length;
    }
  }


  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage(result.uri);
    //console.log(result);
  };

  const pickDocument2 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage2(result.uri);
    //console.log(result);
  };

  const pickDocument3 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage3(result.uri);
    //console.log(result);
  };

  const pickDocument4 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage4(result.uri);
    //console.log(result);
  };

  const pickDocument5 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage5(result.uri);
    //console.log(result);
  };

  const pickDocument6 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage6(result.uri);
    //console.log(result);
  };

  const pickDocument7 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage7(result.uri);
    //console.log(result);
  };

  const pickDocument8 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage8(result.uri);
    //console.log(result);
  };

  const pickDocument9 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage9(result.uri);
    //console.log(result);
  };

  const pickDocument10 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage10(result.uri);
    //console.log(result);
  };

  const pickDocument11 = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    //alert(result.uri);
    setImage11(result.uri);
    //console.log(result);
  };


  return (
    <SafeAreaView style={{ ...ConstantStyle.container }}>
      <CustomHeader navigation={navigation} title={item.name} isStar={false} />
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
              <View style={{ alignItems: "center" }}>
                <Image
                  source={{ uri: item.partners.image }}
                  style={{
                    width: "100%",
                    height: 200,
                    marginTop: 0,
                  }}
                />
              </View>
              <View>
                <Text
                  style={{
                    ...Fonts.Black16Regular,
                    textAlign: "center",
                    marginTop: 20,
                  }}
                >
                  {item.appDescription.map((el) => el.description)}
                </Text>

                <Text
                  style={{
                    ...Fonts.Green14Medium,
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Price: {item.value !== "0" ? item.value + "€" : "0€"}
                </Text>

                <Text
                  style={{
                    ...Fonts.Red14Medium,
                    textAlign: "center",
                    marginTop: 10,
                  }}
                >
                  Cashback:{" "}
                  {item.appCashback.map((el) =>
                    " cash " + el.cashback !== 0
                      ? el.cashback + "" + "€"
                      : 0 + "" + "€"
                  )}
                </Text>
              </View>
              <View>
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {items === 0 ? <></> : <></>}
      {items === 1 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {items === 2 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}

      {items === 3 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {items === 4 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {items === 5 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument5}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {items === 6 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument5}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument6}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {items === 7 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument5}
            allowMultiSelection={true}
          />
          <Text> {image6} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument6}
            allowMultiSelection={true}
          />
          <Text> {image7} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument7}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {items === 8 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument5}
            allowMultiSelection={true}
          />
          <Text> {image6} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument6}
            allowMultiSelection={true}
          />
          <Text> {image7} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument7}
            allowMultiSelection={true}
          />
          <Text> {image8} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument8}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {items === 9 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument5}
            allowMultiSelection={true}
          />
          <Text> {image6} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument6}
            allowMultiSelection={true}
          />
          <Text> {image7} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument7}
            allowMultiSelection={true}
          />
          <Text> {image8} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument8}
            allowMultiSelection={true}
          />
          <Text> {image9} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument9}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {items === 10 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument5}
            allowMultiSelection={true}
          />
          <Text> {image6} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument6}
            allowMultiSelection={true}
          />
          <Text> {image7} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument7}
            allowMultiSelection={true}
          />
          <Text> {image8} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument8}
            allowMultiSelection={true}
          />
          <Text> {image9} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument9}
            allowMultiSelection={true}
          />
          <Text> {image10} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument10}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}
      {items === 11 ? (
        <>
          <Text> {image} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument}
            allowMultiSelection={true}
          />
          <Text> {image2} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument2}
            allowMultiSelection={true}
          />
          <Text> {image3} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument3}
            allowMultiSelection={true}
          />
          <Text> {image4} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument4}
            allowMultiSelection={true}
          />
          <Text> {image5} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument5}
            allowMultiSelection={true}
          />
          <Text> {image6} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument6}
            allowMultiSelection={true}
          />
          <Text> {image7} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument7}
            allowMultiSelection={true}
          />
          <Text> {image8} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument8}
            allowMultiSelection={true}
          />
          <Text> {image9} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument9}
            allowMultiSelection={true}
          />
          <Text> {image10} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument10}
            allowMultiSelection={true}
          />
          <Text> {image11} </Text>
          <Button
            title="Select Document"
            onPress={pickDocument11}
            allowMultiSelection={true}
          />
        </>
      ) : (
        <></>
      )}

                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
