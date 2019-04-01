import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, TouchableHighlight, View, Image} from "react-native";
import {navigate} from 'react-navigation';
import RegisterScreen from './RegisterScreen';
import {getUserData, doesUserExist} from "../db/firebase";
import { createStackNavigator } from 'react-navigation';

class LoginScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    render() {
        var logo = require('../assets/images/logos/texthoriz.png');
        const { navigate } = LoginStack;
        var sel = this;
        return (
            <View style = {{flex: 1}}>
                <View style = {styles.imageView}>
                    
                </View>
                <View style = {{flex : 1}}>
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
                                if (sel.state.username == '' || sel.state.password == '') {
                                    Alert.alert("One or more fields missing input!");
                                } else if (!validate(sel.state.username)) {
                                    Alert.alert("E-mail address is invalid!");
                                } else if (sel.state.password.length < 7) {
                                    Alert.alert("Password is not long enough!");
                                } else {
                                //console.log(typeof(doesUserExist(sel.state.username)));
                                    doesUserExist(sel.state.username).then(response => {
                                        if (response) {
                                            getUserData(sel.state.username).then(response => {
                                                if (sel.state.password == response.hash_pass) {
                                                    console.log("Login successful! Logging in");
                                                    Alert.alert('Logging in\n' + response.name);
                                                    //Do login stuff
                                                } else {
                                                    console.log("Login failed! Incorrect password.");
                                                    Alert.alert('Username or password is incorrect');
                                                    //Keep track of failed logins, maybe
                                                }
                                            })
                                        } else {
                                            console.log("Login failed! No such user exists.");
                                            Alert.alert(sel.state.username + 'User does not exist');
                                        }

                                    })
                                }
                                //Alert.alert(this.state.username + '\nadded to database');
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
                        onPress = { () => {this.props.navigation.navigate('Register')}}
                        title = "Register"
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    imageView: {
        height: '15%',
        width: '100%',
        flex: 1,
    },
    breadLogo: {
        position: 'absolute',
        width: '100%',
        height: '100%',

    },
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
});

export const LoginStack = createStackNavigator({
    Login: {screen: LoginScreen},
    Register: RegisterScreen,
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
}