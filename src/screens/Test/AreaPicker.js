import React, { useState, useEffect } from 'react';
import { Image, ScrollView, StyleSheet } from 'react-native';
import { Alert } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Modal } from 'react-native';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import { colors } from '../../utils/Colors';
import { height, width } from '../../utils/Dimenssion';
import { fontScale } from '../../utils/Fonts';
import { images } from '../../utils/Images';

const AreaPicker = (props) => {
    const [showOption, setShowOption] = useState(false);
    const [selectedValue, setSelectedValue] = useState('')

    useEffect(() => {
        setSelectedValue(props.label);
    }, [props.label])

    const onChangeValue = (item) => {
        if (props.code == "branch") {
            setSelectedValue(item.shop_code);
        } else if (props.code == "district") {
            setSelectedValue(item.shop_code);
        } else if (props.code == "member") {
            setSelectedValue(item.member_code);
        }

    }
    return (
        <View style={props.style}>
            {
                (props.data != null) ?
                    <TouchableOpacity style={styles.container} onPress={() => { setShowOption(props.open) }}>
                        <Text style={[styles.placeholder, { color: '#1A0F0F', fontWeight: 'bold', fontSize: height*0.020935961 }]}>{props.placeholder}</Text>
                        <Text style={[styles.placeholder, { opacity: 0.28 }]}>{selectedValue == '' ? 'Tất cả' : selectedValue}</Text>
                    </TouchableOpacity>
                    :
                    <View style={styles.container} onPress={() => { setShowOption(props.open) }}>
                        <Text style={[styles.placeholder, { color: selectedValue == '' ? '#1A0F0F' : color.primary, fontWeight: 'bold', fontSize: height*0.020935961 }]}>{selectedValue == '' ? props.placeholder : selectedValue}</Text>
                        <Text style={[styles.placeholder, { opacity: 0.28 }]}>{selectedValue == '' ? 'Tất cả' : ''}</Text>
                    </View>
            }


            {
                showOption == true ?
                    <Modal transparent={true} style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={styles.modalContainer}>
                            <View style={styles.titleContainer}>
                                <Text style={styles.modalTitle}>{props.title}</Text>
                                <TouchableOpacity onPress={() => setShowOption(false)} style={{ marginTop: height * 0.024630542 }}>
                                    <Image source={images.close} resizeMode="cover" style={styles.closeIcon} />
                                </TouchableOpacity>

                            </View>
                            {props.loading==true ? <ActivityIndicator size="small" color={colors.primary} style={{marginTop:fontScale(10)}}/> : null}
                            <ScrollView style={{ height: height, marginBottom: 0.098522167 * height }} showsVerticalScrollIndicator={false}>
                                {
                                    (Object.values(props.data).length > 0 && typeof (props.data) != "undefined") ? props.data.map((item, key) =>
                                        <TouchableOpacity key={key} style={{ paddingVertical: 5, marginVertical: 10, borderBottomColor: '#2196F340', borderBottomWidth: 1 }}
                                            onPress={() => {
                                                setShowOption(false);
                                                onChangeValue(item);
                                                props.onChangeText(item);
                                            }}
                                        >
                                            <Text style={styles.title}>
                                                {
                                                    props.code === "branch" ? item.shop_name 
                                                    :
                                                    props.code === "district" ? item.shop_name 
                                                    :
                                                    item.member_name
                                                }

                                            </Text>
                                        </TouchableOpacity>
                                    ) : <Text style={{ textAlign: 'center' }}>Không có dữ liệu</Text>
                                }
                            </ScrollView>
                        </View>
                    </Modal>
                    : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F5F5',
        marginHorizontal: height*0.0369458128078818,
        flexDirection: 'row',
        borderRadius: height*0.018472906,
        paddingHorizontal: height*0.022167488,
        justifyContent: 'space-between'
    },
    item: {
        backgroundColor: '#F6F5F5',
        marginHorizontal: height*0.0369458128078818,
        flexDirection: 'row',
        paddingVertical: height*0.0123152709359606,
        paddingHorizontal: height*0.0221674876847291,
        justifyContent: 'space-between'
    },
    placeholder: {
        color: '#1A0F0F',
        paddingVertical: height * 0.0184729064039409
        
    },
    dialog: {
        backgroundColor: colors.white,
        borderRadius: height*0.0184729064039409,
        borderColor: colors.primary,
        borderWidth: 1,
        width: width - (height * 0.049261084),
        alignSelf: 'center',
        height: height / (height*0.246305419),
        top: -height*0.2463054187192118,
        position: 'absolute'
    },
    title: {
        color: colors.primary,
        fontSize: height * 0.018472906,
        paddingHorizontal: height * 0.018472906,
        paddingBottom: height * 0.006157635
    },
    modalContainer: { backgroundColor: '#fff', borderColor: '#b5e1f1', borderWidth: 1, marginTop: height / 2, height: height / 2, borderRadius: height*0.0492610837438424 },
    titleContainer: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: height * 0.012315271 },
    modalTitle: { flex: 1, marginLeft: height * 0.024630542, textAlign: 'center', marginTop: height * 0.012315271, alignSelf: 'center', fontSize: height*0.0221674876847291, fontWeight: 'bold' },
    closeIcon: { width: height * 0.024630542, height: height * 0.024630542, alignSelf: 'flex-end', marginRight: height * 0.012315271 }
})
export default AreaPicker;