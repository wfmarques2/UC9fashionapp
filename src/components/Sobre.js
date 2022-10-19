import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { StyleSheet, Dimensions } from 'react-native';
import Imagens from './Imagens'
var width = Dimensions.get('window').width;

export default class Sobre extends Component {
  render() {
    return (
      <ScrollView>

        <View style={styleText.container}>
          <Text style={styleText.title}>A Hugo BOSS</Text>

          <Text style={styleText.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Fusce et diam ligula. Praesent sit amet urna arcu.
            Duis eu porta eros, ac dignissim risus. Fusce vel 
            vulputate enim. Nunc lacinia risus eu orci facilisis 
            dapibus. Praesent ac rhoncus mi. Nullam mollis erat 
            neque, in accumsan mauris suscipit a. Donec eget ex 
            pulvinar, vehicula nisi eu, viverra ex. Ut felis orci
          </Text>

          <View style={{alignItems: 'center'}}>
            <Image style={styleText.image}source={require('../images/imagebazar.png')} />
          </View>          

          <Text style={styleText.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing 
            elit. Fusce et diam ligula. Praesent sit amet urna arcu.
            Duis eu porta eros, ac dignissim risus. Fusce vel 
            vulputate enim. Nunc lacinia risus eu orci facilisis 
            dapibus. Praesent ac rhoncus mi. Nullam mollis erat 
            neque, in accumsan mauris suscipit a. Donec eget ex 
            pulvinar, vehicula nisi eu, viverra ex. Ut felis orci
          </Text>

          <View style={{alignItems: 'center'}}>
            <Image style={styleText.image}source={require('../images/imagebazar2.png')} />
          </View>

          <Imagens/>
        </View>
      </ScrollView>
    );
  }
}

// Estilização do componente Header
const styleText = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      margin: 15
    },
    title: {
      fontSize: 18,
      color: '#000',
      margin: 8,
      fontFamily: 'Roboto'
    },
    text: {
      fontSize: 14,
      margin: 8,
      color: '#000'
    },  
    image: {
      justifyContent: 'center',
      alignItems: 'center'
    },
  });