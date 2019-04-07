import React, {Component} from 'react';
import {registerUser} from "./db/firebase";
import {LandingStack} from "./screens/LandingScreen"
import {UserStack} from "./screens/UserScreen"
import {BusinessStack} from "./screens/BusinessScreen"
import {SettingsStack} from "./screens/SettingsScreen"
import {SearchScreenStack} from "./screens/SearchScreen"
import manual_data_entry from './db/manual_data_entry'
import {LoginStack} from './screens/LoginScreen'

import RegisterScreen from "./screens/RegisterScreen"

import {
    createBottomTabNavigator,
    createAppContainer,
    navigationOptions,
} from 'react-navigation';

const TabNavigator = createBottomTabNavigator({
   Find: {screen: LandingStack},
   Favorites: {screen: BusinessStack},
   Profile: {screen: UserStack},
   Settings: {screen: SettingsStack},
   /*Search: {screen: SearchScreenStack},*/
}, {initialRouteName: 'Find'});


// only set true for demoing
console.disableYellowBox = true;

export default createAppContainer(TabNavigator);