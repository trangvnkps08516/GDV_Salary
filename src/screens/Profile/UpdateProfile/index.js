import React, { useState } from "react";
import { useEffect } from "react";
import {
  SafeAreaView,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  BackHandler,
} from "react-native";
import { getProfile, updateProfile } from "../../../api";
import { Button, Header, ProfileItem } from "../../../comps";
import { Profile, UserObj } from "../../../models/Data";
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
import { useIsFocused } from "@react-navigation/native";
import { fontScale } from "../../../utils/Fonts";

const UpdateProfile = (props) => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(UserObj);
  const [displayName, setDisplayName] = useState("");
  const [avatar, setAvatar] = useState(null);
  const [formData, setFormData] = useState(new FormData());
  const isFocused = useIsFocused();

  const getData = async () => {
    await getProfile(navigation).then((res) => {
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
          text.notif,
          text.updateInfoSuccess,
          [
            { text: "OK", onPress: () => navigation.navigate('Profile') }
          ],
          { cancelable: false }
        );
        setLoading(false);
      } else {

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
    let isCancelled = false;

    const backAction = () => {
      navigation.navigate("Profile")
      return true;
    };
    getData();
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => {
      backHandler.remove();
      isCancelled = true;
    };
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.updateProfile} />
      <Image
        source={images.profileHeader}
        resizeMode="cover"
        style={styles.headerShape}
      />
      <View style={styles.personInfo}>
        <Text style={styles.staffName}>{userData.displayName}</Text>
        <Text style={styles.staffCode}>{userData.gdvId.maGDV}</Text>
        <TouchableOpacity
          style={styles.avatarContainer}
          onPress={() => pickImage()}>
          <Image
            style={styles.avatar}
            source={userData.avatar != null ? { uri: imgUrl + userData.avatar } : images.avatar} />
        </TouchableOpacity>
      </View>
      <View>
        {loading == true ? (
          <ActivityIndicator size="small" color={color.primary} />
        ) : (
          <>
            <ProfileItem
              editMode
              defaultValue={userData.displayName}
              icon={images.man}
              title={text.staffName}
              size={fontScale(25)}
              onChangeText={(value) => setDisplayName(value)} />
            <Button
              style={styles.button}
              label={text.saveChange}
              onPress={() => _updateProfile(avatar, displayName)} />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default UpdateProfile;
