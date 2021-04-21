import React from 'react'
import {TouchableOpacity} from 'react-native'


const Points = ({onPress, top, left}) => (
    <TouchableOpacity onPress={onPress} style={{height: 4, width: 4, borderRadius: 1, backgroundColor: 'grey', position: 'absolute', top, left}} />
);

export default Points;