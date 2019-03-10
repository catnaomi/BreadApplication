import React, {Component} from 'react';
import {registerUser} from "./db/firebase";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Button,
  Alert,
  TouchableHighlight,
} from 'react-native';
import {
    createBottomTabNavigator,
    createAppContainer,
    navigationOptions,
} from 'react-navigation';

export class LandingScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      search: '',
    }
  }

  render () {
    var diningIcon = require('./assets/images/quickstart/dining-iconmdpi.png');
    var autoIcon = require('./assets/images/quickstart/auto-iconmdpi.png');
    var beautyIcon = require('./assets/images/quickstart/beauty-iconmdpi.png');
    var cleaningIcon = require('./assets/images/quickstart/cleaning-iconmdpi.png');
    var clothingIcon = require('./assets/images/quickstart/clothing-iconmdpi.png');
    var financialIcon = require('./assets/images/quickstart/financial-iconmdpi.png');
    var healthIcon = require('./assets/images/quickstart/health-iconmdpi.png');
    var legalIcon = require('./assets/images/quickstart/legal-iconmdpi.png');
    var logoIcon = require('./assets/images/logos/breadbase.png');
    return (
      <View>
          {/* Logo */}
          <View style = {styles.logoLanding}>
              <Image
                  source = {logoIcon}
                  style = {styles.logoLandingImage}
                  />
          </View>
        {/* Quickstart Buttons */}
        <TouchableHighlight
            style = {[styles.quickstartIcon, styles.diningIcon]}
            onPress = {() => {}}>
            <Image
              source = {diningIcon}
              style = {styles.quickstartIconImages}
            />
        </TouchableHighlight>
        <TouchableHighlight
            style = {[styles.quickstartIcon, styles.autoIcon]}
            onPress = {() => {}}>
            <Image
              source = {autoIcon}
              style = {styles.quickstartIconImages}
            />
        </TouchableHighlight>
        <TouchableHighlight
            style = {[styles.quickstartIcon, styles.clothingIcon]}
            onPress = {() => {}}>
            <Image
              source = {clothingIcon}
              style = {styles.quickstartIconImages}
            />
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.quickstartIcon, styles.cleaningIcon]}>
            <Image
              source = {cleaningIcon}
              style = {styles.quickstartIconImages}
            />
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.quickstartIcon, styles.beautyIcon]}>
            <Image
                source = {beautyIcon}
                style = {styles.quickstartIconImages}
            />
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.quickstartIcon, styles.financialIcon]}>
          <Image
              source = {financialIcon}
              style = {styles.quickstartIconImages}
          />
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.quickstartIcon, styles.healthIcon]}>
          <Image
              source = {healthIcon}
              style = {styles.quickstartIconImages}
          />
        </TouchableHighlight>
        <TouchableHighlight style = {[styles.quickstartIcon, styles.legalIcon]}>
          <Image
              source = {legalIcon}
              style = {styles.quickstartIconImages}
          />
        </TouchableHighlight>



        <View style = {[styles.searchBar]}>
          <TextInput
            style = {{top: 10, left: 10, fontSize: 18}}
            placeholder = "Search"
            onChangeText = {(text) => this.setState({search: text})}
            value = {this.state.search}
          />
        </View>
      </View>
    );
  }
}

