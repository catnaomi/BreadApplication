import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, View, ScrollView} from "react-native";
import {getBusinessData, getReviewData, getUserData, getAllReviews} from "../db/firebase";
import Review from "./Review";

export default class AdminReview extends Component {

    constructor (props) {
        super(props);
        this.state = {
            reviews: [],
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
        let self = this;
        function reviewsToArray() {
            getAllReviews().then(reviews => {
                toArray(reviews)

            })

        }

        function toArray(data) {
            var arr = []
        }

        function GetReviewFromID (id) {
            return (<Review id = {id}/>);
        }


        var logo = require('../assets/images/logos/texthoriz.png');

        return (
            <View style={styles.screenView}>
                <View style={styles.imageView}>
                    <Image
                        source={logo}
                        style={styles.breadLogo}
                    />
                </View>
                <View>
                    <ScrollView>

                    </ScrollView>
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
});

