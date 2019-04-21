import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View, Alert} from "react-native";
import {removeBusiness, removeReview, flagBusiness, flagReview} from "../db/firebase";
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default class FlaggedButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //User will wither be "admin", "owner", or "consumer"
            user: this.props.user,
            //Type is the type of item the button is placed on, either "review" or "business"
            type: this.props.type,
            //The id of the review or the business
            id: this.props.id,
        };
    }

    /*
    *
     */
    getImage(type, user) {
        let self = this;
        var flag = <MaterialCommunityIcons name = {'flag-outline'} size = {24} color = {'black'}/>;
        var trash = <MaterialCommunityIcons name = {'trash-can'} size = {24} color = {'black'}/>;

        if (self.props.type == "business") {
            if (self.props.user == "admin") {
                return trash;
            } else if (self.props.user == "consumer") {
                return flag;
            } else if (self.props.user == "owner") {
                return trash;
            }
        } else if (self.props.type == "review") {
            if (user == "admin") {
                return trash;
            } else if (self.props.user == "consumer") {
                return flag;
            } else if (self.props.user == "owner") {
                return flag;
            }
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity
                    style={styles.Button}
                    onPress={() => {
                        if (this.state.type == "business") {
                            if (this.state.user == "admin") {
                                removeBusiness(this.state.id);
                                Alert.alert("The business has been removed. Please refresh the page.");
                            } else if (this.state.user == "consumer") {
                                flagBusiness(this.state.id);
                                this.forceUpdate();
                            } else if (this.state.user == "owner") {
                                removeBusiness (this.state.id);
                                Alert.alert("Your business has been removed. Please refresh the page.");
                            }
                        } else if (this.state.type == "review") {
                            if (this.state.user == "admin") {
                                removeReview(this.state.id);
                                Alert.alert("The review has been removed. Please refresh the page.");
                            } else if (this.state.user == "consumer") {
                                flagReview(this.state.id);
                                this.forceUpdate();
                            } else if (this.state.user == "owner") {
                                flagReview(this.state.id);
                                this.forceUpdate();
                            }
                        }
                    }}>
                    <View>
                        {this.getImage(this.state.type, this.state.user)}
                    </View>
                </TouchableOpacity>
            </View>
        )


    }
}

const styles = StyleSheet.create({
    Button: {
        width: 24,
        height: 24,
        left: 10,

    }
});