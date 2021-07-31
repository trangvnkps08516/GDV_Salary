import moment from 'moment';
import React, { useState } from 'react';
import { SafeAreaView, View, StatusBar } from 'react-native';
import { Body, DatePicker, Header } from '../../../../comps';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { text } from '../../../../utils/Text';
import { styles } from './style';

import Table from '../../../../comps/table';
import { images } from '../../../../utils/Images';

const index = (props) => {
    const [month, setMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"))
    const [loading, setLoading] = useState(false)
    const _setMonth = (value) => {
        setMonth(value)
    }

    const data = [
        {
            "id": 0,
            "shopName": "CTY 2",
            'target100': 30,
            "target90": 100,
            "target70": 70,
            "targetLesser70": 150,
            "totalEmp": 90,
            "shopType": "company"

        },
        {
            "id": 1,
            "shopName": "2MFHCM1",
            'target100': 30,
            "target90": 100,
            "target70": 70,
            "targetLesser70": 150,
            "totalEmp": 90,
            "shopType": "branch"
        },
        {
            "id": 2,
            "shopName": "CH ND",
            'target100': 30,
            "target90": 100,
            "target70": 70,
            "targetLesser70": 150,
            "totalEmp": 90,
            "shopType": "shop"
        },
        {
            "id": 4,
            "shopName": "CH PDL",
            'target100': 30,
            "target90": 100,
            "target70": 70,
            "targetLesser70": 150,
            "totalEmp": 90,
            "shopType": "shop"
        },
        {
            "id": 3,
            "shopName": "2MFHCM2",
            'target100': 30,
            "target90": 100,
            "target70": 70,
            "targetLesser70": 150,
            "totalEmp": 90,
            "shopType": "branch"
        },
        {
            "id": 6,
            "shopName": "CH THT",
            'target100': 30,
            "target90": 100,
            "target70": 70,
            "targetLesser70": 150,
            "totalEmp": 90,
            "shopType": "shop"
        },
        {
            "id": 80,
            "shopName": "CH Q7",
            'target100': 30,
            "target90": 100,
            "target70": 70,
            "targetLesser70": 150,
            "totalEmp": 90,
            "shopType": "shop"
        },
        {
            "id": 80,
            "shopName": "CH Q7",
            'target100': 30,
            "target90": 100,
            "target70": 70,
            "targetLesser70": 150,
            "totalEmp": 90,
            "shopType": "shop"
        }, {
            "id": 80,
            "shopName": "CH Q7",
            'target100': 30,
            "target90": 100,
            "target70": 70,
            "targetLesser70": 150,
            "totalEmp": 90,
            "shopType": "shop"
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.kpiGroup} />
            <DatePicker month={month} width={width - fontScale(120)} style={{ alignSelf: "center" }} onChangeDate={(date) => _setMonth(date)} />
            <Body />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                <Table
                    data={data}
                    table
                    numColumn={6}
                    headers={["", "KPI>=100%", "KPI>=90%", "KPI>=70%", "KPI<70%", "Tổng GDV"]}
                    headersTextColor={colors.primary}
                    headerStyle={{ icon: { size: 15 }, text: { size: fontScale(14) } }}
                    // headerIcons={[images.branch, images.company, images.workingShop, images.close]}
                    // lastIconHeader={images.day}
                    widthArray={[fontScale(100), fontScale(100), fontScale(100), fontScale(100), fontScale(100), fontScale(90)]}
                    fields={
                        data.map((item) => [
                            item.shopName,
                            item.target100,
                            item.target90,
                            item.target70,
                            item.targetLesser70,
                            item.totalEmp
                        ])
                    }
                    loading={loading}
                    hideFirstColHeader
                    firstRowBg={"#FBFDC3"}
                    // lastIcon={images.check}
                    fontWeight={data.map((item, index) => index==0||item.shopType == "branch" ? "bold" : "normal")}
                    style={{ marginTop: fontScale(30) }}
                    textColor={data.map((item, index) => item.shopType == "branch" ? "#000" : item.shopType == "shop" ? "#D19E01" : "#000")}
                    rowBg={data.map((item, index) => item.shopType == "branch" ? "#EBFDFD" : "#fff")}
                />
            </View>
        </SafeAreaView>
    );
}

export default index;