import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Triangle } from '../../../comps';
import { styles } from './style';
import { width } from '../../../utils/Dimenssion'
// import { Circle, Triangle,Trapezoid,Pentagon,Hexagon } from 'react-native-shape';

const SignIn = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ marginTop: 100 }}>Sign in</Text>
            {/* <Triangle color="blue" scale={5} style={{ width: width }} /> */}
        </SafeAreaView>
    );
}

export default SignIn;