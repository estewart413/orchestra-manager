import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

function Separator() {
    return <View style={styles.separatorStyle} />;
}

const styles = StyleSheet.create({
    separatorStyle: {
        marginVertical: 10
    }
});

export default Separator;