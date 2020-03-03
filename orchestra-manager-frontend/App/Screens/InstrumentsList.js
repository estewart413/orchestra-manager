import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';

const InstrumentsList = () => {
    
    const instruments = [
        { name: 'Instrument #1', group: 'violin 1'},
        { name: 'Instrument #2', group: 'violin 1'},
        { name: 'Instrument #3', group: 'violin 1'},
        { name: 'Instrument #4', group: 'violin 1'},
        { name: 'Instrument #5', group: 'violin 2'},
        { name: 'Instrument #6', group: 'violin 2'},
        { name: 'Instrument #7', group: 'violin 2'},
        { name: 'Instrument #8', group: 'viola'},
        { name: 'Instrument #9', group: 'viola'}
    ];
    
    return (
        <FlatList
            keyExtractor={(instruments) => instruments.name}
            data={instruments} 
            renderItem={({ item, group }) => {
                return <Text style ={styles.textStyle}>{item.name} - group {item.group}</Text>
            }}
        />
    );
};

const styles = StyleSheet.create ({
    textStyle: {
        marginVertical : 15,
        fontSize: 18
    }

});

export default InstrumentsList;

