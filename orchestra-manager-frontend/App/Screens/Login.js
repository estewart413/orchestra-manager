import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  TextInput
} from "react-native";

function Separator() {
  return <View style={styles.separator} />;
}

export default function App() {
  const [value, onChangeText] = React.useState("User Name");

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={{
            height: 35,
            width: 150,
            borderColor: "black",
            borderWidth: 1,
            backgroundColor: "white"
          }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <Separator />
        <TextInput
          style={{
            height: 35,
            borderColor: "black",
            borderWidth: 1,
            backgroundColor: "white"
          }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <View>
          <Separator />
        </View>
        <Button
          onPress={() => Alert.alert("button pushed")}
          title="Log In"
          color="#3cb371"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080",
    alignItems: "center",
    justifyContent: "center"
  },

  separator: {
    marginVertical: 10
  }
});
