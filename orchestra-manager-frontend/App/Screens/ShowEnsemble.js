import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Item } from 'react-native';
import { Context } from '../context/EnsembleContext';

const ShowEnsemble = ({ navigation }) => {
    const { state } = useContext(Context);
    console.log(state)
    const ensemble = state.find((ensemble) => ensemble.id === navigation.getParam('id'))

    return (
        <View>
            <Text>{ensemble.title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({

})

export default ShowEnsemble;