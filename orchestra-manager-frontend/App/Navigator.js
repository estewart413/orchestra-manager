import React from "react";
import { Platform, StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import {
  createAppContainer,
  createNavigationContainer
} from "react-navigation";

import Login from "./Screens/Login";
import HomeScreen from "./Screens/HomeScreen";
import CreateEnsScreen from "./Screens/CreateEnsScreen";
import InstrumentsList from "./Screens/InstrumentsList";
import Registration from "./Screens/Registration";

const work = createStackNavigator({
  //creates start-up screen to "Login"
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false //hiding headers
    }
  },
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      headerBackTitleVisible: true,
      headerTitleAlign: "center"
    }
  },
  Ensemble: {
    screen: CreateEnsScreen,
    navigationOptions: {
      title: "Presets",
      headerBackTitleVisible: true,
      headerTitleAlign: "center"
    },
    Instruments: {
      screen: InstrumentsList
    }
  },
  Registration: {
    screen: Registration,
    navigationOptions: {
      title: "Registration",
      headerTitleAlign: "center",
      headerShown: false
    }
  }
});

const Navigator = createAppContainer(work);

export default Navigator;
