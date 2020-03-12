//JAZZ BAND PRESET SCREEN
import React from 'react';
import { Text, View, StyleSheet, Image, } from 'react-native'
import InstrumentsList from '../InstrumentsList';
import Separator from '../../Components/Separator';

//Jazz Band 
const jb = () => {
    return (
        <View>
            <Text style={styles.titleStyle}>Jazz Band Preset</Text>
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
export default jb;