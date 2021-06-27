import React, { useState } from "react";
import { useEffect } from "react";
import {
  SafeAreaView,
  Image,
  View,
  Text,
  StatusBar,
  Linking,
  TouchableOpacity,
  Alert,
} from "react-native";
import { getProfile, updateProfile } from "../../../api";
import { Button, Header, ProfileItem } from "../../../comps";
import { Profile } from "../../../models/Data";
import { colors } from "../../../utils/Colors";
import { images } from "../../../utils/Images";
import { text } from "../../../utils/Text";
import { styles } from "./styles";
import * as ImagePicker from "expo-image-picker";
import { useNavigation } from "@react-navigation/core";
import { height, width } from "../../../utils/Dimenssion";
import mime from "mime";
import { imgUrl } from "../../../api/untils";
import { _storeData } from "../../../utils/Storage";

const UpdateProfile = (props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(Profile);
  const [displayName, setDisplayName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [formData, setFormData] = useState(new FormData());

  const getData = async () => {
    await getProfile().then((res) => {
      if (res.status == "success") {
        setUserData(res.data);
      }
      if (res.status == "failed") {
      }
    });
  };

  const _updateProfile = async (avatar, displayName) => {
    formData.append('displayName', displayName);
    await updateProfile(formData).then(async (data) => {
      if (data.status == 200 || data.status == 202) {
        await _storeData("userInfo");
        Alert.alert(
          "Thông báo",
          "Cập nhật thông tin thành công",
          [
            { text: "OK", onPress: () => navigation.navigate('Profile') }
          ],
          { cancelable: false }
        );
        setLoading(false);
      } else {
        alert("Có lỗi phát sinh, vui lòng liên hệ phòng DVKT để được hỗ trợ.");
      }
    });
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setAvatar(result.uri);

      let localUri = "file:///" + result.uri.split("file:/").join("");
      let filename = localUri.split("/").pop();

      let match = /\.(\w+)$/.exec(filename);
      let type = match ? `image/${match[1]}` : `image`;

      let fData = new FormData();
      fData.append("avatar", {
        uri: localUri,
        type: mime.getType(localUri),
        name: filename,
      });
      setFormData(fData);
    }
  };

  useEffect(() => {
    getData();
  }, [""]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.profile} />
      <Image
        source={images.profileHeader}
        resizeMode="cover"
        style={styles.headerShape}
      />
      <View style={styles.personInfo}>
        <Text style={styles.staffCode}>{userData.displayName}</Text>
        <Text style={styles.staffName}>{"(GDV - 1.009)"}</Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            backgroundColor: "#333",
            marginTop: (height * 0.1279310344827586) / 2 - 20,
            width: height * 0.1279310344827586,
            height: height * 0.1279310344827586,
            borderRadius: height * 0.1279310344827586,
            marginLeft: width - 0.1896551724137931 * height,
          }}
          onPress={() => pickImage()}
        >
          <Image
            style={styles.avatar}
            source={{ uri: avatar || imgUrl + userData.avatar }}
          />
        </TouchableOpacity>
      </View>
      <View>
        {/* <ScreenTitle title={text.personInfo} style={{ marginTop: 15, marginBottom: 21 }} /> */}
        {loading == true ? (
          <ActivityIndicator size="small" color={color.primary} />
        ) : (
          <>
            <ProfileItem
              editMode
              defaultValue={userData.displayName}
              icon={images.day}
              title={text.staffName}
              size={25}
              onChangeText={(value) => setDisplayName(value)}
            />
            {/* <ProfileItem editMode icon={images.workingShop} title={text.workingShop} size={25} value={"Công ty Dịch vụ Mobifone KV2"} />
                                <ProfileItem editMode icon={images.traderRating} title={text.traderRating} size={25} value={"9/10"} />
                                <ProfileItem editMode icon={images.traderRating} title={text.traderRating} size={25} value={"9/10"} />
                                <ProfileItem editMode icon={images.pdf} title={text.PDF} size={25} value={"https://smallpdf.com/vi/merge-pdf"} linking openLink={()=>Linking.openURL('https://smallpdf.com/vi/merge-pdf')} /> */}
            <Button
              style={styles.button}
              label={text.saveChange}
              onPress={() => _updateProfile(avatar, displayName)}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default UpdateProfile;
