import React from 'react';
import { SafeAreaView,Text } from 'react-native';
import { styles } from './style';

const SignIn=(props)=> {
    return (
        <SafeAreaView style={styles.container}>
                <Text style={{marginTop:100}}>Sign in</Text>
        </SafeAreaView>
    );
}

export default SignIn;