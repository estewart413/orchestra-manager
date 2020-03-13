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
import so from "./Screens/presetScreens/so";
import jb from "./Screens/presetScreens/jb";
import mb from "./Screens/presetScreens/mb";
import debug from "./Screens/debug";

const work = createStackNavigator({
  //creates start-up screen to "Login"
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false //hiding headers
    }
  },
  ////////////////////////////////////////////////////
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      title: "Home",
      headerBackTitleVisible: true,
      headerTitleAlign: "center"
    }
  },
  ////////////////////////////////////////////////////
  Ensemble: {
    screen: CreateEnsScreen,
    navigationOptions: {
      title: "Presets",
      headerBackTitleVisible: true,
      headerTitleAlign: "center"
    }
  },
  ////////////////////////////////////////////////////
  Instruments: {
    screen: InstrumentsList
  },
  ////////////////////////////////////////////////////
  Registration: {
    screen: Registration,
    navigationOptions: {
      title: "Registration",
      headerTitleAlign: "center",
      headerShown: false
    }
  },
  ////////////////////////////////////////////////////
  so: {
    screen: so,
    navigationOptions: {
      title: "Symphony Orchestra",
      headerBackTitleVisible: true,
      headerTitleAlign: "center"
    }
  },
  ////////////////////////////////////////////////////
  jb: {
    screen: jb,
    navigationOptions: {
      title: "Jazz Band",
      headerBackTitleVisible: true,
      headerTitleAlign: "center"
    }
  },
  ////////////////////////////////////////////////////
  mb: {
    screen: mb,
    navigationOptions: {
      title: "Marching Band",
      headerBackTitleVisible: true,
      headerTitleAlign: "center"
    }
  },
  ////////////////////////////////////////////////////
  debug: {
    screen: debug,
    navigationOptions: {
      title: "Debug Screen",
      headerBackTitleVisible: true,
      headerTitleAlign: 'center'
    }
  }
});

const Navigator = createAppContainer(work);

export default Navigator;