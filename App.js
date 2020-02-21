/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Alert
} from 'react-native'
//import LoginScreen from './loginScreen';
import SplashScreen from './component/splashScreen/splashScreen';
import SimpleList from './component/simpleList'
import LoginForm from './component/loginForm/loginForm';
import HomeScreen from './component/homeScreen/homeScreen'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import HeaderTitleComponent from './component/headerTitleComponent'
import BuyCharge from "./component/screens/buyCharge";
import BankApp from "./component/screens/bankApp";
import InternetCharge from "./component/screens/internetCharge";
import MobileBill from "./component/screens/mobileBill";
import BuyTicket from "./component/screens/buyTicket";
import ServiceBill from "./component/screens/serviceBill";
import Insurance from "./component/screens/insurance";
import Charity from "./component/screens/charity";
import TelePardaz from "./component/screens/telePardaz";


const TabNavigator = createBottomTabNavigator({
        Home: HomeScreen,
        //Settings: Setting
    }
)

const StackNavigator = createStackNavigator({
    main: TabNavigator,
    buyCharge: BuyCharge,
    bankApp:BankApp,
    internetCharge:InternetCharge,
    mobileBill:MobileBill,
    buyTicket:BuyTicket,
    serviceBill:ServiceBill,
    insurance:Insurance,
    charity:Charity,
    telePardaz:TelePardaz,



    } ,
    {
        navigationOptions:({navigation})=>(
            {
                headerTitle:<HeaderTitleComponent/> ,
                headerStyle: {
                    backgroundColor: '#333333',

                },
                headerTintColor: '#fff'


            }
        )
    })

type Props = {};
export default class App extends Component<Props> {

    onUserNameChange(/*text*/ userNameObj){
        this.setState({/*userName:text*/   userName:Object.assign({},userNameObj)})

    }
    onPasswordChange(/*text*/ passwordObj){
        this.setState({/*password: text*/ password:Object.assign({},passwordObj)})

    }
    onLogin(){
        if (this.state.userName.value=="demo" && this.state.password.value== "demo")
            this.setState({isLogin:true})
        else{
            Alert.alert('Invalid Username or Password')
        }
    }

    constructor(Props) {
        super(Props);
        this.state = {
            showSplash: true,
            isLogin:false,

            userName:{
                value:'',
                isValid:false
            },
            password:{
                value:'',
                isValid:''
            }

        }

        this.hideSplash =this.hideSplash.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onUserNameChange=this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }
    componentDidMount()
    {

        setTimeout(this.hideSplash,500)
    }
    hideSplash(){
    this.setState({showSplash: false})
    }

    getSplashView(){
    return(
        <View style={styles.container}>
            <SplashScreen/>
        </View>
    )
    }
    render()
    {
       // return(<SimpleList/>)

        if (this.state.showSplash) {
            return this.getSplashView();
        }

         else if(!this.state.isLogin) {
            return (
                <View style={styles.container}>
                    <LoginForm
                        onLogin={this.onLogin}
                        onUserNameChange={this.onUserNameChange}
                        onPasswordChange={this.onPasswordChange}
                    />
                </View>
            );
        }

        else {
            return <StackNavigator/>
        }

    }
}

    const styles =StyleSheet.create({
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#F5FCFF',
        },
        welcome:{
            fontSize:20,
            textAlign:'center',
            margin:10,
        },
        instructions:{
            textAlign:'center',
            color:'#333333',
            marginBottom:5,
        },
    })



