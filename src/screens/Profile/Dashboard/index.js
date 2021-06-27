import React, { useEffect, useState } from 'react';
import { SafeAreaView, Image, View, Text, StatusBar, Linking } from 'react-native';
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

const DashBoard = (props) => {
    const [loading, setLoading] = useState(false)
    const navigation = useNavigation();
    const [userData, setUserData] = useState(Profile);
    const isFocused = useIsFocused();
    const getData = async () => {
        await getProfile().then((res) => {
            if (res.status == "success") {
                
                setUserData(res.data)
            }
            if(res.status == "failed") {
                console.log(res.message)
            }
        })
    }

    useEffect(() => {
       if(1!=2){
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
                <Image style={styles.avatar} source={{uri: imgUrl + userData.avatar}} />
            </View>
            {/* <Text>{JSON.stringify(userData)}</Text> */}
            <View>
                {/* <ScreenTitle title={text.personInfo} style={{ marginTop: 15, marginBottom: 21 }} /> */}
                {
                    loading == true ? <ActivityIndicator size="small" color={color.primary} /> :
                        <>
                            <ProfileItem icon={images.day} title={text.workingDay} size={25} value={"05/01/2021"} />
                            <ProfileItem icon={images.workingShop} title={text.workingShop} size={25} value={userData.shopId.shopName} />
                            <ProfileItem icon={images.traderRating} title={text.traderRating} size={25} value={"9/10"} />
                            <ProfileItem icon={images.traderRating} title={text.traderRating} size={25} value={"9/10"} />
                            <ProfileItem linking icon={images.pdf} title={text.PDF} size={25} value={"https://smallpdf.com/vi/merge-pdf"} openLink={()=>Linking.openURL('https://smallpdf.com/vi/merge-pdf')}/>
                            <Button width={fontScale(150)} label={text.login} center style={styles.loginButton} onPress={() => navigation.navigate("UpdateProfile")} />

                            {/* <ProfileItem icon={images.position} title={text.position} size={25} value={userInfo.position} />
                            <ProfileItem icon={images.phone} title={text.phoneNumber} size={25} value={userInfo.phoneNumber} /> */}
                        </>
                }
            </View>
        </SafeAreaView>
    );
}

export default DashBoard;

// profile: "Thông tin cá nhân",
//   workingDay: "Ngày vào làm",
//   workingShop: "Cửa hàng làm việc",
//   traderRating: "Xếp hạng giao dịch viên",
//   storeRating: "Xếp loại cửa hàng",