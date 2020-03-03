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

export default class Registration extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.title}>Registration</Text>
          <Separator />
          <Separator />
          <Separator />
          <Separator />

          <TextInput
            placeholder="First Name"
            placeholderTextColor="grey"
            style={styles.input}
          />
          <Separator />

          <TextInput
            placeholder="Last Name"
            placeholderTextColor="grey"
            secureTextEntry={true}
            style={styles.input}
          />
          <Separator />

          <TextInput
            placeholder="Email Address"
            placeholderTextColor="grey"
            secureTextEntry={true}
            style={styles.input}
          />
          <Separator />

          <TextInput
            placeholder="Password"
            placeholderTextColor="grey"
            secureTextEntry={true}
            style={styles.input}
          />
          <Separator />

          <TextInput
            placeholder="Confirm Password"
            placeholderTextColor="grey"
            secureTextEntry={true}
            style={styles.input}
          />
          <Separator />

          <View>
            <TouchableOpacity
              style={styles.buttonPosition}
              onPress={() => Alert.alert("Registration Successful!")}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
          </View>
            <Separator/>
          <View>
            <TouchableOpacity
              style={styles.linkButton}
              onPress={() => this.props.navigation.navigate("Login")}>
              <Text style={styles.linkButton}>Log In Screen</Text>
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
    alignContent: 'center',
    justifyContent: "center",
    padding: 20
  },

  separator: {
    marginVertical: 10
  },

  title: {
    fontSize: 30,
    color: "#2f4f4f",
    alignItems: "center",
    marginLeft: 15
  },

  buttonPosition: {
    backgroundColor: "#008080",
    height: 35,
    width: 200,
    justifyContent: "flex-end",
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    marginBottom: 5,
    fontSize: 18
  },

  input: {
    height: 35,
    width: 200,
    padding: 10,
    backgroundColor: "white",
    borderBottomColor: "#696969",
    borderBottomWidth: 1,
    alignItems: "center"
  },

  linkButton: {
    color: 'black',
    textDecorationLine: 'underline',
    alignItems: 'center',

  }
});
