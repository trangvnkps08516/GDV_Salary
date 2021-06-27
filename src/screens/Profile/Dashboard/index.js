import React, { useEffect, useState } from 'react';
import { SafeAreaView, Image, View, Text, StatusBar, Linking, ActivityIndicator,TouchableOpacity, Modal } from 'react-native';
import { Button, Header, ProfileItem } from '../../../comps';
import { colors } from '../../../utils/Colors';
import { fontScale } from '../../../utils/Fonts';
import { images } from '../../../utils/Images';
import { text } from '../../../utils/Text';
import { styles } from './styles'
import { useNavigation } from '@react-navigation/core';
import { Profile } from '../../../models/Data';
import { getProfile } from '../../../api';
import { baseUrl, imgUrl } from '../../../api/untils';
import { useIsFocused } from "@react-navigation/native";
import { height } from '../../../utils/Dimenssion';
import { _storeData } from '../../../utils/Storage';

const DashBoard = (props) => {
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation();
    const [userData, setUserData] = useState(Profile);
    const [showModal,setShowModal] = useState(false)
    const isFocused = useIsFocused();
    const getData = async () => {
        setLoading(true)
        await getProfile().then((res) => {
            if (res.status == "success") {
                setLoading(false)
                setUserData(res.data)
            }
            if (res.status == "failed") {
                setLoading(false)
            }
        })
    }

    useEffect(() => {
        if (1 != 2) {
            getData()
        }
    }, [isFocused]);


    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.profile} />
            <Image source={images.profileHeader} resizeMode="cover" style={styles.headerShape} />
            <View style={styles.personInfo}>
                <Text style={styles.staffCode}>{userData.displayName}</Text>
                <Text style={styles.staffName}>({userData.gdvId.maGDV})</Text>
                <Image style={styles.avatar} source={{ uri: imgUrl + userData.avatar }} />
            </View>

            <View style={{marginTop:fontScale(50)}}>
                {
                    loading == true ? <ActivityIndicator size="small" color={colors.primary} /> :
                        <>
                            <ProfileItem icon={images.day} title={text.workingDay} size={25} value={"05/01/2021"} />
                            <ProfileItem icon={images.workingShop} title={text.workingShop} size={25} value={userData.shopId.shopName} />
                            <ProfileItem icon={images.traderRating} title={text.traderRating} size={25} value={"9/10"} />
                            <ProfileItem icon={images.traderRating} title={text.traderRating} size={25} value={"9/10"} />
                            <ProfileItem linking icon={images.pdf} title={text.PDF} size={25} value={"https://smallpdf.com/vi/merge-pdf"} openLink={() => Linking.openURL('https://smallpdf.com/vi/merge-pdf')} />
                        </>
                }
            </View>
            <TouchableOpacity onPress={() =>setShowModal(true)} style={{ backgroundColor: colors.primary, width: fontScale(50), height: fontScale(50), padding: fontScale(13), position: "absolute", bottom: fontScale(22),right:fontScale(22), borderRadius: fontScale(25) }}>
                <Image source={images.pencil} />
            </TouchableOpacity>
            <Modal
                animationType={'fade'}
                visible={showModal}
                transparent={true}
                onRequestClose={() => {
                    setShowModal(!showModal)
                }}>
                <View style={styles.optionDialogs}>
                    <TouchableOpacity onPress={()=>setShowModal(!showModal)}>
                        <Image source={images.close} style={styles.closeIcon}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.optionMenu} onPress={()=>[setShowModal(!showModal),navigation.navigate("UpdatePassword")]}>
                        <Text style={styles.menuTitle}>Đổi mật khẩu</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.optionMenu} onPress={()=>[setShowModal(!showModal),navigation.navigate("UpdateProfile")]}>
                        <Text style={styles.menuTitle}>Chỉnh sửa thông tin cá nhân</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

export default DashBoard;

// profile: "Thông tin cá nhân",
//   workingDay: "Ngày vào làm",
//   workingShop: "Cửa hàng làm việc",
//   traderRating: "Xếp hạng giao dịch viên",
//   storeRating: "Xếp loại cửa hàng",