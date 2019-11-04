import React, {Component} from 'react';
import { View, Text, ScrollView, Button, TouchableOpacity,  Platform, StyleSheet } from 'react-native';
import { screenWidth, screenHeight } from './constants/dimentions';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      
      <ScrollView style={styles.tela}>
          <Text style={styles.nomedaempresa}>Rio 40°</Text>
          <Text style={styles.subtitulo}> SORVETES</Text>
          <TouchableOpacity 
            style={styles.botao}
            onPress={() => this.props.navigation.navigate('ReciclagemScreen')}
            >
            <Text 
            style={styles.textobotao}
            >
              RECICLAGEM
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text 
            style={styles.textobotao}
            >
           
              RESÍDUOS
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text 
            style={styles.textobotao}
            >
           
              ENERGIA
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text 
            style={styles.textobotao}
            >
           
              DÚVIDAS 
            </Text>
          </TouchableOpacity>

          
          
          

      </ScrollView>
      

      
    );
    
  }
}

const styles = StyleSheet.create({
  tela: {
    backgroundColor: 'white'
  },

  nomedaempresa: {
    fontSize: 30,
    textAlign: 'center',
    marginTop:20,
    color:'#3CB371',
    fontFamily: 'sans-serif'

  },
  subtitulo: {
    fontSize: 15,
    textAlign: 'center',
    color:'#3CB371',
    fontFamily: 'sans-serif-light'
  },

  botao:{
    backgroundColor: '#3CB371',
    width: screenWidth * 0.5,
    marginTop: 20
  
    
  },

  textobotao:{
    color: 'white',
    fontFamily: 'sans-serif',
    margin:10
  },


  botaopressed:{
    color: 'white',
   
  },
  
},);
