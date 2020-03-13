import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default class Profile extends React.Component {
  //Este método é usado para inicializar nosso componente com estado inicial, nenhum elemento de UI nativo foi renderizado
  constructor(props) {
    super(props);
    this.state ={
      menu:[
        {
        name:'Meu Cadastro',
        page:'Config'
        },
        {
          name:'Gerenciar Grupos',
          page:'GerenciarGrupo'
        },
        {
          name:'Assinatura',
          page:'Assinatura'
        },
    ]
    }
  }

 componentDidMount() {
    
  }

  openPage(page){
    this.props.navigation.navigate(page)
  }
  
render() {
    return (
      <Container style={[Style.container]}>
      <ScrollView style={Style.body}>              
      <View style={[Style.row,{paddingHorizontal:20}]}>
         <View style={[Style.boxInfoflatList,Style.col1]}>
               <Text style={[Style.textCenter,Style.textMedium]}>{model.DisplayName}</Text>
       </View>
     </View>
    
       <View style={[{paddingHorizontal:10}]}>
         <View style={[Style.row]}>
          <View style={Style.sectionGrey}>
                   <View style={Style.headerBg}>
                       {/* <Text style={Style.sHeader}>{'Opções'.toUpperCase()}</Text> */}
                   </View>
                   <FlatList
                       data={this.state.menu}
                       style={Style.flatList}
                       renderItem={({ item }) => (
                           <TouchableOpacity style={Style.itemsInfoflatList} underlayColor='transparent' onPress={() => this.openPage(item.page)}>
                             <Text>{item.name}</Text>                          
                           </TouchableOpacity>
                       )}
                   />
               </View>
               
         </View>
       </View>
     </ScrollView>
 </Container>
      )
  }
}

Profile.navigationOptions = {
  header: null,
};


