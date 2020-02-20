import React from "react";
import { Platform, StatusBar } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer, createNavigationContainer } from "react-navigation";




import Login from "./Screens/Login";

const work = createStackNavigator({
    Login: { screen: Login},
  });
  
const Router = createAppContainer(work);

  export default Router;

