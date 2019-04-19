import React, {Component} from 'react';
import {Image, StyleSheet, TextInput, TouchableHighlight, View} from "react-native";
import {createStackNavigator} from "react-navigation";
import {SearchResult} from './SearchScreen';
import {BusinessScreen} from "./BusinessScreen";

export class LandingScreen extends Component {

    static navigationOptions = {
        headerVisible: false,
    };
    constructor (props) {
        super(props);
        this.state = {
            search: '',
        }
    }

    render () {
        const { navigate } = this.props.navigation;
        var diningIcon = require('../assets/images/quickstart/dining-iconmdpi.png');
        var autoIcon = require('../assets/images/quickstart/auto-iconmdpi.png');
        var beautyIcon = require('../assets/images/quickstart/beauty-iconmdpi.png');
        var cleaningIcon = require('../assets/images/quickstart/cleaning-iconmdpi.png');
        var clothingIcon = require('../assets/images/quickstart/clothing-iconmdpi.png');
        var financialIcon = require('../assets/images/quickstart/financial-iconmdpi.png');
        var healthIcon = require('../assets/images/quickstart/health-iconmdpi.png');
        var legalIcon = require('../assets/images/quickstart/legal-iconmdpi.png');
        var logoIcon = require('../assets/images/logos/texthoriz.png');
        return (
            <View style={styles.screenView}>

                <View style = {[styles.searchBar]}>
                    <TextInput
                        style = {{top: 10, left: 10, fontSize: 18}}
                        placeholder = "Search"
                        onChangeText = {(text) => this.setState({search: text})}
                        onSubmitEditing = {() => navigate('SearchResult', {searchQuery: this.state.search})}
                        value = {this.state.search}
                    />
                </View>

                <View style = {styles.logoLanding}>
                    {/* Logo */}
                    <Image
                        source = {logoIcon}
                        style = {styles.logoLandingImage}
                    />
                </View>

                <View style = {{position: 'absolute', top: '50%', width: '100%', height: '50%'}}>
                    {/* Quickstart Buttons */}
                    <View style = {{flexDirection: 'row', height: 100}}>
                        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableHighlight
                                style = {[styles.quickstartIcon, styles.diningIcon]}
                                onPress = {() => {
                                    console.log("dining search...");
                                    navigate('SearchResult', {searchQuery: 'dining'})
                                }}>
                                <Image
                                    source = {diningIcon}
                                    style = {styles.quickstartIconImages}
                                />
                            </TouchableHighlight>
                        </View>
                        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableHighlight
                                style = {[styles.quickstartIcon, styles.autoIcon]}
                                onPress = {() => {
                                    console.log("auto search...");
                                    navigate('SearchResult', {searchQuery: 'auto'})
                                }}>
                                <Image
                                    source = {autoIcon}
                                    style = {styles.quickstartIconImages}
                                />
                            </TouchableHighlight>
                        </View>
                        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableHighlight
                                style = {[styles.quickstartIcon, styles.clothingIcon]}
                                onPress = {() => {
                                    console.log("clothing search...");
                                    navigate('SearchResult', {searchQuery: 'clothing'})

                                }}>
                                <Image
                                    source = {clothingIcon}
                                    style = {styles.quickstartIconImages}
                                />
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', height: 100}}>
                        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableHighlight
                                style = {[styles.quickstartIcon, styles.cleaningIcon]}
                                onPress = {() => {
                                    console.log("cleaning search...");
                                    navigate('SearchResult', {searchQuery: 'cleaning'})
                                }}>
                                <Image
                                    source = {cleaningIcon}
                                    style = {styles.quickstartIconImages}
                                />
                            </TouchableHighlight>
                        </View>
                        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableHighlight
                                style = {[styles.quickstartIcon, styles.beautyIcon]}
                                onPress = {() => {
                                    console.log("beauty search...");
                                    navigate('SearchResult', {searchQuery: 'beauty'})
                                }}>
                                <Image
                                    source = {beautyIcon}
                                    style = {styles.quickstartIconImages}
                                />
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style = {{flexDirection: 'row', height: 100}}>
                        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableHighlight
                                style = {[styles.quickstartIcon, styles.financialIcon]}
                                onPress = {() => {
                                    console.log("financial search...");
                                    navigate('SearchResult', {searchQuery: 'financial'})
                                }}>
                                <Image
                                    source = {financialIcon}
                                    style = {styles.quickstartIconImages}
                                />
                            </TouchableHighlight>
                        </View>
                        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableHighlight
                                style = {[styles.quickstartIcon, styles.healthIcon]}
                                onPress = {() => {
                                    console.log("health search...");
                                    navigate('SearchResult', {searchQuery: 'health'})
                                }}>
                                <Image
                                    source = {healthIcon}
                                    style = {styles.quickstartIconImages}
                                />
                            </TouchableHighlight>
                        </View>
                        <View style = {{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableHighlight
                                style = {[styles.quickstartIcon, styles.legalIcon]}
                                onPress = {() => {
                                    console.log("legal search...");
                                    navigate('SearchResult', {searchQuery: 'legal'})
                                }}>
                                <Image
                                    source = {legalIcon}
                                    style = {styles.quickstartIconImages}
                                />
                            </TouchableHighlight>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

export const LandingStack = createStackNavigator({
    Landing: {
        screen: LandingScreen,
            navigationOptions: {
                header: null,
            }
        },
    SearchResult: {screen: SearchResult},
    BusinessScreen: {screen: BusinessScreen},
});


const styles = StyleSheet.create ({
    screenView: {
        width: '100%',
        height: '100%',
        flex: 1,
    },
    imageView: {
        height: '15%',
        width: '100%',
        flex: 1,
        flexDirection: 'column',
    },
    breadLogo: {
        position: 'absolute',
        width: '75%',
        height: '100%',
        left: '12.5%',
        flex: 1
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
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    quickstartIconImages: {
        width: 80,
        height: 80,
    },
    diningIcon: {
    },
    autoIcon: {

    },
    clothingIcon: {

    },
    beautyIcon: {

    },
    financialIcon: {

    },
    healthIcon: {

    },
    legalIcon: {

    },
    cleaningIcon: {

    },
    logoLanding: {
        resizeMode: 'contain',
        position: 'absolute',
        top: 110,
        width: '100%',
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoLandingImage: {
        resizeMode: 'contain',
        height: 150,
        width: '100%',
    },
});
