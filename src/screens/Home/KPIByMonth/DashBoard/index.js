import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  ActivityIndicator,
  BackHandler,
} from "react-native";
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
import { useNavigation } from "@react-navigation/core";
import { thoundsandSep, ToastNotif } from "../../../../utils/Logistics";
import { _retrieveData } from "../../../../utils/Storage";
import Toast from "react-native-toast-message";

const DashBoard = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(KPIByMonthDashboard);
  const [user, setUserData] = useState(UserObj);

  const navigation = useNavigation();

  const getData = async () => {
    await getKPIByMonthDashboard(navigation).then((res) => {
      if (res.status == "success") {
        setData(res.data);
        setLoading(false);
      }

      if (res.status == "failed") {
        ToastNotif("Cảnh báo", res.message, "error", true);
        setLoading(false);
      }

      if (res.status == "v_error") {
        ToastNotif("Cảnh báo", res.message, "error", true);
        setTimeout(() => {
          navigation.navigate("Home");
        }, 1000);
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

  useEffect(() => {
    const backAction = () => {
      navigation.navigate("Home");
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    getData();

    return () => {
      backHandler
    };
  }, [""]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.kpiByMonth} />
      <Toast ref={(ref) => Toast.setRef(ref)} />
      <DateView dateLabel={data.dateRange} />
      <Body
        displayName={user.displayName}
        maGDV={user.gdvId.maGDV}
        style={{ marginTop: fontScale(27) }}
      />
      <View style={styles.body}>
        {loading == true ? (
          <ActivityIndicator size="small" color={colors.primary} />
        ) : (
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
              title={text.expectedSalaryMenu}
              icon={images.salaryByMonth}
              value={thoundsandSep(data.provSal)}
              width={width - fontScale(60)}
              onPress={() => navigation.navigate("ExpectedSalary")}
            />
            <MenuItem
              titleMenuStyle={{ paddingTop: fontScale(17) }}
              style={{ marginTop: fontScale(60) }}
              title={text.subscriberList}
              icon={images.simlist}
              width={width - fontScale(60)}
              onPress={() => navigation.navigate("SubscriberList")}
            />

          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default DashBoard;
