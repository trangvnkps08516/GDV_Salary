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
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'
import { lineChartData } from '../../../sampledata';

const SubscriberQuality = () => {
    const [data, setData] = useState(SubsQuality);
    const [loading, setLoading] = useState(true)
    const [user, setUserData] = useState(UserObj)
    const navigation = useNavigation();
    const [fstLineChart, setFstLineChart] = useState("");
    const [sndLineChart, setSndLineChart] = useState("");

    const getData = async () => {
        setLoading(true)
        await getSubscriberQuality(navigation).then((res) => {
            if (res.status == "success") {
                setData(res.data);
                setLoading(false);
            }
            if (res.status == "failed") {
                ToastNotif('Cảnh báo', res.message, 'error', true);
                setLoading(false)
            }
            if (res.status == "v_error") {
                Toast.show({
                    text1: "Cảnh báo",
                    text2: res.message,
                    type: "error",
                    visibilityTime: 100,
                    autoHide: true,
                    onHide: () => navigation.navigate("Home")
                })
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
        getData();
        _getProfile();

        return () => {
            backHandler.remove();
        };
    }, [""]);
    const labels = ["jan", "feb", "mar", "apr", "may", "jun", "jul"];

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
                    loading == true
                        ?
                        <ActivityIndicator size="small" color={colors.primary} />
                        :
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

                            <View style={{ flex: 1,marginHorizontal: fontScale(17), backgroundColor: colors.white }}>
                                <Chart
                                    style={{ height: 300, width: '100%', backgroundColor: '#fff' }}
                                    xDomain={{ min: 1, max: 12 }}
                                    yDomain={{ min: -2, max: 20 }}
                                    padding={{ left: 20, top: 10, bottom: 30, right: 10 }}
                                    xLabels={labels}
                                >
                                    <VerticalAxis tickValues={[0, 4, 8, 12, 16, 20]} />
                                    <HorizontalAxis tickCount={6} tickValues={labels} />
                                    <Line
                                        data={lineChartData[0]}
                                        smoothing="cubic-spline"
                                        theme={{ stroke: { color: 'blue', width: 2 }, scatter: { default: { width: 4, height: 4, rx: 2 } } }}
                                        onTooltipSelect={(data, index) => setFstLineChart(lineChartData[1][index].y)}
                                    />
                                    <Line
                                        data={lineChartData[1]}
                                        onTooltipSelect={(value, index) => setSndLineChart(lineChartData[1][index].y)}
                                        smoothing="cubic-spline"
                                        theme={{ stroke: { color: '#ffa502', width: 2 }, scatter: { default: { width: 4, height: 4, rx: 2 } } }} />
                                </Chart>
                            </View>
                        </ScrollView>
                }

            </View>

            <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView >
    );
}

export default SubscriberQuality;