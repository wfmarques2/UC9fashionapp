import { Text, View } from 'react-native'
import React, { Component } from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TelaInicial from '../Screens/TelaInicial'
import Moda from '../components/Moda'
import DetalheModaMasculina from '../Screens/DetalheModaMasculina'
import DetalheModaFeminina from '../Screens/DetalheModaFeminina'

const Stack = createStackNavigator()

export default function StackNavigator() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Página Inicial" component={TelaInicial}  options={{headerShown: false}}/>
        <Stack.Screen name="Moda Masculina" component={DetalheModaMasculina} />
        <Stack.Screen name="Moda Feminina" component={DetalheModaFeminina} />
      </Stack.Navigator>
    )
}