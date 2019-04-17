import React, {Component} from 'react';
import {View, Image, StyleSheet} from "react-native";

export default class RatingDisplay extends Component {
    constructor (props) {
        super(props);
        this.state = {
            starFilled: require('../assets/images/icons/star-filled.png'),
            starHalf: require('../assets/images/icons/star-halffilled.png'),
            starEmpty: require('../assets/images/icons/star-unfilled.png'),
        }
    }

    render () {
        let starArray = [0, 0, 0, 0, 0];
        for (var i = 0; i <= 4; i++) {
            if (this.props.rating >= i + 1) {
                starArray[i] = 2;
            } else if (this.props.rating > i && this.props.rating < i + 1) {
                starArray[i] = 1;
            }
        }
        return (
            <View style = {styles.ratingBounds}>
                {starArray.map(function (val) {
                    return getStar(val);
                })}
            </View>
        );
    }
}
key_count = 0;

function getStar(val) {
    var starFilled = require('../assets/images/icons/star-filled.png');
    var starHalf = require('../assets/images/icons/star-halffilled.png');
    var starEmpty = require('../assets/images/icons/star-unfilled.png');
    if (val == 0) {
        return (<Image
            style = {styles.ratingImage}
            source = {starEmpty}
            key= {key_count++}/>);
    } else if (val == 1) {
        return (<Image
            style = {styles.ratingImage}
            source = {starHalf}
            key= {key_count++}/>);
    } else {
        return (<Image
            style = {styles.ratingImage}
            source = {starFilled}
            key= {key_count++}/>);
    }
}

const styles = StyleSheet.create({
    ratingBounds: {
        width: 120,
        height: 24,
        flexDirection: 'row',
    },
    ratingImage: {
        flex: 1,
        height: 24,
        width: 24,
    }
});