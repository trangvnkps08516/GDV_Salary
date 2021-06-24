import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, View, StatusBar, ScrollView } from 'react-native';
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
import { getSalaryByMonth } from '../../../../api';
import { SalaryByMonth } from '../../../../models/Data';
import { thoundsandSep } from '../../../../utils/Logistics';

const Dashboard = (props) => {
  const [month, setMonth] = useState(moment(new Date()).format("MM/YYYY"));
  const navigation = useNavigation();
  const [data, setData] = useState(SalaryByMonth);
  const [loading, setLoading] = useState(true);

  const getData = async (month) => {
    setLoading(true)
    await getSalaryByMonth(month).then((res) => {
      if (res.status == "success") {
        setData(res.data)
        setLoading(false)
      }
      if (res.status == "failed") {
        setLoading(false)
      }
    })
  }

  useEffect(() => {
    getData(month)
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.salaryByMonth} />
      <DatePicker style={styles.datePicker} width={width - fontScale(164)} month={month} onChangeDate={(date) => getData(date)} />
      <MetricStatus status="Đã chốt" style={{ alignSelf: 'center', marginTop: fontScale(13) }} />
      <Body userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"} style={{ marginTop: fontScale(15) }} />
      <View style={styles.body}>
        {
          loading == true ? <ActivityIndicator color={colors.primary} size="small" /> :
          <View style={{flex:1,height:height/2}}>
            <ScrollView showsVerticalScrollIndicator={false                                                                                                                                                                      }>
              
              <TotalSalary style={{ alignSelf: 'center', marginTop: fontScale(18) }} title={text.total} value={value.salary} />
              <MenuItem style={{ marginTop: fontScale(25) }} title={text.fixedSalary} icon={images.salaryByMonth} value={thoundsandSep(data.contractSalary)} width={width - fontScale(60)} onPress={() => { }} />
              <MenuItem style={{ marginTop: fontScale(45) }} title={text.upSalary} icon={images.upSalary} value={thoundsandSep(value.upSalary)} width={width - fontScale(60)} onPress={() => navigation.navigate("SalaryByMonthContract")} />
              <MenuItem style={{ marginTop: fontScale(45) }} title={text.incentiveCost} icon={images.incentiveCost} value={thoundsandSep(value.incentiveCost)} width={width - fontScale(60)} onPress={() => { }} />
              <MenuItem style={{ marginTop: fontScale(45) }} title={text.punishment} icon={images.punishment} value={thoundsandSep(value.punishment)} width={width - fontScale(60)} onPress={() => { }} />
              <MenuItem style={{ marginTop: fontScale(45),marginBottom:fontScale(20) }} title={text.otherExpenses} icon={images.otherExpenses} value={thoundsandSep(value.otherExpenses)} width={width - fontScale(60)} onPress={() => { }} />
              
            </ScrollView>
            </View>
        }
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;