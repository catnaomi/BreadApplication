import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, ScrollView, View} from "react-native";
import {LoginStack}from "./LoginScreen"
import {AdminNavigator} from "./AdminLanding"
import {navigate, createStackNavigator} from "react-navigation";

class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
    };
    render() {

        const { navigate } = this.props.navigation;
        return (
            <View style = {{flex: 1}}>
                <View style = {[{flex: 1}, styles.SettingsScroll]}>
                    <TouchableHighlight
                        style = {styles.SettingsEntry}
                        onPress = {() => {navigate('Login')}}>
                        <Text style = {styles.EntryFont}>
                            Login / Logout
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style = {styles.SettingsEntry}
                        onPress = {() => {navigate('AdminNavigator')}}>
                        <Text style = {styles.EntryFont}>
                            Admin Portal
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
    AdminNavigator: {screen: AdminNavigator},
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
