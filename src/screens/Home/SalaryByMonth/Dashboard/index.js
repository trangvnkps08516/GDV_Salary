
import React from 'react';
import { SafeAreaView , View, StatusBar} from 'react-native';
import { Body, Header, MenuItem, MetricStatus, TotalSalary } from '../../../../comps';
import { DatePicker } from '../../../../comps';
import { styles } from '../../../../comps/body/style';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';
import { text } from '../../../../utils/Text';
import { value } from '../../../../utils/Values';


const Dashboard=(props) => {
    return (
        <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor={colors.primary}/>
        <Header  title={text.salaryByMonth} />
        <DatePicker style = {{alignSelf: 'center'}}/>
        <MetricStatus status = "Đã chốt" style = {{alignSelf: 'center'}}/>
        
        <Body userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"} style={{ marginTop: fontScale(15) }} />
        <View style={styles.body}>
        <TotalSalary style= {{alignSelf:'center', marginTop: -fontScale(18)}} title={text.total} value={value.salary}/>
          <MenuItem style={{marginTop: fontScale(25)}} title={text.fixedSalary} icon={images.salaryByMonth} value = {value.fixedSalary} width={width-fontScale(60)} onPress={()=>navigation.navigate("KPIByMonth")}/>
         
          <MenuItem style={{marginTop: fontScale(45)}} title={text.upSalary} icon={images.upSalary} value = {value.upSalary} width={width-fontScale(60)} onPress={()=>navigation.navigate("KPIByMonth")}/>

          <MenuItem style={{marginTop: fontScale(45)}} title={text.incentiveCost} icon={images.incentiveCost} value = {value.incentiveCost} width={width-fontScale(60)} onPress={()=>navigation.navigate("KPIByMonth")}/>
         
         <MenuItem style={{marginTop: fontScale(45)}} title={text.punishment} icon={images.punishment} value = {value.punishment} width={width-fontScale(60)} onPress={()=>navigation.navigate("KPIByMonth")}/>
         <MenuItem style={{marginTop: fontScale(45)}} title={text.otherExpenses} icon={images.otherExpenses} value = {value.otherExpenses} width={width-fontScale(60)} onPress={()=>navigation.navigate("KPIByMonth")}/>



          
          </View>
        </SafeAreaView>
    );
}

export default Dashboard;