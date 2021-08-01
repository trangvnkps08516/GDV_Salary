import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import { Body, DatePicker, Header, ListItem, Table } from '../../../../comps';
import { text } from '../../../../utils/Text';
import { width } from '../../../../utils/Dimenssion';
import moment from 'moment';
import { styles } from './style'
import { fontScale } from '../../../../utils/Fonts';
import { colors } from '../../../../utils/Colors';
import { images } from '../../../../utils/Images';
import { Text } from 'react-native';
import { ScrollView } from 'react-native';

const index = (props) => {
    const [month, setMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"));
    const [loading, setLoading] = useState(false);

    const data = [
        {
            "id": -1,
            // "shopCode": "CT2",
            // "shopName": "CTY 2",
            // "prePaid": 30,
            // "postPaid": 100,
            // "cusTurn": 70,
            // "dealTurn": 40,
            // "transaction": 150,
            // "empAmount": 90,
            // "shopType": "company",
            // "detail": false,

            "employee": "20tr",
            "bussinessSupport": "20tr",
            "different": "0"

        },
        {
            "id": 0,
            // "shopCode": "2MFHCM1",
            // "shopName": "2MFHCM1",
            // "prePaid": 30,
            // "postPaid": 100,
            // "cusTurn": 70,
            // "dealTurn": 40,
            // "transaction": 150,
            // "empAmount": 90,
            // "shopType": "branch",
            // "detail": false,

            "employee": "20tr",
            "bussinessSupport": "20tr",
            "different": "0"


        },
        {
            "id": 1,
            // "shopCode": "ND",
            // "shopName": "CH ND",
            // "prePaid": 30,
            // "postPaid": 100,
            // "cusTurn": 70,
            // "dealTurn": 40,
            // "transaction": 150,
            // "empAmount": 90,
            // "shopType": "shop",
            // "detail": true,

            "employee": "20tr",
            "bussinessSupport": "20tr",
            "different": "0"

        },
        {
            "id": 2,
            // "shopCode": "LQD",
            // "shopName": "CH LQD",
            // "prePaid": 20,
            // "postPaid": 100,
            // "dealTurn": 40,
            // "cusTurn": 70,
            // "empAmount": 150,
            // "shopType": "shop",
            // "detail": true,

            "employee": "20tr",
            "bussinessSupport": "20tr",
            "different": "0"

        },
        {
            "id": 3,
            // "shopCode": "LQD",
            // "shopName": "CH LQD",
            // "prePaid": 20,
            // "postPaid": 100,
            // "dealTurn": 40,
            // "cusTurn": 70,
            // "empAmount": 150,
            // "shopType": "shop",
            // "detail": true,

            "employee": "20tr",
            "bussinessSupport": "20tr",
            "different": "0"

        },
    ]
    // const data = {
    //     "general": {
    //         "openingRemaining": 500000,
    //         "bussinessSupport": 100000,
    //         "empOutcome": 100000,
    //         "totalSupportOutcome": 100000,
    //         "totalIncome": 100000,
    //         "fixedDifferent": 100000,
    //         "remainDiff": 0,
    //         "endRemain": 0,
    //     },
    //     "data": [
    //         {
    //             "id": 0,
    //             "employee": "20tr",
    //             "bussinessSupport": "20tr",
    //             "different": "0"
    //         },
    //         {
    //             "id": 1,
    //             "employee": "20tr",
    //             "bussinessSupport": "20tr",
    //             "different": "0"
    //         },
    //         {
    //             "id": 2,
    //             "employee": "20tr",
    //             "bussinessSupport": "20tr",
    //             "different": "50tr"
    //         },
    //     ]


    const _setMonth = (value) => {

    }

    const fields = [text.totalIncome, text.fixed, text.incentive, text.supportOutcome, text.otherExpenses]

    return (
        <SafeAreaView style={styles.container}>
            <Header title={text.expenseManagement} />
            <DatePicker month={month} width={width - fontScale(120)} style={{ alignSelf: "center" }} onChangeDate={(date) => _setMonth(date)} />
            <Body />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                <ScrollView>
                    <View style={styles.sumKpiContainer}>
                        <Text style={styles.sumKpiTitle}>{text.openingRemaining}: </Text>
                        <Text style={styles.sumKpiMonth}>500.000</Text>
                    </View>
                    <View style={styles.top}>
                        <ListItem icon={images.money} title={text.bussinessSupport} price={'100,000'} />
                        <ListItem icon={images.money} title={text.empOutcome} price={'100,000'} />
                        <ListItem icon={images.money} title={text.totalSupportOutcome} price={'100,000'} />
                        <ListItem icon={images.money} title={text.totalIncome} price={'100,000'} />
                        <ListItem icon={images.growth} title={text.fixedDifferent} price={'100,000'} />
                        <ListItem icon={images.arrears} title={text.remainDiff} price={'100,000'} />
                        <View style={[styles.sumKpiContainer, { marginTop: fontScale(20) }]}>
                            <Text style={styles.sumKpiTitle}>{text.endRemaining}: </Text>
                            <Text style={styles.sumKpiMonth}>{'10,000,000'}</Text>
                        </View>
                    </View>
                    <View style={styles.top}>
                        <Table
                            data={data}
                            table
                            numColumn={4}
                            headers={["", "GDV", "HTKD", "Chênh lệch"]}
                            headersTextColor={colors.primary}
                            headerStyle={{ icon: { size: 15 }, text: { size: fontScale(14) } }}
                            // headerIcons={[images.branch, images.company, images.workingShop, images.close]}
                            // lastIconHeader={images.day}
                            widthArray={[fontScale(100), fontScale(100), fontScale(100), fontScale(100)]}

                            fields={
                                data.map((item, index) => [
                                    fields[index],
                                    item.employee,
                                    item.bussinessSupport,
                                    item.different
                                ])
                            }
                            loading={loading}
                            hideFirstColHeader
                            boldFirstColumn
                            // firstRowBg={"#FBFDC3"}
                            lastIcon={data.map((item, index) => item.detail == true ? images.eye : null)}
                            lastIconStyle={{ tintColor: colors.grey }}
                            canPress={data.map((item, index) => item.detail == true ? true : false)}
                            boldFirstColText
                            style={{ marginTop: fontScale(30) }}
                            textColor={data.map((item, index) => colors.primary)}
                            rowBg={"#fff"}
                        />
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default index;