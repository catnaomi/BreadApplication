import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, ScrollView, View, TouchableOpacity, RefreshControl} from "react-native";

import {getBusinessData, getUserData, updateUserName} from '../db/firebase';
import {BusinessStack, BusinessScreen} from './BusinessScreen'
import BusinessPreview from './BusinessPreview';
import Review from './Review';
import {createStackNavigator} from "react-navigation";
import cache from '../userCache'

export default class UserScreen extends Component {
    static navigationOptions = {
        title: 'Profile',
    };
    constructor (props) {
        super (props);
        this.state = {
            name: 'Default Name',
            user_id: 'default@default-com',
            reviews: ['Cru'],
            favorites: [],
            businesses: ['5'],
            edit: false,
            tab: 0,
            refreshing: false,
        };


        if (this.props.navigation.state.params) {
            this.state.id = this.props.navigation.state.params.id;
        }
    }

    componentDidMount() {
        this.RefreshInfo();
    }

    RefreshInfo() {
        if(this.state.refreshing) {
            this.state.refreshing = true;
        }
        var self = this;
        getUserData(this.state.user_id).then(u_object => {
            if (u_object != undefined) {
                self.setState({
                    name: u_object.name,
                    reviews: u_object.reviews,
                    favorites: u_object.favorites,
                    businesses: u_object.businesses,
                });
                self.state.refreshing = false;
            }
        })
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
                        updateUserName(this.state.user_id, this.state.name);
                        this.state.edit = !this.state.edit;
                        this.RefreshInfo();
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

        let self = this;
        function TabContent (props) {
            if (props.tab == 0) { //review
                return (
                    <ScrollView>
                        {self.state.reviews ?
                            self.state.reviews.map(function(reviewid) {
                            return GetReviewFromID(reviewid);
                        }) : <View/>
                        }
                    </ScrollView>
                );
            } else if (props.tab == 1) { // favorites
                return (
                    <ScrollView>
                        {self.state.favorites ?
                            self.state.favorites.map(function(bizid) {
                            return GetPreviewForBusiness("" + bizid);
                        }) : <View/>
                        }
                    </ScrollView>
                );
            } else { //businesses
                return (
                    <ScrollView>
                        {self.state.businesses ?
                            self.state.businesses.map(function(bizid) {
                            return GetPreviewForBusiness(bizid);
                        }) : <View/>
                        }
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

function GetReviewFromID (id) {
    return (<Review id = {id} user={"owner"}/>);
}

function GetPreviewForBusiness(business_id) {
    return <BusinessPreview id={business_id} user={"owner"}/>
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