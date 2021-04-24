import React from 'react'
import {TouchableOpacity} from 'react-native'


const Points = ({onPress}) => (
    <TouchableOpacity onPress={onPress} style={styles.pStyle} />
);

const styles = StyleSheet.create({
    pStyle: {
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: 'grey',
        position: 'relative'
    }
}
);

export default Points;