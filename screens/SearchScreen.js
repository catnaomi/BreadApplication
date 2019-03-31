import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from "react-native";
import {createStackNavigator} from 'react-navigation';
import {getBusinessWithID} from '../db/firebase'

export class SearchScreen extends Component {

    constructor (props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;
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
                <TouchableHighlight onPress={() => this.props.navigation.navigate('SearchResult')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Business 1 information</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

export class SearchResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "no name right now"
        }
    }

    componentDidMount() {
        var self = this;
        getBusinessWithID("id_1").then(response => {
            self.setState({
                name: response
            })
        })
    }

    render() {
        return(
            <View style = {{width: '100%', height: '100%'}}>
                <View style = {styles.searchContent}>
                    <View style = {{left: 10, top: 10}}>
                        <Text>THIS IS A SEARCH RESULT PAGE for bussiness with name:: {this.state.name}</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export let SearchScreenStack = createStackNavigator({
  SearchScreen: {screen: SearchScreen},
  SearchResult: {screen: SearchResult},
}, {initialRoute: 'SearchScreen'});

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