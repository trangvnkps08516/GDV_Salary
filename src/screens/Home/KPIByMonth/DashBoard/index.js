
import React, { useState } from 'react';
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
import moment from 'moment';

import { useNavigation } from '@react-navigation/core';

const DashBoard = (props) => {
  const [month, setMonth] = useState(moment(new Date()).format("MM/YYYY"));
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.kpiByMonth} />
      <DatePicker month={month} width={width - fontScale(120)} style={{ alignSelf: "center" }} onChangeDate={(date) => _onChangeMonth(date)} />
      <Body userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"} style={{ marginTop: fontScale(27) }} />
      <View style={styles.body}>

        <MenuItem style={{ marginTop: fontScale(30) }} title={text.kpiAchieved} icon={images.kpiByMonth} value={value.kpiAchieved} width={width - fontScale(60)} onPress={() => navigation.navigate("Achieve")} />

        <MenuItem style={{ marginTop: fontScale(60) }} title={text.provisionalSalary} icon={images.salaryByMonth} value={value.kpiAchieved} width={width - fontScale(60)} onPress={() => navigation.navigate("ExpectedSalary")} />

      </View>
    </SafeAreaView>
  );
}

export default DashBoard;