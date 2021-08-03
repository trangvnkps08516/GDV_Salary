import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import Toast from 'react-native-toast-message';
import { Body, Header, MenuItem } from '../../../../comps';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';
import { text } from '../../../../utils/Text';
import { styles } from './style';

const AdminSalaryByMontHome=(props)=> {
  const navigation = useNavigation()
    return (
        <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor={colors.primary} />
        {
          <Header title={text.salaryByMonth}/>
        }
        {/* <Text>{JSON.stringify(user)}</Text> */}
        <Body style={{ marginTop: fontScale(27) }} showInfo={false} />
        <View style={styles.body}>
          <MenuItem style={{ marginTop: fontScale(30) }} title={text.costManagement} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.otherExpenses} width={width - fontScale(60)} onPress={() => navigation.navigate("AdminExpenseManagement")} />
          <MenuItem style={{ marginTop: fontScale(60) }} title={text.topTellers} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.toptellers} iconStyle={{width: fontScale(60), height: fontScale(80), marginTop: -15}} width={width - fontScale(60)} onPress={() => navigation.navigate("AdminTopTellers")} />
          <MenuItem style={{ marginTop: fontScale(60) }} title={text.groupSalary} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.salaryByMonth} width={width - fontScale(60)} onPress={() => navigation.navigate("AdminSalaryGroup")} />
          <MenuItem style={{ marginTop: fontScale(60) }} title={text.salaryMonth} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.incentiveCost} width={width - fontScale(60)} onPress={() => navigation.navigate("AdminMonthSalary")} />
          
          
        </View>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </SafeAreaView>
    );
}

export default AdminSalaryByMontHome;