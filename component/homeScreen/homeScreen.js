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
import MjToichableHighlight from '../mjTouchableHighlight'
export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.gotoBuyCharge=this.gotoBuyCharge.bind(this)
        this.gotoBankApp=this.gotoBankApp.bind(this)
        this.gotoInternetCharge=this.gotoInternetCharge.bind(this)
        this.gotoMobileBill=this.gotoMobileBill.bind(this)
        this.gotoBuyTicket=this.gotoBuyTicket.bind(this)
        this.gotoServiceBill=this.gotoServiceBill.bind(this)
        this.gotoTelePardaz=this.gotoTelePardaz.bind(this)
        this.gotoInsurance=this.gotoInsurance.bind(this)
        this.gotoCharity=this.gotoCharity.bind(this)

    }
    gotoBuyCharge(){
        this.props.navigation.navigate('buyCharge');
    }
    gotoBankApp(){
        this.props.navigation.navigate('bankApp');
    }
    gotoInternetCharge(){
        this.props.navigation.navigate('internetCharge');
    } gotoMobileBill(){
        this.props.navigation.navigate('mobileBill');
    }
    gotoBuyTicket(){
        this.props.navigation.navigate('buyTicket');
    }
    gotoServiceBill(){
        this.props.navigation.navigate('serviceBill');
    }
    gotoTelePardaz(){
        this.props.navigation.navigate('telePardaz');
    }
    gotoInsurance(){
        this.props.navigation.navigate('insurance');
    }
    gotoCharity(){
        this.props.navigation.navigate('charity');
    }






    render(){
        return(
            <View style={styles.container}>


                <View >
                    <ImageBackground source={require('./img/Untitled-1.jpg' )}  style={{width: '100%', height:'100%'}}>
                        <View style={styles.main}>

                            <MjToichableHighlight source={require("./img/rounded-icon-buy-charge.jpg")} style={styles.img} onPress={this.gotoBuyCharge}/>
                            <MjToichableHighlight source={require("./img/rounded-icon-Bank-App.gif")} onPress={this.gotoBankApp}/>
                            <MjToichableHighlight source={require("./img/rounded-icon-internet-charge.jpg")} style={styles.img} onPress={this.gotoInternetCharge}/>

                        </View>
                        <View style={styles.main}>
                            <Text style={styles.text}>خرید شارژ</Text>
                            <Text style={styles.text}>کارت به کارت</Text>
                            <Text style={styles.text}>شارژ اینترنت</Text>
                        </View>
                        <View style={styles.main}>
                            <MjToichableHighlight source={require("./img/rounded-icon-mobile-bill.jpg")} style={styles.img} onPress={this.gotoMobileBill}/>
                            <MjToichableHighlight source={require("./img/rounded-icon-Bank-App.gif")} style={styles.img} onPress={this.gotoBuyTicket}/>
                            <MjToichableHighlight source={require("./img/rounded-icon-service-bill.jpg")} style={styles.img} onPress={this.gotoServiceBill}/>
                        </View>
                        <View style={styles.main}>
                            <Text style={styles.text}>قبض موبایل و تلفن</Text>
                            <Text style={styles.text}>خرید بلیت هواپیما</Text>
                            <Text style={styles.text}>قبض خدماتی</Text>
                        </View>
                        <View style={styles.main}>
                            <MjToichableHighlight source={require("./img/rounded-icon-tele-pardaz.jpg")} style={styles.img} onPress={this.gotoTelePardaz}/>
                            <MjToichableHighlight source={require("./img/rounded-icon-insurance.jpg")} style={styles.img} onPress={this. gotoInsurance}/>
                            <MjToichableHighlight source={require("./img/rounded-icon-charity.jpg")} style={styles.img} onPress={this.gotoCharity}/>
                        </View>
                        <View style={styles.main2}>
                            <Text style={styles.text}>تله پرداز</Text>
                            <Text style={styles.text}>بیمه</Text>
                            <Text style={styles.text}>نیکوکاری</Text>
                        </View>
                    </ImageBackground>
                </View>

            </View>

        )
    }
}

const styles=StyleSheet.create({
    testStyle:{
        fontSize:30,
        fontWeight:'bold'
    },
    main:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:15,

    },
    main2:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:0,
        paddingBottom:0

    },
    container:{
        flexDirection:'column',
        justifyContent:'flex-start',
        // background:"./img/Untitled-1.jpg"
        //1080*1920
    },
    header:{
        backgroundColor:"#2e302d",
        height:70
    },
    img:{
        borderRadius:50,

    },
    text:{
        fontFamily:'Yekan',
        fontSize:16,
        color:'#f1f5f6',
        textAlign:'center'

    },
    body:{
        paddingBottom:100
    },
    footer:{
        backgroundColor:'#6f7376',
        height:110,

    }


});