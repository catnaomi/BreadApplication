import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from "react-native";
import {getBusinessData} from '../db/firebase';

export default class BusinessPreview extends Component {
    componentDidMount() {
        var self = this;
        getBusinessData(this.props.id).then(b_object => {
            self.setState({
                name: b_object.name
            })
        })
    }


    render () {
        const {navigate} = this.props.navigation.state.params.navi;

        return (
            <TouchableHighlight
                style = {styles.BizPreview}
                onPress ={() => {
                    if (navigate != undefined) {
                        navigate('BusinessStack', {id: this.props.id});
                    }
                }}>
                <Text>Business Name: {this.props.name}</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create ({
    BizPreview: {
        height: 100,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'grey',
    },
});