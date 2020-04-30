import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList, Item, TouchableOpacity } from "react-native";
import { Context } from "../context/EnsembleContext";
import { Entypo } from '@expo/vector-icons';

const ShowEnsemble = ({ navigation }) => {
  const { state } = useContext(Context);
  console.log(state);
  const ensemble = state.find(
    (ensemble) => ensemble.id === navigation.getParam("id")
  );

  console.log(navigation.getParam("id"));

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{ensemble.title}</Text>
      </View>
      <FlatList
        style={{ width: '80%'}}
        data={ensemble.chairs}
        renderItem={({ item }) => (
          <Text style={styles.playerText}>
            {item.selectedValue + " - " + item.selectedValueUser}
          </Text>
        )}
        //keyExtractor={(ensemble.chair) => ensemble.chair}
      ></FlatList>
    </View>
  );
};



//////////HEADER_FEATHER_FRO_NAVIGATION_TO_EDITeNSEMBLE///////////
ShowEnsemble.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("EditEnsemble", { id: navigation.getParam('id') })
        }
      >
        <Entypo name="feather" size={25} style={styles.featherStyle} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    titleText: {
        fontSize: 23,
        borderWidth: 1,
        padding: 5 ,
        borderRadius: 5,
        shadowColor: "#000",
        paddingHorizontal: 25,
        elevation: 0.2,
        color: "#2f4f4f"
    },
    titleView: {
        paddingVertical: 10,
        marginTop: 8,
        marginBottom: 20,
        marginTop: 15
      },
    screenContainer: {
        backgroundColor: 'white',
        flex: 1
    },
    featherStyle: {
        marginRight: 8
    },
    titleViewStyle: {
        backgroundColor: 'white',
        alignItems: "center",
        padding: 15
    },
    titleTextStyle: {
        fontSize: 20,

    },
    chairView: {
        marginHorizontal: 20,
    },
    chairStyle: {
        fontSize: 18,
        padding: 10,
        justifyContent: "space-between",
        borderColor: 'grey'
    },
    playerText: {
        fontSize: 20, 
        padding: 12, 
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        paddingVertical: 15
    }
});

export default ShowEnsemble;