import React, {Component} from 'react';
import {Alert, Button, StyleSheet, Text, TextInput, TouchableHighlight, View, Image} from "react-native";
import { createStackNavigator } from "react-navigation";
import RegisterScreen from './RegisterScreen';
import {getAdminData, getUserData} from "../db/firebase";
import adminLandingScreen from "./AdminLanding"
import AdminAdd from './AdminAdd';
import AdminReview from './AdminReview';
import AdminRemove from './AdminRemove';
import AdminBusinesses from "./AdminBusinesses";
import AdminAddAdmin from './AdminAddAdmin';

import {LandingStack} from "./LandingScreen"

import cache from '../userCache'

class LoginScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }
    render() {
        var logo = require('../assets/images/logos/texthoriz.png');
        let self = this;
        let login_fail_count = 0;

        return (
            <View style = {styles.screenView}>
                <View style={{flex:1}}/>
                <View style={styles.imageView}>
                    <Image
                        source={logo}
                        style={styles.breadLogo}
                    />
                </View>
                <View style = {styles.optionView}>
                    <View style={styles.innerOption}>
                        <TextInput
                            style={styles.loginField}
                            placeholder = "Email"
                            ref='user'
                            onChangeText = {(text) => self.setState({email: text})}
                            value = {self.state.email}
                        />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.loginField}
                            placeholder = "Password"
                            ref='pass'
                            onChangeText = {(text) => self.setState({password: text})}
                            value = {self.state.password}
                        />
                        <View style = {styles.loginButton}>
                            <Button
                                onPress={() => {
                                    getAdminData(self.state.email).then(admin => {
                                        if (admin !== undefined) {
                                            if (admin.hash_pass !== self.state.password) {
                                                Alert.alert("Incorrect Username or Password");
                                            } else {
                                                cache.isAdmin = true;
                                                cache.user_id = admin;
                                                login_fail_count = 0;
                                                alert("You have successfully loggined in " + cache.user_id + "!");
                                                this.props.navigation.navigate('AdminLanding');
                                            }
                                        }
                                    }).catch(error => {
                                        login_fail_count += 1;
                                        if(login_fail_count == 2) {
                                            alert("Incorrect Username or Password");
                                        }
                                    });

                                    getUserData(self.state.email).then(user => {
                                        if (user !== undefined) {
                                            if (user.hash_pass !== self.state.password) {
                                                Alert.alert("Incorrect Username or Password");
                                            } else {
                                                cache.user_id = user.user_id;
                                                cache.isUser = true;
                                                login_fail_count = 0;
                                                alert("You have successfully loggined in " + cache.user_id + "!");
                                                this.props.navigation.navigate('LandingScreen');
                                            }
                                        }
                                    }).catch(error => {
                                        login_fail_count += 1;
                                        if(login_fail_count == 2) {
                                            alert("Incorrect Username or Password");
                                        }
                                    })

                                }}
                                title="Login"
                                color={"white"}
                            />
                        </View>
                    </View>
                </View>
                <View style = {{flex: 1, flexDirection: 'row'}}>
                    <View style={{flex: 1}}>
                        <Text style = {{left: '10%'}}>Don't have an account?</Text>
                    </View>
                    <View style = {styles.registerButton}>
                        <Button
                            onPress = {() => {this.props.navigation.navigate('Register')}}
                            title = "Register"
                            color={"white"}
                        />
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create ({
    screenView: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    imageView: {
        height: '15%',
        width: '100%',
        flex: 1,
    },
    breadLogo: {
        position: 'absolute',
        width: '75%',
        height: '100%',
        left: '12.5%',
        flex: 1
    },
    optionView: {
        flex: 5,
        width: '100%',
    },
    innerOption: {
        width: '90%',
        left: '5%',
        flexGrow: 1,
        flexDirection: 'column',
    },
    loginField: {
        left: '10%',
        width: '80%',
        marginTop: '5%',
        paddingTop: '8%',
        borderBottomWidth: 1,
        fontSize: 18,
    },
    loginButton: {
        top:'5%',
        left: '30%',
        width: '40%',
        marginTop: '5%',
        backgroundColor: '#ffab40',
    },
    thirdPartyButton: {
        left: '10%',
        width: '80%'
    },
    registerButton: {
        position: 'absolute',
        left: '50%',
        width: '40%',
        backgroundColor: '#ffab40',
    },
});

export const LoginStack = createStackNavigator({
        Login: {screen: LoginScreen},
        Register:{screen: RegisterScreen},
        AdminLanding: {screen: adminLandingScreen},
        AdminBusinesses: {screen: AdminBusinesses},
        AdminRemove: {screen: AdminRemove},
        AdminAdd: {screen: AdminAdd},
        AdminReview: {screen: AdminReview},
        AdminAddAdmin: {screen: AdminAddAdmin},
        LandingScreen: {screen: LandingStack},
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});