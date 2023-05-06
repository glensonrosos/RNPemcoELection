import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../screens/Login';
import Admin from '../screens/Admin';
import Home from '../screens/Home';

const Stack =  createStackNavigator();

export default () =>{
    return(
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen component={Login} name="login"/>
            <Stack.Screen component={Admin} name="admin"/>
            <Stack.Screen component={Home} name="home"/>
        </Stack.Navigator>
    )
};