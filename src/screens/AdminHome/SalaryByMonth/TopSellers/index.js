import moment from 'moment';
import React, { useState } from 'react';
import { SafeAreaView,View } from 'react-native';
import { Body, DatePicker, Header } from '../../../../comps';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { text } from '../../../../utils/Text';
import { styles } from './style'

const index=(props)=> {
    const [month, setMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"));
    const [loading, setLoading] = useState(false);
    return (
        <SafeAreaView style={styles.container}>
            <Header title={text.topSeller} />
            <DatePicker month={month} width={width - fontScale(120)} style={{ alignSelf: "center" }} onChangeDate={(date) => _setMonth(date)} />
            <Body />
            <View style={{flex:1,backgroundColor:colors.white}}>
                
            </View>
        </SafeAreaView>
    );
}

export default index;