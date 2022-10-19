import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';

export default function ModaMaculina(props, {navigation}) {
  return (
    <View>
      <Text style={moda.titulo}> {props.titulo}</Text>
      <View style={moda.linha}></View>
      <ScrollView horizontal>
        <View style={moda.container}> 

          <TouchableOpacity style={[moda.roupaWrapper, props.color]}  onPress={() => navigation.navigate('DetalheModaMasculina')} >
            <Image style={moda.image} source= {props.imagem}></Image>
            <View>
              <Text style={moda.text}> {props.nome}</Text>                    
              <Text style={moda.text}> {props.preco}</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={[moda.roupaWrapper, props.color]}  onPress={() => navigation.navigate('DetalheModaMasculina')}>
            <Image style={moda.image} source= {props.imagem}></Image>
            <View>
              <Text style={moda.text}> {props.nome}</Text>                    
              <Text style={moda.text}> {props.preco}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[moda.roupaWrapper, props.color]}  onPress={() => navigation.navigate('DetalheModaMasculina')}>
            <Image style={moda.image} source={props.imagem}></Image>
            <View>
              <Text style={moda.text}> {props.nome}</Text>                    
              <Text style={moda.text}> {props.preco}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[moda.roupaWrapper, props.color]}  onPress={() => navigation.navigate('DetalheModaMasculina')}>
            <Image style={moda.image} source= {props.imagem}></Image>
            <View>
              <Text style={moda.text}> {props.nome}</Text>                    
              <Text style={moda.text}> {props.preco}</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={[moda.roupaWrapper, props.color]}  onPress={() => navigation.navigate('DetalheModaMasculina')}>
            <Image style={moda.image} source={props.imagem}></Image>
            <View>
              <Text style={moda.text}>{props.nome}</Text>                    
              <Text style={moda.text}>{props.preco}</Text>
            </View>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </View>
  );
}

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
