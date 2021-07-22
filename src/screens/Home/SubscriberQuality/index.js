import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, StatusBar, ActivityIndicator, ScrollView, BackHandler } from 'react-native';
import { DateView, Header, Body, ListItem } from '../../../comps';
import { styles } from './styles';
import { width } from '../../../utils/Dimenssion';
import { colors } from '../../../utils/Colors';
import { images } from '../../../utils/Images';
import { text } from '../../../utils/Text';
import { fontScale } from '../../../utils/Fonts';
import { getProfile, getSubscriberQuality } from '../../../api';
import { thoundsandSep, ToastNotif } from '../../../utils/Logistics';
import { SubsQuality, UserObj } from '../../../models/Data';
import { useNavigation } from '@react-navigation/core';
import Toast from 'react-native-toast-message';
import { Svg, Text as TextSVG } from 'react-native-svg';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { lineChartData } from '../../../sampledata';
import { Dimensions } from 'react-native';
import { Text } from 'react-native';
import { LogBox } from 'react-native';

const SubscriberQuality = () => {
    const [data, setData] = useState(SubsQuality);
    const [chartData, setChartData] = useState({})
    const [loading, setLoading] = useState(true)
    const [loadingChart, setLoadingChart] = useState(true)
    const [user, setUserData] = useState(UserObj)
    const navigation = useNavigation();
    const [leftAxisData, setLeftAxisData] = useState([])
    const [bottomAxisData, setBottomAxisData] = useState([])
    const [revenueLineChart, setRevenueLineChart] = useState([]); //Doanh thu
    const [debitLineChart, setDebitLineChart] = useState([]); // Ghi nợ
    const [detailVal, setDetailVal] = useState(0)
    const [showDetailVal, setShowDetailVal] = useState(false);
    const [labelX, setLabelX] = useState();
    const [labelY, setLabelY] = useState();
    const [index1, setIndex] = useState()

    const [revenueList, setRevenueList] = useState([])
    const [debitList, setDebitList] = useState([])
    const [monthList, setMonthList] = useState([])

    const getData = async () => {
        setLoading(true)
        await getSubscriberQuality(navigation).then((res) => {
            if (res.status == "success") {
                console.log(res.data)
                setData(res.data.data);
                setLeftAxisData(res.data.chart.leftAxisData)
                setBottomAxisData(res.data.chart.bottomAxisData)

                getRenue(res.data.chart.revenue);
                getDebit(res.data.chart.debit);

            }
            if (res.status == "failed") {
                ToastNotif('Cảnh báo', res.message, 'error', true);
            }
            if (res.status == "v_error") {
                Toast.show({
                    text1: "Cảnh báo",
                    text2: res.message,
                    type: "error",
                    visibilityTime: 100,
                    autoHide: true,
                    onHide: () => navigation.navigate("Home")
                });
            }
        }).finally(() => setLoading(false));
    }

    const _getProfile = async () => {
        setLoading(true)
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

    const getRenue = (revenueLineChart) => {
        setLoadingChart(true)
        let revenueList = [];
        let monthList = [];

        for (let i = 0; i < revenueLineChart.length; i++) {
            revenueList.push(revenueLineChart[i].y)
            monthList.push('T' + revenueLineChart[i].x)
        }
        setRevenueList(revenueList)
        setMonthList(monthList)
        setLoadingChart(false);
    }

    const getDebit = (debitLineChart) => {
        setLoadingChart(true)
        let debitList = [];
        for (let i = 0; i < debitLineChart.length; i++) {
            debitList.push(debitLineChart[i].y)
        }
        setDebitList(debitList)
        setLoadingChart(false);
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
        getData();
        _getProfile();

        return () => {
            backHandler.remove();
        };
    }, [""]);


    const _onDataPointClick = (value) => {
        setDetailVal(value.value);
        setShowDetailVal(true);

    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.subscriberQuality} />
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, marginLeft: -width / 6 }}>
                    <DateView dateLabel={data.beginMonth} width={width / 2 - fontScale(50)} />
                </View>
                <View style={{ flex: 1, marginLeft: -width / 4 }}>
                    <DateView dateLabel={data.endMonth} width={width / 2 - fontScale(50)} />
                </View>
            </View>
            <Body style={styles.bodyScr} displayName={user.displayName} maGDV={user.gdvId.maGDV} />

            <View style={{ flex: 1, backgroundColor: colors.white }}>
                {
                    loadingChart == true
                        ?
                        <ActivityIndicator size="small" color={colors.primary} />
                        : null
                }
                <ScrollView showsVerticalScrollIndicator={false}>

                    {

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
                            <View style={{ flex: 1 }}>

                                {
                                    showDetailVal == true ?
                                        <View style={styles.detailDialogInfo}>
                                            <Text style={styles.detailDialogInfoText}>{thoundsandSep(detailVal)}</Text>
                                        </View> : <View />
                                }
                                {
                                    revenueList.length > 0 && debitList.length > 0 && <LineChart
                                        data={{
                                            labels: monthList,
                                            datasets: [
                                                {
                                                    data: revenueList,
                                                    color: (opacity = 1) => `rgba(14,77,226,${opacity})`,
                                                    strokeWidth: 2
                                                },
                                                {
                                                    data: debitList,
                                                    color: (opacity = 1) => `rgba(240,119,0, ${opacity})`,
                                                    strokeWidth: 2
                                                }
                                            ],
                                            legend: ['Doanh thu tháng', 'Nợ trên 90 ngày']
                                        }}
                                        width={width} // from react-native
                                        height={350}
                                        yAxisInterval={1} // optional, defaults to 1
                                        chartConfig={{
                                            backgroundColor: "#fff",
                                            backgroundGradientFrom: "#fff",
                                            backgroundGradientTo: "#fff",
                                            decimalPlaces: 0, // optional, defaults to 2dp
                                            color: (opacity = 1) => `rgba(0, 110, 199, ${opacity})`,
                                            labelColor: (opacity = 1) => `rgba(0, 0, 180, ${opacity})`,
                                            style: {
                                                borderRadius: 16
                                            },
                                            propsForDots: {
                                                r: "3",
                                                strokeWidth: "3"
                                            },
                                            stackedBar: true
                                        }}
                                        fromZero={true}
                                        renderDotContent={({ x, y, index, indexData }) => {
                                            return (
                                                <TextSVG
                                                    key={index}
                                                    x={x}
                                                    y={y - 10}
                                                    fill="black"
                                                    fontSize="8"
                                                    fontWeight="normal"
                                                    textAnchor="middle">
                                                    {showDetailVal == true && indexData == y ? indexData : null}
                                                </TextSVG>
                                            );
                                        }}
                                        onDataPointClick={(data) => _onDataPointClick(data)}
                                        bezier
                                        style={{
                                            marginHorizontal: fontScale(5),
                                            marginTop: fontScale(20)
                                        }}
                                    />
                                }
                            </View>
                        </ScrollView>
                    }
                </ScrollView>
            </View>

            <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView >
    );
}

export default SubscriberQuality;