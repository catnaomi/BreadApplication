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
} from 'react-native';

export default class BreadApp extends Component {
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
        <View style = {{flex: 1}}/>
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
                Alert.alert(this.state.username + '\n added to database');
                registerUser(this.state.username, this.state.password);
              }}
              title="Login"
            />
          </View>
        </View>
        <View style = {{flex: 2}}>
          <View style = {{top: 10, height: 1, topBorderWidth: 1, left: '10%', width: '80%', backgroundColor: 'black'}}/>
          <View style = {styles.thirdPartyButton}>
          </View>
          <View style = {styles.thirdPartyButton}/>
        </View>
      </View>
    );
  }
}

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
    left: '20%',
    width: '60%'
  },
  facebookButton: {

  }
});
