
import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { Body, Header, MenuItem } from '../../../../comps';
import { DatePicker } from '../../../../comps';
import { styles } from '../../../../comps/body/style';
import { colors } from '../../../../utils/Colors';
import { value } from '../../../../utils/Values';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';
import { text } from '../../../../utils/Text';

const DashBoard = (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.kpiByMonth} />
      <DatePicker />
      <Body userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"} style={{ marginTop: fontScale(27) }} />
      <View style={styles.body}>
        <MenuItem style={{ marginTop: fontScale(30) }} title={text.kpiAchieved} icon={images.kpiByMonth} value={value.kpiAchieved} width={width - fontScale(60)} onPress={() => navigation.navigate("KPIByMonth")} />
        <MenuItem style={{ marginTop: fontScale(60) }} title={text.provisionalSalary} icon={images.salaryByMonth} value={value.kpiAchieved} width={width - fontScale(60)} onPress={() => navigation.navigate("KPIByMonth")} />
      </View>
    </SafeAreaView>
  );
}

export default DashBoard;