import React, { useState, Component } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";

import {List, ListItem} from 'react-native-elements';

import axios from "axios";

class Debug extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataSource: []
    };
  }

  componentDidMount() {
    this.makeReq();
  }

  makeReq = () => {
    const url = "http://407d04fe.ngrok.io/users";
    fetch(url)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          dataSource: responseJson
      })
    })
    .catch(error => {
      this.setState({error})
    })
  }

  render() {
    return (
     <View>
        <FlatList
          data={this.state.dataSource}
          renderItem =  {({ item, index }) => (
            <ListItem
              title = {item.fName + " " + item.lName}
              subtitle = {item._id + "\n" + item.userType + "\n" + item.userName + "\n" + item.email + "\n" + item.password}
            
            />
          )}  
          keyExtractor = {(item, index) => index.toString()}
        />
    </View>
    );
  }
}

export default Debug;
