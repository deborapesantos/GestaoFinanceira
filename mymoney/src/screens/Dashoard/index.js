import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default class Dasboard extends React.Component {
  //Este método é usado para inicializar nosso componente com estado inicial, nenhum elemento de UI nativo foi renderizado
  constructor(props) {
    super(props);
    this.state ={
      meses:[
        {text:'Janeiro', id: 1},
        {text:'Fevereiro',id: 2},
        {text:'Março',id: 3},
        {text:'Abril',id: 4},
        {text:'Maio',id: 5},
        {text:'Junho',id: 6},
        {text:'Julho',id: 7},
        {text:'Agosto',id: 8},
        {text:'Setembro',id: 9},
        {text:'Outubro',id: 10},
        {text:'Novembro',id: 11},
        {text:'Dezembro',id: 12},
      ]
    }
  }

 componentDidMount() {
    
  }
  
render() {
    return (
        <View >
         <Text> dashboard</Text>
        </View>
      )
  }
}

Dasboard.navigationOptions = {
  header: null,
};


