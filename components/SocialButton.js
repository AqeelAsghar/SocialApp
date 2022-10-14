import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {windowHeight,windowWidth} from '../utilies/Dimensions'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
// use destruct the buttonTitle to make dynamic Button 
// and store remaining params into rest parameter 
const SocialButton = ({buttonTitle,btnType,color,backgroundColor, ...rest}) =>{
    let bgColor = backgroundColor;
    return(
        <TouchableOpacity style={[styles.buttonContainer,{backgroundColor:bgColor}]} {...rest}>
            <View style={styles.iconWrapper}>
                <FontAwesome name={btnType} style={styles.icon} size={21} color={color}/>
            </View>
            <View style={styles.buttonTxtWrapper}>
                <Text style={[styles.buttonText,{color:color}]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default SocialButton;

const styles = StyleSheet.create({
    buttonContainer:{
        marginTop:10,
        width:'100%',
        height:windowHeight/15,
        padding:10,
        flexDirection:'row',
        borderRadius:3,
    },
    iconWrapper:{
     width:30,
     justifyContent:'center',
     alignItems:'center',
    },
    icon:{
     fontWeight:'bold'
    },
    buttonTxtWrapper:{
     flex:1,
     justifyContent:'center',
     alignItems:'center'
    },
    buttonText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#fff',
        fontFamily:'Lato-Regular',
    }

})