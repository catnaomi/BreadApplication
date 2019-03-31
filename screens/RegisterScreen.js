import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import {navigate} from 'react-navigation';
import LoginScreen from './LoginScreen';
import {registerUser, getUserData} from "../db/firebase";
//import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

export default class RegisterScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    render() {
        const { navigate } = this.props.navigation;

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
                                
                                Alert.alert(getUserData(this.state.username) + '\nadded to database');
                                //registerUser(this.state.username, this.state.password);
                            }}
                            title="Register"
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
                    <Text style = {{left: '10%', top: 30}}>Already registered?</Text>
                </View>
                <View style = {styles.registerButton}>
                    <Button
                        onPress = { () => {navigate('Login')}}
                        title = "Login"
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
