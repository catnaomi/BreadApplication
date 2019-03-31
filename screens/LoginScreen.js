import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import {registerUser} from "../db/firebase";
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

export default class LoginScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    render() {
        return (
            <View style = {{flex: 1}}>
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
                    <View style = {{top: 10, height: 1, topBorderWidth: 1, left: '10%', width: '80%', backgroundColor: 'black'}}/>
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
                        onPress = { () => {
                            navigation.navigate('Register')
                        }}
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
});

const LoginStack = createStackNavigator({
  Login: LoginScreen
});

