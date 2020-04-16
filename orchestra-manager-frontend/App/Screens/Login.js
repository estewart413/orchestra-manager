import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

function Separator() {
  return <View style={styles.separator} />;
}

export default class Login extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Orchestra Manager</Text>

          <Separator />
          <Separator />
          <Separator />

          <TextInput
            placeholder="Email Address/Username"
            placeholderTextColor="grey"
            style={styles.input}
          />
          <Separator />

          <TextInput
            placeholder="Password"
            placeholderTextColor='grey'
            secureTextEntry={true}
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

          <View>
            <Separator />
          </View>

          <View>
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => this.props.navigation.navigate("Registration")}>
              <Text style={styles.linkButton}>Create an Account</Text>
            </TouchableOpacity>
          </View>

        </View>
      </SafeAreaView>
      </KeyboardAvoidingView>
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
  },

  linkButton: {
    color: 'black',
    textDecorationLine: 'underline',
    alignItems: 'center',

  }
});
