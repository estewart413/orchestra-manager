import React from 'react';
import { Text, View, StyleSheet, Image, ShadowPropTypesIOS } from 'react-native'

function Separator() {
    return <View style={styles.separatorStyle} />;
  }

const PresetView = props => {
    return (
        <View>
            <Separator/>
            <Text styles={styles.text}>{props.title}</Text>
            <Image 
                styles={styles.imagePosition}
                source={props.imageSource}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        marginLeft: 8
    },
    separatorStyle: {
        marginTop: 20
    }
});

export default PresetView;