import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, ScrollView, Image} from "react-native";
import {createStackNavigator} from 'react-navigation';
import {getBusinessWithID, getAllBusinessData} from '../db/firebase'
import BusinessPreview from './BusinessPreview'
import {BusinessScreen} from './BusinessScreen'

export default class AdminBusinesses extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "no name yet",
            data: []
        }
    }

    componentDidMount() {
        var self = this;
        getAllBusinessData().then(response => {
            self.setState({
                data: getArray(response)
            })
        })
    }

    render() {
        let self = this;
        var logo = require('../assets/images/logos/texthoriz.png');

        return (
            <View style = {styles.screenView}>
                <View style={styles.imageView}>
                    <Image
                        source={logo}
                        style={styles.breadLogo}
                    />
                </View>
                <View style={styles.optionView}>
                    <ScrollView style={styles.innerOption}>
                        {
                            this.state.data.map(function(businessObject) {
                                if((businessObject !== undefined) && (businessObject.removed !== false)){
                                    return GetPreviewForBusiness(businessObject.business_id);
                                }
                            })
                        }
                    </ScrollView>
                </View>
            </View>
        );
    }

}

function getArray(data) {
    arr = [];
    for(var key in data) {
        if (data.hasOwnProperty(key)) {
            arr[key] = data[key] // convert object to array
        }
    }
    return arr
}

function GetPreviewForBusiness(business_id) {
    return <BusinessPreview id={business_id} key={business_id}/>
}

const styles = StyleSheet.create ({
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
})