import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StatusBar, View, ActivityIndicator, BackHandler, ScrollView } from 'react-native';
import { getAvgIncomeByMonth, getProfile } from '../../../../api';
import { Body, DatePicker, Header, ListItem } from '../../../../comps';
import { M_AvgIncomeByMonth, UserObj } from '../../../../models/Data';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';
import { thoundsandSep, ToastNotif } from '../../../../utils/Logistics';
import { text } from '../../../../utils/Text';
import { styles } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';

// Bình Quân Tháng và Tổng Thu Nhập
function AvgIncomeByMonth(props) {
    const route = useRoute()
    const [beginMonth, setMonth] = useState(moment(new Date()).subtract(6, 'months').format("MM/YYYY"));
    const [sMonth, setSMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(M_AvgIncomeByMonth);
    const [user, setUserData] = useState(UserObj)
    const navigation = useNavigation();

    const getData = async (beginMonth, endMonth) => {
        setLoading(true)
        await getAvgIncomeByMonth(beginMonth, endMonth, navigation).then((res) => {
            if (res.status == "success") {
                setData(res.data)
                setLoading(false)
            }
            if (res.status == "failed") {
                ToastNotif('Cảnh báo', res.message, 'error', true);
                setLoading(false)
            }
            if (res.status == "failed") {
                setLoading(false);
            }
        })
    }

    const _getProfile = async () => {

        await getProfile(navigation).then((res) => {
            if (res.status == "success") {
                setLoading(false)
                setUserData(res.data)
            }
            if (res.status == "failed") {
                setLoading(false)
            }
        })
    }

    useEffect(() => {
        const backAction = () => {
            navigation.goBack();
            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
        getData(beginMonth, sMonth);
        _getProfile();
        return () => {
            backHandler.remove();
        };
    }, []);

    const onChangeMonth = async (value) => {
        if (value > sMonth == true) {

        } else {
            setMonth(value)
            setSMonth(sMonth)
            await getData(value, sMonth);
        }
    }

    const onChangeSMonth = async (value) => {
        if (beginMonth > value == true) {
            setSMonth(sMonth)
        } else {
            setSMonth(value)
            await getData(beginMonth, value);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.averageAndAmount} />
            <View style={styles.dateContainer}>
                <DatePicker month={beginMonth} width={width / 2 - fontScale(40)} style={{ marginLeft: fontScale(30) }} onChangeDate={(date) => onChangeMonth(date)} />
                <DatePicker month={sMonth} width={width / 2 - fontScale(40)} style={{ marginLeft: fontScale(20) }} onChangeDate={(date) => onChangeSMonth(date)} />
            </View>
            <View style={styles.body}>
                <Text style={styles.notification}>{data.notification}</Text>
                <Body style={styles.bodyScr} displayName={user.displayName} maGDV={user.gdvId.maGDV} />
            </View>


            <ScrollView style={{ backgroundColor: colors.white }} showsVerticalScrollIndicator={false}>

                <View style={{ backgroundColor: colors.white, paddingVertical: fontScale(30), flex: 1 }}>
                    {
                        loading == true ? <ActivityIndicator size="small" color={colors.primary} /> :
                            <View>
                                <View style={[styles.sumKpiContainer, { marginTop: -fontScale(25) }]}>
                                    <Text style={styles.sumKpiTitle}>{text.averageMonth}: </Text>
                                    <Text style={styles.sumKpi}>{thoundsandSep(data.avgByMonth)}</Text>
                                </View>
                                <View style={[styles.detailInfo, { marginTop: fontScale(15) }]}>
                                    <ListItem icon={images.salaryByMonth} title={text.fixedAverageSalary} price={thoundsandSep(data.avgPermanentSalary)} />
                                    <ListItem icon={images.upSalary} title={text.upAverageSalary} price={thoundsandSep(data.avgContractSalary)} />
                                    <ListItem icon={images.incentive} title={text.averageIncentiveSpending} price={thoundsandSep(data.avgExpenIncentive)} />
                                    <ListItem icon={images.otheroutcome} title={text.averageOtherCosts} price={thoundsandSep(data.avgOtherExpen)} />
                                </View>
                                <View style={[styles.sumKpiContainer, { marginTop: fontScale(20) }]}>
                                    <Text style={[styles.sumKpiTitle]}>{text.totalIncome}: </Text>
                                    <Text style={styles.sumKpi}>{thoundsandSep(data.totalIncome)}</Text>
                                </View>
                                <View style={[styles.detailInfo, { marginTop: fontScale(15) }]}>
                                    <ListItem icon={images.salaryByMonth} title={text.totalAverageSalary} price={thoundsandSep(data.totalPermanentSalary)} />
                                    <ListItem icon={images.upSalary} title={text.totalupAverageSalary} price={thoundsandSep(data.totalContractSalary)} />
                                    <ListItem icon={images.incentive} title={text.totalIncentiveSpending} price={thoundsandSep(data.totalExpenIncentive)} />
                                    <ListItem icon={images.otheroutcome} title={text.totalOtherCosts} price={thoundsandSep(data.totalOtherExpen)} />
                                </View>
                            </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AvgIncomeByMonth;