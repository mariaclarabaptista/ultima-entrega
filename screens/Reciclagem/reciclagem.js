import React, {Component} from 'react';
import { View, Text, ScrollView, Button, TouchableOpacity,  Platform, StyleSheet } from 'react-native';
import { screenWidth, screenHeight } from './constants/dimentions';
//import { createAppContainer } from 'react-navigation';
//import { createStackNavigator } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      
      <ScrollView style={styles.tela}>
          <View style={styles.cabecalho}>
            <Text style={styles.nomedaempresa}>RECICLAGEM</Text>
          </View>
          <View style={styles.corpotexto}>
            <Text style={styles.texto}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet aliquam id diam maecenas ultricies mi eget mauris. Amet risus nullam eget felis eget nunc. Lacus viverra vitae congue eu. In hac habitasse platea dictumst quisque. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Et ligula ullamcorper malesuada proin libero nunc. Lorem dolor sed viverra ipsum nunc aliquet bibendum enim. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Maecenas ultricies mi eget mauris pharetra et ultrices. Tincidunt augue interdum velit euismod in pellentesque massa placerat duis. Elit at imperdiet dui accumsan. Quis vel eros donec ac. Ornare quam viverra orci sagittis. Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus aliquam eleifend mi in nulla posuere sollicitudin. Tempor id eu nisl nunc mi ipsum. Consectetur adipiscing elit pellentesque habitant. Sed augue lacus viverra vitae. Blandit massa enim nec dui nunc mattis. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Habitant morbi tristique senectus et netus et malesuada fames. Lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Et tortor consequat id porta nibh venenatis cras. Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat.
            Eu lobortis elementum nibh tellus molestie nunc. Porttitor lacus luctus accumsan tortor posuere. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Blandit cursus risus at ultrices mi tempus. Odio aenean sed adipiscing diam donec adipiscing. Sodales ut eu sem integer. Leo urna molestie at elementum eu facilisis sed. Elit pellentesque habitant morbi tristique senectus et netus et. Pharetra massa massa ultricies mi quis hendrerit. Mattis aliquam faucibus purus in massa tempor nec. Quis varius quam quisque id diam vel quam. Id leo in vitae turpis massa sed elementum. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Suspendisse sed nisi lacus sed.
            </Text>
          </View>
      
      </ScrollView>
  
    );
    
  }
}

const styles = StyleSheet.create({
  tela: {
    backgroundColor: 'white'
  },

  cabecalho: {
    backgroundColor: '#3CB371'
  },

  nomedaempresa: {
    fontSize: 30,
    textAlign: 'center',
    marginTop:20,
    color:'white',
    fontFamily: 'sans-serif'

  },
  texto: {
    fontSize: 15,
    textAlign: 'center',
    color:'black',
    fontFamily: 'sans-serif-light'
  
  },
  corpotexto: {
    marginTop: 30
  },

  
  
},);
