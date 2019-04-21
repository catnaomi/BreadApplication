import React, {Component} from 'react';
import {Text, ScrollView, View} from "react-native";
import {getUserData} from "../db/firebase";
import cache from "../userCache";
import BusinessPreview from "./BusinessPreview";
import {createStackNavigator, NavigationEvents} from "react-navigation";
import {breadColors} from "../Colors";

class FavoriteScreen extends Component {
    static navigationOptions = {
        title: 'Favorites',
        headerStyle: {
            backgroundColor: breadColors.breadOrange,
        },
        headerTitleStyle: {
            color: 'white'
        },
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
            if (u_object !== undefined) {
                if (u_object.favorites) {
                    self.state.favorites = u_object.favorites;
                }
                self.forceUpdate();
            }
        });
        this.forceUpdate();
    }

    render() {
      return (
          <View>
          <NavigationEvents
              onWillFocus={payload => {
                  let self = this;
                  getUserData(cache.user_id).then(u_object => {
                      if (u_object !== undefined) {
                          if (u_object.favorites) {
                              self.state.favorites = u_object.favorites;
                          }
                          self.forceUpdate();
                      }
                  })
              }}
          />
          <ScrollView>
              {this.state.favorites.length ?
                  this.state.favorites.map(function(bizid) {
                      return GetPreviewForBusiness("" + bizid);
                  }) : <Text style = {{padding: 20}}>You currently have no favorites!</Text>
              }
          </ScrollView>
          </View>
      );
  }
}

export const FavoritesStack = createStackNavigator({
    FavoriteScreen: {screen: FavoriteScreen},
});

function GetPreviewForBusiness(business_id) {
    return <BusinessPreview id={business_id} user={"consumer"}/>
}