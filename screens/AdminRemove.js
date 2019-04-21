import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView, Alert} from "react-native";
import {getBusinessData, removeBusiness} from '../db/firebase';
import {breadColors} from "../Colors";

export default class AdminAdd extends Component {
    static navigationOptions = {
        title: 'Administrative Portal',
        headerStyle: {
            backgroundColor: breadColors.breadOrange,
        },
        headerTitleStyle: {
            color: 'white'
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address_line1: '',
            address_line2: '',
            email: '',
            owner: '',
            controlNumber: '',
            id: '',
        }
    }


    render() {
        var logo = require('../assets/images/logos/texthoriz.png');
        var self = this;

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
                            <Text style={styles.title}>Business ID:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"ID of Business"}
                                onChangeText={(new_id) => this.setState({id: new_id})}
                            />
                        </View>

                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    if (self.state.name == '') {
                                        Alert.alert('Business name field is not complete');
                                    } else if (self.state.address_line1 == '') {
                                        Alert.alert('Address field is not complete');
                                    } else if (self.state.email == '') {
                                        Alert.alert('Email field is not complete');
                                    } else if (self.state.owner == '') {
                                        Alert.alert('Owner field is not complete');
                                    }  else if (self.state.id == '') {
                                        Alert.alert('ID field is not complete');
                                    } else {
                                        getBusinessData(self.state.id).then(response => {
                                            if (response !== undefined) {
                                                removeBusiness(self.state.id);
                                                Alert.alert(self.state.name + " has now been removed");
                                                this.props.navigation.goBack();
                                            } else {
                                                Alert.alert('Business was not found in the database')
                                            }
                                        })
                                    }
                                }
                                } style={{alignItems: 'center'}}>
                                <Text style={styles.text}>Remove Business</Text>
                            </TouchableOpacity>
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
        marginBottom: 10,
    },
    entryText: {
        fontSize: 18,
        color: 'black',
        padding: '2%'
    }
});


