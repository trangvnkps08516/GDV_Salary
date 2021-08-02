import { useNavigation } from '@react-navigation/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { set } from 'react-native-reanimated';
import { getAllBranch, getAllShop, getAllEmp } from '../../../../api';
import { Body, DatePicker, Header, Search } from '../../../../comps';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';
import { getLoginInfo } from '../../../../utils/Logistics';
import { _retrieveData } from '../../../../utils/Storage';
import { text } from '../../../../utils/Text';
import { styles } from './style'

const index = (props) => {
    const [month, setMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"));
    const [loading, setLoading] = useState(false);
    const [branchList, setBranchList] = useState([]);
    const [branchCode, setBranchCode] = useState('')
    const [shopList, setShopList] = useState([]);
    const [shopCode, setShopCode] = useState('');
    const [empCode, setEmpCode] = useState('');
    const [sort,setSort] = useState(0)

    const [empList, setEmpList] = useState([])
    const navigation = useNavigation();

    const getBranchList = async () => {
        setLoading(true)
        await getAllBranch(navigation).then((res) => {
            if (res.status == "success") {
                setLoading(false);
                if(res.length>0){
                    setBranchList(res.data)
                }
            }
            if (res.status == "failed") {
                setLoading(false);
            }
            if (res.status == "v_error") {
                Toast.show({
                    text1: "Cảnh báo",
                    text2: res.message,
                    type: "error",
                    visibilityTime: 1000,
                    autoHide: true,
                    onHide: () => navigation.navigate("AdminHome")
                })
            }
        })
    }

    const onChangeBranch = async (value) => {
        console.log(value)
        setLoading(true)
        setBranchCode(value);
        await getAllShop(navigation, value).then((res) => {
            if (res.status == "success") {
                setLoading(false);
                setShopList(res.data);

            }
            if (res.status == "failed") {
                setLoading(false);
            }
            if (res.status == "v_error") {
                Toast.show({
                    text1: "Cảnh báo",
                    text2: res.message,
                    type: "error",
                    visibilityTime: 1000,
                    autoHide: true,
                    onHide: () => navigation.navigate("AdminHome")
                })
            }
        })
    }

    const onChangeShop = async (shopCode) => {
        setLoading(true)
        setShopCode(shopCode);
        await getAllEmp(navigation, branchCode, shopCode, '').then((res) => {
            if (res.status == "success") {
                setLoading(false);
                setEmpList(res.data);
            }
            if (res.status == "failed") {
                setLoading(false);
            }
            if (res.status == "v_error") {
                Toast.show({
                    text1: "Cảnh báo",
                    text2: res.message,
                    type: "error",
                    visibilityTime: 1000,
                    autoHide: true,
                    onHide: () => navigation.navigate("AdminHome")
                })
            }
        })
    }

    const onChangeEmp = (empCode) => {
        setEmpCode(empCode)
    }

    const getData = async (branchCode, month, sort) => {
        
    }

    useEffect(() => {
        getBranchList();
        getData('',month,sort);
    }, [month])

    const _setMonth = () => {

    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={text.topSeller} />
            <DatePicker month={month} width={width - fontScale(120)} style={{ alignSelf: "center" }} onChangeDate={(date) => _setMonth(date)} />
            <Search
                loading={loading}
                modalTitle="Vui lòng chọn" searchSelectModal onPress={(value) => console.log("radio button value: " + value)} width={width - fontScale(60)} style={{ marginTop: fontScale(20) }} leftIcon={images.teamwork}
                dataOne={branchList}
                dataTwo={shopList}
                dataThree={empList}
                index={branchList.map((item, index) => index)}
                fieldOne={branchList.map((item) => item.shopName)}
                fieldTwo={shopList.map((item) => item.shopName)}
                fieldThree={empList.map((item, index) => item.maGDV)}
                onChangePickerOne={(value, index) => onChangeBranch(value.shopCode)}
                // onChangePickerTwo={(value) => onChangeShop(value.shopCode)}
                // onChangePickerThree={(value) => onChangeEmp(value.maGDV)}
                showPicker={[true, false, true]}
                onPressOK={(value) => getData(value.branchCode, month, value.sort)}

            />
            <Body />
            <View style={{ flex: 1, backgroundColor: colors.white }}>

            </View>
        </SafeAreaView>
    );
}

export default index;