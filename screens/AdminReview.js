import React, {Component} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, View, ScrollView} from "react-native";
import {getBusinessData, getReviewData, getUserData, getAllReviews, getAllBusinessData} from "../db/firebase";
import Review from "./Review";

export default class AdminReview extends Component {

    constructor (props) {
        super(props);
        this.state = {
            reviews: [],
        };
    }

    componentDidMount() {
        var self = this;
        getAllReviews().then(response => {
            self.setState({
                reviews: getArray(response)
            })
        })
    }

    render() {
        let self = this;
        var logo = require('../assets/images/logos/texthoriz.png');

        return (
            <View style={styles.screenView}>
                <View style={styles.imageView}>
                    <Image
                        source={logo}
                        style={styles.breadLogo}
                    />
                </View>
                <View style={styles.optionView}>
                    <ScrollView style={styles.innerOption}>
                        {
                            this.state.reviews.map(function(review){
                                if (review !== undefined) {
                                    GetReviewFromID(review.review_id);
                                }
                            })
                        }
                    </ScrollView>
                </View>
            </View>

        )};

}


function getArray(data) {
    var arr = [];
    for(var key in data) {
        if (data.hasOwnProperty(key)) {
            arr[key] = data[key] // convert object to array
        }
    }
    return arr
}

function GetReviewFromID(id) {
    return (<Review id = {id}/>);
}

const styles = StyleSheet.create({
    screenView: {
        width: '100%',
        height: '100%',
    },
    imageView: {
        flex: 1,
        width: '100%',
    },
    breadLogo: {
        position: 'absolute',
        width: '75%',
        height: '100%',
        left: '12.5%',
    },
    optionView: {
        flex: 6,
        width: '100%',
    },
    innerOption: {
        width: '90%',
        left: '5%',
        flexGrow: 1,
        flexDirection: 'column',
    },
});

