
/* eslint-disable no-tabs */
/**
*-AppSwitchNavigator
*	-WelcomeScreen
*		-Login Button
*		-Sign Up Button
*	-AppDrawerNavigator
*			-Dashboard - DashboardStackNavigator(needed for header and to change the header based on the tab)
*				-DashboardTabNavigator
*					-Tab 1 - FeedStack
*					-Tab 2 - ProfileStack
*					-Tab 3 - SettingsStack
*			-Any files you don't want to be part of the tab navigator can go here
*/
import React, { Component } from 'react';
import AppContainer from './src/appContainer';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

export default class App extends Component {
  render() {
    return (<AppContainer />);
  }
}
