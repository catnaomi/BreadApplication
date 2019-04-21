import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView,
    Alert} from "react-native";
import {getAdminData, registerAdmin} from '../db/firebase';

export default class AdminAddAdmin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email:'',
            password:'',
            password_check:'',

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
                            <Text style={styles.title}>Name:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Name"}
                                onChangeText={(new_name) => self.setState({name:new_name})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.title}>Email Address:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Email"}
                                onChangeText={(new_email) => self.setState({email:new_email})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.title}>Password:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Password"}
                                onChangeText={(new_password) => self.setState({password: new_password})}
                            />
                        </View>

                        <View style={styles.entry}>
                            <Text style={styles.title}>Repeat Password:</Text>
                            <TextInput
                                style={styles.entryText}
                                placeholder={"Password"}
                                onChangeText={(new_password) => self.setState({password_check:new_password})}
                            />
                        </View>


                        <View>
                            <TouchableOpacity
                                onPress={() => {
                                    if (self.state.name == '' || self.state.email == '' || self.state.password == '' || self.state.password_check == '') {
                                        Alert.alert('One or more fields is missing input!');
                                    } else if (!validate(self.state.email)) {
                                        Alert.alert("E-mail address is invalid!");
                                    } else if (self.state.password.length < 7) {
                                        Alert.alert("Password is not long enough!");
                                    } else if (self.state.password != self.state.password_check) {
                                        Alert.alert("Passwords do not match!");
                                    } else {
                                        getAdminData(self.state.email).then(response => {
                                            if (response != undefined) {
                                                Alert.alert( self.state.name + " is already in the database!");
                                            } else {
                                                registerAdmin(self.state.name, self.state.email, self.state.password, [], []);
                                                Alert.alert(self.state.name + " is now in the database");
                                                this.props.navigation.goBack();
                                            }
                                        })
                                    }
                                }} style={{alignItems: 'center'}}>
                                <Text style={styles.text}>Register Admin</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </View>

        )};

}

const styles = StyleSheet.create({
    screenView: {
        width: '100%',
        height: '100%',
        flex: 1,
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

const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;

    return expression.test(String(email).toLowerCase())
};