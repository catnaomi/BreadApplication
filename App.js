import React, {Component} from 'react';
import {registerUser} from "./db/firebase";
import LandingScreen from "./screens/LandingScreen"
import UserScreen from "./screens/UserScreen"
import LoginScreen from "./screens/LoginScreen"
import BusinessPage from "./screens/BusinessPage"
<<<<<<< HEAD
import SearchScreen from "./screens/SearchScreen"
import RegisterScreen from "./screens/RegisterScreen"
import SettingsScreen from "./screens/SettingsScreen"
=======
import SettingsScreen from "./screens/SettingsScreen"
import {SearchScreenStack} from "./screens/SearchScreen"
import {registerBusiness, getBusinessWithID} from './db/firebase'
import AdminLanding from "./screens/AdminLanding";
import AdminAuthenticate from "./screens/AdminAuthenticate";

>>>>>>> 28b5818b3bfa03b13f9e4cb2daaad07f63da46a9

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

<<<<<<< HEAD
export class FavoriteScreen extends Component {
  render() {
      return (
          <View>
              <Text>
                  this is a favorites placeholder
              </Text>
          </View>
      );
  }
}

/*
export class SettingsScreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    this is a settings page placeholder
                </Text>
            </View>
        );
    }
} */

=======
>>>>>>> 28b5818b3bfa03b13f9e4cb2daaad07f63da46a9
const TabNavigator = createBottomTabNavigator({
   Find: {screen: LandingScreen},
   Favorites: {screen: BusinessPage},
   Profile: {screen: UserScreen},
   Settings: {screen: SettingsScreen},
   Search: {screen: SearchScreenStack}
}, {initialRouteName: 'Find'});


export default AdminLanding;