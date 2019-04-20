import React, {Component} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView} from "react-native";
import { createStackNavigator } from "react-navigation";
import AdminAuthenticate  from './AdminAuthenticate';
import AdminAdd from './AdminAdd';
import AdminReview from './AdminReview';
import AdminRemove from './AdminRemove';
import AdminBusinesses from "./AdminBusinesses";
import {breadColors} from "../Colors";
import AdminAddAdmin from "./AdminAddAdmin";

import cache from '../userCache';

export default class adminLandingScreen extends Component {
    static navigationOptions = {
        title: 'Administrative Portal',
        headerStyle: {
            backgroundColor: breadColors.breadOrange,
        },
        headerTitleStyle: {
            color: 'white'
        },
    };
    render() {
        var logo = require('../assets/images/logos/texthoriz.png');
        return (
            <View style={styles.screenView}>
                <View style={styles.imageView}>
                    <Image
                        source={logo}
                        style={styles.breadLogo}
                    />
                </View>
                <View style={styles.optionView}>
                    <ScrollView style={styles.innerOption}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AdminAdd')}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Add a Business</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AdminRemove')}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Remove a Business</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AdminReview')}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Review Flagged Reviews</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AdminBusinesses')}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Review Flagged Businesses</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('AdminAddAdmin')}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Add Admin</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            cache.isAdmin = false;
                            this.props.navigation.goBack();
                            Alert.alert('You have successfully been logged out');
                            }
                        }>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Logout</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );

    };
}

export const AdminNavigator = createStackNavigator({
    Landing: {screen: adminLandingScreen},
    Authenticate: {screen: AdminAuthenticate},
    Add: {screen: AdminAdd},
    Review: {screen: AdminReview},
    Remove: {screen: AdminRemove},
    Businesses: {screen: AdminBusinesses},
},
{
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
});

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
        // justifyContent: 'space-around',
        // alignItems: 'stretch',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffab40',
        marginBottom: 10,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 22,
        padding: '10%',
        color: 'white',
        textAlign: 'center',
    }
});