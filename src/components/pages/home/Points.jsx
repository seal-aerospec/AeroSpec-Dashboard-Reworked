import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';


const Points = (props) => (
    <TouchableOpacity onPress={props.onPress} style={styles.pStyle}/>
);

const styles = StyleSheet.create({
    pStyle: {
        borderRadius: 8,
        backgroundColor: 'grey',
        height: '16px',
        width: '16px'
    }
});

export default Points;