import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { BackHandler } from "react-native";
import { View } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView, Text } from "react-native";
import { getSubscriberList } from "../../../api";
import { Body, Header, ListMenu, MetricStatus } from "../../../comps";
import { styles } from "../../../comps/listmenu/styles";
import { listMenu } from "../../../sampledata";
import { colors } from "../../../utils/Colors";
import { width } from "../../../utils/Dimenssion";
import { fontScale } from "../../../utils/Fonts";
import { images } from "../../../utils/Images";
import { text } from "../../../utils/Text";

const Test = (props) => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const getData = async () => {
    setMessage("");
    setLoading(true);
    await getSubscriberList(navigation).then((res) => {
      if (res.status == "success") {
        if (res.data.data.length > 0) {
          console.log(res.data.data);
          setData(res.data.data);
        } else {
          setMessage("Ko có dữ liệu");
        }
      }

      if (res.status == "failed") {
        setMessage(res.message);
      }
    });
  };

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("KPIByMonthKPIByMonthDashboard");
      return true;
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    getData(); // gọi data thật
    return () => {
      backHandler.remove();
    };
  }, [""]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
      {/* <ListMenu data={listMenu[1]} icon={images.arrears}/> */}
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.subscriberList} />
      <MetricStatus
        style={styles.status}
        title={text.subscriberDevelopment}
        // status={notification}
      />
      <Body showInfo={false} style={{ marginTop: fontScale(15) }} />
      <View style={{ backgroundColor: colors.white, flex: 1 }}>
        <FlatList
          data={[{ list: [
              {title:["Ngày PT", "Loại TB", "Gói"]},
              {content:["02/07", "TT", "VAT"]}
          ] }]}
          // data={listMenu}
          keyExtractor={(key, item) => key.toString()}
          renderItem={({ item }) => (
            <ListMenu data={item} icon={images.arrears} width={width - 30} />
            // <Text>{JSON.stringify(item)}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Test;
