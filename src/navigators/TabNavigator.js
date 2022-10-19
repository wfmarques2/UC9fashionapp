import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator'
import Sobre from '../components/Sobre'
import Contato from '../components/Contato'
import TelaInicial from '../Screens/TelaInicial'


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
      <Tab.Navigator>
        <Tab.Screen 
            component={StackNavigator} 
            name="Página Inicial" 
            options={{headerShown: false}}
        />
        <Tab.Screen component={Sobre} name="Sobre"  options={{headerShown: false}}/>
        <Tab.Screen component={Contato} name="Contato"  options={{headerShown: false}}/>
      </Tab.Navigator>
    )
}