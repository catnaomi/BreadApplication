import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

export default class BusinessPreview extends Component {
    render () {
        return (
            <View style = {styles.BizPreview}>
                <Text>Biz Name: {this.props.name}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    BizPreview: {
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
});