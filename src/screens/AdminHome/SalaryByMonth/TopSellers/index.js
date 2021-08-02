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

    const [empList, setEmpList] = useState([])
    const navigation = useNavigation();

    const getBranchList = async () => {
        setLoading(true)
        await getAllBranch(navigation).then((res) => {
            if (res.status == "success") {
                setLoading(false);
                setBranchList(res.data);
                console.log(res.data)
                setBranchCode(res.data[0].shopCode);

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
        setBranchCode(branchCode);
        await getAllShop(navigation, branchCode).then((res) => {
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
        await getAllEmp(navigation, branchCode, shopCode,'').then((res) => {
            console.log(res.data)
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
        console.log(empCode)
        setEmpCode(empCode)
    }

    const getData=async()=>{
       
    }

    useEffect(() => {
        if (branchList.length > 0) {

        } else {
            getBranchList();
        }
    }, [branchList])

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
                fieldThree={empList.map((item,index) => item.maGDV)}
                onChangePickerOne={(value,index) => onChangeBranch(value.shopCode)}
                // onChangePickerTwo={(value) => onChangeShop(value.shopCode)}
                // onChangePickerThree={(value) => onChangeEmp(value.maGDV)}
                showPicker={[true, false, true]}
            />
            <Body />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                
            </View>
        </SafeAreaView>
    );
}

export default index;