import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';


const Points = ({onPress}) => {
    return (
        <TouchableOpacity>
            onPress={onPress} style={styles.pStyle}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    pStyle: {
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: 'grey',
        position: 'relative'
    }
});

export default Points;