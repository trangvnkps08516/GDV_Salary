import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { Body, Header, MenuItem } from '../../../../comps';
import { text } from '../../../../utils/Text';
import { styles } from './style';
import Toast from "react-native-toast-message";
import { images } from '../../../../utils/Images';
import { width } from '../../../../utils/Dimenssion';
import { colors } from '../../../../utils/Colors';
import { fontScale } from '../../../../utils/Fonts';

const index=(props)=> {
    return (
        <SafeAreaView style={styles.container}>
             <StatusBar translucent backgroundColor={colors.primary} />
        {
          <Header title={text.averageIncome}/>
        }
        {/* <Text>{JSON.stringify(user)}</Text> */}
        <Body style={{ marginTop: fontScale(27) }} showInfo={false} />
        <View style={styles.body}>
          
          <MenuItem style={{ marginTop: fontScale(60) }} title={text.topTellers} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.toptellers} iconStyle={{width: fontScale(60), height: fontScale(80), marginTop: -15}} width={width - fontScale(60)} onPress={() => navigation.navigate("SalaryByMonthDashboard")} />
          <MenuItem style={{ marginTop: fontScale(60) }} title={text.groupSalaryAverage} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.otherExpenses} width={width - fontScale(60)} onPress={() => navigation.navigate("KPIByMonthDashboard")} />
          <MenuItem style={{ marginTop: fontScale(60) }} title={text.salaryAverage} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.salaryByMonth} width={width - fontScale(60)} onPress={() => navigation.navigate("AvgIncomeByMonth")} />
   
          
          
        </View>
        <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
    );
}

export default index;