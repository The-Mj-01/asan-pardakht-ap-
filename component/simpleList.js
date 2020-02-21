import React, {Component} from 'react'
import {
    View,
    Image,
    Text,
    TouchableHighlight,
    StyleSheet,
    Alert,
    FlatList,
    Button
} from 'react-native'
export default class simpleList extends Component{
    constructor(props){
        super(props);
        this.state={
            data:[
                {
                    key:'1',
                    name: 'Ali'
                },
                {
                    key:'2',
                    name:'Hamid'
                }
            ]
        }
    }

    onRenderItem({item}){
        return(<Text style={{color:'black' , fontSize:20}}>{item.name}</Text>)
    }
    onPress(){
        let newList=[];
        this.state.data.forEach(function (item) {
            newList.push(Object.assign({},item))
        });
        newList.push({key:'3', name:'New Person'});
        this.setState({data:newList})
    }
    render(){
        return(
            <View style={styles.main}>
                <Button title="ADD ITEM TO LIST" onPress={this.onPress.bind(this)}/>
                <FlatList renderItem={this.onRenderItem} data={this.state.data}/>
            </View>
        )
    }

}

const styles =StyleSheet.create({
    testStyle:{
        fontSize:30,
        fontWeight:'bold'
    },
    main:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        paddingTop:100
    }
})