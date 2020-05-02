import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Context } from '../context/EnsembleContext'
import { TextInput } from 'react-native-gesture-handler';

//for an unknown reason getParam('id') does not reflect the ensemble id
const EditEnsemble = ({ navigation }) => {
    const { state } = useContext(Context);

    const ensemble = state.find((ensemble) => ensemble.id === navigation.getParam('id'))

    const [title, setTitle] = useState(ensemble.title);
    const [chairs, setChairs] = useState(ensemble.chairs);

  return (
    <View>
      <Text>Edit Title:</Text>
      <TextInput value={title} onChangeText={(newTitle) => setTitle(newTitle)}/>
    </View>
  );
};

const styles = StyleSheet.create({

})

export default EditEnsemble;