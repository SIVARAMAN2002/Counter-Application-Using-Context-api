import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CountContextProvider from './context/CountContextProvider';
import MainScreen from './components/Mainscreen';
import TopView from './components/TopView';
import Bottom from './components/botoom';
export default function App() {
  return (
   
   <CountContextProvider>
    <MainScreen/>
    <TopView></TopView>
    <Bottom></Bottom>
   </CountContextProvider>
   
  
  );
}


