import React, {Component} from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { createStackNavigator, NavigationActions} from "react-navigation";
import AdminAuthenticate  from './AdminAuthenticate';
import AdminAdd from './AdminAdd';
import AdminReview from './AdminReview';
import AdminRemove from './AdminRemove';
import AdminBusinesses from "./AdminBusinesses";
import {LoginStack} from "./LoginScreen";

class adminLandingScreen extends Component {

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
                    <View style={styles.innerOption}>

                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Add')}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Add a Business</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Remove')}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Remove a Business</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Review')}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Review Flagged Reviews</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Businesses')}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Review Flagged Businesses</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            //this.props.navigation.navigate('Landing');
                            this.props.navigation.goBack('Login');
                            Alert.alert('You have successfully been logged out')
                            }
                        }>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Logout</Text>

                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );

    };
}

const backAction = NavigationActions.back({
    key: null
});


export const AdminNavigator = createStackNavigator({
    Landing: {screen: adminLandingScreen},
    Authenticate: {screen: AdminAuthenticate},
    Add: {screen: AdminAdd},
    Review: {screen: AdminReview},
    Remove: {screen: AdminRemove},
    Businesses: {screen: AdminBusinesses},
    //Login: LoginStack,

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
        flex: 1
    },
    optionView: {
        height: '70%',
        width: '100%',
        flex: 6,
    },
    innerOption: {
        width: '75%',
        left: '12.5%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#ffab40',
    },
    buttonText: {
        fontSize: 22,
        padding: '10%',
        color: 'white'
    }
});