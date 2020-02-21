import React from "react";
import { Platform, StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import {
  createAppContainer,
  createNavigationContainer
} from "react-navigation";

import Login from "./Screens/Login";
import Home from "./Screens/Home";
import ScreenThree from "./Screens/ScreenThree";
import ScreenFour from "./Screens/ScreenFour";

const work = createStackNavigator({
  //creates start-up screen to "Login"
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false //hiding headers
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  },

  ScreenThree: {
    screen: ScreenThree,
    navigationOptions: {
      headerShown: false
    }
  },

  ScreenFour: {
    screen: ScreenFour,
    navigationOptions: {
      headerShown: false
    }
  }
});

const Navigator = createAppContainer(work);

export default Navigator;
