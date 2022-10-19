import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import Header from '../components/Header'
import Moda from '../components/Moda'
import Imagens from '../components/Imagens'
import Sobre from '../components/Sobre'
import Contato from '../components/Contato'
import Footer from '../components/Footer'

export default function TelaInicial({navigation}) {

    return (
      <ScrollView>
        <Header titulo='ok' subtitulo="Tudo Funcionando" />
        <View style={styleApp.imageWrapper}>
        <Image style={styleApp.image} source={require('../images/imagebanner.png')}></Image>
        </View>      

        <Moda
          telaDetalhe = {'Moda Masculina'}
          color = {{backgroundColor: '#363F4B'}}
          titulo = "Moda Masculina"
          imagem = {require('../images/modamasculina.png')}
          nome = "Camiseta"
          preco = "R$ 30,00"
          navigation = {navigation}
        />
        
        <Moda
          telaDetalhe = {'Moda Feminina'}
          color = {{backgroundColor:'#F56565'}}
          titulo = "Moda Feminina"
          imagem = {require('../images/modafeminina.png')}
          nome = "Look de Praia"
          preco = "R$ 45,00"
          navigation = {navigation}
        />

        <Sobre />

        <Contato />

        <Footer />

      </ScrollView>
    )

}

const styleApp = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#e4e4e4',
      borderRadius: 28,
      margin: 20,
    },
    imageWrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {    
      margin: 30,
    },
    text: {
      color: '#000',
      fontSize: 14,
      padding: 50
    },
});

const moda = new StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 8,
  },
  titulo: {
    fontSize: 18,
    color: '#000',
    marginLeft: 8,
    fontFamily: 'Roboto'
  },
  linha: {
    marginLeft: 8,
    borderColor: '#000',
    borderTopWidth: 1,
  },
  roupaWrapper: {
    margin: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#363F4B',
    borderRadius: 28,
  },
  image: {
    borderRadius:28,
  },
  text: {
    textAlign: 'center',
    color: '#FFFFFF',
  },
  
});