import React, {Component} from 'react';
import {Image, Linking, StyleSheet, Text, TextInput, TouchableHighlight,
 TouchableOpacity, View, ScrollView, Alert} from "react-native";

export default class AdminAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            permissions: this.checkPermissions(),
            name: '',
            address: '',
            email: '',
            owner: '',
            controlNumber: '',
            add: false
        }
    }

    checkPermissions() {
        return true;
    }

    render() {
        var logo = require('../assets/images/logos/texthoriz.png');
        var addButton = (this.checkPermissions() ?
            <TouchableOpacity
                onPress={() => Linking.openURL(sosurl)}>
                <Text style={styles.text}>Register Business</Text>
            </TouchableOpacity>
            : <View/>);

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
                        <View style={styles.entry}>
                            <Text style={styles.entryText}>Name of Business</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Name"}
                                onChangeText={(new_name) => this.setState({name:new_name})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.entryText}>Business Address</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Address of Business"}
                                onChangeText={(new_address) => this.setState({address:new_address})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.entryText}>Business Email</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Email of Business"}
                                onChangeText={(new_email) => this.setState({email: new_email})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.entryText}>Business Owner</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Name of Owner of Business"}
                                onChangeText={(new_owner) => this.setState({owner:new_owner})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.entryText}>Business Control Number</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Control Number of Business"}
                                onChangeText={(new_controlNumber) => this.setState({controlNumber: new_controlNumber})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <TouchableOpacity onPress={() => Linking.openURL(sosurl)}>
                                <Text style={styles.entryText}>Secretary of State Authenticate</Text>
                            </TouchableOpacity>
                        </View>

                        <View>
                            {addButton}
                        </View>

                    </View>
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
    text: {
        fontSize: 18,
    },
    title: {
        marginTop: '5%',
        alignItems: 'center',
        backgroundColor: '#ffab40',
        fontSize: 12,
        padding: '5%',
        color: 'white'
    },
    entry: {
        marginTop: '5%',
        borderWidth: 1,
        borderColor: 'black',
        fontSize: 12,
        padding: '5%',
        color: 'white'
    },
    entryText: {
        fontSize: 12,
        padding: '5%',
        color: 'white'
    }
});

