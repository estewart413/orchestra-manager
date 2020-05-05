import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Item,
  Linking,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/EnsembleContext";
import { Entypo, Ionicons } from "@expo/vector-icons";
import axios from "axios";

const ShowEnsemble = ({ navigation }) => {
  const { state } = useContext(Context);

  const ensemble = state.find(
    (ensemble) => ensemble._id === navigation.getParam("_id")
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        <Text style={styles.titleText}>{ensemble.title}</Text>
      </View>
      <FlatList
        style={{ width: "80%" }}
        data={ensemble.chairs}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.playerText}>
              {item.selectedValue + " - " + item.selectedValueUser}
            </Text>
            <CheckBox title="music returned" checked={false}/>
          </View>
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
          navigation.navigate("EditEnsemble", { _id: navigation.getParam("_id") })
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
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  titleText: {
    fontSize: 23,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    shadowColor: "#000",
    paddingHorizontal: 25,
    elevation: 0.2,
    color: "#2f4f4f",
  },
  titleView: {
    paddingVertical: 10,
    marginTop: 8,
    marginBottom: 20,
    marginTop: 15,
  },
  screenContainer: {
    backgroundColor: "white",
    flex: 1,
  },
  featherStyle: {
    marginRight: 8,
  },
  titleViewStyle: {
    backgroundColor: "white",
    alignItems: "center",
    padding: 15,
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
    borderColor: "grey",
  },
  playerText: {
    fontSize: 18,
    borderBottomColor: "grey",
    borderBottomWidth: 0.5,
    paddingBottom: 25,
    paddingTop: -25,
    marginTop: -10,
  },

  icon: {
    alignSelf: "flex-end",
    marginTop: 10,
    alignItems: "center",
  },
});

export default ShowEnsemble;
