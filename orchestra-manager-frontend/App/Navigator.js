import React from "react";
import { Platform, StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createNavigationContainer } from "react-navigation";

import Login from "./Screens/Login";
import HomeScreen from "./Screens/HomeScreen";
import ScreenThree from "./Screens/ScreenThree";
import ScreenFour from "./Screens/ScreenFour";
import CreateEnsScreen from "./Screens/CreateEnsScreen";
import InstrumentsList from "./Screens/InstrumentsList";

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
      title: 'Home',
      headerBackTitleVisible: true,
      headerTitleAlign: 'center'
      
    },
  },
  Ensemble: {
    screen: CreateEnsScreen,
    navigationOptions: {
      title: 'Presets',
      headerBackTitleVisible: true,
      headerTitleAlign: 'center'
  },
  Instruments: {
    screen: InstrumentsList
    }
  }
});

const Navigator = createAppContainer(work);

export default Navigator;
