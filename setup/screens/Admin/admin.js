import React from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Admin = () =>{

    const navigation = useNavigation();
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
            <Text>Admin</Text>            
        </View>
    )
};

export default Admin;