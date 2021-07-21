import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { BackHandler } from "react-native";
import { View } from "react-native";
import { StatusBar } from "react-native";
import { SafeAreaView, Text } from "react-native";
import { getProfile, getSubscriberList, getSubscriberProductivity } from "../../../api";
import { Body, DateView, Header, ListMenu, MetricStatus } from "../../../comps";
import { styles } from "../../../comps/listmenu/styles";
import { UserObj } from "../../../models";
import { listMenu } from "../../../sampledata";
import { colors } from "../../../utils/Colors";
import { width } from "../../../utils/Dimenssion";
import { fontScale } from "../../../utils/Fonts";
import { images } from "../../../utils/Images";
import { text } from "../../../utils/Text";

const ProductivitySub = (props) => {
  const [data, setData] = useState([]);
  const [ dateRange, setDateRange] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [ user, setUserData] = useState(UserObj);
  const navigation = useNavigation();

  const getData = async () => {
    setMessage("");
    setLoading(true);
    await getSubscriberProductivity(navigation).then((res) => {
      if (res.status == "success") {
        if (res.data.length > 0 || res.data.data.length > 0) {
          // console.log(res.data);
          setDateRange(res.data.dateRange);
          setData(res.data.data);
        } else {
          setMessage("Ko có dữ liệu");
        }
        // console.log(res)
      }

      if (res.status == "failed") {
        setMessage(res.message);
      }
    });

    await getProfile(navigation).then((res) => {
      if (res.status == "success") {
        setLoading(false)
        setUserData(res.data)
      }
      if (res.status == "failed") {
        setLoading(false)
      }
    })
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
      <Header title={text.kpiByMonth} />
      <DateView dateLabel={dateRange} style={styles.dateView} />

      <Body style={styles.bodyScr} displayName={user.displayName} maGDV={user.gdvId.maGDV} />
      <View style={{ backgroundColor: colors.white, flex: 1}}>
      <Text style={styles.text}>Năng suất bình quân</Text>
        <FlatList style= {styles.list}
          data={data}
          // data={listMenu}
          keyExtractor={(index, item) => index.toString()}
          renderItem={({ item, index }) => (
            <ListMenu
              data={item}

              labelData={["","TBTT:"]}
              labelDataTwo={["","Lượt KH:"]}
              labelDataThree={["","TBTS:"]}
              labelDataFour={["","Lượt GD:"]}
              index={index}
              fieldData={[
                item.shopName,
                // item.preSub,
                // item.postSub,
                // item.cusAmount,
                // item.transAmount
              ]}
              fieldDataOne={[
                item.preSub,
                // 1500000
                ]}

              fieldDataTwo={[
                item.cusAmount,
              ]}

              fieldDataThree={[
                item.postSub,
              ]}

              fieldDataFour={[
                item.transAmount,
              ]}
              
              icon={[images.company,images.branch,images.store]}
              
              
            />
            // <Text>{JSON.stringify(item)}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductivitySub;
