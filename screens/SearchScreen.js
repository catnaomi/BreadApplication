import React, {Component} from 'react';
import {StyleSheet, Text, View} from "react-native";

export default class SearchScreen extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        return (
            <View style = {{width: '100%', height: '100%'}}>
                {/*Profile header*/}
                <View style = {styles.searchHeader}>
                    <View style = {{flex : 1, borderLeftWidth: 1, justifyContent: 'center', alignContent: 'center'}}>
                        <Text style = {{textAlign: 'center', fontSize: 18}}>
                            Businesses Found:
                        </Text>
                    </View>
                </View>
                <View style = {styles.searchContent}>
                    <View style = {{left: 10, top: 10}}>
                        <Text>Searching Businesses from Database needs to be implemented</Text>
                    </View>
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
    searchHeader: {
        flex: 3,
        borderWidth: 1,
        backgroundColor: 'lightgrey',
    },
    searchContent: {
        flex: 6,
        borderWidth: 1,
    },
});