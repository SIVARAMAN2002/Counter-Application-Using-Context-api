import React, { useContext } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { UseCountContext, useCounterContext } from '../context/CountContextProvider';
import TopView from './TopView';
export default function MainScreen(){
  
const CounterContext=useCounterContext();
return(

    <View style={{backgroundColor:'red',marginTop:30,width:500,height:350}}>
        <Text style={{marginLeft:100,fontSize:130,marginTop:50}}>{CounterContext.count}</Text>
        
     </View>
);
    
}