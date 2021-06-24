import React from 'react';
import { StyleSheet, Image, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { width } from '../../utils/Dimenssion';



const ProfileItem = (props) => {
    return (
        <View style={[styles.container, props.extStyle]}>
            {/* <CircleImage image={props.icon} size={32} style={styles.icon}/> */}
            <Image source={props.icon} style={styles.icon} resizeMode="cover" />
            <View style={styles.textContent}>
            <Text style={styles.title}>{props.title}</Text> 
                
                {
                    props.editMode == true 
                    ?
                     <TextInput keyboardType={props.type == "email" ? "email-address" : props.type == "number" ? "number-pad" : props.type == "phone" ? "phone-pad" : "default"} style={[styles.inputContent, { width: width - 90 }]} onChangeText={props.onChangeText} defaultValue={props.defaultValue} value={props.value} /> 
                     : 
                    
                    props.linking ? <TouchableOpacity onPress={props.openLink}><Text style={styles.title}>{props.value}</Text></TouchableOpacity> 
            :  <Text style={styles.textContent}>{props.value ? props.value : '...'}</Text>
            
                   
                }
            </View>
        </View>
    );
}


export default ProfileItem;