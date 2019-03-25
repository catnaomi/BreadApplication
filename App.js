import React, {Component} from 'react';
import {registerUser} from "./db/firebase";
import LandingScreen from "./screens/LandingScreen"
import UserScreen from "./screens/UserScreen"
import LoginScreen from "./screens/LoginScreen"
import BusinessPage from "./screens/BusinessPage"
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

export class SearchScreen extends Component {

  constructor (props) {
    super(props);
  }

  render() {
        var profile = require('./assets/images/profile/julia.png');
        return (
            <View style = {{width: '100%', height: '100%'}}>
                {/*Profile header*/}
                <View style = {styles.searchHeader}>
                    <View style = {{flex : 1, borderLeftWidth: 1, justifyContent: 'center', alignContent: 'center'}}>
                        <Text style = {{textAlign: 'center', fontSize: 18}}>
                            Businesses Found: 
                        </Text>
                    </View>
                </View>
                <View style = {styles.searchContent}>
                    <View style = {{left: 10, top: 10}}>
                        <Text>Searching Businesses from Database needs to be implemented</Text>
                    </View>
                </View>
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
   Find: LandingScreen,
   Favorites: BusinessPage,
   Profile: UserScreen,
   Settings: SettingsScreen,
   Search: SearchScreen
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create ({
    searchBar: {
    position: 'absolute',
    top: 50,
    left: '10%',
    height: 50,
    width: '80%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    },
    searchHeader: {
        flex: 3,
        borderWidth: 1,
        backgroundColor: 'lightgrey',
    },
    searchContent: {
      flex: 6,
      borderWidth: 1,
    },
});