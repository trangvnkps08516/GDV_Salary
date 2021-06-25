import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, StatusBar, TouchableOpacity, ScrollView } from 'react-native';
import { DateView, Header, Body, MenuItem, ListItem, DatePicker } from '../../../comps';
import { styles } from './styles';
import { width } from '../../../utils/Dimenssion';
import moment from 'moment';
import { colors } from '../../../utils/Colors';
import { images } from '../../../utils/Images';
import { text } from '../../../utils/Text';
import { fontScale } from '../../../utils/Fonts';
import { getSubscriberQuality } from '../../../api';
import { thoundsandSep } from '../../../utils/Logistics';


const SubscriberQuality = (props) => {
    const [data, setData] = useState({
        "beginMonth": "",
        "endMonth": "",
        "debtPercent": "",
        "totalDebtNinety": "",
        "totalRevenue": "",
        "newSubPrePaid": "",
        "revokeAmount": "",
        "preToPostPaid": "",
        "denyTwoC": ""
    });
    const [month, setMonth] = useState(moment(new Date()).format("MM/YYYY"))
    const [showDate, setShowDate] = useState(false);
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        await getSubscriberQuality().then((res) => {

            if (res.status == "success") {
                setData(res.data)
            }
            if (res.status == "failed") {

            }
        })

    }

    useEffect(() => {
        getData()
    }, [""]);

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.subscriberQuality} />
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, marginLeft: -width / 6 }}>
                    <DateView dateLabel={'Tháng '+data.beginMonth} style={styles.dateView} width={width / 2 - fontScale(50)} />
                </View>
                <View style={{ flex: 1, marginLeft: -width / 4 }}>
                    <DateView dateLabel={'Tháng '+data.endMonth} style={styles.dateView} width={width / 2 - fontScale(50)} />
                </View>
            </View>
            <Body userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"} style={styles.bodyScr} />
            <View style={{ flex: 1, backgroundColor: colors.white }}>

                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>

                    <View style={[styles.detailInfo, { marginBottom: fontScale(20) }]}>
                        <ListItem icon={images.debtPercent} title={text.debtPercent} price={thoundsandSep(data.debtPercent)} />
                        <View style={styles.subDetail}>
                            <ListItem icon={images.totalDebtNinety} title={text.totalDebtNinety} price={thoundsandSep(data.totalDebtNinety)} />
                            <ListItem icon={images.totalRevenue} title={text.totalRevenue} price={thoundsandSep(data.totalRevenue)} />
                        </View>
                        <ListItem icon={images.newSubPrePaid} title={text.newSubPrePaid} price={thoundsandSep(data.newSubPrePaid)} />
                        <View style={styles.subDetail}>
                            <ListItem icon={images.revokeAmount} title={text.revokeAmount} price={thoundsandSep(data.revokeAmount)} />
                            <ListItem icon={images.preToPostPaid} title={text.preToPostPaid} price={thoundsandSep(data.preToPostPaid)} />
                            <ListItem icon={images.denyTwoC} title={text.denyTwoC} price={thoundsandSep(data.denyTwoC)} />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default SubscriberQuality;