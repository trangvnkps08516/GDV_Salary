import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Body, Header, MenuItem } from '../../../../comps';
import { text } from '../../../../utils/Text';
import { styles } from './style';
import Toast from "react-native-toast-message";
import { images } from '../../../../utils/Images';
import { width } from '../../../../utils/Dimenssion';
import { colors } from '../../../../utils/Colors';
import { fontScale } from '../../../../utils/Fonts';
import { useNavigation } from '@react-navigation/core';
import { useEffect } from 'react';
import { _retrieveData } from '../../../../utils/Storage';
import { User } from '../../../../models/Admin';

const index = (props) => {
  const navigation = useNavigation();
  const [user,setUser] = useState(User)

  const checkAdminAvgIncomeRole = () => {
    console.log('go to Lương Bình Quân')
     _retrieveData("userInfo").then((item) => {
      setUser(item)
      if (item.userId.userGroupId.code == "VMS_CTY") {
        navigation.navigate("AdminAvgIncome")
      } 
      if (item.userId.userGroupId.code == "MBF_CHINHANH") {
        navigation.navigate("AdminAvgIncomeShop",{ branchItem: {shopCode: item?.userId.shopId.shopCode}})
      } 
      if (item.userId.userGroupId.code == "MBF_CUAHANG") {
        navigation.navigate("AdminAvgIncomeTellers",{ branchItem: {shopCode:item?.userId.shopId.parentShopId.shopCode}, shopItem: {shopCode: item?.userId.shopId.shopCode}})
      }
    })
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.averageIncome} />
      <Body style={{ marginTop: fontScale(27) }} showInfo={false} />
      <View style={styles.body}>
        <MenuItem style={{ marginTop: fontScale(60) }} title={text.topTellers} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.toptellers} iconStyle={{ width: fontScale(60), height: fontScale(80), marginTop: -15 }} width={width - fontScale(60)} onPress={() => navigation.navigate("AdminAvgIncomeTopSellers")} />
        <MenuItem style={{ marginTop: fontScale(60) }} title={text.groupSalaryAverage} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.otherExpenses} width={width - fontScale(60)} onPress={() => navigation.navigate("AdminAvgIncomeSalaryGroup")} />
        <MenuItem style={{ marginTop: fontScale(60) }} title={text.salaryAverage} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.salaryByMonth} width={width - fontScale(60)} onPress={()=>checkAdminAvgIncomeRole()} />
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
}

export default index;