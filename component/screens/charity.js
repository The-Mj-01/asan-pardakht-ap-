import React, {Component} from 'react'
import {
    View,
    Image,
    Text,
    TouchableHighlight,
    StyleSheet,
    Alert,
    ImageBackground,
} from 'react-native'
import HeaderTitleComponent2 from "../headerTitleComponent";


export default class Charity extends Component{
    static navigationOptions = {
        headerTitle:<HeaderTitleComponent2/>,
        headerStyle: {
            backgroundColor: '#333333',
        },
        headerTintColor: '#fff',
        headerTitleStyle:{
            backgroundColor: '#333333',
        }
    }
    render(){
        return(
            <View>
                <Text>charity</Text>
            </View>
        );
    }
}