import React, {Component} from 'react';
import { View, Text, ScrollView, Button, TouchableOpacity,  Platform, StyleSheet } from 'react-native';
import { screenWidth, screenHeight } from './constants/dimentions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


export default class App extends Component {
  render() {
    return (
      
      <ScrollView style={styles.tela}>

        <View style= {styles.margemlogin}>

        <Text style={styles.nomedaempresa}>Rio 40°</Text>
        <Text style={styles.textologin}> Cadastro </Text>
          <Input
            placeholder='Nome'
             />

          <Input
            placeholder='Email'
            
          />
          <Input
            placeholder='Username'
            
          />
          <Input
            placeholder='Senha'
            
          />

          <View style={styles.centralizarbotao}>

            <TouchableOpacity style={styles.botaoentrar}>

              <Text style={styles.textoentrar}> Cadastrar </Text>

            </TouchableOpacity>

          </View>

          
          
        </View>
      

      </ScrollView>
  
    );
    
  }
}

const styles = StyleSheet.create({
  tela: {
    backgroundColor: 'white'
  },
   
  margemlogin:{
    marginTop: screenHeight *0.2 ,
    borderColor: '#3CB371',
  },

  nomedaempresa:{
    fontSize: 30,
    textAlign: 'center',
    marginTop:20,
    color:'#3CB371',
    fontFamily: 'sans-serif'

  },

  textologin: {
    fontSize: 20,
    textAlign: 'center',
    marginTop:screenHeight *0.03,
    marginBottom: screenHeight *0.03,
    color:'#808080',
    fontFamily: 'sans-serif'

  },

  botaoentrar:{
    backgroundColor:'#3CB371',
    marginTop:screenHeight *0.03,
    width: screenWidth *0.3,
    alignItems: 'center',
    height: screenHeight *0.05,
  
  },

  centralizarbotao:{
    alignItems: 'center',

  },

  textoentrar:{
    color:'white',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif'
  },

 
  botaocadastro:{
    backgroundColor:'white',
    marginTop:screenHeight *0.03,
    
  },

  textocadastro:{
    color:'#808080',
    fontSize: 15,
    fontFamily: 'sans-serif'
  },
  
},);


