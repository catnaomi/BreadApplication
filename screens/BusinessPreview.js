import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from "react-native";
import {getBusinessData} from '../db/firebase';
import { withNavigation } from 'react-navigation';
import RatingDisplay from './RatingDisplay';

class BusinessPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '0',
            name: 'Default Business',
        }
    }
    componentDidMount() {
        var self = this;
        getBusinessData(this.props.id).then(b_object => {
            self.setState({
                name: b_object.name
            })
        })
    }


    render () {

        return (
            <TouchableHighlight
                style = {styles.BizPreview}
                onPress ={() => {
                    this.props.navigation.navigate('BusinessScreen', {id: this.props.id});
                }}>
                <View style = {{flex: 1}}>
                    <Text>Business Name: {this.state.name}</Text>
                    <RatingDisplay rating = {1.5}/>
                </View>
            </TouchableHighlight>
        )
    }
}

export default withNavigation(BusinessPreview);

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