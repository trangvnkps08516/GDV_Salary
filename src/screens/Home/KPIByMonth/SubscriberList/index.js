import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, Text, FlatList, View } from "react-native";
import {
  Body,
  FlatlistItem,
  GeneralListItem,
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
// import GeneralListItem from "../../../../comps";
import { width } from "../../../../utils/Dimenssion";

const SubscriberList = (props) => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [message, setMessage] = useState("");
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
            setData(res.data.data);
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
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.subscriberList} />
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
        keyboardType="number-pad"
      />
      <Body
        showInfo={false}
        style={{ marginTop: fontScale(15), zIndex: -10 }}
      />
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        <View style={{ flexDirection: "row" }}>
          <TableHeader style={{ flex: 1.8 }} title={text.date} />
          <TableHeader style={{ flex: 1.5 }} title={text.numberSub} />
          <TableHeader style={{ flex: 1.7 }} title={text.statusPaid} />
          <TableHeader style={{ flex: 1.7 }} title={text.type} />
          <TableHeader style={{ flex: 0.9 }} title={text.pckSub} />
        </View>
        {loading == true ? (
          <ActivityIndicator size="small" color={colors.primary} style={{ marginTop: fontScale(10) }} />
        ) : null}

        {
          message ? <Text
            style={{
              color: colors.primary,
              textAlign: "center",
              marginTop: fontScale(15),
              fontSize: fontScale(15)
            }}
          >
            {message}
          </Text> : null
        }

        {/* <FlatList
          showsVerticalScrollIndicator={false}
          data={searchData} // data thật => dùng searchData, phục vụ cho việc tìm kiếm số thuê bao
          // data={tempData} //data ảo
          style={{ marginTop: fontScale(10) }}
          keyExtractor={(item, index) => index.toString()}
          key={({ item }) => item.numberSub.toString()}
          renderItem={({ item, index }) => (
            <FlatlistItem item={item} index={index} />
          )}
        /> */}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={searchData}
          style={{ marginTop: fontScale(10) }}
          keyExtractor={(item, index) => index.toString()}
          key={({ item }) => item.numberSub.toString()}
          renderItem={({ item, index }) => (
            <GeneralListItem
              item={item}
              index={index}
              fields={[item.date, item.numberSub, item.statusPaid, item.type, item.pckSub]}
              style={[
                [styles.dateCol, { width: width * 1.7 / 10 }],
                [styles.dateCol, { width: width * 2.5 / 10 }],
                [styles.dateCol, { width: width * 1.7 / 10 }],
                [styles.dateCol, { width: width * 2.9 / 10 }],
                [styles.dateCol, { width: width * 1 / 10 }],
              ]}
              lastIcon={item.pckSub == 1 ? images.check : images.cancle}
              lastIconViewStyle={{ alignItems: "center", flex: 0.5 }}
              lastIconStyle={{ flex: 0.5, width: fontScale(15), height: fontScale(19) }} />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SubscriberList;
