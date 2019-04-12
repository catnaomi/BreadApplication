import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, ScrollView, View, TouchableOpacity} from "react-native";
import {addReviewToDatabase, getBusinessData, addReviewToBusiness, updateBusinessRating} from '../db/firebase';

export default class ReviewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            permission: this.checkPermissions(),
            name: 'Austin Neely',
            reviews: [
                {
                    date: 15540571212,
                    review_id: 0,
                    review_content: '',
                    user_id: 0,
                    business_id: 0,
                }

            ],
            edit: false,
            tab: 0,
            review: '',
            rating: 3,
        }
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
        var profile = require('../assets/images/profile/profile.png');
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
                <View style = {styles.profileHeader}>
                    <View style = {{flex: 3, flexDirection: 'row'}}>
                        <View style = {{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                            <View style = {styles.profilePicture}>
                                <Image
                                    source = {profile}
                                />
                            </View>
                        </View>
                        <View style = {{flex: 2}}>
                            <View style = {{flex: 1, top: 10, left: 10}}>
                                {NameField}
                            </View>
                            <View style = {{flex: 1, top: 10, left: 10}}>
                                <Text style = {{fontSize: 18}}>1 Review</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style = {{flex: 1, flexDirection: 'row', backgroundColor: 'lightgrey'}}>
                    <View style = {{flex: 1}}/>
                    {/*Rating Select*/}
                    <View style = {{flex: 1}}>
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
                <View style={{flex:5, width:'90%', left: '5%'}}>
                    <ScrollView>
                        <TextInput
                            style={{color:'black', fontSize: 25}}
                            placeholder='Add your review Here!'
                            onChangeText={(text) => this.setState({review: text})}
                        />
                    </ScrollView>
                </View>
                {/*Save & Publish*/}
                <View style={{flex:1, backgroundColor: 'lightgrey'}}>
                    <TouchableOpacity style={styles.saveButton}
                    onPress={() => {
                        let review_id = this.state.review.substr(0, 3);

                        //insert in db
                        addReviewToDatabase(review_id, this.state.review, 'default@default-com', '5', '151515', this.state.rating);
                        console.log(this.props.navigation.state.params.review_ids);
                        if(this.props.navigation.state.params.review_ids != undefined &&
                            this.props.navigation.state.params.business_id != undefined) {
                            let ids = this.props.navigation.state.params.review_ids;
                            ids.push(review_id);
                            console.log(review_id);
                            addReviewToBusiness(this.props.navigation.state.params.business_id, ids);
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
    }
});