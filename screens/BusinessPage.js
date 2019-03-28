import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

export default class BusinessPage extends Component {

    render() {
        var businessImage = require('../assets/images/icons/dummyRestaurant.jpg');
        var ratings = require('../assets/images/icons/rating.png');
        return (

            <View>
                <View style={styles.businessView}>
                    <Text style={styles.backButton}>Back</Text>
                    <Image
                        source = {businessImage}
                        style = {styles.businessImage}
                    />
                    <Text style={styles.businessInfo}> Ruby </Text>
                    <Text style={styles.businessInfo}> 123 Main St. </Text>
                    <Text style={styles.businessInfo}> 123-456-7890 </Text>
                    <Text style={styles.businessInfo}> ruby@ruby.com</Text>
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
                <View>
                    <Text></Text>
                </View>

            </View>
        );

    };
}


const styles = StyleSheet.create ({
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
        fontSize: 22,
        color: "blue",

    },
    backButtonText: {
        fontSize: 25,
    },
    tabsView: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
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
        borderWidth: 1,
    },
    documentsTab: {
        width:'33.33%',
        left: '66.66%',
        height:50,
        borderWidth: 1,
    },
});
