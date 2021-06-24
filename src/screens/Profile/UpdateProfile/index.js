import React, { useState } from 'react';
import { SafeAreaView,Image,View, Text, StatusBar, Linking } from 'react-native';
import { Button, Header, ProfileItem } from '../../../comps';
import { colors } from '../../../utils/Colors';
import { images } from '../../../utils/Images';
import { text } from '../../../utils/Text';
import {styles} from './styles'


const UpdateProfile=(props) => {
    
    const [loading,setLoading] = useState(false)
        return (
            
            <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title={text.profile} />
                <Image source={images.profileHeader} resizeMode="cover" style={styles.headerShape} />
                <View style={styles.personInfo}>
                    <Text style={styles.staffCode}>{'Võ Ngọc Kim Trang'}</Text>
                    <Text style={styles.staffName}>{'(GDV - 1.009)'}</Text>
                    <Image style={styles.avatar} source={images.avatar} />
                </View>
                <View>
                    {/* <ScreenTitle title={text.personInfo} style={{ marginTop: 15, marginBottom: 21 }} /> */}
                    {
                        loading == true ? <ActivityIndicator size="small" color={color.primary} /> :
                            <>       
                                <ProfileItem icon={images.day} title={text.workingDay} size={25} value={"05/01/2021"} />
                                <ProfileItem icon={images.workingShop} title={text.workingShop} size={25} value={"Công ty Dịch vụ Mobifone KV2"} />
                                <ProfileItem icon={images.traderRating} title={text.traderRating} size={25} value={"9/10"} />
                                <ProfileItem icon={images.traderRating} title={text.traderRating} size={25} value={"9/10"} />
                                <ProfileItem icon={images.pdf} title={text.PDF} size={25} value={"https://smallpdf.com/vi/merge-pdf"} linking openLink={()=>Linking.openURL('https://smallpdf.com/vi/merge-pdf')} />
                                <Button style={styles.button} label= {text.saveChange}/>
                               
                            </>
                    }
                </View>
            </SafeAreaView>
        );
    }
    

export default UpdateProfile;