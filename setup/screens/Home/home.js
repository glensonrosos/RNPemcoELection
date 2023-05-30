import React from 'react';
import {Text,View,TouchableOpacity,Image,Dimensions,FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ImageCan from '../../../assets/tita.png'
import customData from '../../dummyData/candidate.json'

const Home = () =>{

    const windowWidth = Dimensions.get('window').width;

    const navigation = useNavigation();
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start',backgroundColor:'#feca57' }}> 
            <FlatList
                data={customData.data}

                ListHeaderComponent= {()=> 
                <>
                    <View style={{flexDirection:'row',marginTop:20,flex:1,justifyContent:'center',alignItems:'center',}}>
                        <Text style={{fontSize:20,}}>Ethics Committee</Text>
                    </View>
                    <View style={{marginTop:10}}>
                    </View>
                </>
                }

                showsVerticalScrollIndicator={false}

                renderItem={({item}) => 
                <TouchableOpacity style={{marginTop:20}}>
                    <View style={{flexDirection:'row',borderWidth:1,height:150,borderRadius:20,width:(windowWidth-50),justifyContent:'center',alignItems:'center',paddingHorizontal:10}}>
                        <Image source={{uri:item.photo}} resizeMode="contain" style={{width:140,height:140}}/>
                        <View style={{padding:10,flex:1,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontSize:20}}>{item.name}</Text>
                            <Text style={{fontSize:20,fontWeight:'bold'}}>{item.position}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                }
                keyExtractor={item => item.name}
            />
            <View style={{marginTop:60}}>

            </View>

            

            <View style={{position:'absolute',bottom:0,right:0,left:0,backgroundColor:'#ff9f43',flexDirection:'row',height:50,justifyContent:'flex-start',alignItems:'center'}}>
                <Text style={{fontSize:20,paddingLeft:20}}>Ethics Comittee</Text>
                <Text style={{fontSize:20,paddingLeft:20}}>3/4</Text>
                <TouchableOpacity style={{borderWidth:1,borderRadius:5,justifyContent:'center',alignItems:'center',paddingHorizontal:15,marginLeft:15,paddingVertical:10}}>
                    <Text>PROCEED</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Home;