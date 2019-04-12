import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, ScrollView, View, TouchableOpacity, Alert} from "react-native";

import {BusinessStack, BusinessScreen} from './BusinessScreen'
import BusinessPreview from './BusinessPreview';
import Review from './Review';
import {createStackNavigator} from "react-navigation";
import cache from '../userCache'

import {ImagePicker} from 'expo';
import {uploadImage} from '../db/firebase.js';

export default class UserScreen extends Component {
    static navigationOptions = {
        title: 'Profile',
    };
    constructor (props) {
        super (props);
        this.state = {
            name: 'Default Name',
            user_id: 'default',
            reviews: [
                {
                    date: 1554057121,
                    review_id: 0,
                    review_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
                        '                            Nunc ornare nunc quis risus vulputate bibendum. Quisque ultrices tincidunt lacus. ' +
                        '                            Vivamus vitae finibus lectus. Vestibulum vitae leo magna. Sed at libero venenatis, ' +
                        '                            consequat purus ac, mattis arcu. Duis interdum ex a',
                    user_id: 0,
                    business_id: 0,
                }
            ],
            edit: false,
            tab: 0,
        }
    }
    checkPermissions() {
        return true;
    }

    onChooseImagePress = async () => {
        //console.log("onChoose");
        const { Permissions } = Expo;
        const {status} = await Permissions.getAsync(Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            Permissions.askAsync(Permissions.CAMERA_ROLL);
        } else {
            let result = await Expo.ImagePicker.launchImageLibraryAsync();
            if (!result.cancelled) {
                 await uploadImage(result.uri, "test-image")
                    .then(() => {
                        Alert.alert("Image succesfully uploaded");
                    })
                    .catch((error) => {
                        Alert.alert("Error uploading image.");
                    });
            }
        }
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

        var EditButton = (checkPermissions(this.state.user_id) ?
            <TouchableHighlight
                onPress={() => {
                    if (checkPermissions(this.state.user_id)) {
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

        var ReviewSelectStyle;
        var FavoriteSelectStyle;
        var BusinessSelectStyle;

        if (this.state.tab == 0) { //reviews
            ReviewSelectStyle = styles.tabSelected;
            FavoriteSelectStyle = styles.tabDeselected;
            BusinessSelectStyle = styles.tabDeselected;
        } else if (this.state.tab == 1) { //favorites
            ReviewSelectStyle = styles.tabDeselected;
            FavoriteSelectStyle = styles.tabSelected;
            BusinessSelectStyle = styles.tabDeselected;
        } else { //businesses
            ReviewSelectStyle = styles.tabDeselected;
            FavoriteSelectStyle = styles.tabDeselected;
            BusinessSelectStyle = styles.tabSelected;
        }

        function TabContent (props) {
            if (props.tab == 0) { //review
                return (
                    <ScrollView>
                        {/*
                        <Review
                            business="Dallie's Diner"
                            content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nunc ornare nunc quis risus vulputate bibendum. Quisque ultrices tincidunt lacus.
                            Vivamus vitae finibus lectus. Vestibulum vitae leo magna. Sed at libero venenatis,
                            consequat purus ac, mattis arcu. Duis interdum ex a."
                        />
                        <Review
                            business ="McDonald's"
                            contents = "sucks. don't go here."
                        />
                        <Review
                            business="Barry's Farm"
                            content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed consequat blandit mi eu feugiat. Nunc dictum auctor massa ac volutpat.
                            Morbi eget orci tellus. Fusce lacinia, eros eu feugiat pellentesque,
                            nisi leo posuere lacus, ut bibendum est nisi eget est."
                        />
                        <Review
                            business = "Cindy's Store"
                            contents = "Quisque ut purus leo.
                            Orci varius natoque penatibus et magnis."
                        />*/}
                    </ScrollView>
                );
            } else if (props.tab == 1) { // favorites
                return (
                    <ScrollView>
                        <BusinessPreview id={'5'}/>

                    </ScrollView>
                );
            } else { //businesses
                return (
                    <ScrollView>
                        <BusinessPreview id='5'/>
                        <BusinessPreview id='1'/>
                        <BusinessPreview id='2'/>
                        <BusinessPreview id='4'/>
                    </ScrollView>
                );
            }
        }



        return (
            <View style = {{width: '100%', height: '100%'}}>
                {/*Profile header*/}
                <View style = {styles.profileHeader}>
                    <View style = {{flex: 1}}/>
                    <View style = {{flex: 3, flexDirection: 'row'}}>
                        <View style = {{flex: 1, alignContent: 'center', justifyContent: 'center'}}>
                            <View style = {styles.profilePicture}>
                                <TouchableHighlight
                                    onPress={() => this.onChooseImagePress()}>
                                <Image
                                    source = {profile}
                                />
                                </TouchableHighlight>
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
                    <View style = {{flex: 1, flexDirection: 'row'}}>
                        <View
                            style = {styles.editIcon}>
                            {EditButton}
                        </View>
                        <View style = {{flex: 9}}/>
                    </View>
                </View>
                <View style = {styles.profileTabs}>
                    <TouchableHighlight
                        style = {[styles.tabSelectable, ReviewSelectStyle]}
                        onPress = {() => {
                            this.state.tab = 0;
                            this.forceUpdate();
                        }}>
                        <Text style = {{textAlign: 'center', fontSize: 18}}>
                            Reviews
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style = {[styles.tabSelectable, FavoriteSelectStyle]}
                        onPress = {() => {
                            this.state.tab = 1;
                            this.forceUpdate();
                        }}>
                        <Text style = {{textAlign: 'center', fontSize: 18}}>
                            Favorites
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style = {[styles.tabSelectable, BusinessSelectStyle]}
                        onPress = {() => {
                            this.state.tab = 2;
                            this.forceUpdate();
                        }}>
                        <Text style = {{textAlign: 'center', fontSize: 18}}>
                            Business
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style = {styles.profileContent}>
                    <TabContent tab = {this.state.tab}/>
                </View>
            </View>
        );
    }
}

function checkPermissions(user_id) {
    return cache.user_id === user_id
}

export const UserStack = createStackNavigator({
    UserScreen: {screen: UserScreen},
});

const styles = StyleSheet.create ({
    tabText: {
        fontSize: 25,
        alignItems: 'center',
    },
    profileHeader: {
        flex: 3,
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
    editIcon: {
        flex: 1,
        resizeMode: 'contain',
        overflow: 'hidden',
    },
    editIconImage: {
        resizeMode: 'contain',
        width: 32,
        height: 32,
    },
    tabSelectable: {
        flex : 1,
        borderLeftWidth: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    tabSelected: {
        backgroundColor: 'lightgrey',
    },
    tabDeselected: {
        backgroundColor: 'white',
    },
});