import React, {Component} from 'react';
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
  render() {
    return (
      <View style = {{top: '0%', height: '100%'}}>
        <Image
          source={require('./assets/images/logos/basetext.png')}
          style= {{flex: 2, width: '50%', height: '40%', top: '10%', left: '25%'}}
        />
        <View style = {{flex: 1, backgroundColor: 'powderblue'}}>
          <TextInput
            style={styles.loginField}
            placeholder = "email or phone number"
            onChangeText = {(text) => this.setState({text})}
          ></TextInput>
          <TextInput
            style={styles.loginField}
            placeholder = "password"
            onChangeText = {(text) => this.setState({text})}
          ></TextInput>
          <Button
            style = {{flex: 1}}
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="Press Me"
          />
        </View>
        <View style = {{flex: 2, backgroundColor: 'black'}}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  loginField: {
    left: '10%',
    width: '80%',
    borderBottomWidth: 1,
    flex: 1,
    margin: 10
  }
});