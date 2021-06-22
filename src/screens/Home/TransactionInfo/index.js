import moment from 'moment';
import React, { useState } from 'react';
import { SafeAreaView, Text, StatusBar, View } from 'react-native';
import { Body, DatePicker, Header, ListItem } from '../../../comps';
import { colors } from '../../../utils/Colors';
import { width } from '../../../utils/Dimenssion';
import { fontScale } from '../../../utils/Fonts';
import { images } from '../../../utils/Images';
import { thoundsandSep } from '../../../utils/Logistics';
import { text } from '../../../utils/Text';
import { styles } from './styles';


const TransactionInfo = (props) => {
    const [month, setMonth] = useState(moment(new Date()).format("MM/YYYY"));
    const [data,setData] = useState({
        "customerAmount":100,
        "dealingsCount":200,
        "preToPostPaid":100,
        "denyTwoC":100
       })

    const _setMonth = (value) => {
        setMonth(value)
        console.log(value)
    }
    return (
        <SafeAreaView style={{ backgroundColor: colors.primary, flex: 1 }}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.transactionsInfo} />
            <DatePicker month={month} width={width - fontScale(120)} style={{ alignSelf: "center", marginTop: fontScale(20) }} onChangeDate={(date) => _setMonth(date)} />
            <Body userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"} style={styles.bodyScr} />
            <View style={styles.body}>
                <View style={styles.detailInfo}>
                <ListItem icon={images.customer} title={text.customersCount} price={thoundsandSep(data.customerAmount)} />
                <ListItem icon={images.trans} title={text.transactions} price={thoundsandSep(data.customerAmount)} />
                <ListItem icon={images.sim} title={text.transAmount} price={thoundsandSep(data.customerAmount)} />
                <ListItem icon={images.nonesim} title={text.trans2CAmount} price={thoundsandSep(data.customerAmount)} />

                </View>
            </View>
        </SafeAreaView>
    );
}

export default TransactionInfo;