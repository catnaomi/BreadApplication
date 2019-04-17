import React, {Component} from 'react';
import {Image, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView,
    Alert, Picker} from "react-native";
import {registerBusiness, getBusinessData} from '../db/firebase'

export default class AdminAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            permissions: this.checkPermissions(),
            name: '',
            address_line1: '',
            address_line2: '',
            description: '',
            city: '',
            state: '',
            zip: '',
            email: '',
            owner: '',
            controlNumber: '',
            id: '',
            sector: '',

        }
    }

    checkPermissions() {
        return true;
    }

    render() {
        var logo = require('../assets/images/logos/texthoriz.png');
        var self = this;
        var addButton = (self.checkPermissions() ?
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
                        Alert.alert(' ID field is not complete');
                    } else {
                        getBusinessData(self.state.id).then(response => {
                            if (response != undefined) {
                                Alert.alert( self.state.name + " is already in the database!");
                            } else {
                                registerBusiness(self.state.id, self.state.name,'', self.state.owner,
                                    '', self.state.description, '', self.state.email, '',
                                    self.state.controlNumber, self.state.address_line1, self.state.address_line2);
                                Alert.alert(self.state.name + " is now in the database");
                            }
                        })
                    }
                }} style={{alignItems: 'center'}}>
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
                    <ScrollView style={styles.innerOption}>
                        <View style={styles.entry}>
                            <Text style={styles.title}>Business Id: </Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Business Id"}
                                onChangeText={(new_id) => self.setState({id:new_id})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.title}>Name of Business:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Name"}
                                onChangeText={(new_name) => self.setState({name:new_name})}
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
                                onChangeText={(new_email) => self.setState({email: new_email})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.title}>Business Owner:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Name of Owner of Business"}
                                onChangeText={(new_owner) => self.setState({owner:new_owner})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.title}>Business Control Number:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Control Number of Business"}
                                onChangeText={(new_controlNumber) => self.setState({controlNumber: new_controlNumber})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.title}>Description of Business:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Description"}
                                onChangeText={(new_description) => self.setState({description: new_description})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.title}>Type of Business</Text>
                            <Picker
                                style={{borderLeftWidth: 1, borderRightWidth: 1,  borderColor: '#D3D3D3', marginTop: 10}}
                                selectedValue={self.state.sector}
                                onValueChange={(itemValue) =>
                                self.setState({sector: itemValue})
                                }>

                                <Picker.Item label={"Dining"} value={"dining"}/>
                                <Picker.Item label={"Legal"} value={"legal"}/>
                                <Picker.Item label={"Clothing"} value={"clothing"}/>
                                <Picker.Item label={"Auto"} value={"auto"}/>
                                <Picker.Item label={"Beauty"} value={"beauty"}/>
                                <Picker.Item label={"Health"} value={"health"}/>
                                <Picker.Item label={"Cleaning"} value={"cleaning"}/>
                                <Picker.Item label={"Financial"} value={"financial"}/>
                            </Picker>
                        </View>
                        <View style={styles.entry}>
                            <TouchableOpacity
                                onPress={() => Linking.openURL(sosurl)}
                                style={[styles.title, {alignItems: 'center'}]}>

                                <Text style={{fontSize: 16, color:'blue', fontWeight: 'bold'}}>Authenticate on Secretary of State Website</Text>
                            </TouchableOpacity>
                            <View style={styles.entry}>
                                <Text style={{color: 'grey', textAlign: 'center', fontStyle:'italic'}}>The Secretary of State's website requires the control number for the business.</Text>
                            </View>
                        </View>

                        <View>
                            {addButton}
                        </View>

                    </ScrollView>
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