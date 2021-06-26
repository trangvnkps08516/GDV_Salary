import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StatusBar, ActivityIndicator, Text } from 'react-native';
import { styles } from './style';
import { MenuItem } from '../../../comps';
import { Header } from '../../../comps';
import { Body } from '../../../comps';
import { images } from '../../../utils/Images';
import { text } from '../../../utils/Text';
import { width } from '../../../utils/Dimenssion';
import { fontScale } from '../../../utils/Fonts';
import { colors } from '../../../utils/Colors';
import { useNavigation } from '@react-navigation/core';
import { getLoginInfo } from '../../../utils/Logistics';
import { _retrieveData } from '../../../utils/Storage';
import { User } from "../../../models";

const Dashboard = (props) => {
  const navigation = useNavigation();
  const [user, setUser] = useState(User)
  useEffect(() => {
    const getData = async () => {
      await _retrieveData("userInfo").then((data) => setUser(data))
    }
    getData();
  }, [])
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header showBack={false} profile avatar={images.avatar} fullName={user.userId.gdvId ? user.userId.gdvId.fullName : user.userId.displayName} empCode={user.userId.gdvId ? user.userId.gdvId.maGDV : user.userId.id} />
      <Body style={{ marginTop: fontScale(27) }} />
      <View style={styles.body}>
        <MenuItem style={{ marginTop: fontScale(30) }} title={text.kpiByMonth} icon={images.kpiByMonth} width={width - fontScale(60)} onPress={() => navigation.navigate("KPIByMonthKPIByMonthDashboard")} />
        <MenuItem style={{ marginTop: fontScale(60) }} title={text.salaryByMonth} icon={images.salaryByMonth} width={width - fontScale(60)} onPress={() => navigation.navigate("SalaryByMonthDashboard")} />
        <MenuItem style={{ marginTop: fontScale(60) }} title={text.averageIncome} icon={images.avgIcome} width={width - fontScale(60)} onPress={() => navigation.navigate("AvgIncomeDashboard")} />
        <MenuItem style={{ marginTop: fontScale(60) }} title={text.subscriberQuality} icon={images.subscriberQuality} width={width - fontScale(60)} onPress={() => navigation.navigate("SubscriberQuality")} />
        <MenuItem style={{ marginTop: fontScale(60) }} title={text.transactionInformation} icon={images.transactionInformation} width={width - fontScale(60)} onPress={() => navigation.navigate("TransactionInfo")} />
      </View>
    </SafeAreaView>
  );
}

export default Dashboard;