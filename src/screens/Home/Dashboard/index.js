import React from 'react';
import { SafeAreaView , View, StatusBar} from 'react-native';
import { styles } from './style';
import { MenuItem } from '../../../comps';
import { Header } from '../../../comps';
import { Body } from '../../../comps';
import { images } from '../../../utils/Images';
import { text } from '../../../utils/Text';
import { width } from '../../../utils/Dimenssion';
import { fontScale } from '../../../utils/Fonts';
import { colors } from '../../../utils/Colors';


function Dashboard(props) {
    return (
        
        <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor={colors.primary}/>
        <Header title={text.dashboard} />
        <Body userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"} style={{ marginTop: fontScale(27) }} />
        <View style={styles.body}>
          <MenuItem style={{marginTop: fontScale(30)}} title={text.kpiByMonth} icon={images.kpiByMonth} width={width-fontScale(60)} onPress={()=>navigation.navigate("KPIByMonth")}/>
         
          <MenuItem style={{marginTop: fontScale(60)}} title={text.salaryByMonth} icon={images.salaryByMonth} width={width-fontScale(60)} onPress={()=>navigation.navigate("KPIByMonth")}/>
          <MenuItem style={{marginTop: fontScale(60)}} title={text.averageIncome} icon={images.avgIcome} width={width-fontScale(60)} onPress={()=>navigation.navigate("AvgIncome")}/>
          <MenuItem style={{marginTop: fontScale(60)}} title={text.subscriberQuality} icon={images.subscriberQuality} width={width-fontScale(60)} onPress={()=>navigation.navigate("SubscriberQuality")}/>
          <MenuItem style={{marginTop: fontScale(60)}} title={text.transactionInformation} icon={images.transactionInformation} width={width-fontScale(60)} onPress={()=>navigation.navigate("SubscriberQuality")}/>
          </View>
        </SafeAreaView>
    );
}

export default Dashboard;