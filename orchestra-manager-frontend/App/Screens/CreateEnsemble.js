import React, {
  useContext,
  useState,
  useEffect
} from "react";
import {
  Text,
  View,
  StyleSheet,
  Picker,
  FlatList,
  TouchableOpacity
} from "react-native";
/////////////////////////////////////////////////////
import axios from "axios";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { Context } from "../context/EnsembleContext";
//////////////////////////////////////////////////////////
const CreateEnsemble = ({ navigation }) => {
  //make use of a context to get access to its data
  const { state, addEnsemble, deleteEnsemble, saveEnsemble } = useContext(Context);


  const [instruments, setInstruments] = useState([]);
  const [users, setUsers] = useState([]);
  /////////////////////////////////////////////////////
  //state of instrument picker 
  const [selectedValue, setSelectedValue] = useState([]);
  //state of user picker
  const [selectedValueUser, setSelectedValueUser] = useState([]);
  /////////////////////////////////
  //state of both pickers in object
  const [chairs, setChairs] = useState([]);

  ///////////////////////////////////////////////////////////////
  useEffect(() => {
    axios.get("http://5da415c7.ngrok.io/instruments").then((res) => {
      setInstruments(res.data);
      //console.log(instruments)
    });
    ////////////////////////////////////////////
    axios.get("http://5da415c7.ngrok.io/users").then((res) => {
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
    <View>
      <View style={styles.container}>
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
      <View style={styles.secondContainer}>
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
      </View>
      <View style={styles.chairView}>
        <FlatList
          data={chairs}
          keyExtractor={(chair) => chair.key}
          renderItem={({ item }) => {
            return (
              <View style={styles.row}>
                <Text style={styles.chairStyle}>
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
      </View>
      <View style={styles.secondContainer}>
        <TouchableOpacity style={styles.buttonPosition} onPress={(chairs) => addEnsemble(chairs)}>
          <Text style={styles.buttonText}>Save Ensemble</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
//need to finish with images
///////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  secondContainer: {
    padding: 15,
    flexDirection: "column",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
  },
  buttonPosition: {
    backgroundColor: "#008080",
    height: 35,
    width: 200,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    marginTop: 5,
  },
  chairView: {
    marginHorizontal: 20,
  },
  chairStyle: {
    fontSize: 18,
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: "grey",
    alignItems: "center",
  },
  icon: {
    fontSize: 22,
  },
});
/////////////////////////////////
export default CreateEnsemble;
