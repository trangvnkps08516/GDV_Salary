import React from 'react';
import { SafeAreaView,View,Text, StatusBar } from 'react-native';
import { DateView, Header,Body } from '../../../../comps';
import { styles } from './styles';
import { colors } from '../../../../utils/Colors';
import { fontScale } from '../../../../utils/Fonts';

const Achieve = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} barStyle="dark-content" />
            <Header title="KPI đạt được"/>
            <DateView dateLabel={"01/06/2021 - 20/06/2021"}/>
            <Body userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"} style={{marginTop:fontScale(27)}}/>
            <View style={{flex:1,backgroundColor:colors.white}}>
                
            </View>
        </SafeAreaView>
    );
}

export default Achieve;