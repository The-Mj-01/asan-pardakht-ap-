import React,{Component} from 'react'
import {
    TextInput,
    View,
    Image,
    StyleSheet,
} from 'react-native'

export default class HeaderTitleComponent extends Component{
    render(){
        return(
            <View style={{ flex:1,flexDirection: 'row',justifyContent: 'center' ,alignItems:'center'}}>
                <Image source={require("./homeScreen/img/200.png")} style={{width: 50 , height: 50 }}/>
            </View>
        )
    }
}