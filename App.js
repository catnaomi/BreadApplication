import React, {Component} from 'react';
import {registerUser} from "./db/firebase";
import {LandingStack} from "./screens/LandingScreen"
import {UserStack} from "./screens/UserScreen"
import {BusinessStack} from "./screens/BusinessScreen"
import {FavoritesStack} from "./screens/FavoriteScreen"
import {SettingsStack} from "./screens/SettingsScreen"
import {SearchScreenStack} from "./screens/SearchScreen"
import manual_data_entry from './db/manual_data_entry'
import {LoginStack} from './screens/LoginScreen'
import RegisterScreen from "./screens/RegisterScreen"

import {AdminNavigator} from "./screens/AdminLanding";

import cache from './userCache'

import {
    createBottomTabNavigator,
    createAppContainer,
    navigationOptions,
} from 'react-navigation';

export const TabNavigator = createBottomTabNavigator({
   Find: {screen: LandingStack},
   Favorites: {screen: FavoritesStack},
   Profile: {screen: UserStack},
   Settings: {screen: SettingsStack},
}, {initialRouteName: 'Find'});


// only set true for demoing
console.disableYellowBox = false;

export default createAppContainer(TabNavigator);