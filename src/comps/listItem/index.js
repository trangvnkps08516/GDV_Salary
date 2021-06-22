import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';

const ListItem = (props) => {
    const { title, icon, price,jusTitle } = props;
    return (
        <View style={styles.container}>
            <View style={styles.titleContain}>
                <Image source={icon} resizeMode="contain" style={styles.icon} />
                <Text style={styles.title}>{title}</Text>
            </View>
            {
                jusTitle ? null :
                    <View style={styles.price}>
                        <Text style={styles.price}>{price}</Text>
                    </View>
            }
        </View>
    );
}

export default ListItem;