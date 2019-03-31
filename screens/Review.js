import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

export default class Review extends Component {
    render () {
        return (
            <View style = {styles.Review}>
                <Text>Author: {this.props.name}</Text>
                <Text>Business: {this.props.business}</Text>
                <Text>Rating: {this.props.rating}</Text>
                <Text>Content: {this.props.content}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    Review: {
        height: 150,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
});