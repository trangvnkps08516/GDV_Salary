import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Text, SafeAreaView, View, StatusBar, ScrollView, BackHandler } from 'react-native';
import { Body, Header, MenuItem, MetricStatus, TotalSalary } from '../../../../comps';
import { DatePicker } from '../../../../comps';
import { colors } from '../../../../utils/Colors';
import { height, width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';
import { text } from '../../../../utils/Text';
import { value } from '../../../../utils/Values';
import { styles } from "./styles";
import { useNavigation } from '@react-navigation/core';
import { getProfile, getSalaryByMonth } from '../../../../api';
import { SalaryByMonth, UserObj } from '../../../../models/Data';
import { thoundsandSep } from '../../../../utils/Logistics';
import { useRoute } from '@react-navigation/native';
import { useIsFocused } from "@react-navigation/native";
import { useCallback } from 'react';
import { _retrieveData } from '../../../../utils/Storage';
import { contractMonth } from '../../../../utils/Variable';

const Dashboard = (props) => {
  const route = useRoute();
  const isFocused = useIsFocused();
  const [month, setMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"));
  const navigation = useNavigation();
  const [data, setData] = useState(SalaryByMonth);
  const [loading, setLoading] = useState(true);
  const [user, setUserData] = useState(UserObj);

  const getData = async (month) => {
    setLoading(true);
    setMonth(month);
    await getSalaryByMonth(month,navigation).then((res) => {
      if (res.status == "success") {
        setData(res.data);
        setLoading(false);
      }
      if(res.status=="v_error"){

      }
      if (res.status == "failed") {
        setLoading(false);
      }
    })
  }

  const _getProfile = async () => {
    await getProfile(navigation).then((res) => {
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
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    if (isFocused) {
      getData(month);
      _getProfile();
      
    }

    return () => {
      backHandler.remove();
    };
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.salaryByMonth} />
      <DatePicker style={styles.datePicker} width={width - fontScale(164)} month={month} defaultMonth={month} onChangeDate={(date) => getData(date)} />
      <MetricStatus title={text.numberStatus} status={data.status} style={{ alignSelf: 'center', marginTop: fontScale(13) }} />
      <Body style={{ marginTop: fontScale(10), zIndex: -10 }} displayName={user.displayName} maGDV={user.gdvId.maGDV} />
      <View style={styles.body}>
        {
          loading == true ? <ActivityIndicator color={colors.primary} size="small" /> :
            <View style={{ flex: 1, height: height / 2 }}>
            <TotalSalary style={{ alignSelf: 'center', marginTop: -fontScale(15), zIndex: 50 }} title={text.total} value={thoundsandSep(data.monthlySalary)} />
              <ScrollView showsVerticalScrollIndicator={false}>
                <MenuItem style={{ marginTop: fontScale(25) }} title={text.fixedSalary} icon={images.salaryByMonth} value={thoundsandSep(data.permanentSalary)} width={width - fontScale(60)} onPress={() => { }} />
                <MenuItem style={{ marginTop: fontScale(39) }} title={text.upSalary} icon={images.upSalary} value={thoundsandSep(data.contractSalary)} width={width - fontScale(60)} onPress={() => navigation.navigate("SalaryByMonthContract", { "month": month })} />
                <MenuItem style={{ marginTop: fontScale(39) }} title={text.incentiveCost} icon={images.incentiveCost} value={thoundsandSep(data.incentiveCost)} width={width - fontScale(60)} onPress={() => { }} />
                <MenuItem style={{ marginTop: fontScale(39) }} title={text.punishment} icon={images.punishment} value={thoundsandSep(data.sanctionCost)} width={width - fontScale(60)} onPress={() => { }} />
                <MenuItem style={{ marginTop: fontScale(39), marginBottom: fontScale(20) }}  title={text.otherExpenses} icon={images.otherExpenses} value={thoundsandSep(data.others)} width={width - fontScale(60)} onPress={() => { }} />

              </ScrollView>
            </View>
        }
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;