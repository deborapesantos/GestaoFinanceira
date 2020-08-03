import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import { Container,Right,Footer, FooterTab,Button,ActionSheet} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Style from '../../theme/style';
import {Root} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadUsuarioService from "@Service/CadUsuarioService";
import Moment from 'moment';
import NavigationService from '@Service/Navigation';
import ActionButton from 'react-native-action-button';

let CadUsuarioServiceInstance = new CadUsuarioService();

export default class ListaUsuarios extends React.Component {
 
  constructor(props) {
    super(props);
    
    this.state={
      model:[],
      options:[
        {text:'Editar',id:1},
        {text:'Excluir',id:2},
        {text:'Cancelar',id:3}
      ]
    };

    
}

selecionarAcao(param,index,item){
  if(param){
    var indexi = index+1;
    if(indexi != 0){
      //editar
      this.props.navigation.navigate('CadUsuarioForm',{id:item.CadUsuarioId});
    }else if(indexi != 1){
      //excluir
      console.log("excluir");
    }  

}
}

 componentDidMount() {
  CadUsuarioServiceInstance.ListarUsuarios({})
  .then(x=>{
    this.setState({ model:x });
    console.log(this.state.model);
  })

 }


render() {
    return (
      <Root>
      <Container style={[Style.container]}>
      <ScrollView style={Style.body}>              
  
    
       <View style={[{paddingHorizontal:10}]}>
         <View style={[Style.row]}>
          <View style={Style.sectionGrey}>
                   <View style={Style.headerBg}>
                       <Text style={Style.sHeader}>{'Gerenciar Usuarios'.toUpperCase()}</Text>
                   </View>
                   <FlatList
                       data={this.state.model}
                      
                       renderItem={({ item }) => (
                           <TouchableOpacity style={[Style.itemsNormal,{height:80}]} underlayColor='transparent' 
                           onPress={() =>
                            ActionSheet.show(
                              {
                                options: this.state.options,
                                cancelButtonIndex: this.state.options[2],
                                destructiveButtonIndex: this.state.options[2],
                                title: "Escolha uma ação"
                              },
                              buttonIndex => {
                                this.selecionarAcao(this.state.options[buttonIndex],buttonIndex,item);
                              }
                            )}
                          >
                              <View style={[{padding:5}]}>
                                   <View style={[Style.row]}>
                                       <View style={[Style.col1]}>
                                          <Text style={[Style.textMediumg]}>{item.Nome}</Text>
                                       </View>
                                    </View>  
                                    <View style={[Style.row]}>
                                       <View style={[Style.col1]}>
                                          <Text style={[Style.textMediumg]}>{item.Email}</Text>
                                       </View>
                                    </View>                                   
                               </View>
                           </TouchableOpacity>
                       )}
                   />
               </View>
               
         </View>
       </View>
     </ScrollView>
     <ActionButton buttonColor="#9b59b6">
      <ActionButton.Item buttonColor='#1abc9c' title="Cadastrar Usuário Vinculado" 
      onPress={() => this.props.navigation.navigate('NovoCadUsuario')}>
          <Icon name="level-up" style={styles.actionButtonIcon} />
        </ActionButton.Item>     
     </ActionButton>
     <Footer style={{backgroundColor:'transparent'}}>
                <FooterTab style={{backgroundColor:'transparent'}}>
                  <Button style={{backgroundColor:'#ffffff'}}
                   onPress={()=> this.props.navigation.navigate('HomeIndex')}>
                    <Text>Carteira</Text>
                  </Button>
                  <Button style={{backgroundColor:'#ffffff'}}
                  onPress={()=> this.props.navigation.navigate('Cadastros')}>
                    <Text>Cadastros</Text>
                  </Button>
                  <Button active style={{backgroundColor:'#ffffff',width:100, borderTopRightRadius:80, borderRightWidth:2,borderRightColor:'#cccccc'}}>
                    <Text>Menu</Text>
                  </Button>
                  <Button style={{backgroundColor:'transparent'}}>
                    
                  </Button>
                </FooterTab>
              </Footer>
 </Container>
 </Root>
      )
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});


