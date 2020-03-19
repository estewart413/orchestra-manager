//SYMPHONY ORCHESTRA PRESET SCREEN
import React from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native'
import InstrumentsList from '../InstrumentsList';
import Separator from '../../Components/Separator';

//Jazz Band 
const so = () => {
    return (
        <View>
            <Text style={styles.titleStyle}>Symphony Orchestra Preset</Text>
            <Separator/>
            <InstrumentsList/>
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20,
        textAlign: 'center'
    }
})
export default so; 