import React from 'react';
import { View } from 'react-native';
import { width } from '../../utils/Dimenssion';
import { styles } from './styles';

function index(props) {
    return (
        <View style={[styles.container,{
            transform: [
                {rotate: "250deg"}
              ]
        },props.style]}/>
    );
}

export default index;