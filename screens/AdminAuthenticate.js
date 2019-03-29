import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, View, Linking, TouchableOpacity} from "react-native";

export default class AdminAuthenticate extends Component {
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
                    <TouchableOpacity onPress={() => Linking.openURL(sosurl)} style={styles.border}>
                        <Text style={styles.text}>Secretary of State Authenticate</Text>
                    </TouchableOpacity>
                    <Text style={styles.text}>Testing</Text>

                </View>
            </View>

        )};

}

const sosurl = "https://ecorp.sos.ga.gov/BusinessSearch";

const styles = StyleSheet.create({
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
        height: '60%',
        width: '100%',
        top: '10%',

        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: '#ffab40',
        padding: '15%'
    },
    border: {
        borderWidth: 2,
        borderColor: 'black',
    }
});

