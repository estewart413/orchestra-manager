/*import { createAppContainer } from 'react-navigation';
import Login from '/.expo/Screens/Login';
import Background from '/.expo/Screens/Background';

const navigator = createStackNavigator ({

  Home: Login,
  Background: Background

},

{
  initialRouteName: 'Login',
  defaultNavigationOptions: {
    title: 'Mobile App'
  }
});

export default createAppContainer(navigator);
*/

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello there</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});