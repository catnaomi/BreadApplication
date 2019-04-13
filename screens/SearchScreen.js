import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, ScrollView} from "react-native";
import {createStackNavigator} from 'react-navigation';
import {getBusinessWithID, getAllBusinessData} from '../db/firebase'
import BusinessPreview from './BusinessPreview'
import {BusinessScreen} from './BusinessScreen'

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
                            Businesses with search type:
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
    static navigationOptions = ({ navigation }) => {
        return {
          title: 'Search Result: ' + navigation.getParam('searchQuery'),
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            name: "no name yet",
            searchQuery: this.props.navigation.state.params.searchQuery,
            data: []
        }
    }

    componentDidMount() {
        var self = this;
        getAllBusinessData().then(response => {
            self.setState({
                data: getArray(response, self)
            })
        })
    }

    render() {
        return (
            <View style = {{width: '100%', height: '100%'}}>
                <ScrollView>
                    {
                        this.state.data.map(function(businessObject) {
                            if(businessObject !== undefined){
                                return GetPreviewForBusiness(businessObject.business_id);
                            }
                        }) 
                    }
                </ScrollView>
            </View>
        );
    }
}

function getArray(data, self) {
    var arr = [];
    for(var key in data) {
        if (data.hasOwnProperty(key)) {          
            var name = data[key].name;
            var description = data[key].description;
            info = data[key].information;
            var aggregated = name + description + info;
            aggregated = aggregated.trim();
            var key_words = self.state.searchQuery.trim().split(" ");
            for(var word_index in key_words) {
                var word = key_words[word_index];
                if(aggregated.indexOf(word) != -1) {
                    console.log('word match: ', word);
                    console.log('keywords: ', key_words);
                    arr[key] = data[key]; // convert object to array
                    break;    
                }
            }
        }
    }
    return arr
}

function GetPreviewForBusiness(business_id) {
    return <BusinessPreview id={business_id} key={business_id}/>
}

/*
export const SearchScreenStack = createStackNavigator({
  SearchScreen: {screen: SearchScreen},
  SearchResult: {screen: SearchResult},
    BusinessScreen: {screen: BusinessScreen},
}, {initialRoute: 'SearchScreen'});
*/

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
    tabText: {
        fontSize: 25,
        alignItems: 'center',
    },
    profileHeader: {
        flex: 4,
        backgroundColor: 'lightgrey',
    },
    profileTabs: {
        flex: 1,
        flexDirection: 'row',
    },
    profileContent: {
        flex: 5,
    },
    profilePicture: {
        resizeMode: 'cover',
        left: 10,
        width: 150,
        height: 150,
        padding: 0,
        borderWidth: 1,
        borderColor: 'grey',
    },
    profileImage: {
        resizeMode: 'cover',
        width: 150,
        height: 150,
    },
    editIcon: {
        flex: 1,
        resizeMode: 'contain',
        overflow: 'hidden',
    },
    editIconImage: {
        resizeMode: 'contain',
        width: 32,
        height: 32,
    },
    tabSelectable: {
        flex : 1,
        borderLeftWidth: 1,
        justifyContent: 'center',
        alignContent: 'center',
    },
    tabSelected: {
        backgroundColor: 'lightgrey',
    },
    tabDeselected: {
        backgroundColor: 'white',
    },
    addReview: {
        height: 100,
        width: '50%',
        left: '25%',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
    },
    businessInfo: {
        flex: 1,
        fontSize: 18,
        flexWrap: 'wrap',
    }
});