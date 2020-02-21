import React, { Component } from 'react';
import {

    StyleSheet,
    Text,
    View ,
    TouchableHighlight,
    Image

} from 'react-native';



export default class MjTouchableHighlight extends TouchableHighlight {

    constructor(props){
        super(props)

    }


    render(){
        return (
            <TouchableHighlight
                style={ [styles.touchableHighlight,{backgroundColor:this.props.backgroundColor}]}
                onPress={this.props.onPress}
                underlayColor={this.props.underlayColor} >
                <View style={{borderRadius:50,borderColor: 'red',borderWidth: 2.5}}>
                    <Image source={this.props.source} style={{borderRadius:50}}/>
                </View>

            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    touchableHighlight:{
        backgroundColor:'#2196f3',
        alignItems:'center' ,
        //padding:12,
        // borderWidth:5,
        // borderColor:'#333333',
        borderRadius:100 ,
       // width:'90%' ,
        //height:60 ,
        marginBottom:0
    } ,

    buttonText:{
        fontSize:20,
        fontFamily: 'IRANSans' ,
        color:'white' ,
        fontWeight:'bold'

    }
})