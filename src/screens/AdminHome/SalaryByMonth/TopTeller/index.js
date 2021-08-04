import { useNavigation } from '@react-navigation/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { Text } from 'react-native';
import { SafeAreaView, View } from 'react-native';
import Toast from 'react-native-toast-message';
import { getAllBranch, getAllShop, getAllEmp, getMonthSalaryTopTeller } from '../../../../api';
import { Body, DatePicker, Header, Search, Table } from '../../../../comps';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';
import { checkUserRole, getLoginInfo } from '../../../../utils/Logistics';
import { _retrieveData } from '../../../../utils/Storage';
import { text } from '../../../../utils/Text';
import { styles } from './style'

const index = (props) => {
    const [month, setMonth] = useState(moment(new Date()).format("MM/YYYY"));
    const [loading, setLoading] = useState(false);
    const [branchList, setBranchList] = useState([]);
    const [branchCode, setBranchCode] = useState('')
    const [shopList, setShopList] = useState([]);
    const [shopCode, setShopCode] = useState('');
    const [empCode, setEmpCode] = useState('');
    const [sort, setSort] = useState(0);
    const [message, setMessage] = useState('')
    const [data, setData] = useState([]);
    const [empList, setEmpList] = useState([])
    const navigation = useNavigation();

    const getBranchList = async () => {
        setLoading(true)
        await getAllBranch(navigation).then((res) => {
            if (res.status == "success") {
                setLoading(false);
                if (res.length > 0) {
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

    const getData = async (month, branchCode, shopCode, empCode, sort) => {
        console.log(month, branchCode, shopCode, empCode, sort)
        setLoading(true)
        setData([])
        setMessage("")
        await getMonthSalaryTopTeller(month, branchCode, shopCode, empCode, sort).then((res) => {
            const { data, error, status, isLoading, length, message } = res;
            if (status == "success") {
                setLoading(isLoading);
                if (length == 0) {
                    setMessage(message);
                } else {
                    setData(data);
                }
            }
            if (status == "failed") {
                setLoading(isLoading);
                Toast.show({
                    text1: "Cảnh báo",
                    text2: message,
                    type: "error",
                    visibilityTime: 1000,
                    autoHide: true,
                })
            }
            if (res.status == "v_error") {
                setLoading(isLoading);
                Toast.show({
                    text1: "Cảnh báo",
                    text2: message,
                    type: "error",
                    visibilityTime: 1000,
                    autoHide: true,
                    onHide: () => navigation.navigate("AdminHome")
                })
            }
        })
    }

    useEffect(() => {
        getBranchList();
        getData(month, branchCode, shopCode, empCode, sort);
        checkUserRole().then((item) => console.log(item))
    }, [month])

    const _setMonth = (value) => {
        console.log(value, branchCode, shopCode, empCode, sort)
        getData(value, branchCode, shopCode, empCode, sort)
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={text.topSeller} />
            <DatePicker month={month} width={width - fontScale(120)} style={{ alignSelf: "center" }} onChangeDate={(date) => _setMonth(date)} />
            <Search
                modalTitle="Vui lòng chọn"
                searchSelectModal onPress={(value) => console.log("radio button value: " + value)} width={width - fontScale(60)} style={{ marginTop: fontScale(20) }} leftIcon={images.teamwork}
                dataOne={branchList}
                dataTwo={shopList}
                dataThree={empList}
                placeholder="Chọn chi nhánh"
                index={branchList.map((item, index) => index)}
                fieldOne={branchList.map((item) => item.shopName)}
                fieldTwo={shopList.map((item) => item.shopName)}
                fieldThree={empList.map((item, index) => item.maGDV)}
                onChangePickerOne={(value, index) => setBranchCode(value.shopCode)}
                // onChangePickerTwo={(value) => onChangeShop(value.shopCode)}
                // onChangePickerThree={(value) => onChangeEmp(value.maGDV)}
                showPicker={[true, false, true]}
                onPressOK={() => getData(month, branchCode, shopCode, empCode, sort)}
            />
            <Body />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                {loading == true ? <ActivityIndicator style={{ marginVertical: fontScale(5) }} color={colors.primary} size="small" /> : null}
                

                <Table
                    data={data}
                    table
                    message={message}
                    numColumn={4}
                    headers={["GDV", "Tổng lương", "Lương khoán sp", "KPI"]}
                    headersTextColor={"#D19E01"}
                    headerStyle={{ icon: { size: 15 }, text: { size: fontScale(14) } }}
                    widthArray={[fontScale(220), fontScale(100), fontScale(110), fontScale(100)]}
                    fields={
                        data.map((item, index) => [
                            `${item.empName}\n(${item.shopName})`,
                            item.totalSalary,
                            item.incentiveSalary,
                            item.kpi
                        ])
                    }
                    fontWeight={["normal"]}
                    textColor={colors.grey}
                    firstRowBg={colors.lightGrey}
                    firstColCenter
                    textAlign="center"
                    rowBg={data.map((item, index) => index % 2 == 0 ? colors.lightGrey : colors.white)}
                />
            </View>
        </SafeAreaView>
    );
}

export default index;