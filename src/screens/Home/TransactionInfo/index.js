import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StatusBar, View,ActivityIndicator } from 'react-native';
import { getTransactionInfo } from '../../../api';
import { Body, DatePicker, Header, ListItem } from '../../../comps';
import { AvgIncomeDashboard, Transactioninfo } from '../../../models/Data';
import { colors } from '../../../utils/Colors';
import { width } from '../../../utils/Dimenssion';
import { fontScale } from '../../../utils/Fonts';
import { images } from '../../../utils/Images';
import { thoundsandSep } from '../../../utils/Logistics';
import { text } from '../../../utils/Text';
import { styles } from './styles';


const TransactionInfo = (props) => {
    const [month, setMonth] = useState(moment(new Date()).format("MM/YYYY"));
    const [data,setData] = useState(Transactioninfo);
    const [loading,setLoading] = useState(false);

    const _setMonth = (value) => {
        setMonth(value)
        getData(value)
    }

    const getData = async (month) => {
        setLoading(true)
        console.log(month)
        await getTransactionInfo(month).then((res) => {
            if (res.status == "success") {
                setLoading(false)
                setData(res.data)
            }
            if (res.status == "failed") {
                setLoading(false)

            }
        })

    }

    useEffect(() => {
        getData(month)
    }, [""]);
    return (
        <SafeAreaView style={{ backgroundColor: colors.primary, flex: 1 }}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.transactionsInfo} />
            <DatePicker month={month} width={width - fontScale(120)} style={{ alignSelf: "center", marginTop: fontScale(20) }} onChangeDate={(date) => _setMonth(date)} />
            <Body userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"} style={styles.bodyScr} />
            <View style={styles.body}>
                {
                    loading==false ? 
                    <View style={styles.detailInfo}>
                <ListItem icon={images.customer} title={text.customersCount} price={thoundsandSep(data.customerAmount)} />
                <ListItem icon={images.trans} title={text.transactions} price={thoundsandSep(data.dealingsCount)} />
                <ListItem icon={images.sim} title={text.transAmount} price={thoundsandSep(data.preToPostPaid)} />
                <ListItem icon={images.nonesim} title={text.trans2CAmount} price={thoundsandSep(data.denyTwoC)} />

                </View>:
                 <ActivityIndicator size="small" color={colors.primary} /> 
                }
            </View>
        </SafeAreaView>
    );
}

export default TransactionInfo;