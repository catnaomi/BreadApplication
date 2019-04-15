import React, {Component} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import {removeBusiness, removeReview, flagBusiness, flagReview} from "../db/firebase";


export default class FlaggedButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            type: "",
            id: "",
        };
    }

    getImage(type, user) {
        var flag = require("../assets/images/icons/flag.png");
        var trash = require("../assets/images/icons/trash.png");

        if (type === "business") {
            if (user === "admin") {
                return trash;
            } else if (user === "consumer") {
                return flag;
            } else if (user === "owner") {
                return trash;
            }
        } else if (type === "review") {
            if (user === "admin") {
                return trash;
            } else if (user === "consumer") {
                return flag;
            } else if (user === "owner") {
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
                        if (this.state.type === "business") {
                            if (this.state.user === "admin") {
                                removeBusiness(this.state.id);
                            } else if (this.state.user === "consumer") {
                                flagBusiness(this.state.id);
                            } else if (this.state.user === "owner") {
                                removeBusiness (this.state.id);
                            }
                        } else if (this.state.type === "review") {
                            if (this.state.user === "admin") {
                                removeReview(this.state.id);
                            } else if (this.state.user === "consumer") {
                                flagReview(this.state.id);
                            } else if (this.state.user === "owner") {
                                flagReview(this.state.id);
                            }
                        }
                    }}>
                    <Image
                        source={this.getImage(this.state.type, this.state.user)}
                    />
                </TouchableOpacity>
            </View>
        )


    }
}

const styles = StyleSheet.create({
    Button: {
        backgroundColor: "#ffab40",
        width: 50,
        height: 50,
    }
});