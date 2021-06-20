import React from 'react';
import { SafeAreaView } from 'react-native';
import { MenuItem } from '../../../comps';
import { styles } from './style';

function Dashboard(props) {
    return (
        <SafeAreaView style={styles.container}>
            <MenuItem />
        </SafeAreaView>
    );
}

export default Dashboard;