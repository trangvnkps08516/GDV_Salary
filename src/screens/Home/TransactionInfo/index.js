import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar, View, ActivityIndicator, BackHandler } from 'react-native';
import { getProfile, getTransactionInfo } from '../../../api';
import { Body, DatePicker, Header, ListItem } from '../../../comps';
import { Transactioninfo, UserObj } from '../../../models/Data';
import { colors } from '../../../utils/Colors';
import { width } from '../../../utils/Dimenssion';
import { fontScale } from '../../../utils/Fonts';
import { images } from '../../../utils/Images';
import { thoundsandSep } from '../../../utils/Logistics';
import { text } from '../../../utils/Text';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';


const TransactionInfo = (props) => {
    const [month, setMonth] = useState(moment(new Date()).format("MM/YYYY"));
    const [data, setData] = useState(Transactioninfo);
    const [loading, setLoading] = useState(false);
    const [user, setUserData] = useState(UserObj)
    const navigation = useNavigation();

    const _setMonth = (value) => {
        setMonth(value)
        getData(value)
    }

    const getData = async (month) => {
        setLoading(true)
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
        getData(month);
        _getProfile();
        return () => {
            backHandler.remove();
        };

    }, [""]);
    
    return (
        <SafeAreaView style={{ backgroundColor: colors.primary, flex: 1 }}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.transactionsInfo} />
            <DatePicker month={month} width={width - fontScale(120)} style={{ alignSelf: "center" }} onChangeDate={(date) => _setMonth(date)} />
            <Body style={styles.bodyScr} displayName={user.displayName} maGDV={user.gdvId.maGDV} />

            <View style={styles.body}>
                {
                    loading == false ?
                        <View style={styles.detailInfo}>
                            <ListItem icon={images.customer} title={text.customersCount} price={thoundsandSep(data.customerAmount)} />
                            <ListItem icon={images.trans} title={text.transactions} price={thoundsandSep(data.dealingsCount)} />
                            <ListItem icon={images.sim} title={text.transAmount} price={thoundsandSep(data.preToPostPaid)} />
                            <ListItem icon={images.nonesim} title={text.trans2CAmount} price={thoundsandSep(data.denyTwoC)} />

                        </View> :
                        <ActivityIndicator size="small" color={colors.primary} />
                }
            </View>
        </SafeAreaView>
    );
}

export default TransactionInfo;