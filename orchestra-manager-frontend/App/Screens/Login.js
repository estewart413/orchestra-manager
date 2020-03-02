import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  TextInput
} from "react-native";

function Separator() {
  return <View style={styles.separator} />;
}

export default class Login extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Orchestra Manager</Text>

          <Separator />
          <Separator />
          <Separator />

          <TextInput
            placeholder="Username"
            placeholderTextColor="grey"
            style={styles.input}
          />
          <Separator />

          <TextInput
            placeholder="Password"
            placeholderTextColor="grey"
            style={styles.input}
          />

          <View>
            <Separator />
          </View>

          <View>
            <TouchableOpacity
              style={styles.buttonPosition}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },

  separator: {
    marginVertical: 10
  },

  title: {
    fontSize: 30,
    color: "#2f4f4f"
  },

  buttonPosition: {
    backgroundColor: "#008080",
    height: 35,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 25
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18
  },

  input: {
    height: 35,
    width: 200,
    padding: 10,
    marginLeft: 25,
    backgroundColor: "white",
    borderBottomColor: "#696969",
    borderBottomWidth: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
