import React, {Component} from 'react';
import {ScrollView, View} from "react-native";
import {addFavoritesToUser, getUserData} from "../db/firebase";
import cache from "../userCache";
import BusinessPreview from "./BusinessPreview";
import {createStackNavigator} from "react-navigation";
import {SearchResult} from "./SearchScreen";
import {BusinessScreen} from "./BusinessScreen";
import {LandingScreen} from "./LandingScreen";

class FavoriteScreen extends Component {
    static navigationOptions = {
        title: 'Favorites',
    };

    constructor (props) {
        super(props);
        this.state = {
            favorites: [],
        }
    }

    componentDidMount() {
        let self = this;
        getUserData(cache.user_id).then(u_object => {
            console.log(u_object);
            if (u_object != undefined) {
                self.state.favorites = u_object.favorites;
                self.forceUpdate();
            }
        })
    }

    render() {
      return (
          <ScrollView style = {{flex: 1}}>
              {this.state.favorites ?
                  this.state.favorites.map(function(bizid) {
                      return GetPreviewForBusiness("" + bizid);
                  }) : <Text>user has no faves</Text>
              }
          </ScrollView>
      );
  }
}

export const FavoritesStack = createStackNavigator({
    FavoriteScreen: {screen: FavoriteScreen},
});

function GetPreviewForBusiness(business_id) {
    return <BusinessPreview id={business_id} user={"consumer"}/>
}