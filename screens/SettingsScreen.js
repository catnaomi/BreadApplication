import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableHighlight, ScrollView, View} from "react-native";
import {LoginStack}from "./LoginScreen"
import {AdminNavigator} from "./AdminLanding";
import adminLandingScreen from "./AdminLanding"
import {LandingStack} from "./LandingScreen"
import { createStackNavigator } from "react-navigation";

import cache from '../userCache'
import {breadColors} from "../Colors";

class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
        headerStyle: {
            backgroundColor: breadColors.breadOrange,
        },
        headerTitleStyle: {
            color: 'white'
        },
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {{flex: 1}}>
                <View style = {[{flex: 1}, styles.SettingsScroll]}>
                    <TouchableHighlight
                        style = {styles.SettingsEntry}
                        onPress = {() => {
                            if(cache.isAdmin) {
                                navigate('AdminLanding')    
                            } else if(cache.isUser) {
                                navigate('LandingScreen')
                            } else {
                                navigate('Login')
                            }}
                        }>
                        <Text style = {styles.EntryFont}>
                            Login / Logout
                        </Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}

export const SettingsStack = createStackNavigator({
    Settings: {screen: SettingsScreen},
    Login: {screen: LoginStack},
    LandingScreen: {screen: LandingStack},
    AdminLanding: {screen: adminLandingScreen}
});

const styles = StyleSheet.create ({
    SettingsScroll: {

    },
    SettingsEntry: {
        height: 75,
        width: '100%',
        borderColor: 'grey',
        borderBottomWidth: 1,
        alignContent: 'center',
    },
    EntryFont: {
        top: 20,
        left: 20,
        fontSize: 18,
    }
});
