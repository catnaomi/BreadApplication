import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput
} from 'react-native';

export default class BreadApp extends Component {
  render() {
    return (
      <View>
        <View style = {{top: '30%', left: '10%', width: '80%'}}>
          <TextInput
            style={{borderBottomWidth: 1}}
            placeholder = "email or phone number"
            onChangeText = {(text) => this.setState({text})}
          ></TextInput>
        </View>
        <View style = {{top: '40%', left: '10%', width: '80%'}}>
          <TextInput
            style={{borderBottomWidth: 1}}
            placeholder = "password"
            onChangeText = {(text) => this.setState({text})}
          ></TextInput>
        </View>
      </View>
    );
  }
}