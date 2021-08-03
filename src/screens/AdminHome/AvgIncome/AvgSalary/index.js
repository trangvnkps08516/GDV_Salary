import React, { useState,useEffect } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { getAllAvgIncome } from '../../../../api';
import { Body, GeneralListItem, Header } from '../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { text } from '../../../../utils/Text';
import { styles } from './style';
import { ToastNotif } from '../../../../utils/Logistics';
import Toast from 'react-native-toast-message';
import { FlatList } from 'react-native';
import { images } from '../../../../utils/Images';

const index=(props)=> {
    const [data,setData] = useState({});
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);

    const getData=async()=>{
        await getAllAvgIncome(navigation,'','').then((res)=>{
            if (res.status == "success") {
                if (res.data.data.length > 0) {
                    setData(res.data.data);
                    setLoading(false)
                } else {
                    setData([]);
                    setLoading(false)
                }
                
            }
            if (res.status == "failed") {
                setLoading(false);
                ToastNotif('Cảnh báo', res.message, 'error', true);
            }

            if (res.status == "v_error") {
                setLoading(false)
                Toast.show({
                    text1: "Cảnh báo",
                    text2: res.message,
                    type: "error",
                    visibilityTime: 1000,
                    autoHide: true,
                    onHide: () => navigation.goBack()
                })
            }
        })
    }

    useEffect(()=>{
        getData();
    },[navigation])

    return (
        <SafeAreaView style={styles.container}>
             <Header title={text.averageIncome}/>
             <Text style={styles.notif}>Số liệu hiển thị từ tháng 01/2021 đến tháng 06/2021</Text>
             <Body />
             <View style={styles.body}>
                <FlatList 
                    data={data}
                    key={(item,key)=>key.toString()}
                    renderItem={({item})=><GeneralListItem columns titleArray={["Lương BQ/GDV","Khoán sp/GDV","SL GDV"]} item={[item.avgIcome,item.contractSalary]}rightIcon={images.avgIcome}/>}
                />
                <GeneralListItem columns titleArray={["Lương BQ/GDV","Khoán sp/GDV","SL GDV"]} item={[14,12,1]} rightIcon={images.avgIcome}/>
             </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
    );
}

export default index;