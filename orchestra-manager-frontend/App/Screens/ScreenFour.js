import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native";

export default class ScreenFour extends React.Component {
  render() {
    return (
        <SafeAreaView style={styles.container}>
        <View>
          <TouchableOpacity
            style={styles.buttonPosition}
            onPress={() => this.props.navigation.navigate('Login')}
          >
            <Text style={styles.buttonText}>ScreenFour</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#8fbc8f88",
      alignItems: "center",
      justifyContent: "center",
      padding: 20
    },
  
    separator: {
      marginVertical: 10
    },
  
    title: {
      fontSize: 30,
      color: "white",
      
    },
  
    buttonPosition: {
      backgroundColor: "#8fbc8f",
      height: 35,
      width: 200,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 25
    },
  
    buttonText: {
      color: "white",
      textAlign: "center"
    },
  
    input: {
      height: 35,
      width: 200,
      padding: 10,
      marginLeft: 25,
      backgroundColor: "white",
      justifyContent: "center",
      alignItems: "center"
    }
  });