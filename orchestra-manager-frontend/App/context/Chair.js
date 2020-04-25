import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const Chairs = (instrumentName) => {
  return (
    <View>
      <Text>{JSON.stringify(instrumentName)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Chairs;
