import React from 'react';
import { TouchableOpacity } from 'react-native';


const Points = ({onPress, top, left}) => (
    <TouchableOpacity onPress={onPress} style={{height: '16px', width: '16px', borderRadius: 8, backgroundColor: 'red', position: 'absolute', top, left}}/>
);

export default Points;