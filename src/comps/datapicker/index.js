import React, { useState } from 'react';
import { Image } from 'react-native';
import { Modal } from 'react-native';
import { View, Text, TouchableOpacity } from 'react-native';
import { colors } from '../../utils/Colors';
import { height, width } from '../../utils/Dimenssion';
import { fontScale } from '../../utils/Fonts';
import { images } from '../../utils/Images';
import { styles } from './styles';

const index = (props) => {
    const [selectedItem, setSelectedItem] = useState(props.data[0]);
    const [showDialog, setShowDialog] = useState(false);
    
    const _onPress=(value)=>{
        setSelectedItem(value);
        setShowDialog(!showDialog);
        props.onPress(value)
    }
    return (
        <View style={[styles.container, { width: props.width }, props.style]}>
            <TouchableOpacity style={[styles.picker, { width: props.width }]} onPress={() => setShowDialog(!showDialog)}>
                <Text style={styles.dateLabel}>{selectedItem.value}</Text>
                <Image source={images.arrowdown} resizeMode="contain" style={styles.arrDown}/>
            </TouchableOpacity>

            <Modal
                statusBarTranslucent={true}
                animationType={'slide'}
                transparent={true}
                visible={showDialog}
                onRequestClose={() => setShowDialog(!showDialog)}>
                <View style={{ backgroundColor: 'rgba(52, 52, 52, 0.7)', flex: 1 }}>
                    <TouchableOpacity style={{ flex: 1 }} onPress={() => setShowDialog(!showDialog)}>

                    </TouchableOpacity>
                    <View style={{
                        width: width,
                        backgroundColor: "#fff", shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        justifyContent: "center",
                        elevation: 5, borderTopLeftRadius: fontScale(30), borderTopRightRadius: fontScale(30), paddingTop: fontScale(15), paddingBottom: fontScale(30)
                    }}>
                        <Text style={styles.dialogTitle}>{props.dialogTitle}</Text>
                        <View style={{backgroundColor:'#8a8a8a',opacity:0.5,height:0.7}}/>
                        {
                            props.data.map((item) => {
                                return <TouchableOpacity onPress={()=>_onPress(item)} style={[styles.selectContent,{backgroundColor:selectedItem.id==item.id?"#f1f1f1":"#fff"}]}><Text key={item.id} style={styles.selectItem} >{item.value}</Text></TouchableOpacity>
                            })
                        }
                    </View>
                </View>
            </Modal>

        </View>
    );
}

export default index;