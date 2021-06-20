import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, Keyboard } from 'react-native';
import { colors } from '../../utils/Colors';
import { width } from '../../utils/Dimenssion';
import { fontScale } from '../../utils/Fonts';
import { styles } from './styles';

const Input = (props) => {
    const [pass, setPass] = useState(false);
    const {
        underline, // input có dấu ghạch dưới
        pwd, // password
        phone, // số đt
        title, // title của input
        width, // độ dài
        style, // thuộc tính tùy biến
        onChange // hàm lấy dữ liệu người dùng nhập vào
    } = props;
    return (
        <>
            {
                underline ? <View style={[{ width: width }, style]}>
                    <Text style={styles.title}>{title}</Text>
                    {
                        pwd ? <View style={{ flexDirection: "row" }}>
                            <TextInput secureTextEntry={pass == false ? true : false} onChange={onChange} placeholderTextColor={colors.white} style={[{ width: props.width, fontSize: 14 }, styles.container]} />
                            <TouchableOpacity onPress={() => setPass(!pass)} style={{ right: fontScale(30), marginVertical: fontScale(5) }}>
                                <Image source={pass == false ? require("../../assets/eye.png") : require("../../assets/noneye.png")} resizeMode="contain" style={{width:fontScale(30),height:fontScale(25)}}/>
                            </TouchableOpacity>
                        </View> : phone ? <View>
                            <TextInput onChange={onChange} keyboardType="phone-pad" placeholderTextColor={colors.white} style={{ paddingTop: fontScale(10), fontSize: 14, borderBottomColor: '#EAEEEE', borderBottomWidth: fontScale(1), width: props.width, color: colors.white }} />
                        </View> : <View style={{ flexDirection: "row" }}>
                            <TextInput onChange={onChange} placeholderTextColor={colors.white} style={{ paddingTop: fontScale(10), fontSize: 14, borderBottomColor: '#EAEEEE', borderBottomWidth: fontScale(1), width: props.width, color: colors.white }} />
                        </View>
                    }
                </View> : <></>
            }
        </>
    );
}

export default Input;