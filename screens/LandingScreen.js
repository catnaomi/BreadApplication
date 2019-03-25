import React, {Component} from 'react';
import {Image, StyleSheet, TextInput, TouchableHighlight, View} from "react-native";

export default class LandingScreen extends Component {
    constructor (props) {
        super(props);
        this.state = {
            search: '',
        }
    }

    render () {
        var diningIcon = require('../assets/images/quickstart/dining-iconmdpi.png');
        var autoIcon = require('../assets/images/quickstart/auto-iconmdpi.png');
        var beautyIcon = require('../assets/images/quickstart/beauty-iconmdpi.png');
        var cleaningIcon = require('../assets/images/quickstart/cleaning-iconmdpi.png');
        var clothingIcon = require('../assets/images/quickstart/clothing-iconmdpi.png');
        var financialIcon = require('../assets/images/quickstart/financial-iconmdpi.png');
        var healthIcon = require('../assets/images/quickstart/health-iconmdpi.png');
        var legalIcon = require('../assets/images/quickstart/legal-iconmdpi.png');
        var logoIcon = require('../assets/images/logos/breadbase.png');
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
                <TouchableHighlight
                    style = {[styles.quickstartIcon, styles.cleaningIcon]}
                    onPress = {() => {}}>
                    <Image
                        source = {cleaningIcon}
                        style = {styles.quickstartIconImages}
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    style = {[styles.quickstartIcon, styles.beautyIcon]}
                    onPress = {() => {}}>
                    <Image
                        source = {beautyIcon}
                        style = {styles.quickstartIconImages}
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    style = {[styles.quickstartIcon, styles.financialIcon]}
                    onPress = {() => {}}>
                    <Image
                        source = {financialIcon}
                        style = {styles.quickstartIconImages}
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    style = {[styles.quickstartIcon, styles.healthIcon]}
                    onPress = {() => {}}>
                    <Image
                        source = {healthIcon}
                        style = {styles.quickstartIconImages}
                    />
                </TouchableHighlight>
                <TouchableHighlight
                    style = {[styles.quickstartIcon, styles.legalIcon]}
                    onPress = {() => {}}>
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
const styles = StyleSheet.create ({
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
        top: 270,
        left: 40,
    },
    autoIcon: {
        top: 270,
        left: 140,
    },
    clothingIcon: {
        top: 270,
        left: 240,
    },
    beautyIcon: {
        top: 470,
        left: 40,
    },
    financialIcon: {
        top: 470,
        left: 140,
    },
    healthIcon: {
        top: 470,
        left: 240,
    },
    legalIcon: {
        top: 370,
        left: 90,
    },
    cleaningIcon: {
        top: 370,
        left: 190,
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
});
