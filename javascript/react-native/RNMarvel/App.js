import React from 'react';
import { StatusBar, Platform } from 'react-native';
import Home from './src/screens/Home';
import Description from './src/screens/Description';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const App = createStackNavigator({
  Home: {
    screen: Home
  },
  Description: {
    screen: Description
  }
});

export default createAppContainer(App);