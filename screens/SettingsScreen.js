import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableHighlight, ScrollView, View} from "react-native";
import {LoginStack}from "./LoginScreen"
import {AdminNavigator} from "./AdminLanding";
import adminLandingScreen from "./AdminLanding"
import {LandingStack} from "./LandingScreen"
import { createStackNavigator } from "react-navigation";

import cache from '../userCache'

class SettingsScreen extends Component {
    static navigationOptions = {
        title: 'Settings',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style = {styles.screenView}>
                <View style = {styles.optionView}>
                    <ScrollView style={styles.innerOption}>
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
                    </ScrollView>
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
    screenView: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    optionView: {
        height: '70%',
        width: '100%',
        flex: 6,
    },
    innerOption: {
        width: '75%',
        left: '12.5%',
        flexGrow: 1,
        flexDirection: 'column',
    },
    SettingsEntry: {
        marginTop: 20,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffab40',
    },
    EntryFont: {
        fontSize: 22,
        padding: '10%',
        color: 'white',
        textAlign: 'center',
    }
});
