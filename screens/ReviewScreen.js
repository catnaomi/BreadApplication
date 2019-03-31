import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, ScrollView, View, TouchableOpacity} from "react-native";


export default class ReviewScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            permission: this.checkPermissions(),
            name: 'Default Name',
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
            review: '',
        }
    }

    checkPermissions() {
        return true;
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
                    <TouchableOpacity style={styles.saveButton}>
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
        width:'50%',
        left: '45%',
        // borderWidth: 1,
        // borderColor:'black',
        backgroundColor: 'lightgrey',
        top: '25%',
        alignItems: 'center',
    }
});