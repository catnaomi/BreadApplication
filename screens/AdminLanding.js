import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import AdminAuthenticate from './AdminAuthenticate';
import AdminAdd from './AdminAdd';
import AdminReview from './AdminReview';

export default class AdminLanding extends Component {

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
                        <TouchableHighlight onPress={AdminAuthenticate}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Authenticate Businesses</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={AdminAdd}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Add Businesses</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={AdminReview}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Review Flagged Reviews</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );

    };
}


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
        marginTop: '15%',
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