import React, {Component} from 'react';
import {registerUser} from "./db/firebase";
import LandingScreen from "./screens/LandingScreen"
import UserScreen from "./screens/UserScreen"
import LoginScreen from "./screens/LoginScreen"
import BusinessPage from "./screens/BusinessPage"
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
}

const TabNavigator = createBottomTabNavigator({
   Find: {screen: LandingScreen},
   Favorites: {screen: BusinessPage},
   Profile: {screen: UserScreen},
   Settings: {screen: SettingsScreen},
   Search: {screen: SearchScreenStack}
}, {initialRouteName: 'Find'});

export default createAppContainer(TabNavigator);