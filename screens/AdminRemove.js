import React, {Component} from 'react';
import {Image, Linking, StyleSheet, Text, TextInput, TouchableHighlight,
    TouchableOpacity, View, ScrollView, Alert} from "react-native";
import {getBusinessData, removeBusiness} from '../db/firebase';

export default class AdminAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            permissions: this.checkPermissions(),
            name: '',
            address_line1: '',
            address_line2: '',
            email: '',
            owner: '',
            controlNumber: '',
            id: '',
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
                    } else if (self.state.address_line1 == '') {
                        Alert.alert('Address field is not complete');
                    } else if (self.state.email == '') {
                        Alert.alert('Email field is not complete');
                    } else if (self.state.owner = '') {
                        Alert.alert('Owner field is not complete');
                    } else if (self.state.controlNumber = '') {
                        Alert.alert('Control number field is not complete');
                    } else if (self.state.id == '') {
                        Alert.alert('ID field is not complete');
                    } else {
                        getBusinessData(self.state.id).then(response => {
                            if (response != undefined) {
                                //response.removed == true;
                                removeBusiness(self.state.id);
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
                                placeholder={"Line 1"}
                                onChangeText={(new_address1) => self.setState({address_line1:new_address1})}
                            />
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Line 2"}
                                onChangeText={(new_address2) => self.setState({address_line2:new_address2})}
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
        flex: 1,
    },
    entryText: {
        fontSize: 18,
        color: 'black',
        padding: '2%'
    }
});


