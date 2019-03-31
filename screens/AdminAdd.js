import React, {Component} from 'react';
import {Image, Linking, StyleSheet, Text, TextInput, TouchableHighlight, TouchableOpacity, View, ScrollView, Alert} from "react-native";

export default class AdminAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {name: '', address: '', email: '', owner: '', controlNumber: ''}
    }
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
                <ScrollView style={styles.optionView}>
                    <TextInput
                        style={styles.text}
                        placeholder={"Name of Business"}
                        onChangeText={(new_name) => this.setState({name: new_name})}
                    />
                    <TextInput
                        style={styles.text}
                        placeholder={"Address of Business"}
                        onChangeText={(new_address) => this.setState({address:new_address})}
                    />
                    <TextInput
                        style={styles.text}
                        placeholder={"Email of Business"}
                        onChangeText={(new_email) => this.setState({email: new_email})}
                    />
                    <TextInput
                        style={styles.text}
                        placeholder={"Name of Owner of Business"}
                        onChangeText={(new_owner) => this.setState({owner:new_owner})}
                    />
                    <TextInput
                        style={styles.text}
                        placeholder={"Control Number of Business"}
                        onChangeText={(new_controlNumber) => this.setState({controlNumber: new_controlNumber})}
                    />
                    <TouchableOpacity onPress={() => Linking.openURL(sosurl)}>
                        <Text style={styles.text}>Secretary of State Authenticate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL(sosurl)}>
                        <Text style={styles.text}>Register Business</Text>
                    </TouchableOpacity>

                </ScrollView>
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
        height: '70%',
        width: '100%',
        top: '10%',
    },
    text: {
        fontSize: 18,
        color: '#ffab40',
        padding: '10%'
    },
});

