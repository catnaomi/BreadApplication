import React, {Component} from 'react';
import {addFavorite, removeFavorite} from "../Favorites"
import {Image, StyleSheet, TouchableHighlight, View} from "react-native";
import cache from "../userCache"
import {addFavoritesToUser, getUserData} from "../db/firebase";

export default class FavoritesButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favorited: false,
        };
        console.log(this.props.id);
    }   

    componentDidMount() {
        let self = this;
        getUserData(cache.user_id).then(u_object => {
            if (u_object != undefined) {
                self.state.favorited = u_object.favorites != undefined ? u_object.favorites.includes(self.props.id) : false;
                self.forceUpdate();
            }
        });
    }

    render () {
        var heart_filled = require('../assets/images/icons/heart-filled.png');
        var heart_unfilled = require('../assets/images/icons/heart-unfilled.png');
        return (
            <View style = {styles.FavoritesContainer}>
                <TouchableHighlight
                    style = {styles.FavoritesContainer}
                    onPress = {() => {
                        if (this.state.favorited) {
                            removeFavorite(this.props.id);
                            this.state.favorited = false;
                            this.forceUpdate();
                        } else {
                            addFavorite(this.props.id);
                            this.state.favorited  = true;
                            this.forceUpdate();
                        }
                    }}>
                    <Image
                        style = {styles.FavoritesContainer}
                        source= {this.state.favorited ? heart_filled : heart_unfilled}/>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    FavoritesContainer: {
        height: 24,
        width: 24,
    },
});