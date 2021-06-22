import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
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

const Dashboard = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.averageIncome} />
      <DatePicker style={{ alignSelf: "center" }} />
      {/* <MetricStatus status="Đã chốt" style={{ alignSelf: "center" }} /> */}
<Text style = {styles.text}>Số liệu từ tháng 01/2021 đến tháng 03/2021</Text>
      <Body
        userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"}
        style={{ marginTop: fontScale(15) }}
      />
      <View style={styles.body}>
        <TouchableOpacity style={styles.menu}>
          <Image style={styles.icon} source={images.avgIcome}></Image>

          <View style={{flexDirection: 'row', justifyContent: "space-around", marginTop: fontScale(50), paddingVertical: fontScale(5)}}>
          <Text style= {styles.avg}>Bình quân tháng: </Text>
          <Text style= {styles.money}>9,000,000</Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: "space-around", paddingVertical: fontScale(10)}}>
          <Text style= {styles.avg}>Tổng thu nhập: </Text>
          <Text style= {styles.money}>9,000,000</Text>
          </View>
          
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
