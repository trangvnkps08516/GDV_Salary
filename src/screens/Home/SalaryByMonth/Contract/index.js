import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Text, ActivityIndicator } from 'react-native';
import { getContractSalaryByMonth, getProfile } from '../../../../api';
import { Body, DatePicker, DateView, Header, ListItem, MetricStatus } from '../../../../comps';
import { ContractSalaryByMonth, UserObj } from '../../../../models/Data';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';
import { thoundsandSep } from '../../../../utils/Logistics';
import { text } from '../../../../utils/Text';
import { styles } from './styles';
import { useRoute } from "@react-navigation/core";

const Contract = (props) => {
    const route = useRoute();
    const [month, setMonth] = useState(route.params?.month || moment(new Date()).format("MM/YYYY"));
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(ContractSalaryByMonth);
    const [user, setUserData] = useState(UserObj)

    const getData = async (month) => {
        setLoading(true)
        await getContractSalaryByMonth(month).then((res) => {
            if (res.status == "success") {
                setLoading(false)
                setData(res.data);
            }
            if (res.status == "failed") {
                setLoading(false)

            }
        })

    }
    const _getProfile=async()=>{
    
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
        getData(month);
        _getProfile()
    }, [""]);

    const _onChangeMonth = async (value) => {
        setMonth(value);
        await getData(value)
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.salaryByMonth} />
            <DatePicker month={month} width={width - fontScale(120)} style={{ alignSelf: "center" }} onChangeDate={(date) => _onChangeMonth(date)} />
            <MetricStatus status={data.status} style={{ alignSelf: "center", marginTop: fontScale(20) }} />
            <Body style={{ marginTop: fontScale(15) }}  displayName={user.displayName} maGDV={user.gdvId.maGDV}/>

            <View style={{ flex: 1, backgroundColor: colors.white }}>
                {
                    loading == true ? <ActivityIndicator color={colors.primary} size="small"/> :
                        <View>
                            <View style={styles.sumKpiContainer}>
                                <Text style={styles.sumKpiTitle}>{text.upSalary}: </Text>
                                <Text style={styles.sumKpi}>{thoundsandSep(data.contractSalary)}</Text>
                            </View>

                            <View style={styles.kpisContainer}>
                                <Text style={styles.kpisTitle}>{text.kpiS}: </Text>
                                <Text style={styles.kpisKpi}>{data.kpis}</Text>
                            </View>
                            <View style={styles.detailInfo}>
                                <ListItem icon={images.sim} title={text.prepaidSubscriptionFee} price={thoundsandSep(data.prePaid)} />
                                <ListItem icon={images.sim} title={text.postpaidSSubscriptionFee} price={thoundsandSep(data.postPaid)} />
                                <ListItem icon={images.vas} title={text.kpiVas} price={thoundsandSep(data.vas)} />
                                <ListItem icon={images.sim5g} title={text.ordersServiceFee} price={thoundsandSep(data.postage)} />
                                <ListItem icon={images.phone} title={text.terminalServiceFee} price={thoundsandSep(data.terminalDevice)} />
                                <ListItem icon={images.headphone} title={text.orderFee} price={thoundsandSep(data.otherService)} />
                                <ListItem icon={images.arrears} title={text.arrears} price={thoundsandSep(data.arrears)} />
                            </View>
                        </View>
                }
            </View>
        </SafeAreaView>
    );
}

export default Contract;