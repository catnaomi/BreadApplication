import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import {navigate} from 'react-navigation';
import LoginScreen from './LoginScreen';
import {registerUser, getUserData, doesUserExist} from "../db/firebase.js";
import { createStackNavigator } from 'react-navigation';

export default class RegisterScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            usernamechk: '',
            password: '',
            passwordchk: '',
            name: 'abcdefg',
        }
    }
    render() {
        const { navigate } = this.props.navigation;
        var sel = this;
        return (
            <View style = {{flex: 1}}>
                <View style = {{flex : 1}}></View>
                <View style = {{flex: 1}}>
                    <TextInput
                        style={styles.loginField}
                        placeholder = "email or phone number"
                        ref='user'
                        onChangeText = {(text) => this.setState({username: text, usernamechk: text})}
                        value = {this.state.username}
                    />
                    <TextInput
                        style={styles.loginField}
                        placeholder = "password"
                        ref='pass'
                        onChangeText = {(text) => this.setState({password: text, passwordchk: text})}
                        value = {this.state.password}
                    />
                    <View style = {styles.loginButton}>
                        <Button
                            onPress={() => {
                                if (sel.state.username == '' || sel.state.password == '' || sel.state.name == '') {
                                    Alert.alert("One or more fields missing input!");
                                } else if (!validate(sel.state.username)) {
                                    Alert.alert("E-mail address is invalid!");
                                } else if (sel.state.password.length < 7) {
                                    Alert.alert("Password is not long enough!");
                                } else if (sel.state.username !== sel.state.usernamechk) {
                                    Alert.alert("E-mail addresses do not match!");
                                } else if (sel.state.password !== sel.state.passwordchk) {
                                    Alert.alert("Passwords do not match!");
                                } else {
                                //console.log(typeof(doesUserExist(sel.state.username)));
                                    doesUserExist(sel.state.username).then(response => {
                                        if (response) {
                                            console.log("I found the user!");
                                            Alert.alert(sel.state.username + '\nis already in database');
                                        } else {
                                            console.log("User does not exist-- Adding!");
                                            registerUser(sel.state.username, sel.state.name, sel.state.password, [], [], [], 0);
                                            Alert.alert(sel.state.username + '\nis now registered to the database');
                                        }

                                    })
                                }
                                
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

const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
}