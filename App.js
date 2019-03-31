import React, {Component} from 'react';
import {registerUser} from "./db/firebase";
import LandingScreen from "./screens/LandingScreen"
import UserScreen from "./screens/UserScreen"
import LoginScreen from "./screens/LoginScreen"
import BusinessPage from "./screens/BusinessPage"
import SettingsScreen from "./screens/SettingsScreen"
import {SearchScreenStack} from "./screens/SearchScreen"
import {registerBusiness, getBusinessWithID} from './db/firebase'

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer,
    navigationOptions,
} from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
   Find: {screen: LandingScreen},
   Favorites: {screen: BusinessPage},
   Profile: {screen: UserScreen},
   Settings: {screen: SettingsScreen},
   Search: {screen: SearchScreenStack}
}, {initialRouteName: 'Find'});

export default createAppContainer(TabNavigator);