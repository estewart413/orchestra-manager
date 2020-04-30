import React, { useState, Component } from "react";
import {
  View,
  FlatList,
} from "react-native";

import {ListItem} from 'react-native-elements';

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
    const url = "http://d539c574.ngrok.io/users";
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
              title = {"FN: " + item.fName + "   " + "LN: " + item.lName}
              subtitle = {"ID: " + item._id + "\n" + "UserType: " + item.userType + "\n" + "Username: " + item.userName + "\n" + "Email: " + item.email + "\n" + "Password: " + item.password}
            />
          )}  
          keyExtractor = {(item, index) => index.toString()}
        />
    </View>
    );
  }
}

export default Debug;