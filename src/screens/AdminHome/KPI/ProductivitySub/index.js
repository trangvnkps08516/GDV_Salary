import moment from 'moment';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView, View } from 'react-native';
import { Body, DatePicker, Header, Table } from '../../../../comps';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';
import { text } from '../../../../utils/Text';
import { styles } from './style';

const index = (props) => {
    const [month, setMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"));
    const [loading, setLoading] = useState(false)

    const _setMonth = (value) => {

    }

    const data = [
        {
            "id": -1,
            "shopCode": "CT2",
            "shopName": "CTY 2",
            "prePaid": 30,
            "postPaid": 100,
            "cusTurn": 70,
            "dealTurn": 40,
            "transaction": 150,
            "empAmount": 90,
            "shopType": "company",
            "detail": false

        },
        {
            "id": 0,
            "shopCode": "2MFHCM1",
            "shopName": "2MFHCM1",
            "prePaid": 30,
            "postPaid": 100,
            "cusTurn": 70,
            "dealTurn": 40,
            "transaction": 150,
            "empAmount": 90,
            "shopType": "branch",
            "detail": false

        },
        {
            "id": 1,
            "shopCode": "ND",
            "shopName": "CH ND",
            "prePaid": 30,
            "postPaid": 100,
            "cusTurn": 70,
            "dealTurn": 40,
            "transaction": 150,
            "empAmount": 90,
            "shopType": "shop",
            "detail": true
        },
        {
            "id": 2,
            "shopCode": "LQD",
            "shopName": "CH LQD",
            "prePaid": 20,
            "postPaid": 100,
            "dealTurn": 40,
            "cusTurn": 70,
            "empAmount": 150,
            "shopType": "shop",
            "detail": true
        },
        {
            "id": 3,
            "shopCode": "LQD",
            "shopName": "CH LQD",
            "prePaid": 20,
            "postPaid": 100,
            "dealTurn": 40,
            "cusTurn": 70,
            "empAmount": 150,
            "shopType": "shop",
            "detail": true
        },

        {
            "id": 4,
            "shopCode": "2MFHCM2",
            "shopName": "2MFHCM2",
            "prePaid": 30,
            "postPaid": 100,
            "dealTurn": 40,
            "cusTurn:": 70,
            "transaction": 150,
            "empAmount": 90,
            "shopType": "branch",
            "detail": false

        },
        {
            "id": 5,
            "shopCode": "ND",
            "shopName": "CH ND",
            "prePaid": 30,
            "postPaid": 100,
            "cusTurn": 70,
            "dealTurn": 40,
            "transaction": 150,
            "empAmount": 90,
            "shopType": "shop",
            "detail": true
        },
        {
            "id": 6,
            "shopCode": "LQD",
            "shopName": "CH LQD",
            "prePaid": 20,
            "postPaid": 100,
            "cusTurn": 70,
            "dealTurn": 40,
            "empAmount": 150,
            "shopType": "shop",
            "detail": true
        },
        {
            "id": 7,
            "shopCode": "LQD",
            "shopName": "CH LQD",
            "prePaid": 20,
            "postPaid": 100,
            "cusTurn": 70,
            "dealTurn": 40,
            "empAmount": 150,
            "shopType": "shop",
            "detail": true
        },
    ]

    return (
        <SafeAreaView style={styles.container}>
            <Header title={text.productivitySub} />
            <DatePicker month={month} width={width - fontScale(120)} style={{ alignSelf: "center" }} onChangeDate={(date) => _setMonth(date)} />
            <Body />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                <Table
                    data={data}
                    table
                    numColumn={6}
                    headers={["", "TBTS", "TBTT", "Lượt KH", "Lượt GD", "SL GDV"]}
                    headersTextColor={colors.primary}
                    headerStyle={{ icon: { size: 15 }, text: { size: fontScale(14) } }}
                    // headerIcons={[images.branch, images.company, images.workingShop, images.close]}
                    // lastIconHeader={images.day}
                    widthArray={[fontScale(100), fontScale(100), fontScale(100), fontScale(100), fontScale(100), fontScale(90)]}

                    fields={
                        data.map((item) => [
                            item.shopName,
                            item.prePaid,
                            item.postPaid,
                            item.cusTurn,
                            item.dealTurn,
                            item.empAmount
                        ])
                    }
                    loading={loading}
                    hideFirstColHeader
                    firstRowBg={"#FBFDC3"}
                    lastIcon={data.map((item, index) => item.detail==true ? images.eye:null)}
                    lastIconStyle={{ tintColor: colors.grey }}
                    canPress={data.map((item, index) => item.detail==true ? true : false)}
                    fontWeight={data.map((item, index) => index == 0 || item.shopType == "branch" ? "bold" : "normal")}
                    style={{ marginTop: fontScale(30) }}
                    textColor={data.map((item, index) => item.shopType == "branch" ? "#000" : item.shopType == "shop" ? "#D19E01" : "#000")}
                    rowBg={data.map((item, index) => item.shopType == "branch" ? "#EBFDFD" : "#fff")}
                />
            </View>
        </SafeAreaView>
    );
}

export default index;