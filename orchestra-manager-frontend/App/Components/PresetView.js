import React from 'react';
import { Text, View, StyleSheet, Image, ShadowPropTypesIOS } from 'react-native'

function Separator() {
    return <View style={styles.separatorStyle} />;
  }

const PresetView = props => 
{
    return (
        <View styles={styles.container}>
            <Separator/>
            <Text styles={styles.textStyle}>{props.title}</Text>
            <Image 
                styles={styles.imagePosition}
                source={props.imageSource} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        
      },
      imagePosition: {
        alignItems: 'center',
        borderRadius: 15
      },
      textStyle: {
          textAlign: 'center'
      },
      separatorStyle: {
        marginVertical: 10
      }
});

export default PresetView;