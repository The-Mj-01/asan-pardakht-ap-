import React, {Component} from 'react';
import {View,Image,Text,TouchableHighlight,StyleSheet,Alert} from 'react-native';
import MjTextInput from './mjTextInput';
import MjButton from './mjButton';


export default class LoginForm extends Component {

    constructor(props) {
        super(props)


    }



    render() {

        return (

            <View style={styles.main}>


                <View style={styles.waterMark}>
                    <Image style={styles.logo} source={require("./img/photo_2018-11-09_21-58-35.jpg")}/>
                    <Text style={styles.title}>آسان پرداخت</Text>
                </View>

                <MjTextInput placeHolder="نام کاربری" img={require("./img/user_24x24.png")} onChangeText={this.props.onUserNameChange} />

                <MjTextInput  placeHolder="رمز عبور" img={require("./img/lock_24x24.png")} onChangeText={this.props.onPasswordChange} />

                <MjButton btnText="ورود" onPress={this.props.onLogin} />

            </View>
        )
    }


}


const styles = StyleSheet.create({


        waterMark: {
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end'
        },
        main: {

            marginTop: '10%',
            flexDirection: 'column',
            justifyContent: 'flex-start',

            alignItems:'stretch' ,
            width: '80%'
            /**
             * //Tavjoh: agar parent width nadashte bashad child value darsad nemipazirad.
             *  Zira darsad besorate nesbi az value parent mohaseve mishavad
             */
        },
        logo: {
            width: "100%",
            height: 300,

        },
        title: {
            fontSize: 22,
            fontFamily: 'tahoma',

            marginBottom: '10%',
        },
        description: {
            fontSize: 16,
            fontFamily: 'tahoma'
        }


    }
)
