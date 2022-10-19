import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { StyleSheet, Dimensions } from 'react-native'; 
import Icon from 'react-native-vector-icons/FontAwesome5'
var width = Dimensions.get('window').width;


export default class Header extends Component {
    render() {
        return (           
          <View style={header.background}>
            <View style={header.container}>
              <Image style={header.logo} source={require('../images/logo.png')}></Image>
              <TouchableOpacity>
                <Icon name='bars' size={25} color="#000" />
              </TouchableOpacity>               
            </View>
          </View>          
        );
    }
}

// Estilização do componente Header
const header = StyleSheet.create({
  background: {

  },
  container: {
    width: width,
    borderColor: "#000",
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 20,
    paddingBottom: 20,
  },
  icon: {
    width: 32, height: 32,
    backgroundColor: "#ccc"
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold"
  },
  subtitle: {
    fontSize: 14,
    color: "white",
    fontWeight: "500"
  },
  logo: {
    width: 160,
    height: 80
  }
  });