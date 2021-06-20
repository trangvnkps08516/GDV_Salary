import React from 'react';
import { SafeAreaView, View, Text, StatusBar } from 'react-native';
import { DateView, Header, Body, MenuItem } from '../../../../comps';
import { styles } from './styles';
import { colors } from '../../../../utils/Colors';
import { fontScale } from '../../../../utils/Fonts';
import { width } from '../../../../utils/Dimenssion';
// import test from "../../../assets/testicon";

const Achieve = (props) => {
    let test = require("../../../../assets/testicon.png")
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} barStyle="dark-content" />
            <Header title="KPI đạt được" />
            <DateView dateLabel={"01/06/2021 - 20/06/2021"} />
            <Body userInfo={"Võ Ngọc Kim Trang ( GDV - 1.009 )"} style={{ marginTop: fontScale(27) }} />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: colors.black }}>KPI Tổng: </Text>
                    <Text style={{ color: colors.primary }}>100%</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Achieve;