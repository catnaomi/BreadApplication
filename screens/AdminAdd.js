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
            add: false,
            id: ''
        }
    }

    checkPermissions() {
        return true;
    }

    render() {
        var logo = require('../assets/images/logos/texthoriz.png');
        var addButton = (this.checkPermissions() ?
            <TouchableOpacity
                onPress={() => Linking.openURL(sosurl)} style={{alignItems: 'center'}}>
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
                                onChangeText={(new_address) => this.setState({address:new_address})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.title}>Name of Business:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Name"}
                                onChangeText={(new_name) => this.setState({name:new_name})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.title}>Business Address:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Address of Business"}
                                onChangeText={(new_address) => this.setState({address:new_address})}
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
                                onChangeText={(new_owner) => this.setState({owner:new_owner})}
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

                        <View style={[styles.title, {alignItems: 'center'}]}>
                            <TouchableOpacity onPress={() => Linking.openURL(sosurl)}>
                                <Text style={{fontSize: 16, color:'blue', fontWeight: 'bold', padding: 5}}>Authenticate on Secretary of State Website</Text>
                            </TouchableOpacity>
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
    },
    entryText: {
        fontSize: 18,
        color: 'black',
        padding: '2%'
    }
});

