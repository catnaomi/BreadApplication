import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, View, TouchableOpacity, Alert} from "react-native";
import {createStackNavigator } from "react-navigation";
import AdminAuthenticate from './AdminAuthenticate';
import AdminAdd from './AdminAdd';
import AdminReview from './AdminReview';
import AdminRemove from './AdminRemove';

/*
export default class AdminLanding extends Component {
    render() {
        return <AdminNavigator/>;
    }
}*/

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
                        <TouchableOpacity onPress={() => Alert.alert(
                            "Are you sure you want to log out?",
                            [
                                {text: 'yes', onPress:() => {this.props.navigation.navigate('Authenticate')}},
                                {text: 'no', onPress:() => {console.log('canceled')}}
                            ],
                        )}>
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

export const AdminNavigator = createStackNavigator({
    Landing: adminLandingScreen,
    Authenticate: AdminAuthenticate,
    Add: AdminAdd,
    Review: AdminReview,
    Remove: AdminRemove
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
    },
    imageView: {
        height: '15%',
        width: '100%',
        top: '5%',
    },
    breadLogo: {
        position: 'absolute',
        width: '75%',
        height: '100%',
        left: '12.5%',
    },
    optionView: {
        height: '70%',
        width: '100%',
        top: '10%',
    },
    innerOption: {
        width: '75%',
        left: '12.5%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'stretch'
    },
    button: {
        marginTop: '10%',
        height: '40%',
        alignItems: 'center',
        backgroundColor: '#ffab40',
    },
    buttonText: {
        fontSize: 22,
        padding: '10%',
        color: 'white'
    }
});