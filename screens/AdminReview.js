import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, View} from "react-native";
import {getBusinessData, getReviewData, getUserData} from "../db/firebase";

export default class AdminReview extends Component {

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
            if (r_object != undefined) {
                self.setState({
                    content: r_object.review_content,
                    user_id: r_object.user_id,
                    business_id: r_object.business_id,
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

    render() {
        var logo = require('../assets/images/logos/texthoriz.png');
        return (
            <View style={styles.screenView}>
                <View style={styles.imageView}>
                    <Image
                        source={logo}
                        style={styles.breadLogo}
                    />
                </View>
                <View style = {styles.Review}>
                    <View style = {{flex: 1, left: 10, top: 20, paddingRight: 10, paddingBottom: 20}}>
                        <View style = {styles.ReviewProfile}>
                            <Text style={{fontSize: 16}}>{this.state.author}<Text style = {{color: 'grey'}}> left a review on </Text>{this.state.business}</Text>
                        </View>
                        <View style = {styles.ReviewContent}>
                            <Text style={{fontSize: 14}}>{this.state.content}</Text>
                        </View>
                    </View>
                </View>
            </View>

        )};

}

const styles = StyleSheet.create({
    screenView: {
        width: '100%',
        height: '100%',
    },
    imageView: {
        height: '15%',
        width: '100%',
        top: '5%',
    },
    breadLogo: {
        position: 'absolute',
        width: '75%',
        height: '100%',
        left: '12.5%',
    },
    Review: {
        height: 150,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'grey',
    },
    ReviewHeader: {
        flex: 1,
        flexDirection: 'row',
    },
    ReviewProfile: {
        flex: 1,
        fontSize: 18,
    },
    ReviewContent: {
        flex: 3,
        fontSize: 12,
    }
});

