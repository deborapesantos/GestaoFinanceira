import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';


export default class Outros extends React.Component {
  //Este método é usado para inicializar nosso componente com estado inicial, nenhum elemento de UI nativo foi renderizado
  constructor(props) {
    super(props);
  }

 componentDidMount() {
    
  }
  
render() {
    return (
        <View >
         <Text> Outros</Text>
        </View>
      )
  }
}

Outros.navigationOptions = {
  header: null,
};


