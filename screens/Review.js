import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

export default class Review extends Component {
    constructor (props) {
        super(props);
        this.state = {
            id: this.props.id,
            content: '',
            user_id: '',
            business_id: '',
            date: 0,
        };
    }
    render () {
        return (
            <View style = {styles.Review}>
                <View></View>
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
    ReviewHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    ReviewProfile: {

    }
});