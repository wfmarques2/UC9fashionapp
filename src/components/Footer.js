import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
var width = Dimensions.get('window').width;

export default class Header extends Component {
  render() {
    return (
      <View style={footer.background}>
        <View style={footer.container}>
          <Image style={footer.logo} source={require('../images/logo.png')}></Image>
          <View style={footer.iconWrapper}>
            <TouchableOpacity style={footer.icon}>
              <Icon name='google' size={30} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity style={footer.icon}>
              <Icon name='facebook' size={30} color="#000" />
            </TouchableOpacity>     

            <TouchableOpacity style={footer.icon}>
              <Icon name='instagram' size={30} color="#000" />
            </TouchableOpacity>     

            <TouchableOpacity style={footer.icon}>
              <Icon name='pinterest' size={30} color="#000" />
            </TouchableOpacity>         
          </View>

          <View style={footer.iconWrapper}>
            <TouchableOpacity style={footer.icon}>
              <Icon name='cc-visa' size={30} color="#000" />
            </TouchableOpacity>

            <TouchableOpacity style={footer.icon}>
              <Icon name='cc-mastercard' size={30} color="#000" />
            </TouchableOpacity>     

            <TouchableOpacity style={footer.icon}>
              <Icon name='cc-paypal' size={30} color="#000" />
            </TouchableOpacity>     

            <TouchableOpacity style={footer.icon}>
              <Icon name='money' size={30} color="#000" />
            </TouchableOpacity>
          </View>             
        </View>
      </View>
    );
  }
}

// Estilização do componente Header
const footer = StyleSheet.create({
  background: {
    borderTopWidth: 1,
    borderTopColor: '#000',
    padding: 40
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconWrapper : {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  icon: {
    margin: 8
  },
  logo: {
    width: 160,
    height: 80,  
    marginBottom: 10
  }
});