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
import { thoundsandSep } from '../../../utils/Logistics';
import { M_SubscriberQuality, UserObj } from '../../../models/Data';
import { useNavigation } from '@react-navigation/core';

const SubscriberQuality = (props) => {
    const [data, setData] = useState(M_SubscriberQuality);
    const [loading, setLoading] = useState(true)
    const [user, setUserData] = useState(UserObj)
    const navigation = useNavigation();

    const getData = async () => {
        setLoading(true)
        await getSubscriberQuality().then((res) => {
            if (res.status == "success") {
                setLoading(false)
                setData(res.data)
            }
            if (res.status == "failed") {
                setLoading(false)
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

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.subscriberQuality} />
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, marginLeft: -width / 6 }}>
                    <DateView dateLabel={data.beginMonth} style={styles.dateView} width={width / 2 - fontScale(50)} />
                </View>
                <View style={{ flex: 1, marginLeft: -width / 4 }}>
                    <DateView dateLabel={data.endMonth} style={styles.dateView} width={width / 2 - fontScale(50)} />
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
                        </ScrollView>
                }

            </View>
        </SafeAreaView>
    );
}

export default SubscriberQuality;