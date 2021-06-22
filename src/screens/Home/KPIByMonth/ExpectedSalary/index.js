import React, { useState } from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import { DateView, Header, Body, MenuItem, ListItem, DatePicker } from '../../../../comps';
import { styles } from './styles';
import { colors } from '../../../../utils/Colors';
import { text } from '../../../../utils/Text';
import { images } from '../../../../utils/Images';
import { thoundsandSep } from '../../../../utils/Logistics';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';

const ExpectedSalary = (props) => {
    const [data, setData] = useState({
        contractSalary: 1000000,
        prePaid: 100000,
        postPaid: 100000,
        vas: 100000,
        otherService: 600000,
        terminalDevice: 100000
    })
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.expectedSalary} />
            <DateView dateLabel={"01/06/2021 - 20/06/2021"} />
            <Body userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"} style={styles.bodyScr} />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                <View style={styles.sumKpiContainer}>
                    <Text style={styles.sumKpiTitle}>{text.expectedSalary}: </Text>
                    <Text style={styles.sumKpi}>{thoundsandSep(data.contractSalary)}</Text>
                </View>
                <View>
                    <MenuItem style={{ marginTop: 50 }} title={text.fixedSalary} icon={images.salaryByMonth} width={width - fontScale(40)} value={thoundsandSep(data.contractSalary)} />
                </View>
                <View style={styles.detailInfo}>
                    <ListItem main icon={images.sim} title={text.upSalaryProduct} price={thoundsandSep(data.prePaid)} />
                    <ListItem icon={images.sim} title={text.prepaidSubscriptionFee} price={thoundsandSep(data.prePaid)} />
                    <ListItem icon={images.sim} title={text.postpaidSSubscriptionFee} price={thoundsandSep(data.postPaid)} />
                    <ListItem icon={images.vas} title={text.vasFee} price={thoundsandSep(data.vas)} />
                    <ListItem icon={images.sim5g} title={text.ordersServiceFee} price={thoundsandSep(data.otherService)} />
                    <ListItem icon={images.phone} title={text.terminalServiceFee} price={thoundsandSep(data.otherService)} />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default ExpectedSalary;