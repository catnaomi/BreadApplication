import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, View, Button} from "react-native";

export default class AdminLanding extends Component {

    render() {
        var logo = require('../assets/images/logos/texthoriz.png');
        return (
            <View>
                <View>
                    <Image
                        source={logo}
                        style={styles.breadLogo}

                    />
                </View>
                <View styles={styles.optionView}>
                    <View style={styles.authenticateButton}>
                        <Button
                            onPress={}
                            title={'Authenticate Businesses'}
                            color={}
                        />
                    </View>
                    <View style={styles.addButton}>
                        <Button
                            onPress={}
                            title={'Add Businesses'}
                            color={}
                        />
                    </View>
                    <View>
                        <Button
                            onPress={}
                            title={'Review Flagged Reviews'}
                            color={}
                        />
                    </View>
                </View>
            </View>
        );

    };
}


const styles = StyleSheet.create ({
    breadLogo: {
        position: 'absolute',
        top: '10%',
        left: '12.5%',
        width: '75%',
        height: '20%',
        borderColor: 'grey',
    },
    optionView: {
        top: '30%',
        width: '100%',
        height: '70%',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

    },
    authenticateButton: {
        width: '50%',
        height: 100,
    },
    addButton: {
        width: '50%',
        height: 100,
        top: '50%',
    },
    reviewButton: {
        width: '50%',
        height: 100,
        top: '75%',
    }
});