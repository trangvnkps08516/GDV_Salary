import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, Text, FlatList, View } from "react-native";
import {
  Body,
  FlatlistItem,
  Header,
  MetricStatus,
  Search,
  TableHeader,
} from "../../../../comps";
import { styles } from "./styles";
import { colors } from "../../../../utils/Colors";
import { fontScale } from "../../../../utils/Fonts";
import { images } from "../../../../utils/Images";
import { text } from "../../../../utils/Text";
import { value } from "../../../../utils/Values";
import { subscriberList } from "../../../../sampledata";
import { getProfile, getSubscriberList } from "../../../../api";
import { UserObj } from "../../../../models/Data";
import { useNavigation } from "@react-navigation/native";
import { BackHandler } from "react-native";
import { ActivityIndicator } from "react-native";
import { width } from "../../../../utils/Dimenssion";

const SubscriberList = (props) => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [message, setMessage] = useState([]);
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);
  const [user, setUserData] = useState(UserObj);
  const navigation = useNavigation();

  const getData = async () => {
    setMessage("");
    setLoading(true);
    await getSubscriberList(navigation).then((res) => {
      if (res.status == "success") {
        setLoading(false);

        if (res.data.length == 0 || res.data.data.length == 0) {
          setMessage("Không tìm thấy số thuê bao!");
        } else {
          if (res.data.data.length > 0) {
            //if cho cái array data nhỏ bên trong
            setNotification(res.data.notification);
            setData(res.data.data); // res.data này nó bao gồm notification và 1 array data nhỏ bên trong
            setSearchData(res.data.data);
          } else {
            setMessage("Không có dữ liệu!");
          }
        }
      }
      if (res.status == "failed") {
        setLoading(false);
      }
    });

    await getProfile(navigation).then((res) => {
      if (res.status == "success") {
        setLoading(false);
        setUserData(res.data);
      }
      if (res.status == "failed") {
        setLoading(false);
      }
    });
  };

  const filterData = (text = "") => {
    console.log(text.length);
    // if (text.length > 0) {
    // if (searchData.length == 0) {
    //   setMessage("Không có dữ liệu");
    // } else {
    const newData = searchData.filter((item) => {
      const itemData = `${item.numberSub.toString()}`;
      return itemData.indexOf(text.toString()) > -1;
    });
    if (text.length > 0) {
      setLoading(true);
      setSearchData(newData);
      if (newData.length == 0) {
        setLoading(false);
        setMessage("Không tìm thấy số thuê bao");
      } else {
        setLoading(false);
        setMessage("");
      }
    } else {
      setLoading(false);
      setSearchData(data);
      setMessage("");
    }
  };

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
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
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.subscriberList} />
      {/* khi nào có data thật thì mở lại */}
      {/* { <MetricStatus
        style={styles.status}
        title={text.subscriberDevelopment}
        status={data.notification}
      /> } */}
      <MetricStatus
        style={styles.status}
        title={text.subscriberDevelopment}
        status={notification}
      />
      <Search
        style={styles.search}
        leftIcon={images.simlist}
        rightIcon={images.searchlist}
        onChangeText={(value) => filterData(value)}
        placeholder={text.searchSub}
        keyboardType="number-Pad"
      />
      <Body
        showInfo={false}
        style={{ marginTop: fontScale(15), zIndex: -10 }}
      />
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <View style={{ flexDirection: "row" }}>
          <TableHeader style={{ width:width*2/10 }} title={text.date} />
          <TableHeader style={{  width:width*1.5/10 }} title={text.numberSub} />
          <TableHeader style={{ width:width*1.7/10 }} title={text.statusPaid} />
          <TableHeader style={{ width:width*1.5/10 }} title={text.type} />
          <TableHeader style={{ width:width*0.8/10 }} title={text.pckSub} />
        </View>
        {loading == true ? (
          <ActivityIndicator size="small" color={colors.primary} />
        ) : null}

        <Text
          style={{
            color: colors.primary,
            textAlign: "center",
            marginTop: fontScale(5),
          }}
        >
          {message}
        </Text>

        <FlatList
          data={searchData} 
          // data={tempData} //data ảo
          key={({ item }) => item.numberSub.toString()}
          renderItem={({ item, index }) => (
            <FlatlistItem item={item} index={index} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SubscriberList;
