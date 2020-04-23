import React, { useContext, useState, useEffect, Component, State } from 'react';
import { Text, View, StyleSheet, Picker, FlatList, Image, TouchableOpacity } from 'react-native';
/////////////////////////////////////////////////////
import axios from 'axios';
//////////////////////////////////////////////////////////
const CreateEnsemble = ({ navigation }) => {
    
    const [instruments, setInstruments] = useState([]);
    const [users, setUsers]= useState([]);
    /////////////////////////////////////////////////////
    const [load, setLoad] = useState(false);
    const [error, setError] = useState('');
    const [selectedValue, setSelectedValue] = useState([]);
    const [selectedValueUser, setSelectedValueUser] = useState([]);
    ///////////////////////////////////////////////////////////////
    useEffect(() => {
        axios.get("http://cb24d711.ngrok.io/instruments")
        .then(res => {
            setInstruments(res.data);
            console.log(instruments)
        })
        ////////////////////////////////////////////
        axios.get("http://cb24d711.ngrok.io/users")
        .then(res => {
            setUsers(res.data);
            console.log(users)
        })
    }, []);

    //console.log(selectedValue)
    //console.log(selectedValueUser)
    ////////////////////////////////////////////////////////////////////////////
    return (
      <View>
        <View style={styles.container}>
          <Picker
            style={{ height: 50, width: 200 }}
            selectedValue={selectedValue}
            //Put onValueChange here
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
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
            //Put onValueChange here
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
        <TouchableOpacity>

        </TouchableOpacity>
      </View>
    );
}
//need to finish with images
///////////////////////////////////////////////////////////////////////////////
const styles = StyleSheet.create({
    container: {
        padding: 15,
        flexDirection: 'row',
        backgroundColor: 'white',
        justifyContent: 'space-between'

    }
})
/////////////////////////////////
export default CreateEnsemble;