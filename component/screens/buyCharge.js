import React, {Component} from 'react'
import {
    View,
    Image,
    Text,
    TouchableHighlight,
    StyleSheet,
    Alert,
    WebView,
    Platform,
    ActivityIndicator,
    ImageBackground,
} from 'react-native'


export default class BuyCharge extends Component{
    ActivityIndicatorLoadingView(){
        return(
            <ActivityIndicator
            color="#002688"
            size='large'
            style={styles.ActivityIndicatorStyle}/>
        )
    }
    render(){
        return(
            <WebView
            style={styles.WebViewStyle}
            source={{uri:"https://ikc.shaparak.ir/eshop/TopUp/Manage#!"}}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            startInLoadingState={true}
            renderLoading={this.ActivityIndicatorLoadingView}
            />
        );
    }
}


const styles = StyleSheet.create({
    WebViewStyle:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: (Platform.os)==='ios'?20:0,
    },
    ActivityIndicatorStyle:{
    position: 'absolute',
        left: 0,
        top: 0,
        right:0,
        bottom:0 ,
        justifyContent: 'center',
        alignItems: 'center'
    }
})