import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PresetView from '../Components/PresetView';

const CreateEnsScreen = () => 
{
    return (
        <View styles={styles.container}>
            
            
            
            <PresetView 
                title="Symphony Orchestra"
                imageSource={require('../../assets/symphony.jpg')}
                />
            <PresetView 
                title="Jazz Band" 
                imageSource={require('../../assets/jazz.jpg')}
                />
            <PresetView 
                title="Marching Band" 
                imageSource={require('../../assets/mband.jpg')}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "white",
        flex: 6
      }
});

export default CreateEnsScreen;