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
//---------------------------------------------------------
function Separator() {
  return <View style={styles.separatorStyle} />;
}
const PRIME_COLOR = "#008082";
//---------------------------------------------------------
const HomeScreen = ({ navigation }) => 
{
  
  
  return (
    <View style={styles.container}>

      <Separator />
      <Separator />
      <Separator />

      <Button
        onPress={() => navigation.navigate('Ensemble')}
        style={styles.buttonStyle}
        title="Create Ensemble"
        color= {PRIME_COLOR}
      />

      <Separator/>
      
      <Button 
        style={styles.buttonStyle}
        title="Upload Parts"
        color= {PRIME_COLOR}
      /> 
      
    </View>
  );
};


const styles = StyleSheet.create({
  
  container: {
    padding: 20,
    backgroundColor: "white",
    flex: 6
  },
  separatorStyle: {
    marginVertical: 10
  },
  title: {
    fontSize: 30,
    color: "#2f4f4f",
    textAlign: "center",
    justifyContent: "center",
    marginTop: 55
  },
  buttonStyle: {
    height: 35,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 25
  }
});

export default HomeScreen;