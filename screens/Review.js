import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Image} from "react-native";
import {getReviewData, getUserData, getBusinessData} from "../db/firebase";
import RatingDisplay from "./RatingDisplay";
import {withNavigation} from "react-navigation";
import FlaggedButton from "./FlaggedButton";

class Review extends Component {
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
        getReviewData(self.state.id).then(r_object => {
            if (r_object !== undefined) {
                self.setState({
                    content: r_object.review_content,
                    user_id: r_object.user_id,
                    business_id: r_object.business_id,
                    rating: r_object.rating,
                });
                if(self.state.user_id !== undefined) {
                    getUserData(self.state.user_id).then(u_object => {
                        if (u_object !== undefined) {
                            self.setState({
                                author: u_object.name,
                            })
                        }
                    });
                }
                if(self.state.business_id !== undefined) {
                    getBusinessData(self.state.business_id).then(b_object => {
                        if (b_object !== undefined) {
                            self.setState({
                                business: b_object.name,
                            })
                        }
                    });
                }
            }
        })
    }

    render () {
        var pfp = require('../assets/images/profile/user_profile_pic.png');
        var arrow = require('../assets/images/icons/arrow.png');
        return (
            <View style = {styles.Review}>
                <View style = {{flex: 1}}/>
                <View style = {{flex: 9}}>
                    <View style = {{flexDirection: 'row'}}>
                        <TouchableHighlight
                            style = {{left: 10, borderWidth: 1, width: 64, height: 64, borderRadius: 64, overflow: 'hidden'}}
                            onPress = {() => {this.props.navigation.navigate('UserScreen', {id: this.state.user_id});}}>
                            <Image
                                style = {{width: 64, height: 64}}
                                source = {pfp}/>
                        </TouchableHighlight>
                        <View style = {{left: 20, width: '90%', height: 64}}>
                            <View style = {[styles.ReviewProfile]}>
                                <View
                                    style = {{width: '90%', height: 40, justifyContent: 'center'}}
                                    onPress = {() => {this.props.navigation.navigate('BusinessScreen', {id: this.state.business_id});}}>
                                    <View style = {{flexDirection: 'row'}}>
                                        <Text style = {{fontSize: 16, color: 'black'}}>{this.state.author}</Text>
                                        <Text style = {{fontSize: 16, color: 'darkgrey'}}> on </Text>
                                        <Text style = {{fontSize: 16, color: 'black'}}>{this.state.business}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style = {[styles.ReviewRating]}>
                                <RatingDisplay rating={this.state.rating}/>
                                <FlaggedButton id={this.props.id} type={"review"} user={this.props.user} key={this.props.id}/>
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
export default withNavigation(Review);

const styles = StyleSheet.create ({
    Review: {
        height: 150,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        flex: 1,
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