import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Image, TouchableOpacity, Text} from "react-native";
import {breadColors} from "../Colors";
import {getAllBusinessData, getBusinessData} from '../db/firebase';
import AdminBusinessPreview from './AdminBusinessPreview';
import BusinessPreview from './BusinessPreview';

export default class AdminBusinesses extends Component {
    static navigationOptions = {
        title: 'Administrative Portal',
        headerStyle: {
            backgroundColor: breadColors.breadOrange,
        },
        headerTitleStyle: {
            color: 'white'
        },
    };

    constructor(props) {
        super(props);
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
                                // if((businessObject !== undefined) && (getBusinessData(businessObject).removed === false) && (+getBusinessData(businessObject).flagged >= 0)
                                // && (getBusinessData(businessObject).removed === false)){
                                //     return GetPreviewForBusiness(businessObject.business_id);
                                // }
                                if((businessObject !== undefined)){
                                    return GetPreviewForBusiness(businessObject);
                                }
                            })
                        }
                        <TouchableOpacity
                            onPress={() =>{this.forceUpdate()}}
                            style={[styles.title, {alignItems: 'center'}]}>
                            <Text style={{fontSize: 16, color:'white', fontWeight: 'bold'}}>Refresh</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }

}

function getArray(data) {
    let arr = [];
    let keys = Object.keys(data);
    for (var i = 0; i < keys.length; i++) {
        arr.push(keys[i]);
    }
    return arr;
}

function GetPreviewForBusiness(business_id) {
    return <AdminBusinessPreview id={business_id} user={"admin"} key={business_id}/>
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
});