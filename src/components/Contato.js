import React, { Component } from 'react'
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import { StyleSheet, Dimensions } from 'react-native'; 
var width = Dimensions.get('window').width;

export default class Contato extends Component {
  render() {
    return (
        <View>
            <View style={styleText.container}>

                <Text style={styleText.title}>Contato</Text>
                
                <View style={styleText.localizacaoWrapper}> 
                    <Text style={styleText.text}>CEP: </Text>
                    <Text style={styleText.text}>94920-492</Text>
                </View>

                <View style={styleText.localizacaoWrapper}> 
                    <Text style={styleText.text}>Endereço: </Text>
                    <Text style={styleText.text}>Rua Goiabeira</Text>
                </View>

                <View style={styleText.localizacaoWrapper}> 
                    <Text style={styleText.text}>Bairro: </Text>
                    <Text style={styleText.text}>Jardim do Bosque</Text>
                </View>

                <View style={styleText.localizacaoWrapper}> 
                    <Text style={styleText.text}>Cidade: </Text>
                    <Text style={styleText.text}>Cachoeirinha</Text>
                </View>

                <View style={styleText.localizacaoWrapper}> 
                    <Text style={styleText.text}>Estado: </Text>
                    <Text style={styleText.text}>RS</Text>
                </View>

                <View style={styleText.localizacaoWrapper}>  
                    <Text style={styleText.text}>Número: </Text>
                    <Text style={styleText.text}>90</Text>
                </View>

                <View style={styleText.localizacaoWrapper}> 
                    <Text style={styleText.text}>Telefone para contato: </Text>
                    <Text style={styleText.text}>(51)9913-58521</Text>
                </View>

                <View style={styleText.localizacaoWrapper}> 
                    <Text style={styleText.text}>E-mail: </Text>
                    <Text style={styleText.text}>hugoboss@contato.com.br</Text>
                </View>

            </View>
            <View>
                <TextInput style={ form.input } autoCapitaliz="words" placeholder='Nome' />
                <TextInput style={ form.input } keyboardType="email-address" placeholder='E-mail' />
                <TextInput style={[ form.input, form.textArea ]} autoCapitaliz="words" placeholder='Mensagem' />
                
                <View style={form.areaBtn}>
                    <TouchableOpacity style={form.btn}> 
                        <Text style={form.btnText}>Fazer Contato</Text>
                    </TouchableOpacity>
                </View>
            </View>

      </View>
    );
  }
}

// Estilização do componente Header
const styleText = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      margin: 15
    },
    title: {
      fontSize: 18,
      color: '#000',
      marginBottom: 10,
      fontFamily: 'Roboto'
    },
    localizacaoWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },  
    text: {
      fontSize: 16,   
      color: '#000',
    },
});

const form = StyleSheet.create({
    input: {
        borderRadius: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        color: '#000',
        padding: 8,       
        margin: 8 
    },
    textArea: {
        paddingBottom: 20
    },
    areaBtn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30
    },
    btn: {
        padding: 12,
        backgroundColor: '#fff',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',

    },
    btnText: {
        fontSize: 14,
        color: '#000',
        textAlign: 'center',
        fontFamily: 'Roboto'
    },
    linha: {
        marginLeft: 8,
        borderColor: '#000',
        borderTopWidth: 1,
    }
})