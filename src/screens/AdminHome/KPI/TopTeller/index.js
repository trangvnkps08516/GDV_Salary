import React, { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, Text, FlatList, View, ActivityIndicator } from "react-native";
import {
  Body,
  DataPicker,
  DatePicker,
  GeneralListItem,
  Header,
  MetricStatus,
  Search,
  TableHeader,
} from "../../../../comps";
import { styles } from "./style";
import { colors } from "../../../../utils/Colors";
import { fontScale } from "../../../../utils/Fonts";
import { images } from "../../../../utils/Images";
import { text } from "../../../../utils/Text";
import { getAdminKPITopTeller } from "../../../../api";
import { useNavigation } from "@react-navigation/native";
import { width } from "../../../../utils/Dimenssion";
import { BackHandler } from "react-native";
import moment from "moment";


const SubscriberList = () => {
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [message, setMessage] = useState("");
  const [notification, setNotification] = useState("");
  const [preSub, setPreSub] = useState("");
  const [postSub, setPostSub] = useState("");
  const [loading, setLoading] = useState(false);
  const [filterCondition, setFilterCondition] = useState("");
  const [TBTT, setTBTT] = useState([]);
  const [TBTS, setTBTS] = useState([]);
  const navigation = useNavigation();
  const [branchCode, setbranchCode] = useState("2MFHCM1");
  const [month, setMonth] = useState(moment(new Date()).format("MM/YYYY"));
  const [sort, setSort] = useState(0);

  const getData = async (branchCode, month, sort) => {
    setMessage("");
    setLoading(true);
    await getAdminKPITopTeller(navigation, branchCode, month, sort).then((res) => {
        console.log(res);
      setLoading(false);
      if (res.status == "success") {
        if(res.data.length > 0 || res.data.data.length > 0) {
            setData(res.data.data);
            setLoading(false);
        }
      }
      if (res.status == "failed") {
        setMessage("Không có dữ liệu")
        setLoading(false);
      }
    });
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
    getData(branchCode, month, sort); // gọi data thật
    return () => {
      backHandler.remove();
    };

  }, [""]);

  const _onChangeMonth = async (value) => {
    setMonth(value);
    await getData( branchCode,value, sort)
}

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.topTellers} />
      <DatePicker month={month} width={width - fontScale(120)} style={{ alignSelf: "center" }} onChangeDate={(date) => _onChangeMonth(date)} />
      {/* <Search
        style={styles.search}
        leftIcon={images.simlist}
        data={data}
        rightIcon={images.searchlist}
        dataNotFoundText="Không tìm thấy dữ liệu"
        onChangeText={(value) => searchSub(value)}
        placeholder={text.searchSub}
        keyboardType="number-pad"
        width={width - fontScale(65)}
      /> */}

      {/* <DataPicker
        dialogTitle="Chọn dữ liệu"
        icon={images.sim}
        data={[
          { id: 0, value: "Tất cả" },
          { id: 1, value: "TT" },
          { id: 2, value: "TS" },
        ]}
        width={width - fontScale(65)}
        onPress={(value) => filterDataType(data, value.value)}
        style={{ marginTop: fontScale(20), marginRight: fontScale(5) }}
      /> */}

      <Body
        showInfo={false}
        style={{ marginTop: fontScale(15), zIndex: -10 }}
      />

      <View style={{ flex: 1, backgroundColor: colors.white }}>
        {/* <View style={styles.sumKpiContainer}>
          <Text style={styles.sumKpiTitle}>{text.TBTT}: </Text>
          <Text style={styles.preSub}>{postSub}      ;</Text>

          <View style={styles.sumKpiContainerSecond}>
            <Text style={styles.sumKpiTitle}>{text.TBTS}: </Text>
            <Text style={styles.preSub}>{preSub}</Text>
          </View>
        </View> */}




        <View style={{ flexDirection: "row", marginTop: fontScale(2) }}>
          <TableHeader style={{ width: (width * 3.9) / 10 }} title={text.GDV} />
          <TableHeader style={{ width: (width * 2.5) / 10 }} title={text.sumKPI} />
          <TableHeader style={{ width: (width * 1.21) / 10 }} title={text.TBTT} />
          <TableHeader style={{ width: (width * 2.5) / 10 }} title={text.TBTS} />
          
        </View>
        {loading == true ? (
          <ActivityIndicator
            size="small"
            color={colors.primary}
            style={{ marginTop: fontScale(10) }}
          />
        ) : null}

        {message ? <Text style={styles.message}>{message}</Text> : null}

        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          style={{ marginTop: fontScale(10) }}
          keyExtractor={(item, index) => index.toString()}
          key={({ item }) => item.empName.toString()}
          renderItem={({ item, index }) => (
            <GeneralListItem
              item={item}
              index={index}
              fields={[
                `${item.empName}\n(${item.workPlace})`,
                item.sumKpi,
                item.postPaid,
                item.prePaid,
                
              ]}
              style={[
                [styles.dateCol, { width: (width * 3.9) / 10 }],
                [styles.dateCol, { width: (width * 2.5) / 10 }],
                [styles.dateCol, { width: (width * 1.5) / 10 }],
                [styles.dateCol, { width: (width * 2.3) / 10 }],
                [styles.dateCol, { width: (width * 1) / 10 }],
              ]}
            //   lastIcon={item.pckSub == 1 ? images.check : images.cancle}
            //   lastIconViewStyle={{ alignItems: "center", flex: 0.5 }}
            //   lastIconStyle={{
            //     flex: 0.5,
            //     width: fontScale(15),
            //     height: fontScale(19),
            //   }}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default SubscriberList;