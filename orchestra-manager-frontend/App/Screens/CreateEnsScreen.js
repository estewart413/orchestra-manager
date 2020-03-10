import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PresetView from '../Components/PresetView';
import navigation from 'react-navigation';

const CreateEnsScreen = ({navigation}) => 
{
    return (
        <View styles={styles.container}>
            <TouchableOpacity 
            //insert style for Touchable Opacity
                style={styles.tOstyle}
                onPress={() => navigation.navigate('so')}
                >
                <PresetView
                    title="Symphony Orchestra"
                    imageSource={require('../../assets/symphony.jpg')}
                />
            </TouchableOpacity>
            <TouchableOpacity 
            //insert style for Touchable Opacity
                style={styles.tOstyle}
                onPress={() => navigation.navigate('jb')}
            >
                <PresetView
                    title="Jazz Band"
                    imageSource={require('../../assets/jazz.jpg')}
                />
            </TouchableOpacity>
            <TouchableOpacity
            //insert style for Touchable Opacity
                style={styles.tOstyle}
                onPress={() => navigation.navigate('mb')}
            >
                <PresetView 
                    title="Marching Band" 
                    imageSource={require('../../assets/mband.jpg')}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'white',
        flex: 6,
        alignContent: 'center'
    },
    text: {
        fontSize: 45,
        textAlign:'center'
    },
    tOstyle: {
        alignItems: 'center',
        backgroundColor: 'white'
    }
});

export default CreateEnsScreen;