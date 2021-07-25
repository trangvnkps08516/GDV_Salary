import React from 'react';
import { Text, View, Image, Platform } from 'react-native';
import CircleImage from './CircleImage';
import { colors } from '../../utils/Colors';
import { fontScale } from '../../utils/Fonts';
import { images } from './Images';
import { baseUrl } from '../../api/untils';

const _currencyFormat = (x = '') => {
    return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

const OneItemAdmin = (props) => {

    const container = {
        paddingTop: fontScale(53),
        paddingBottom: fontScale(50)
    }

    const boxItemStyle = {
        marginHorizontal: fontScale(14),
        backgroundColor: colors.white,
        paddingBottom: fontScale(10),
        borderColor: '#F5F5F5',
        shadowColor: "#CCC",
        shadowOffset: {
            width: 0,
            height: fontScale(30),
        },
        ...Platform.select({
            ios: {
                shadowOpacity: fontScale(10),
                shadowRadius: fontScale(26),
            },
            android: {
                shadowOpacity: fontScale(0.32),
                shadowRadius: fontScale(16),
            },
        }),
        borderRadius: fontScale(21),
        elevation: fontScale(9)
    }

    return (
        <View style={container}>
            <View style={boxItemStyle} key={props.index}>
                <CircleImage size={fontScale(76)} style={{ position: 'absolute', top: -fontScale(76) / 2, alignSelf: 'center' }} image={props.item.avatar == null ? images.avatar : { uri: `${baseUrl}/${props.item.avatar}` }} />
                <View style={{ marginTop: fontScale(43) }}></View>
                <Text style={{ color: '#20B8B8', fontSize: fontScale(20), fontWeight: 'bold', textAlign: "center" }}>{props.item.fullName}</Text>
                <View style={{ flexDirection: 'row', marginTop: fontScale(5), justifyContent: 'space-between', paddingHorizontal: fontScale(5) }}>
                    <SubOneItem amount={props.item.row1} color={props.screen == "AdminFixedWagesSalary" ? "#f00" : "#569586"} icon={props.screen == "AdminFixedWagesSalary" ? images.workingShop : images.workingShop} title={props.title[0]} />
                    <SubOneItem amount={props.item.row2} color={props.screen == "AdminFixedWagesSalary" ? "yellow" : "#569586"} icon={props.screen == "AdminFixedWagesSalary" ? images.workingShop : images.workingShop} title={props.title[1]} />
                    <SubOneItem amount={props.item.row3} color={props.screen == "AdminFixedWagesSalary" ? "#31AB0E" : "#569586"} icon={props.screen == "AdminFixedWagesSalary" ? images.workingShop : images.workingShop} title={props.title[2]} />
                    <SubOneItem amount={props.item.row4} color={props.screen == "AdminFixedWagesSalary" ? "#569586" : "#569586"} icon={props.screen == "AdminFixedWagesSalary" ? images.workingShop : images.workingShop} title={props.title[3]} />
                </View>
            </View>
        </View>
    )
}

//style={{ marginHorizontal: 5, width: width / 4 + 10, marginTop: 10 }}
const SubOneItem = ({ key, amount, title, icon, color }) => {
    return (
        <View key={key}>
            <Text style={{ textAlign: 'center', color: color, fontSize: fontScale(18) }}>{_currencyFormat(amount)}</Text>
            <Image source={icon} style={{ width: fontScale(18), height: fontScale(18), alignSelf: 'center' }} resizeMode="contain" />
            <Text style={{ textAlign: 'center', fontSize: fontScale(18), color: '#2196F3' }}>{title}</Text>
        </View>
    )
}

export default OneItemAdmin;