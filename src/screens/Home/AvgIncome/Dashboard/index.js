import React, { useCallback, useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  ActivityIndicator
} from "react-native";
import {
  Body,
  DatePicker,
  Header,
  MenuItem,
  MetricStatus,
} from "../../../../comps";
import { colors } from "../../../../utils/Colors";
import { width } from "../../../../utils/Dimenssion";
import { fontScale } from "../../../../utils/Fonts";
import { images } from "../../../../utils/Images";
import { text } from "../../../../utils/Text";
import { styles } from "./style";
import moment from "moment";
import { useNavigation } from '@react-navigation/core';
import { getAvgIncomeDashboard, getProfile } from '../../../../api';
import { AvgIncomeDashboard, UserObj } from '../../../../models/Data';
import { thoundsandSep } from '../../../../utils/Logistics';
import { useRoute, useIsFocused } from "@react-navigation/native";

const Dashboard = (props) => {
  const navigation = useNavigation();
  const route = useRoute()
  const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
  const [sMonth, setSMonth] = useState(moment(new Date()).format("MM/YYYY"));
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(AvgIncomeDashboard);
  const isFocused = useIsFocused();
  const [user, setUserData] = useState(UserObj)

  const getData = async (beginMonth, endMonth) => {
    setLoading(true)
    await getAvgIncomeDashboard(beginMonth, endMonth).then((data) => {
      if (data.status == "success") {
        setData(data.data)
        setLoading(false)
      } else if (data.status == "failed") {
        setLoading(false);
      }
    })
  }
  const _getProfile=async()=>{
    
    await getProfile().then((res) => {
      if (res.status == "success") {
        setLoading(false)
        setUserData(res.data)
      }
      if (res.status == "failed") {
        setLoading(false)
      }
    })
  }
  useEffect(() => {
    getData(month, sMonth);
    _getProfile()

  }, [month]);

  const onChangeMonth = async (month) => {
    if (month > sMonth == true) {

    } else {
      setMonth(month)
      await getData(month, sMonth);
    }
  }

  const onChangeSMonth = async (sMonth) => {
    if (month > sMonth == true) {

    } else {
      setSMonth(sMonth)
      await getData(month, sMonth);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.averageIncome}/>
      <View style={styles.dateContainer}>
        <DatePicker month={month} width={width / 2 - fontScale(40)} style={{ marginLeft: fontScale(30) }} onChangeDate={(date) => onChangeMonth(date)} />
        <DatePicker month={sMonth} width={width / 2 - fontScale(40)} style={{ marginLeft: fontScale(20) }} onChangeDate={(date) => onChangeSMonth(date)} />
      </View>
      <Text style={styles.text}>{data.notification}</Text>
      <Body style={{ marginTop: fontScale(15) }}  displayName={user.displayName} maGDV={user.gdvId.maGDV}/>
      <View style={styles.body}>
        {
          loading == true ? <ActivityIndicator size="small" color={colors.primary} /> :
            <TouchableOpacity style={styles.menu} onPress={() => navigation.navigate("AvgIncomeByMonth", { "dateRange": { "beginMonth": month, "endMonth": sMonth } })}>
              <Image style={styles.icon} source={images.avgIcome}></Image>

              <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: fontScale(50), paddingVertical: fontScale(5) }}>
                <Text style={styles.avg}>{text.averageMonth}: </Text>
                <Text style={styles.money}>{thoundsandSep(data.avgIncomeByMonth)}</Text>
              </View>

              <View style={{ flexDirection: 'row', justifyContent: "space-around", paddingVertical: fontScale(10) }}>
                <Text style={styles.avg}>{text.totalIncome}: </Text>
                <Text style={styles.money}>{thoundsandSep(data.totalIncome)}</Text>
              </View>

            </TouchableOpacity>
        }
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
