import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StatusBar, ActivityIndicator } from "react-native";
import { Body, DateView, Header, MenuItem } from "../../../../comps";
import { styles } from "../../../../comps/body/style";
import { colors } from "../../../../utils/Colors";
import { width } from "../../../../utils/Dimenssion";
import { fontScale } from "../../../../utils/Fonts";
import { images } from "../../../../utils/Images";
import { text } from "../../../../utils/Text";
import { getKPIByMonthDashboard } from "../../../../api";
import moment from "moment";
import { KPIByMonthDashboard, User } from "../../../../models/Data";
import { useNavigation } from '@react-navigation/core';
import { _retrieveData } from "../../../../utils/Storage";

const DashBoard = (props) => {
  const [month, setMonth] = useState(moment(new Date()).format("MM/YYYY"));
  const [showDate, setShowDate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(KPIByMonthDashboard);
  const [user, setUser] = useState(User)

  const navigation = useNavigation()

  const getData = async () => {
    await _retrieveData("userInfo").then((data) => setUser(data))
    await getKPIByMonthDashboard().then((res) => {
      if (res.status == "success") {
        setData(res.data);
        setLoading(false)
      }
      if (res.status == "failed") {
        setLoading(false)
      }
    });
  };

  useEffect(() => {
    getData();
  }, [""]);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.kpiByMonth} />
      <DateView dateLabel={data.dateRange} />
      <Body userInfo={user.userId.gdvId ? user.userId.gdvId.fullName+" ("+user.userId.gdvId ? user.userId.gdvId.maGDV : user.userId.id  +")" : user.userId.displayName+" ("+")"}
        style={{ marginTop: fontScale(27) }}
      />
      <View style={styles.body}>
        {
          loading == true ? <ActivityIndicator size="small" color={colors.primary}/> :
            <>
              <MenuItem
                style={{ marginTop: fontScale(30) }}
                title={text.kpiAchieved}
                icon={images.kpiByMonth}
                value={data.achieveKPI}
                width={width - fontScale(60)}
                onPress={() => navigation.navigate("Achieve")}
              />
              <MenuItem
                style={{ marginTop: fontScale(60) }}
                title={text.provisionalSalary}
                icon={images.salaryByMonth}
                value={data.provSal}
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
