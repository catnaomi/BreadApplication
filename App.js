import React, {Component} from 'react';
import {registerUser} from "./db/firebase";
import LandingScreen from "./screens/LandingScreen"
import UserScreen from "./screens/UserScreen"
import LoginScreen from "./screens/LoginScreen"
import BusinessScreen from "./screens/BusinessScreen"
import SearchScreen from "./screens/SearchScreen"
import RegisterScreen from "./screens/RegisterScreen"
import SettingsScreen from "./screens/SettingsScreen"
import {SearchScreenStack} from "./screens/SearchScreen"
import manual_data_entry from './db/manual_data_entry'

import {
    createBottomTabNavigator,
    createAppContainer,
    navigationOptions,
} from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
   Find: {screen: LandingScreen},
   Favorites: {screen: BusinessScreen},
   Profile: {screen: UserScreen},
   Settings: {screen: SettingsScreen},
   Search: {screen: SearchScreenStack},
}, {initialRouteName: 'Find'});

export default createAppContainer(TabNavigator);