import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet, KeyboardAvoidingView,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

import LOGO from '../../../assets/logo-trans.png';

const Login = () =>{

    const navigation = useNavigation();
    return(
        <View style={styles.container}> 
            {/* LOGO */}
            <View style={{marginTop:25,flex:1,justifyContent:'center',alignItems:'center'}}>
                <Image source={LOGO} resizeMode="contain" style={{width:220,height:220}} />
                <Text style={{fontSize:15,fontWeight:'900',paddingVertical:10}}>PEMCO ELECTION APP</Text>
            </View>
             {/*INPUT  */}
            <View style={{marginTop:50,flex:1,justifyContent:'flex-start',alignItems:'center'}}>
                <KeyboardAvoidingView behavior="height">
                    <View style={{borderWidth:1,paddingHorizontal:25,paddingVertical:15,borderRadius:25}}>        
                        <TextInput value="" placeholder="4 DIGIT GENERATED CODE"/>
                    </View>
                    <TouchableOpacity style={{marginTop:25,borderWidth:1,paddingVertical:15,paddingHorizontal:25,borderRadius:25,backgroundColor:'#222f3e'}}
                        onPress={()=>{navigation.push("home")}}>
                        <Text style={{textAlign:'center',color:'#fff'}}>LOGIN</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
            <View style={{position:"absolute",right:15,bottom:15}}>
                <Text style={{fontSize:15,fontWeight:'400'}}>Developed by: Glenson Rosos</Text>
            </View>         
        </View>
    )
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#feca57'
    }
});


export default Login;