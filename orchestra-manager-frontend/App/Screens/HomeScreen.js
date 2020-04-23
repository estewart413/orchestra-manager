//This screen must contain list of ensables created by the user, 
//as well as a button that allows to create new ensamble.
import React, { useContext } from "react";
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity } from "react-native";
import { Context } from "../context/EnsembleContext";
import { Ionicons, AntDesign } from '@expo/vector-icons';
////////////////////////////////////////////////////////
const PRIME_COLOR = "#008082";
////////////////////////////////////////////////////////
const HomeScreen = ({ navigation }) => {
  const { state, addEnsemble, deleteEnsemble } = useContext(Context);

  return (
    <View>
      <Button title="Add Ensemble" onPress={addEnsemble} />
      <FlatList
        data={state}
        keyExtractor={(ensemble) => ensemble.title}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ShowEnsemble', { id: item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteEnsemble(item.id)}>
                  <Ionicons style={styles.icon} name="md-remove-circle-outline" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
////////////////////////////////////////////////////////
HomeScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => 
      <TouchableOpacity onPress={() => navigation.navigate('CreateEnsemble')}>
        <AntDesign name="pluscircleo" size={24} style={styles.headerButton} />
      </TouchableOpacity>
  }
}
////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'grey'
  },
  title: {
    fontSize: 18
  },
  icon: {
    fontSize: 20
  },
  headerButton: {
    marginRight: 8
  }
});
////////////////////////////////////////////////////////
export default HomeScreen;