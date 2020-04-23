import React from "react";
import { Platform, StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import {
  createAppContainer,
  createNavigationContainer,
} from "react-navigation";

import Login from "./Screens/Login";
import HomeScreen from "./Screens/HomeScreen";
import Registration from "./Screens/Registration";
import ShowEnsemble from "./Screens/ShowEnsemble";
import CreateEnsemble from './Screens/CreateEnsemble';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { Text, View, StyleSheet } from 'react-native';
////////////////////////////////////////////////////////
const work = createStackNavigator({
  //creates start-up screen to "Login"
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false, //hiding headers
    },
  },
  ////////////////////////////////////////////////////////
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      headerBackTitleVisible: true,
      headerTitleAlign: "center"
    },
  },
  ////////////////////////////////////////////////////////
  Registration: {
    screen: Registration,
    navigationOptions: {
      title: "Registration",
      headerTitleAlign: "center",
      headerShown: false
    },
  },
  ////////////////////////////////////////////////////////
  ShowEnsemble: {
    screen: ShowEnsemble,
    navigationOptions: { 
      title: "Your Ensemble", 
      headerTitleAlign: "center" 
    },
  },
  ////////////////////////////////////////////////////////
  CreateEnsemble: {
    screen: CreateEnsemble,
    navigationOptions: {
      title: "Create Ensemble", 
      headerTitleAlign: "center"
    }
  }
});

const Navigator = createAppContainer(work);

export default Navigator;
