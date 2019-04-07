import React, {Component} from 'react';
import {Image, Linking, StyleSheet, Text, TextInput, TouchableHighlight,
    TouchableOpacity, View, ScrollView, Alert} from "react-native";
import {getBusinessData, doesUserExist} from '../db/firebase';

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
            remove: false
        }
    }

    checkPermissions() {
        return true;
    }

    render() {
        var logo = require('../assets/images/logos/texthoriz.png');
        var self = this;
        var removeButton = (this.checkPermissions() ?
            <TouchableOpacity
                onPress={() => {
                    if (self.state.name == '') {
                        Alert.alert('Business name field is not complete');
                    } else if (self.state.address == '') {
                        Alert.alert('Address field is not complete');
                    } else if (self.state.email == '') {
                        Alert.alert('Email field is not complete');
                    } else if (self.state.owner = '') {
                        Alert.alert('Owner field is not complete');
                    } else if (self.state.controlNumber = '') {
                        Alert.alert('Control number field is not complete');
                    } else if (self.state.id == '') {
                        Alert.alert('Alert field is not complete');
                    } else if (self.state.remove == false) {
                        Alert.alert('Business could not be removed')
                    } else {
                        doesBusinessExist(self.state.id).then(response => {
                            if (response) {
                                // TODO: Handle that businesses do exist
                                Alert.alert(self.state.name + " has now been removed");
                            } else {
                                Alert.alert('Business was not found in the database')
                            }
                        })
                    }
                }
                } style={{alignItems: 'center'}}>
                <Text style={styles.text}>Remove Business</Text>
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
                    <ScrollView style={styles.innerOption}>
                        <View style={styles.entry}>
                            <Text style={styles.title}>Name of Business:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Name"}
                                onChangeText={(new_name) => this.setState({name: new_name})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.title}>Business Address:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Address of Business"}
                                onChangeText={(new_address) => this.setState({address: new_address})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.title}>Business Email:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Email of Business"}
                                onChangeText={(new_email) => this.setState({email: new_email})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.title}>Business Owner:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Name of Owner of Business"}
                                onChangeText={(new_owner) => this.setState({owner: new_owner})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.title}>Business Control Number:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Control Number of Business"}
                                onChangeText={(new_controlNumber) => this.setState({controlNumber: new_controlNumber})}
                            />
                        </View>

                        <View>
                            {removeButton}
                        </View>

                    </ScrollView>
                </View>
            </View>

        )
    };
}

const styles = StyleSheet.create({
    screenView: {
        width: '100%',
        height: '100%',
    },
    imageView: {
        flex: 1,
        width: '100%',
    },
    breadLogo: {
        position: 'absolute',
        width: '75%',
        height: '100%',
        left: '12.5%',
    },
    optionView: {
        flex: 6,
        width: '100%',
    },
    innerOption: {
        width: '90%',
        left: '5%',
        flexGrow: 1,
        flexDirection: 'column',
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        padding: '5%',
        color: '#ffab40'
    },
    title: {

        backgroundColor: '#ffab40',
        fontSize: 18,
        color: 'white',
        padding: '2%',
    },
    entry: {
        height: '20%',
    },
    entryText: {
        fontSize: 18,
        color: 'black',
        padding: '2%'
    }
});

const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
}

