import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Alert,
  TextInput
} from "react-native";
import { render } from "react-dom";
import { WorldAlignment } from "expo/build/AR";

function Separator() {
  return <View style={styles.separator} />;
}



export default function Login() {

  onPress = () => {
    alert("Welcome to Orchestra Manager!");
   }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Orchestra Manager</Text>
        <Separator />
       
        <TextInput
        placeholder="Username"
        placeholderTextColor='grey'
          style={styles.input}
        />

        <Separator />

        <TextInput
        placeholder="Password"
        placeholderTextColor='grey'
          style={styles.input}
        />

        <View>
          <Separator />
        </View>
        
        <View>
        <TouchableOpacity 
        style = {styles.buttonPosition}
        onPress={this.onPress}
        >
          <Text style = {styles.buttonText}>
            Log In
          </Text>
        </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080",
    alignItems: "center",
    justifyContent: "center",
    padding: 20
  },

  separator: {
    marginVertical: 10
  },

  title: {
    fontSize: 25
  },

  buttonPosition: {
    backgroundColor: "#3cb371",
    height: 35,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center'
   
  },

  buttonText: {
    color: 'white',
    textAlign: 'center'
  },

  input: {
    height: 35,
    width: 200,
    padding: 10,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
