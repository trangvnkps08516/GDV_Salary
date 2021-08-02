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
    const [loading, setLoading] = useState(false);
    // const [data,setData] = useState([])

    const _setMonth = (value) => {

    }

    const data = [
        {
            "shopName": "Công ty 2",
            "shopCode": "CT2",
            "prePaid": 3477,
            "postPaid": 4369,
            "cusTurn": 36363,
            "transaction": 57620,
            "empAmount": 195,
            "detail": 0
          },
          {
            "shopName": "MBF.Thủ Đức",
            "shopCode": "2HCMTPTD",
            "prePaid": 556,
            "postPaid": 751,
            "cusTurn": 5407,
            "transaction": 8251,
            "empAmount": 27,
            "detail": 0
          },
          {
            "shopName": "CH TĐức",
            "shopCode": "2HCM80013",
            "prePaid": 195,
            "postPaid": 177,
            "cusTurn": 2109,
            "transaction": 3504,
            "empAmount": 10,
            "detail": 1
          },
          {
            "shopName": "CH Quận 9",
            "shopCode": "2HCM80012",
            "prePaid": 281,
            "postPaid": 315,
            "cusTurn": 2004,
            "transaction": 2950,
            "empAmount": 8,
            "detail": 1
          },
          {
            "shopName": "CH Quận 2",
            "shopCode": "2HCM80011",
            "prePaid": 80,
            "postPaid": 259,
            "cusTurn": 1294,
            "transaction": 1797,
            "empAmount": 9,
            "detail": 1
          },
          {
            "shopName": "MBF HCM1",
            "shopCode": "2MFHCM1",
            "prePaid": 1634,
            "postPaid": 2525,
            "cusTurn": 16874,
            "transaction": 26204,
            "empAmount": 98,
            "detail": 0
          },
          {
            "shopName": "CH Cần Giờ",
            "shopCode": "2HCM09806",
            "prePaid": 19,
            "postPaid": 1,
            "cusTurn": 193,
            "transaction": 249,
            "empAmount": 2,
            "detail": 1
          },
          {
            "shopName": "CH THThành",
            "shopCode": "2MFH10018",
            "prePaid": 322,
            "postPaid": 448,
            "cusTurn": 3134,
            "transaction": 4769,
            "empAmount": 15,
            "detail": 1
          },
          {
            "shopName": "CH LQĐịnh",
            "shopCode": "2MFH10019",
            "prePaid": 275,
            "postPaid": 510,
            "cusTurn": 2828,
            "transaction": 4205,
            "empAmount": 15,
            "detail": 1
          },
          {
            "shopName": "CH Quận 7",
            "shopCode": "2MFH10015",
            "prePaid": 309,
            "postPaid": 552,
            "cusTurn": 3532,
            "transaction": 5737,
            "empAmount": 18,
            "detail": 1
          },
          {
            "shopName": "CH N.Du",
            "shopCode": "2HCM00749",
            "prePaid": 283,
            "postPaid": 436,
            "cusTurn": 3021,
            "transaction": 4669,
            "empAmount": 20,
            "detail": 1
          },
          {
            "shopName": "CH ADVương",
            "shopCode": "2HCM10036",
            "prePaid": 183,
            "postPaid": 211,
            "cusTurn": 1655,
            "transaction": 2746,
            "empAmount": 8,
            "detail": 1
          },
          {
            "shopName": "CH PDLưu",
            "shopCode": "2HCM10010",
            "prePaid": 174,
            "postPaid": 283,
            "cusTurn": 1884,
            "transaction": 2892,
            "empAmount": 15,
            "detail": 1
          },
          {
            "shopName": "CH Quận 11",
            "shopCode": "2HCM10050",
            "prePaid": 69,
            "postPaid": 84,
            "cusTurn": 627,
            "transaction": 937,
            "empAmount": 5,
            "detail": 1
          },
          {
            "shopName": "MBF HCM2",
            "shopCode": "2MFHCM2",
            "prePaid": 1287,
            "postPaid": 1093,
            "cusTurn": 14082,
            "transaction": 23165,
            "empAmount": 70,
            "detail": 0
          },
          {
            "shopName": "CH Quận 12",
            "shopCode": "2HCM09839",
            "prePaid": 123,
            "postPaid": 121,
            "cusTurn": 1514,
            "transaction": 2375,
            "empAmount": 5,
            "detail": 1
          },
          {
            "shopName": "CH NSơn",
            "shopCode": "2MFH20030",
            "prePaid": 193,
            "postPaid": 167,
            "cusTurn": 1817,
            "transaction": 2858,
            "empAmount": 9,
            "detail": 1
          },
          {
            "shopName": "CH BChánh",
            "shopCode": "2HCM30035",
            "prePaid": 111,
            "postPaid": 83,
            "cusTurn": 875,
            "transaction": 1356,
            "empAmount": 4,
            "detail": 1
          },
          {
            "shopName": "CH CHòa",
            "shopCode": "2MFH20029",
            "prePaid": 79,
            "postPaid": 113,
            "cusTurn": 1640,
            "transaction": 2572,
            "empAmount": 10,
            "detail": 1
          },
          {
            "shopName": "CH TChinh",
            "shopCode": "2HCM20028",
            "prePaid": 74,
            "postPaid": 96,
            "cusTurn": 653,
            "transaction": 992,
            "empAmount": 4,
            "detail": 1
          },
          {
            "shopName": "CH Củ Chi",
            "shopCode": "2HCM09832",
            "prePaid": 57,
            "postPaid": 58,
            "cusTurn": 688,
            "transaction": 1154,
            "empAmount": 4,
            "detail": 1
          },
          {
            "shopName": "CH HGiang",
            "shopCode": "2HCM00543",
            "prePaid": 366,
            "postPaid": 172,
            "cusTurn": 3447,
            "transaction": 6199,
            "empAmount": 16,
            "detail": 1
          },
          {
            "shopName": "CH Q.Trung",
            "shopCode": "2HCM00551",
            "prePaid": 171,
            "postPaid": 155,
            "cusTurn": 2354,
            "transaction": 3816,
            "empAmount": 14,
            "detail": 1
          },
          {
            "shopName": "CH LVQuới",
            "shopCode": "2HCM20025",
            "prePaid": 113,
            "postPaid": 128,
            "cusTurn": 1094,
            "transaction": 1843,
            "empAmount": 4,
            "detail": 1
          }
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
                            item.transaction,
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