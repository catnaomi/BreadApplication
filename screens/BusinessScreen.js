import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, ScrollView, View} from "react-native";

import BusinessPreview from './BusinessPreview';
import Review from './Review';
import {createStackNavigator} from "react-navigation";
import LoginScreen from "./LoginScreen";
import ReviewScreen from "./ReviewScreen";

class BusinessScreen extends Component {
    static navigationOptions = {
        title: 'Business Details',
    };

    constructor (props) {
        super (props);
        this.state = {
            permission: this.checkPermissions(),
            name: 'Default Name',
            address_line1: '100 Main St.',
            address_line2: 'Atlanta, GA 33333',
            rating: 0,
            reviews: 0,
            edit: false,
            tab: 0,
        }
    }
    checkPermissions() {
        return true;
    }
    render() {
        var profile = require('../assets/images/profile/dummyRestaurant.jpg');
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

        var AddressField_line1 = (this.state.edit ?
            <TextInput
                style = {{fontSize: 18}}
                placeholder = {this.state.address_line1}
                ref = 'name'
                onChangeText={(text) => this.setState({address_line1: text})}
                value = {this.state.address_line1}
            /> :
            <Text style = {{fontSize: 18}}>{this.state.address_line1}</Text>);

        var AddressField_line2 = (this.state.edit ?
            <TextInput
                style = {{fontSize: 18}}
                placeholder = {this.state.address_line2}
                ref = 'name'
                onChangeText={(text) => this.setState({address_line2: text})}
                value = {this.state.address_line2}
            /> :
            <Text style = {{fontSize: 18}}>{this.state.address_line2}</Text>);

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
            if (props.tab == 0) { //info
                return (
                    <ScrollView>
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
                        />
                    </ScrollView>
                );
            } else if (props.tab == 1) { //reviews
                return (
                    <ScrollView>
                        <TouchableHighlight
                            style={styles.addReview}
                            onPress={() => self.props.navigation.navigate('Review')}>
                            <Text style={{color:'blue', fontWeight: 'bold', fontSize:22}}>Add A Review!</Text>
                        </TouchableHighlight>
                        <BusinessPreview name="Dallie's Diner"/>
                        <BusinessPreview name="Ruby Restaurant"/>
                        <BusinessPreview name="Jenna Hair"/>
                        <BusinessPreview name="Sublime Donuts"/>
                    </ScrollView>
                );
            } else { //documents
                return (
                    <ScrollView>
                        <BusinessPreview name="Dallie's Diner"/>
                        <BusinessPreview name="Eugene's"/>
                        <BusinessPreview name="Frederick Fair"/>
                        <BusinessPreview name="Rocky Mountain Pizza"/>
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
                                <Image style = {styles.profileImage}
                                    source = {profile}
                                />
                            </View>
                        </View>
                        <View style = {{flex: 1}}>
                            <View style = {{flex: 1, top: 10, left: 10}}>
                                {NameField}
                            </View>
                            <View style = {{flex: 1, top: 10, left: 10}}>
                                {AddressField_line1}
                            </View>
                            <View style = {{flex: 1, top: 10, left: 10}}>
                                {AddressField_line2}
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
                            Info
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style = {[styles.tabSelectable, FavoriteSelectStyle]}
                        onPress = {() => {
                            this.state.tab = 1;
                            this.forceUpdate();
                        }}>
                        <Text style = {{textAlign: 'center', fontSize: 18}}>
                            Reviews
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style = {[styles.tabSelectable, BusinessSelectStyle]}
                        onPress = {() => {
                            this.state.tab = 2;
                            this.forceUpdate();
                        }}>
                        <Text style = {{textAlign: 'center', fontSize: 18}}>
                            Documents
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

export const BusinessStack = createStackNavigator({
    Business: {screen: BusinessScreen},
    Review: {screen: ReviewScreen},
});

const styles = StyleSheet.create ({
    tabText: {
        fontSize: 25,
        alignItems: 'center',
    },
    profileHeader: {
        flex: 4,
        backgroundColor: 'lightgrey',
    },
    profileTabs: {
        flex: 1,
        flexDirection: 'row',
    },
    profileContent: {
        flex: 5,
    },
    profilePicture: {
        resizeMode: 'cover',
        left: 10,
        width: 150,
        height: 150,
        padding: 0,
        borderWidth: 1,
        borderColor: 'grey',
    },
    profileImage: {
        resizeMode: 'cover',
        width: 150,
        height: 150,
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
    addReview: {
        height: 100,
        width: '50%',
        left: '25%',
        alignItems: 'center',
        justifyContent: 'center',

    }
});