export class LoginScreen extends Component {
  constructor (props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }
  render() {
    return (
        <View style = {{flex: 1}}>
          {/*<Image
          source={require('./assets/images/logos/texthoriz.png')}
          style= {{position: 'absolute', width: '100%', top: 0}}
        />*/}
          <View style = {{flex : 1}}></View>
          <View style = {{flex: 1}}>
            <TextInput
                style={styles.loginField}
                placeholder = "email or phone number"
                ref='user'
                onChangeText = {(text) => this.setState({username: text})}
                value = {this.state.username}
            />
            <TextInput
                style={styles.loginField}
                placeholder = "password"
                ref='pass'
                onChangeText = {(text) => this.setState({password: text})}
                value = {this.state.password}
            />
            <View style = {styles.loginButton}>
              <Button
                  onPress={() => {
                    Alert.alert(this.state.username + '\nadded to database');
                    registerUser(this.state.username, this.state.password);
                  }}
                  title="Login"
              />
            </View>
          </View>
          <View style = {{flex: 1}}>
            <View style = {{top: 10, height: 1, topBorderWidth: 1, left: '10%', width: '80%', backgroundColor: 'black'}}></View>
            <View style = {[styles.thirdPartyButton, styles.googleButton]}>
              <Button
                  onPress = { () => {}}
                  title = "Login with Google"
                  color = "#db3236"
              />
            </View>
            <View style = {[styles.thirdPartyButton, styles.facebookButton]}>
              <Button
                  onPress = { () => {}}
                  title = "Login with Facebook"
                  color = "#3C5A99"
              />
            </View>
          </View>
          <View style = {{flex: 1}}>
            <Text style = {{left: '10%', top: 30}}>Don't have an account?</Text>
          </View>
          <View style = {styles.registerButton}>
            <Button
                onPress = { () => {}}
                title = "Register"
            />
          </View>
          <View style ={styles.skipButton}>
            <TouchableHighlight
                onPress = { () => {}}>
              <Text style = {{textDecorationLine: 'underline'}}>Skip ... ></Text>
            </TouchableHighlight>
          </View>
        </View>
    );
  }
}

export class BusinessPage extends Component {

    render() {
        var businessImage = require('./assets/images/logos/basetext.png');
        var ratings = require('./assets/images/icons/rating.png')
        return (

            <View>
                <View style={styles.businessView}>
                    <Text style={styles.backButton}> BackButton </Text>
                    <Image
                        source = {businessImage}
                        style = {styles.businessImage}
                    />
                    <Text style={styles.businessInfo}> Bread </Text>
                    <Text style={styles.businessInfo}> [Address] </Text>
                    <Text style={styles.businessInfo}> [Phone Number] </Text>
                    <Text style={styles.businessInfo}> [email]</Text>
                    <Image
                        source = {ratings}
                        style = {styles.ratingsIcon}
                    />
                </View>
                <View style={styles.tabsView}>
                    <View style={styles.aboutUsTab}>
                        <Text style={styles.tabText}>About Us</Text>
                    </View>
                    <View style={styles.reviewsTab}>
                        <Text style={styles.tabText}>Ratings</Text>
                    </View>
                    <View style={styles.documentsTab}>
                        <Text style={styles.tabText}>Documents</Text>
                    </View>
                </View>

            </View>
        );

    };
}


export class FavoriteScreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    this is a favorites placeholder
                </Text>
            </View>
        );
    }
}

export class UserScreen extends Component {

