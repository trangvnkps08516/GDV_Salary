import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StatusBar, ActivityIndicator, BackHandler } from "react-native";
import { Body, DateView, Header, MenuItem } from "../../../../comps";
import { styles } from "../../../../comps/body/style";
import { colors } from "../../../../utils/Colors";
import { width } from "../../../../utils/Dimenssion";
import { fontScale } from "../../../../utils/Fonts";
import { images } from "../../../../utils/Images";
import { text } from "../../../../utils/Text";
import { getKPIByMonthDashboard, getProfile } from "../../../../api";
import moment from "moment";
import { KPIByMonthDashboard, User, UserObj } from "../../../../models/Data";
import { useNavigation } from '@react-navigation/core';
import { thoundsandSep } from "../../../../utils/Logistics";
import { _retrieveData } from "../../../../utils/Storage";

const DashBoard = (props) => {
  const [month, setMonth] = useState(moment(new Date()).format("MM/YYYY"));
  const [showDate, setShowDate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(KPIByMonthDashboard);
  const [user, setUserData] = useState(UserObj)

  const navigation = useNavigation();

  const getData = async () => {
    await getKPIByMonthDashboard().then((res) => {
      if (res.status == "success") {
        setData(res.data);
        setLoading(false)
      }
      if (res.status == "failed") {
        setLoading(false)
      }
    });

    await getProfile().then((res) => {
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
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    getData();

    return () => {
      backHandler.remove();
    };
  }, [""]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.kpiByMonth} />
      <DateView dateLabel={data.dateRange} />
      <Body displayName={user.displayName} maGDV={user.gdvId.maGDV}
        style={{ marginTop: fontScale(27) }}
      />
      <View style={styles.body}>
        {
          loading == true ? <ActivityIndicator size="small" color={colors.primary} /> :
            <>
              <MenuItem
                style={{ marginTop: fontScale(30) }}
                title={text.kpiAchieved}
                icon={images.kpiByMonth}
                value={thoundsandSep(data.achieveKPI)}
                width={width - fontScale(60)}
                onPress={() => navigation.navigate("Achieve")}
              />
              <MenuItem
                style={{ marginTop: fontScale(60) }}
                title={text.provisionalSalary}
                icon={images.salaryByMonth}
                value={thoundsandSep(data.provSal)}
                width={width - fontScale(60)}
                onPress={() => navigation.navigate("ExpectedSalary")}
              />
            </>
        }
      </View>
    </SafeAreaView>
  );
};

export default DashBoard;
