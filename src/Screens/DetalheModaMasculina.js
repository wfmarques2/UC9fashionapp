import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default function DetalheModaMasculina() {
  return (        
    <View style={{backgroundColor: '#c4c4c4', height: 1000}}>

      <View>
        <View style={style.wrapperImage}>
          <Image style={style.image}
            source={require('../images/detalhemoda1.png')}
          />
        </View>
        

        <View style={style.wrapperText}>

          <View style={style.wrapperText1}>
            <Text style={{fontSize: 16, color: '#363F4B'}}>Camiseta</Text>
            <Text style={{fontSize: 16, color: '#363F4B'}}>R$ 30,00</Text>
          </View>

          <View>
            <Text style={{fontSize: 16, color: '#363F4B'}}>Lorem Ipsum dolor sit amet</Text>
          </View>

        </View>

        

        <View style={style.areaBtn}>
            <TouchableOpacity style={style.btn}> 
              <Text style={style.btnText}>Comprar</Text>
            </TouchableOpacity>
        </View>
      </View>

      
    </View>
  )
}

const style = StyleSheet.create({
  image: {
    margin: 30
  }, 
  wrapperImage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  wrapperText: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  wrapperText1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  areaBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30
  },
  btn: {
    width: 170,
    padding: 10,
    backgroundColor: '#363F4B',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',

  },
  btnText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto'
  },
})