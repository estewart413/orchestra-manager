import React, { useContext, useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Picker,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
/////////////////////////////////////////////////////
import axios from "axios";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Context } from "../context/EnsembleContext";
import { ScrollView } from "react-native-gesture-handler";
//////////////////////////////////////////////////////////
const CreateEnsemble = ({ navigation }) => {
  ////////////TITLE_STATE//////////////////////
  const [title, setTitle] = useState("");
  //make use of a context to get access to its data
  const { addEnsemble } = useContext(Context);

  ///////////////STATE_FOR_FETCHED_DATA////////////////////
  const [instruments, setInstruments] = useState([]);
  const [users, setUsers] = useState([]);

  ///\/\/\/\/\/state of picked value in instrument picker/\/\/\/\/\/
  const [selectedValue, setSelectedValue] = useState([]);
  //state of picked value in user picker//////////////////
  const [selectedValueUser, setSelectedValueUser] = useState([]);
  ////////////////////////////////////////////////////////////////
  //state of both pickers in object
  const [chairs, setChairs] = useState("");

  ///////////////////////////////////////////////////////////////
  useEffect(() => {
    axios.get("http://66ded9b9.ngrok.io/instruments").then((res) => {
      setInstruments(res.data);
      //console.log(instruments)
    });
    ////////////////////////////////////////////
    axios.get("http://66ded9b9.ngrok.io/users").then((res) => {
      setUsers(res.data);
      //console.log(users)
    });
  }, []);
  //////////////////////////////////////////////////////////
  console.log(selectedValue);
  console.log(selectedValueUser);
  console.log(chairs);

  ////////////////////////////////////////////////////////////////////////////

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={"Enter Ensemble Name"}
        placeholderTextColor="grey"
        value={title}
        onChangeText={(text) => setTitle(text)}
        style={{
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: "black",
          fontSize: 18,
          margin: 10,
        }}
      />
      <View style={styles.pickerContainer}>
        <Picker
          style={{ height: 50, width: 200 }}
          selectedValue={selectedValue}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          {instruments.map((instrument) => (
            <Picker.Item
              key={instrument._id}
              label={instrument.name}
              value={instrument.name}
            />
          ))}
        </Picker>
        <Picker
          style={{ height: 50, width: 200 }}
          selectedValue={selectedValueUser}
          onValueChange={(userItemValue, userItemIndex) =>
            setSelectedValueUser(userItemValue)
          }
        >
          {users.map((user) => (
            <Picker.Item
              key={user._id}
              label={user.fName + " " + user.lName}
              value={user.fName + " " + user.lName}
            />
          ))}
        </Picker>
      </View>

      <TouchableOpacity
        style={styles.buttonPosition}
        onPress={() => {
          setChairs([
            ...chairs,
            {
              selectedValue,
              selectedValueUser,
              key:
                Math.random().toString(36).substring(2, 15) +
                Math.random().toString(36).substring(2, 15),
            },
          ]);
        }}
      >
        <Text style={styles.buttonText}>Add Player</Text>
      </TouchableOpacity>
      <FlatList
        data={chairs}
        keyExtractor={(chair) => chair.key}
        style={{width: '100%', }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={styles.flatlistViewStyle}>
              <Text style={styles.flatlistTextStyle}>
                {item.selectedValue + " - " + item.selectedValueUser}
              </Text>
              <TouchableOpacity onPress={() => console.log(item.key)}>
                <Ionicons
                  style={styles.icon}
                  name="md-remove-circle-outline"
                />
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
      <TouchableOpacity
        style={styles.buttonPosition}
        onPress={() =>
          addEnsemble(chairs, title, () => {
            navigation.navigate("Home");
          })
        }
      >
        <Text style={styles.buttonText}>Save Ensemble</Text>
      </TouchableOpacity>
    </View>
  );
};
//need to finish with images
///////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  pickerContainer: {
    flexDirection: "row"
  },
  //////////////////////////
  flatlistViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 8,
    padding: 5,
    //borderTopWidth: 0.5,
    //borderTopColor: 'grey',
    borderBottomWidth: 0.5,
    borderBottomColor: 'grey'
    /////////////////////
  },
  //////////////////////
  flatlistTextStyle: {
    fontSize: 18,
    marginVertical: 12
  },
  buttonPosition: {
    backgroundColor: "#008080",
    height: 35,
    width: 200,
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    marginTop: 5,
  },
  icon: {
    fontSize: 25
  },
});
/////////////////////////////////
export default CreateEnsemble;
