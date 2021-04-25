import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';


const Points = (props) => {
    return (
        <TouchableOpacity onPress={props.Onpress} style={styles.pStyle}></TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    pStyle: {
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: 'red',
        position: 'absolute',
        top: 40,
        left: 40
    }
});

export default Points;