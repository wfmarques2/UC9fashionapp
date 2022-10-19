import 'react-native-gesture-handler';
import { Text, View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';
import {NavigationContainer} from '@react-navigation/native'
import StackNavigator from './src/navigators/StackNavigator'
import TabNavigator from './src/navigators/TabNavigator'
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

var width = Dimensions.get('window').width;

