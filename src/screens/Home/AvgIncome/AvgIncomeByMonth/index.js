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
import { thoundsandSep } from '../../../../utils/Logistics';
import { text } from '../../../../utils/Text';
import { styles } from './style';
import { useNavigation, useRoute } from '@react-navigation/native';

// Bình Quân Tháng và Tổng Thu Nhập
function AvgIncomeByMonth(props) {
    const route = useRoute()
    const [month, setMonth] = useState(route.params?.dateRange.beginMonth || moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    const [sMonth, setSMonth] = useState(route.params?.dateRange.endMonth || moment(new Date()).format("MM/YYYY"));
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(M_AvgIncomeByMonth);
    const [user, setUserData] = useState(UserObj)
    const navigation = useNavigation();

    const getData = async (beginMonth, endMonth) => {
        setLoading(true)
        await getAvgIncomeByMonth(beginMonth, endMonth).then((data) => {
            if (data.status == "success") {
                setData(data.data)
                setLoading(false)
            } else if (data.status == "failed") {
                setLoading(false);
            }
        })
    }

    const _getProfile = async () => {

        await getProfile().then((res) => {
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
        getData(month, sMonth);
        _getProfile();
        return () => {
            backHandler.remove();
        };
    }, []);

    const onChangeMonth = async (month) => {
        if (month > sMonth == true) {

        } else {
            setMonth(month)
            await getData(month, sMonth);
        }
    }

    const onChangeSMonth = async (sMonth) => {
        if (month > sMonth == true) {

        } else {
            await getData(month, sMonth);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.averageAndAmount} />
            <View style={styles.dateContainer}>
                <DatePicker month={month} width={width / 2 - fontScale(40)} style={{ marginLeft: fontScale(30) }} onChangeDate={(date) => onChangeMonth(date)} />
                <DatePicker month={sMonth} width={width / 2 - fontScale(40)} style={{ marginLeft: fontScale(20) }} onChangeDate={(date) => onChangeSMonth(date)} />
            </View>
            <View style={styles.body}>
                <Text style={styles.notification}>{data.notification}</Text>
                <Body style={styles.bodyScr} displayName={user.displayName} maGDV={user.gdvId.maGDV} />
</View>

<View style={[styles.sumKpiContainer, { marginTop: -fontScale(25)}]}>
                                    <Text style={styles.sumKpiTitle}>{text.averageMonth}: </Text>
                                    <Text style={styles.sumKpi}>{thoundsandSep(data.avgByMonth)}</Text>
                                </View>
            <ScrollView style={{backgroundColor:colors.white}} showsVerticalScrollIndicator={false}>
            
                <View style={{ backgroundColor: colors.white,paddingVertical:30, flex: 1 }}>
                    {
                        loading == true ? <ActivityIndicator size="small" color={colors.primary} /> :
                            <View>
                                
                                <View style={styles.detailInfo}>
                                    <ListItem icon={images.salaryByMonth} title={text.fixedAverageSalary} price={thoundsandSep(data.avgPermanentSalary)} />
                                    <ListItem icon={images.upSalary} title={text.upAverageSalary} price={thoundsandSep(data.avgContractSalary)} />
                                    <ListItem icon={images.incentive} title={text.averageIncentiveSpending} price={thoundsandSep(data.avgContractSalary)} />
                                    <ListItem icon={images.otheroutcome} title={text.averageOtherCosts} price={thoundsandSep(data.avgOtherExpen)} />
                                </View>

                                <View style={[styles.sumKpiContainer, { marginTop: fontScale(20)}]}>
                                    <Text style={[styles.sumKpiTitle]}>{text.totalIncome}: </Text>
                                    <Text style={styles.sumKpi}>{thoundsandSep(data.avgByMonth)}</Text>
                                </View>
                                <View style={[styles.detailInfo, { marginTop: 15}]}>
                                    <ListItem icon={images.salaryByMonth} title={text.totalAverageSalary} price={thoundsandSep(data.avgPermanentSalary)} />
                                    <ListItem icon={images.upSalary} title={text.totalupAverageSalary} price={thoundsandSep(data.avgContractSalary)} />
                                    <ListItem icon={images.incentive} title={text.totalIncentiveSpending} price={thoundsandSep(data.avgContractSalary)} />
                                    <ListItem icon={images.otheroutcome} title={text.totalOtherCosts} price={thoundsandSep(data.avgOtherExpen)} />
                                </View>
                            </View>
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default AvgIncomeByMonth;