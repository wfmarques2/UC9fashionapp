import { Text, View, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';


export default class App extends Component {
  
  render() {
    return (
        <View>
            <View style={imagens.container}>
                <View style={imagens.imageWrapper}>
                <Image style={imagens.image} source={require('../images/imagewomanblue.png')}></Image>
                <View>
                    <Text style={imagens.text}>Lorem ipsum dolor sit amet, consectetur adip</Text>                                  
                </View>
                </View>
            </View>

            <View style={imagens.container}>
                <View style={imagens.imageWrapper}>
                <Image style={imagens.image} source={require('../images/imageguy.png')}></Image>
                <View>
                    <Text style={imagens.text}>Lorem ipsum dolor sit amet, consectetur adip</Text>                                  
                </View>
                </View>
            </View>

            <View style={imagens.container}>
                <View style={imagens.imageWrapper}>
                <Image style={imagens.image} source={require('../images/imageclothe.png')}></Image>
                <View>
                    <Text style={imagens.text}>Lorem ipsum dolor sit amet, consectetur adip</Text>                                  
                </View>
                </View>
            </View>

        </View>
    );
  }
}

const imagens = StyleSheet.create({
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