    render() {
        var profile = require('./assets/images/profile/julia.png');
        return (
            <View style = {{width: '100%', height: '100%'}}>
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
                                <Text style = {{fontSize: 24}}>Julia Ramirez</Text>
                            </View>
                            <View style = {{flex: 1, top: 10, left: 10}}>
                                <Text style = {{fontSize: 18}}>1 Review</Text>
                            </View>
                        </View>
                    </View>
                    <View style = {{flex: 1}}/>
                </View>
                <View style = {styles.profileTabs}>
                    <View style = {{flex : 1, borderLeftWidth: 1, justifyContent: 'center', alignContent: 'center'}}>
                        <Text style = {{textAlign: 'center', fontSize: 18}}>
                            Reviews
                        </Text>
                    </View>
                    <View style = {{flex : 1, borderLeftWidth: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: 'lightgrey'}}>
                        <Text style = {{textAlign: 'center', fontSize: 18}}>
                            Favorites
                        </Text>
                    </View>
                    <View style = {{flex : 1, borderLeftWidth: 1, justifyContent: 'center', alignContent: 'center'}}>
                        <Text style = {{textAlign: 'center', fontSize: 18}}>
                            Businesses
                        </Text>
                    </View>
                </View>
                <View style = {styles.profileContent}>
                    <View style = {{left: 10, top: 10}}>
                        <Text>Julia Ramirez has no favorited businesses yet...</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export class SettingsScreen extends Component {
    render() {
        return (
            <View>
                <Text>
                    this is a settings page placeholder
                </Text>
            </View>
        );
    }
}

const TabNavigator = createBottomTabNavigator({
   Search: LandingScreen,
   Favorites: FavoriteScreen,
    Profile: UserScreen,
    Settings: SettingsScreen,
});

export default BusinessPage;


const styles = StyleSheet.create ({
    loginField: {
    left: '15%',
    width: '70%',
    borderBottomWidth: 1,
    margin: 10,
    flex: 1
    },
    loginButton: {
    left: '30%',
    width: '40%',
    margin: 10,
    flex: 1
    },
    thirdPartyButton: {
    left: '10%',
    width: '80%'
    },
    googleButton: {
    top: 30,
    },
    facebookButton: {
    top: 60,
    },
    registerButton: {
    position: 'absolute',
    top: '78%',
    left: '55%',
    width: '40%'
    },
    skipButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    },
    searchBar: {
    position: 'absolute',
    top: 50,
    left: '10%',
    height: 50,
    width: '80%',
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    },
    quickstartIcon: {
    position: 'absolute',
    width: 80,
    height: 80,
    },
    quickstartIconImages: {
    width: 80,
    height: 80,
    },
    diningIcon: {
    top: 250,
    left: 40,
    },
    autoIcon: {
    top: 250,
    left: 140,
    },
    clothingIcon: {
    top: 250,
    left: 240,
    },
    beautyIcon: {
    top: 450,
    left: 40,
    },
    financialIcon: {
    top: 450,
    left: 140,
    },
    healthIcon: {
    top: 450,
    left: 240,
    },
    legalIcon: {
    top: 350,
    left: 90,
    },
    cleaningIcon: {
      top: 350,
      left: 190,
    },
    businessView: {
      height: 250,
      width: "100%",
      borderBottomWidth: 1,
      borderColor: 'black',
    },
    businessImage: {
      position: 'absolute',
      height: '55%',
      width: '40%',
      top:'30%',
      left: 20,
      borderWidth: 1,
      borderColor: 'black',

    },
    businessInfo: {
      width: '55%',
      left: '50%',
      top: '10%',
      fontSize: 22,
      //font: 'ariel'
    },
    //To be removed later
    ratingsIcon: {
        width: 200,
        height: 36.78,
        left: '48%',
        top: '25%',
    },
    backButton: {
        width: "25%",
        height: "15%",
        left: 20,
        top: 25,
        borderWidth: 1,
    },
    tabsView: {
        width: '100%',
        height: 50,
        borderWidth: 1,
    },
    aboutUsTab: {
        width: '33.33%',
        borderWidth: 1,
        height:50,
        backgroundColor: 'grey',
    },
    reviewsTab: {
        width:'33.33%',
        left:'33.33%',
        height:50,
        top: -50,
        borderWidth: 1,
    },
    documentsTab: {
        width:'33.33%',
        left: '66.66%',
        height:50,
        top: -100,
        borderWidth: 1,
    },
    tabText: {
        fontSize:25,
        alignItems: 'center',
    },
    logoLanding: {
        position: 'absolute',
        top: 110,
        width: '100%',
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoLandingImage: {
        height: 150,
        width: 130,
    },
    profileHeader: {
        flex: 3,
        borderWidth: 1,
        backgroundColor: 'lightgrey',
    },
    profileTabs: {
        flex: 1,
        borderWidth: 1,
        flexDirection: 'row',
    },
    profileContent: {
        flex: 6,
        borderWidth: 1,
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
    }
});
