import React, { useState } from 'react';
import { SafeAreaView, View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { DateView, Header, Body, MenuItem, ListItem, DatePicker } from '../../../../comps';
import { styles } from './styles';
import { colors } from '../../../../utils/Colors';
import { images } from '../../../../utils/Images';
import { text } from '../../../../utils/Text';
import { width } from '../../../../utils/Dimenssion';
import moment from 'moment';
// import MonthPicker from '../../../../comps/datepicker';
import { fontScale } from '../../../../utils/Fonts';

const Achieve = (props) => {
    let test = require("../../../../assets/testicon.png")
    const [data, setData] = useState({
        dateRange: "01/06/2021 - 20/06/2021",
        sumKpi: "100",
        prePaid: "100/100\n(90 TB OSP)",
        postPaid: "100/100\n(90 TB OSP)",
        vas: "190,000/200,000",
        importantKpi: "190,000/200,000\n(Theo kế hoạch MNP)",
        retailSales: "1,000,000"
    });
    const [month, setMonth] = useState(moment(new Date()).format("MM/YYYY"))
    const [showDate, setShowDate] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.kpiAchieved} />
            {/* <DatePicker month={month} width={width-fontScale(120)} style={{alignSelf:"center"}} onChangeDate={(date)=>console.log(date)}/> */}
            <DateView dateLabel={"01/06/2021 - 20/06/2021"} style={styles.dateView} />
            <Body userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"} style={styles.bodyScr} />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                <View style={styles.sumKpiContainer}>
                    <Text style={styles.sumKpiTitle}>{text.totalKpi}: </Text>
                    <Text style={styles.sumKpi}>{data.sumKpi}%</Text>
                </View>
                <View style={styles.detailInfo}>
                    <ListItem icon={images.sim} title={text.prepaidSubscriptionFee} price={data.prePaid} />
                    <ListItem icon={images.sim} title={text.postpaidSSubscriptionFee} price={data.postPaid} />
                    <ListItem icon={images.vas} title={text.kpiVas} price={data.vas} />
                    <ListItem icon={images.important} title={text.kpiImportant} price={data.importantKpi} />
                    <ListItem icon={images.retailsales} title={text.retailSales} price={data.retailSales} />
                </View>
                <View style={styles.detailInfo}>
                    <ListItem icon={images.percent} title={text.subRatio} justTitle />
                    <View style={styles.subDetail}>
                        <ListItem icon={images.sim} title={text.prepaidSubscriptionFee} price={data.prePaid} />
                        <ListItem icon={images.sim} title={text.postpaidSSubscriptionFee} price={data.postPaid} />
                    </View>
                </View>
            </View>
           
        </SafeAreaView>
    );
}

export default Achieve;