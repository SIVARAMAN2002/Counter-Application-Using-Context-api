import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';

import { UseCountContext, useCounterContext } from '../context/CountContextProvider';
import { AntDesign } from '@expo/vector-icons';

export default function Bottom(){


    const CounterContext=useCounterContext();
    const c=CounterContext.count;
    return(
   <View style={styles.con}>
       <TouchableOpacity style={{padding:10}} onPress={()=>{
           CounterContext.setCount(c-1);
       }}><AntDesign name="minus" size={80} color="black" style={{marginTop:100,marginLeft:30}} /></TouchableOpacity>
   </View>
    );
}


const styles=StyleSheet.create({
   
   con:{
       backgroundColor:'green',
        width:180,
        marginLeft:180,
        marginTop:-400,
        height:400
   }
})