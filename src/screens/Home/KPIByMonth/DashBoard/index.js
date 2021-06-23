import React, { useEffect, useState } from "react";
import { SafeAreaView, View, StatusBar } from "react-native";
import { Body, DateView, Header, MenuItem } from "../../../../comps";
import { DatePicker } from "../../../../comps";
import { styles } from "../../../../comps/body/style";
import { colors } from "../../../../utils/Colors";
import { value } from "../../../../utils/Values";
import { width } from "../../../../utils/Dimenssion";
import { fontScale } from "../../../../utils/Fonts";
import { images } from "../../../../utils/Images";
import { text } from "../../../../utils/Text";
import { getKPIByMonthDashboard } from "../../../../api";
import moment from "moment";
import { KPIByMonthDashboard } from "../../../../models/Data";

const DashBoard = (props) => {
  const [month, setMonth] = useState(moment(new Date()).format("MM/YYYY"));
  const [showDate, setShowDate] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(KPIByMonthDashboard)

  const getData = async () => {
    await getKPIByMonthDashboard().then((res) => {
      console.log(res);

      if (res.status == "success") {
        setData(res.data);
      }
      if (res.status == "failed") {
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
      <Body
        userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"}
        style={{ marginTop: fontScale(27) }}
      />
      <View style={styles.body}>
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
      </View>
    </SafeAreaView>
  );
};

export default DashBoard;
