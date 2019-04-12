import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image} from "react-native";
import {getReviewData} from "../db/firebase";
import {getUserData} from "../db/firebase";
import {getBusinessData} from "../db/firebase";
import RatingDisplay from "./RatingDisplay";

export default class Review extends Component {
    static navigationOptions = {
        title: 'Leave a Review',
    };

    constructor (props) {
        super(props);
        this.state = {
            id: this.props.id,
            content: 'No review content provided',
            user_id: '',
            author: 'Default User',
            business_id: '',
            business: 'Default Business',
            date: 0,
        };
    }

    componentDidMount() {
        let self = this;
        getReviewData(this.state.id).then(r_object => {
            if (r_object != undefined) {
                self.setState({
                    content: r_object.review_content,
                    user_id: r_object.user_id,
                    business_id: r_object.business_id,
                    rating: r_object.rating,
                });
                getUserData('default@default-com').then(u_object => {
                    if (u_object != undefined) {
                        self.setState({
                            author: u_object.name,
                        })
                    }
                });
                getBusinessData(self.state.business_id).then(b_object => {
                    if (b_object != undefined) {
                        self.setState({
                            business: b_object.name,
                        })
                    }
                });
            }
        })
    }

    render () {
        var pfp = require('../assets/images/profile/profilesmall.png');
        var arrow = require('../assets/images/icons/arrow.png');
        return (
            <View style = {styles.Review}>
                <View style = {{flex: 1}}/>
                <View style = {{flex: 9}}>
                    <View style = {{flexDirection: 'row'}}>
                        <TouchableHighlight
                            style = {{left: 10, borderWidth: 1, width: 64, height: 64, borderRadius: 64, overflow: 'hidden'}}
                            onPress = {() => {}}>
                            <Image
                                style = {{width: 64, height: 64}}
                                source = {pfp}/>
                        </TouchableHighlight>
                        <View style = {{left: 20, width: '100%', height: 64}}>
                            <View style = {[styles.ReviewProfile]}>
                                <TouchableHighlight
                                    style = {{width: '100%', height: 40, justifyContent: 'center'}}
                                    onPress = {() => {}}>
                                    <View style = {{flexDirection: 'row'}}>
                                        <Text style = {{fontSize: 16, color: 'black'}}>{this.state.author}</Text>
                                        <Text style = {{fontSize: 16, color: 'darkgrey'}}> on </Text>
                                        <Text style = {{fontSize: 16, color: 'black'}}>{this.state.business}</Text>
                                    </View>
                                </TouchableHighlight>
                            </View>
                            <View style = {[styles.ReviewRating]}>
                                <RatingDisplay rating={this.state.rating}/>
                            </View>
                        </View>
                    </View>
                    <View style = {styles.ReviewContent}>
                        <Text style={{fontSize: 14}}>{this.state.content}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    Review: {
        height: 150,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    ReviewHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    ReviewProfile: {
        fontSize: 18,
        height: 40,
        width: '100%',
        flexDirection: 'row',
    },
    ReviewContent: {
        width: '100%',
        height: 86,
        fontSize: 12,
        padding: 10,
    },
    ReviewRating: {
        height: 24,
        width: '100%',
        flexDirection: 'row',
    }
});