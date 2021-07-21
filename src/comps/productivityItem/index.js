import React from 'react';
import { TouchableOpacity } from 'react-native';
import { styles } from '../button/styles';

function index(props) {
    return (
        <View style={styles.body}>
            <TouchableOpacity style={styles.container}>
                <View style={styles.bg}>
                    
                </View>
            </TouchableOpacity>
        </View>
    );
}

export default index;