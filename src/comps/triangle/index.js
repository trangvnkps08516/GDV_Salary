import React from 'react';
import { View } from 'react-native';
import { styles } from './styles';

function index(props) {
    return (
        <View style={[styles.container,{
            transform: [
                {rotate: '115deg'}
              ]
        },props.style]}/>
    );
}

export default index;