import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { Body, Header, MenuItem } from '../../../../comps';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';
import { text } from '../../../../utils/Text';
import { styles } from './style';


const KPIHome=(props)=> {
    return (   
        <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor={colors.primary} />
        {
          <Header title={text.kpi}/>
        }
        {/* <Text>{JSON.stringify(user)}</Text> */}
        <Body style={{ marginTop: fontScale(27) }} showInfo={false} />
        <View style={styles.body}>
          <MenuItem style={{ marginTop: fontScale(30) }} title={text.topTellers} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.toptellers} width={width - fontScale(60)} onPress={() => navigation.navigate("KPIByMonthDashboard")} />
          <MenuItem style={{ marginTop: fontScale(60) }} title={text.groupKPI} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.groupkpi} iconStyle={{width: fontScale(70), height: fontScale(80)}} width={width - fontScale(60)} onPress={() => navigation.navigate("SalaryByMonthDashboard")} />
          <MenuItem style={{ marginTop: fontScale(60) }} title={text.kpiMonth} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.kpiByMonth} width={width - fontScale(60)} onPress={() => navigation.navigate("AvgIncomeByMonth")} />
          <MenuItem style={{ marginTop: fontScale(60) }} title={text.productivityAverage} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.productivitySub} width={width - fontScale(60)} onPress={() => navigation.navigate("SubscriberQuality")} />
          
          
        </View>
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </SafeAreaView>
    );
}

export default KPIHome;