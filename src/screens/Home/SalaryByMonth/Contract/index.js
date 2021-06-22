import React, { useState } from 'react';
import { SafeAreaView, StatusBar, View,Text } from 'react-native';
import { Body, DateView, Header, ListItem } from '../../../../comps';
import { colors } from '../../../../utils/Colors';
import { images } from '../../../../utils/Images';
import { text } from '../../../../utils/Text';
import { styles } from './styles';

const Contract = (props) => {
    const [data,setData] = useState({
        // dateRange:"01/06/2021 - 20/06/2021",
        // sumKpi:"100" ,
        // prePaid:"100/100\n(90 thuê bao OSP)",
        // postPaid:"100/100\n(90 thuê bao OSP)",
        // vas: "190,000/200,000",
        // importantKpi: "190,000/200,000\n(Theo kế hoạch MNP)",
        // retailSales: "1,000,000"
        dateRange:"01/06/2021 - 20/06/2021",
        contractSalary:"1,000,000",
        prePaid:"100.000",
        postPaid:"100.000",
        vas:"100.000",
        otherService:"600.000",
        terminalDevice:"100.000"
  });
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.upSalary} />
            <DateView dateLabel={"01/06/2021 - 20/06/2021"} />
            <Body userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"} style={styles.bodyScr} />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                <View style={styles.sumKpiContainer}>
                    <Text style={styles.sumKpiTitle}>{text.upSalary}: </Text>
                    <Text style={styles.sumKpi}>{data.contractSalary}</Text>
                </View>
                <View style={styles.detailInfo}>
                    <ListItem icon={images.sim} title={text.prepaidSubscriptionFee} price={data.prePaid}/>
                    <ListItem icon={images.sim} title={text.postpaidSSubscriptionFee} price={data.postPaid}/>
                    <ListItem icon={images.rose} title={text.kpiVas} price={data.vas}/>
                    <ListItem icon={images.sim5g} title={text.ordersServiceFee} price={data.otherService}/>
                    <ListItem icon={images.terminaldevice} title={text.terminalServiceFee} price={data.terminalDevice}/>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Contract;