import React, {Component} from 'react';
import {Alert, Button, StyleSheet, TextInput, View} from "react-native";
import {navigate} from 'react-navigation';
import {registerUser, doesUserExist} from "../db/firebase.js";

export default class RegisterScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            email_check: '',
            password: '',
            password_check: '',
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
                        placeholder = "name"
                        ref='name'
                        onChangeText = {(text) => this.setState({name: text})}
                        value = {this.state.name}
                    />
                    <TextInput
                        style={styles.loginField}
                        placeholder = "email"
                        ref='user'
                        onChangeText = {(text) => this.setState({email: text})}
                        value = {this.state.email}
                    />
                    <TextInput
                        style={styles.loginField}
                        placeholder = "repeat email"
                        ref='userchk'
                        onChangeText = {(text) => this.setState({email_check: text})}
                        value = {this.state.email_check}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.loginField}
                        placeholder = "password"
                        ref='pass'
                        onChangeText = {(text) => this.setState({password: text})}
                        value = {this.state.password}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.loginField}
                        placeholder = "repeat password"
                        ref='passchk'
                        onChangeText = {(text) => this.setState({password_check: text})}
                        value = {this.state.password_check}
                    />
                    <View style = {styles.loginButton}>
                        <Button
                            onPress={() => {
                                if (sel.state.email == '' || sel.state.password == '' || sel.state.name == '') {
                                    Alert.alert("One or more fields are missing input!");
                                } else if (!validate(sel.state.email)) {
                                    Alert.alert("E-mail address is invalid!");
                                } else if (sel.state.password.length < 7) {
                                    Alert.alert("Password is not long enough!");
                                } else if (sel.state.email != sel.state.email_check) {
                                    Alert.alert("E-mail addresses do not match!");
                                } else if (sel.state.password != sel.state.password_check) {
                                    Alert.alert("Passwords do not match!");
                                } else {
                                    doesUserExist(sel.state.email).then(response => {
                                        if (response) {
                                            Alert.alert(sel.state.email + '\nis already in database');
                                        } else {
                                            registerUser(sel.state.email, sel.state.name, sel.state.password, [], [], [], 0);
                                            Alert.alert(sel.state.email + '\nis now registered to the database');
                                            this.props.navigation.goBack();
                                        }

                                    })
                                }
                                
                            }}
                            title="Register"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create ({
    loginField: {
        left: '15%',
        top: '-80%',
        width: '70%',
        borderBottomWidth: 1,
        margin: 10,
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1
    },
    loginButton: {
        left: '30%',
        width: '40%',
        top: '-70%',
        margin: -10,
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1
    },
});

const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
};