import React, {Component} from 'react';
import {Image, StyleSheet, Text, View, TouchableHighlight} from "react-native";
import {getBusinessData} from '../db/firebase';
import { withNavigation } from 'react-navigation';
import RatingDisplay from './RatingDisplay';
import FlaggedButton from "./FlaggedButton";
import FavoritesButton from './FavoritesButton';

class BusinessPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '0',
            name: 'Default Business',
            rating: 0,
            address_line1: '',
            address_line2: '',
        }
    }
    componentDidMount() {
        var self = this;
        getBusinessData(this.props.id).then(b_object => {
            self.setState({
                name: b_object.name,
                rating: b_object.rating,
                address_line1: b_object.address_line1,
                address_line2: b_object.address_line2,
            })
        })
    }


    render () {
        var profile = require('../assets/images/profile/businessPlaceholdersmall.png');
        return (
            <TouchableHighlight
                style = {styles.BizPreview}
                onPress ={() => {
                    this.props.navigation.navigate('BusinessScreen', {id: this.props.id});
                }}>
                <View style = {{flex: 1, flexDirection: 'row'}}>
                    <View style = {{left: 10, height: '100%', width: 120}}>
                        <View style = {{top: 10, height: 24, width: 120}}>
                            <RatingDisplay rating = {this.state.rating}/>
                        </View>
                        <View style = {[{top: 20}, styles.BizIcon]}>
                            <Image
                                source = {profile}/>
                        </View>
                    </View>
                    <View style = {{top: 10, left: 20, height: 154, width: '60%'}}>
                        <View style = {{flex: 1}}>
                        </View>
                        <View style = {{flex: 1}}>
                            <Text style = {{fontSize: 24}}>{this.state.name}</Text>
                        </View>
                        <View style = {{flex: 1}}>
                            <Text style = {{fontSize: 18}}>{this.state.address_line1}</Text>
                        </View>
                        <View style = {{flex: 1}}>
                            <Text style = {{fontSize: 18}}>{this.state.address_line2}</Text>
                        </View>
                    </View>
                    <View style = {{left: -50, top: 10, height: 154}}>
                        <FavoritesButton id = {this.props.id}/>
                    </View>
                    <View style = {{left: -25, top: 10, height: 154}}>
                        <FlaggedButton id={this.props.id} type={"business"} user={this.props.user} />
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
}

export default withNavigation(BusinessPreview);

const styles = StyleSheet.create ({
    BizPreview: {
        height: 175,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
    },
    BizIcon: {
        height: 120,
        width: 120,
        borderWidth: 1,
        borderColor: 'grey',
        overflow: 'hidden',
    },
});