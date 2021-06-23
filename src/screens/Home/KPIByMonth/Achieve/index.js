import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StatusBar, TouchableOpacity,ScrollView } from 'react-native';
import { DateView, Header, Body, MenuItem, ListItem, DatePicker } from '../../../../comps';
import { styles } from './styles';
import { colors } from '../../../../utils/Colors';
import { images } from '../../../../utils/Images';
import { text } from '../../../../utils/Text';
import { width } from '../../../../utils/Dimenssion';
import moment from 'moment';
// import MonthPicker from '../../../../comps/datepicker';
import { fontScale } from '../../../../utils/Fonts';
import { getKPIByMonthAchieve } from '../../../../api';

const Achieve = (props) => {
    let test = require("../../../../assets/testicon.png")
    const [data, setData] = useState({
        dateRange: "",
        sumKpi: "",
        prePaid: "",
        postPaid: "",
        vas: "",
        importantKpi: "",
        retailSales: ""
    });
    const [month, setMonth] = useState(moment(new Date()).format("MM/YYYY"))
    const [showDate, setShowDate] = useState(false);
    const [loading,setLoading] = useState(true)


    const getData = async()=> {
        await getKPIByMonthAchieve().then((res) => {
            console.log(res)
            if(res.status == "success") {
                setData(res.data)
            }
            if(res.status=="failed"){

            }
        })
        
    }

    useEffect(() => {
       
            getData()
        
    }, [""]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.kpiAchieved} />
            <DateView dateLabel={data.dateRange} style={styles.dateView} />
            <Body userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"} style={styles.bodyScr} />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                <View style={styles.sumKpiContainer}>
                    <Text style={styles.sumKpiTitle}>{text.totalKpi}: </Text>
                    <Text style={styles.sumKpi}>{data.sumKpi} %</Text>
                </View>
                <ScrollView style={{flex:1}} showsVerticalScrollIndicator={false}>
                    <View style={styles.detailInfo}>
                        <ListItem icon={images.sim} title={text.prepaidSubscriptionFee} price={data.prePaid}/>
                        <ListItem icon={images.sim} title={text.postpaidSSubscriptionFee} price={data.postPaid} />
                        <ListItem icon={images.vas} title={text.kpiVas} price={data.vas} />
                        <ListItem icon={images.important} title={text.kpiImportant} price={data.importantKpi} />
                        <ListItem icon={images.retailsales} title={text.retailSales} price={data.retailSales} />
                    </View>
                    <View style={[styles.detailInfo,{marginBottom:fontScale(20)}]}>
                        <ListItem icon={images.percent} title={text.subRatio} justTitle />
                        <View style={styles.subDetail}>
                            <ListItem icon={images.sim} title={text.prepaidSubscriptionFee} price={data.ratePrePaid} />
                            <ListItem icon={images.sim} title={text.postpaidSSubscriptionFee} price={data.ratePostPaid} />
                        </View>
                    </View>
                </ScrollView>
            </View>

        </SafeAreaView>
    );
}

export default Achieve;