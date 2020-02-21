import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight

} from 'react-native'


export default class MjButton extends Component{



    render() {
        return(
            <TouchableHighlight onPress={this.props.onPress}
                style={styles.touchableHighlight}
                underlayColor="#304ffe">
                <View>

                    <Text style={styles.buttonText}>{this.props.btnText}</Text>

                </View>

            </TouchableHighlight>
        );
    };

}

const styles= StyleSheet.create({
    loginButton:{
        color:'#2196f3',
        marginTop:20
    },
    touchableHighlight:{
        backgroundColor:'#2196f3',
        alignItems:'center',
        padding:12,
        borderRadius:20
    },
    buttonText:{
        fontSize:20,
        fontFamily:'tahoma',
        color:'white',
        fontWeight:'bold'
    }
})


