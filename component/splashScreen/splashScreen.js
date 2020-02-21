import React ,{Component} from 'react';
import {
    Text, View,Image,StyleSheet

}
    from 'react-native';

export default class SplashScreen extends Component {
    render() {
        return (
             <View style={styles.main}>
                 <Image  source={require("./img/photo_2018-11-09_21-55-53.jpg")} />

             </View>
        );
    }
}

export const styles = StyleSheet.create({
    main:{
        flexDirection:'column',
        width:'100%',
        alignItems:'center',
    },
    logoImage:{
        width:200,
        height:200
    },
    logoTitle:{
        fontFamily:'tahoma',
        fontSize:30
    },
    logoDescription:{
        fontFamily:"tahoma",
        fontSize:22
    }
});