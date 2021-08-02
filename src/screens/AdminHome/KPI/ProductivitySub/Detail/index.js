import { useRoute } from '@react-navigation/core';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native';
import { DatePicker, GeneralListItem, Header } from '../../../../../comps';
import { colors } from '../../../../../utils/Colors';
import { width } from '../../../../../utils/Dimenssion';
import { fontScale } from '../../../../../utils/Fonts';
import { images } from '../../../../../utils/Images';
import { text } from '../../../../../utils/Text';
import { styles } from './style';

const ProductivitySubDetail = (props) => {
    const [month, setMonth] = useState(moment(new Date()).format("MM/YYYY"));
    const _onChangeMonth = async (value) => {
        setMonth(value);

    }
    const route = useRoute();
    const {shopCode} = route.params
    useEffect(()=>{

    })
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.productivitySub} />
            <DatePicker month={month} width={width - fontScale(120)} style={{ alignSelf: "center" }} onChangeDate={(date) => _onChangeMonth(date)} />
            <GeneralListItem columns titleArray={["Tổng lương","Khoán sp","SLGDV"]} item={["9tr","1tr",15]} title={"2MFHCM1"} rightIcon={images.company} onPress={()=>console.log("abc")}/>

        </SafeAreaView>
    );
}

export default ProductivitySubDetail;