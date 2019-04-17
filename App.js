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

import {breadColors} from "./Colors"
import {MaterialIcons} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import {
    createBottomTabNavigator,
    createAppContainer,
    navigationOptions,
} from 'react-navigation';

export const TabNavigator = createBottomTabNavigator({
   Find: {
       screen: LandingStack,
       navigationOptions: {
           tabBarLabel:"Find",
           tabBarIcon: ({tintColor}) => (
               <MaterialIcons name="search" size={30} color={tintColor} />
           )
       },
   },
   Favorites: {
       screen: FavoritesStack,
       navigationOptions: {
           tabBarLabel:"Favorites",
           tabBarIcon: ({tintColor}) => (
               <MaterialCommunityIcons name="heart-multiple" size={30} color={tintColor} />
           )
       },
   },
   Profile: {
       screen: UserStack,
       navigationOptions: {
           tabBarLabel:"Profile",
           tabBarIcon: ({tintColor}) => (
               <MaterialIcons name="person" size={30} color={tintColor} />
           )
       },
   },
   Settings: {
       screen: SettingsStack,
       navigationOptions: {
           tabBarLabel:"Settings",
           tabBarIcon: ({tintColor}) => (
               <MaterialIcons name="settings" size={30} color={tintColor} />
           )
       },
   },
   /*Search: {screen: SearchScreenStack},*/
}, {
    initialRouteName: 'Find',
    tabBarOptions: {
        activeTintColor: breadColors.breadOrange,
        inactiveTintColor: breadColors.breadDarkGrey,
        style: {
            backgroundColor: breadColors.breadLightGrey,
        }
}});


// only set true for demoing
console.disableYellowBox = true;

export default createAppContainer(TabNavigator);