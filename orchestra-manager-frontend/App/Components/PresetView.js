import React from 'react';
import { Text, View, StyleSheet, Image, ShadowPropTypesIOS } from 'react-native'

function Separator() {
    return <View style={styles.separatorStyle} />;
  }

const PresetView = props => {
    return (
        <View style={styles.componentSyle}>
            <Separator/>
            <Text style={styles.text}>{props.title}</Text>
            <Image 
                styles={styles.imagePosition}
                source={props.imageSource}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 19,
        textAlign: 'center'
    },
    separatorStyle: {
        marginTop: 20
    },
    componentSyle: {
        backgroundColor: 'white'
    },
    imagePosition: {
    }
});

export default PresetView;