import React,{Component} from 'react'
import {
    TextInput,
    View,
    Image,
    StyleSheet,
} from 'react-native'
export default class MjTextInput extends Component{

    onChangeTextHandler(text){
        this.props.onChangeText({value:text,isValid:true})
    }
    render(){
        return(
            <View style={styles.inputView} >
                <TextInput style={styles.input}
                           placeholder={this.props.placeHolder}
                           underlineColorAndroid='transparent'
                           onChangeText={this.onChangeTextHandler.bind(this)}
                           placeholderTextColor='#29b6f6'  />
                <Image source ={this.props.img} style={styles.inputIcon}/>
            </View>
        )
    }

}

const styles=StyleSheet.create({
    input:{
        fontSize:16,
        fontFamily:'tahoma',
        textAlign:'center',
        flex:1
    },
    inputView:{
        borderRadius:20,
        borderWidth:2,
        borderColor:'#2196f3',
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    inputIcon:{
        paddingRight:5,
        width:26
    }

})