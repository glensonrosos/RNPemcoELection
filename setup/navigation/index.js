import React from 'react';
import {Text,View,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './RootNavigator';


export default () => {
    return(    
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    )
}
