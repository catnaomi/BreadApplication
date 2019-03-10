import React, {Component} from 'react';
import {registerUser} from "./db/firebase";

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
    createAppContainer
} from 'react-navigation';

export class LandingScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      search: '',
    }
  }
  render () {
    var diningIcon = require('./assets/images/quickstart/dining-iconmdpi.png');
    var autoIcon = require('./assets/images/quickstart/auto-iconmdpi.png');
    var beautyIcon = require('./assets/images/quickstart/beauty-iconmdpi.png');
    var cleaningIcon = require('./assets/images/quickstart/cleaning-iconmdpi.png');
    var clothingIcon = require('./assets/images/quickstart/clothing-iconmdpi.png');
    var financialIcon = require('./assets/images/quickstart/financial-iconmdpi.png');
    var healthIcon = require('./assets/images/quickstart/health-iconmdpi.png');
    var legalIcon = require('./assets/images/quickstart/legal-iconmdpi.png');
    return (
      <View>
        {/* Quickstart Buttons */}
        <TouchableHighlight
            style = {[styles.quickstartIcon, styles.diningIcon]}
            onPress = {() => {}}>
            <Image
              source = {diningIcon}
              style = {styles.quickstartIconImages}
            />
        </TouchableHighlight>
        <TouchableHighlight
            style = {[styles.quickstartIcon, styles.autoIcon]}
            onPress = {() => {}}>
            <Image
              source = {autoIcon}
              style = {styles.quickstartIconImages}
            />
        </TouchableHighlight>
        <TouchableHighlight
            style = {[styles.quickstartIcon, styles.clothingIcon]}
            onPress = {() => {}}>
            <Image
              source = {clothingIcon}
              style = {styles.quickstartIconImages}
            />
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.quickstartIcon, styles.cleaningIcon]}>
            <Image
              source = {cleaningIcon}
              style = {styles.quickstartIconImages}
            />
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.quickstartIcon, styles.beautyIcon]}>
            <Image
                source = {beautyIcon}
                style = {styles.quickstartIconImages}
            />
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.quickstartIcon, styles.financialIcon]}>
          <Image
              source = {financialIcon}
              style = {styles.quickstartIconImages}
          />
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.quickstartIcon, styles.healthIcon]}>
          <Image
              source = {healthIcon}
              style = {styles.quickstartIconImages}
          />
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.quickstartIcon, styles.legalIcon]}>
          <Image
              source = {legalIcon}
              style = {styles.quickstartIconImages}
          />
        </TouchableHighlight>



        <View style = {[styles.searchBar]}>
          <TextInput
            style = {{top: 10, left: 10, fontSize: 18}}
            placeholder = "Search"
            onChangeText = {(text) => this.setState({search: text})}
            value = {this.state.search}
          />
        </View>
      </View>
    );
  }
}

export class LoginScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  render() {
    return (
        <View style = {{top: '0%', height: '100%'}}>
          {/*<Image
          source={require('./assets/images/logos/texthoriz.png')}
          style= {{position: 'absolute', width: '100%', top: 0}}
        />*/}
          <View style = {{flex : 1}}></View>
          <View style = {{flex: 1}}>
            <TextInput
                style={styles.loginField}
                placeholder = "email or phone number"
                ref='user'
                onChangeText = {(text) => this.setState({username: text})}
                value = {this.state.username}
            />
            <TextInput
                style={styles.loginField}
                placeholder = "password"
                ref='pass'
                onChangeText = {(text) => this.setState({password: text})}
                value = {this.state.password}
            />
            <View style = {styles.loginButton}>
              <Button
                  onPress={() => {
                    Alert.alert(this.state.username + '\nadded to database');
                    registerUser(this.state.username, this.state.password);
                  }}
                  title="Login"
              />
            </View>
          </View>
          <View style = {{flex: 1}}>
            <View style = {{top: 10, height: 1, topBorderWidth: 1, left: '10%', width: '80%', backgroundColor: 'black'}}></View>
            <View style = {[styles.thirdPartyButton, styles.googleButton]}>
              <Button
                  onPress = { () => {}}
                  title = "Login with Google"
                  color = "#db3236"
              />
            </View>
            <View style = {[styles.thirdPartyButton, styles.facebookButton]}>
              <Button
                  onPress = { () => {}}
                  title = "Login with Facebook"
                  color = "#3C5A99"
              />
            </View>
          </View>
          <View style = {{flex: 1}}>
            <Text style = {{left: '10%', top: 30}}>Don't have an account?</Text>
          </View>
          <View style = {styles.registerButton}>
            <Button
                onPress = { () => {}}
                title = "Register"
            />
          </View>
          <View style ={styles.skipButton}>
            <TouchableHighlight
                onPress = { () => {}}>
              <Text style = {{textDecorationLine: 'underline'}}>Skip ... ></Text>
            </TouchableHighlight>
          </View>
        </View>
    );
  }
}


export class HomeScreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    Rah rah oh ma ma
                </Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
   Home: LandingScreen,
    Test: HomeScreen,
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create ({
  loginField: {
    left: '15%',
    width: '70%',
    borderBottomWidth: 1,
    margin: 10,
    flex: 1
  },
  loginButton: {
    left: '30%',
    width: '40%',
    margin: 10,
    flex: 1
  },
  thirdPartyButton: {
    left: '10%',
    width: '80%'
  },
  googleButton: {
    top: 30,
  },
  facebookButton: {
    top: 60,
  },
  registerButton: {
    position: 'absolute',
    top: '78%',
    left: '55%',
    width: '40%'
  },
  skipButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
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
  quickstartIcon: {
    position: 'absolute',
    width: 80,
    height: 80,
  },
  quickstartIconImages: {
    width: 80,
    height: 80,
  },
  diningIcon: {
    top: 250,
    left: 40,
  },
  autoIcon: {
    top: 250,
    left: 140,
  },
  clothingIcon: {
    top: 250,
    left: 240,
  },
  beautyIcon: {
    top: 450,
    left: 40,
  },
  financialIcon: {
    top: 450,
    left: 140,
  },
  healthIcon: {
    top: 450,
    left: 240,
  },
  legalIcon: {
    top: 350,
    left: 90,
  },
  cleaningIcon: {
    top: 350,
    left: 190,
  }
});
