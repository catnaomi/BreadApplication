import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, ScrollView, View, TouchableOpacity, KeyboardAvoidingView} from "react-native";
import {
    addReviewToDatabase,
    getBusinessData,
    addReviewToBusiness,
    updateBusinessRating,
    getUserData,
    addReviewToUser,
} from '../db/firebase';
import cache from '../userCache';

export default class ReviewScreen extends Component {
    static navigationOptions = {
        title: 'Leave a Review',
    };

    constructor(props) {
        super(props);
        this.state = {
            id: '0',
            name: 'error name',
            biz_name: 'error biz',
            business_id: '0',
            user_reviews: [],
            review: '',
            rating: 3,
        }
        if (this.props.navigation.state.params) {
            this.state.business_id = this.props.navigation.state.params.business_id;
        }
        console.log(cache.user_id);
    }

    componentDidMount() {
        this.RefreshInfo();
        this.forceUpdate();
    }

    RefreshInfo() {
        var self = this;
        getUserData(cache.user_id).then(u_object => {
            if (u_object !== undefined) {
                self.setState({
                    name: u_object.name,
                    user_reviews: u_object.reviews ? u_object.reviews : [],
                })
            }
        })
        getBusinessData(this.state.business_id).then(b_object => {
            if (b_object !== undefined) {
                self.setState({
                    biz_name: b_object.name,
                })
            }
        })
    }

    checkPermissions() {
        return true;
    }

    GetRatingButton(rate) {

        var starFilled = require('../assets/images/icons/star-filled.png');
        var starHalf = require('../assets/images/icons/star-halffilled.png');
        var starEmpty = require('../assets/images/icons/star-unfilled.png');
        return (

            <TouchableHighlight
                style = {styles.ratingButtons}
                onPress = {() => {
                    this.state.rating = rate;
                    this.forceUpdate();
                }}>
                <Image
                    style = {styles.ratingButtons}
                    source = {(this.state.rating >= rate) ? starFilled : starEmpty}
                />
            </TouchableHighlight>
        )
    }

    render() {
        var pfp = require('../assets/images/profile/profilesmall.png');
        var edit = require('../assets/images/icons/edit.png');
        var save = require('../assets/images/icons/save.png');

        var NameField = (this.state.edit ?
            <TextInput
                style = {{fontSize: 24}}
                placeholder = {this.state.name}
                ref = 'name'
                onChangeText={(text) => this.setState({name: text})}
                value = {this.state.name}
            /> :
            <Text style = {{fontSize: 24}}>{this.state.name}</Text>);

        var EditButton = (this.checkPermissions() ?
            <TouchableHighlight
                onPress={() => {
                    if (this.checkPermissions()) {
                        this.state.edit = !this.state.edit;
                        this.forceUpdate();
                    }
                }}>
                <Image
                    style={styles.editIconImage}
                    source={this.state.edit ? save : edit}
                />
            </TouchableHighlight> :
            <View/>);

        return (
            <View style={styles.screenView}>
                {/*Profile header*/}
                <View style = {{paddingTop: 10, flexDirection: 'row', backgroundColor: 'lightgrey'}}>
                    <View
                        style = {{left: 10, borderWidth: 1, width: 64, height: 64, borderRadius: 64, overflow: 'hidden'}}>
                        <Image
                            style = {{width: 64, height: 64}}
                            source = {pfp}/>
                    </View>
                    <View style = {{left: 20, width: '100%', height: 64}}>
                        <View style = {[styles.ReviewProfile]}>
                            <View
                                style = {{width: '100%', height: 40, justifyContent: 'center'}}>
                                <View style = {{flexDirection: 'row'}}>
                                    <Text style = {{fontSize: 16, color: 'black'}}>{this.state.name}</Text>
                                    <Text style = {{fontSize: 16, color: 'darkgrey'}}> on </Text>
                                    <Text style = {{fontSize: 16, color: 'black'}}>{this.state.biz_name}</Text>
                                </View>
                            </View>
                        </View>
                        {/*Rating Select*/}
                        <View style = {{width: 120, height: 24, flexDirection: 'row'}}>
                            {this.GetRatingButton(1)}
                            {this.GetRatingButton(2)}
                            {this.GetRatingButton(3)}
                            {this.GetRatingButton(4)}
                            {this.GetRatingButton(5)}
                        </View>
                    </View>
                </View>
                {/*Review Body*/}
                <KeyboardAvoidingView behavior = 'padding' style={{flex:5, width:'90%', left: '5%'}}>
                    <ScrollView>
                        <TextInput
                            multiline = {true}
                            style={{color:'black', fontSize: 20}}
                            placeholder='wow cool wow cool wow cool wow cool wow cool wow cool wow cool wow cool wow cool wow cool wow cool wow cool wow cool wow cool wow cool wow cool wow cool'
                            onChangeText={(text) => this.setState({review: text})}
                        />
                    </ScrollView>
                </KeyboardAvoidingView>
                {/*Save & Publish*/}
                <View style={{flex:1, backgroundColor: 'lightgrey'}}>
                    <TouchableOpacity style={styles.saveButton}
                    onPress={() => {
                        let review_id = this.state.review.substr(0, 3);

                        //insert in db
                        addReviewToDatabase(review_id, this.state.review, 'default@default-com', '5', '151515', this.state.rating);
                        console.log(this.props.navigation.state.params.review_ids);
                        if(this.props.navigation.state.params.review_ids !== undefined &&
                            this.props.navigation.state.params.business_id !== undefined) {
                            let ids = this.props.navigation.state.params.review_ids;
                            ids.push(review_id);
                            console.log(review_id);
                            this.state.user_reviews.push(review_id);
                            addReviewToBusiness(this.props.navigation.state.params.business_id, ids);
                            addReviewToUser(cache.user_id, this.state.user_reviews);
                            updateBusinessRating(this.props.navigation.state.params.business_id);
                        }
                        this.props.navigation.goBack();
                    }}>
                        <Text style={{color: 'white', fontSize: 25, fontWeight: 'bold'}}>
                            Save and Publish
                        </Text>
                    </TouchableOpacity>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    screenView: {
        width: '100%',
        height: '100%',
    },
    profileHeader: {
        flex: 2,
        backgroundColor: 'lightgrey',
    },
    profileTabs: {
        flex: 1,
        flexDirection: 'row',
    },
    profileContent: {
        flex: 6,
    },
    profilePicture: {
        resizeMode: 'contain',
        left: 10,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'grey',
        overflow: 'hidden',
    },
    reviewEntry: {
        flex: 2,
    },
    saveButton: {
        width:'70%',
        left: '30%',
        // borderWidth: 1,
        // borderColor:'black',
        backgroundColor: 'lightgrey',
        top: '25%',
        alignItems: 'center',
    },
    ratingButtons: {
        flex: 1,
        width: 25,
        height: 25,
    },
    ReviewRating: {
        height: 24,
        width: '100%',
        flexDirection: 'row',
    },
    ReviewProfile: {
        fontSize: 18,
        height: 40,
        width: '100%',
        flexDirection: 'row',
    },
});