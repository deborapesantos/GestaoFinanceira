import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import { Container,Right,Footer, FooterTab,Button} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Style from '../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadUsuarioService from "@Service/CadUsuarioService";
import Moment from 'moment';
import NavigationService from '@Service/Navigation';

let CadUsuarioServiceInstance = new CadUsuarioService();

export default class Cadastros extends React.Component {
  
 
  constructor(props) {
    super(props);
    
    this.state={
      listaMenu:[
    {Titulo:"Conta",route:"CadContaForm"},
    {Titulo:"Grupo",route:"CadGrupoFamiliarForm"},
    {Titulo:"Cartão de Crédito",route:"CadCartaoCreditoForm"},
    // {Titulo:"Participantes (em breve)",route:"CadParticipanteForm"},
    // {Titulo:"Objetivos (em breve)",route:"CadObjetivoForm"},
    // {Titulo:"Tipos de despesas (em breve)",route:"CadTipoDespesaForm"},
    // {Titulo:"Tipos de receitas (em breve)",route:"CadTipoReceitasForm"},
    {Titulo:"Receitas",route:"ContaReceitaForm"},
    {Titulo:"Despesas",route:"ContaDespesaForm"},
    {Titulo:"Despesas c/ cartão de crédito",route:"ContaDespesaCartaoCreditoForm"}
      ],
      listaMenu2:[
        {Titulo:"Gerenciar Usuários Vinculados",route:"ListaUsuarios"},
      ],
      model:false
    }

    
    
}

 componentDidMount() {
  CadUsuarioServiceInstance.UsuarioIsAdmin({})
  .then(x=>{
    this.setState({ model:x });
  })

 }


render() {
    return (
      <Container style={[Style.container]}>
      <ScrollView style={Style.body}>    
      <View style={[{paddingHorizontal:10}]}>
         <View style={[Style.row]}>
          <View style={Style.sectionGrey}>
                   <View style={Style.headerBg}>
                       <Text style={Style.sHeader}>{'Cadastros do Aplicativo'.toUpperCase()}</Text>
                   </View>
                   <FlatList
                       data={this.state.listaMenu}
                      
                       renderItem={({ item }) => (
                           <TouchableOpacity style={Style.itemsNormal} underlayColor='transparent' onPress={()=>{
                            this.props.navigation.navigate(item.route.toString())
                          }}>
                              <View style={[{padding:5}]}>
                                   <View style={[Style.row]}>
                                       <View style={[Style.col1]}>
                                          <Text style={[Style.textMediumg]}>{item.Titulo}</Text>
                                       </View>
                                    </View>
                                   
                               </View>
                           </TouchableOpacity>
                       )}
                   />
               </View>               
         </View>
       </View>          
  
    {
      this.state.model ?
        <View style={[{paddingHorizontal:10}]}>
         <View style={[Style.row]}>
          <View style={Style.sectionGrey}>
                   <View style={Style.headerBg}>
                       <Text style={Style.sHeader}>{'Gerenciamento'.toUpperCase()}</Text>
                   </View>
                   <FlatList
                       data={this.state.listaMenu2}
                      
                       renderItem={({ item }) => (
                           <TouchableOpacity style={Style.itemsNormal} underlayColor='transparent' onPress={()=>{
                            this.props.navigation.navigate(item.route)
                          }}>
                              <View style={[{padding:5}]}>
                                   <View style={[Style.row]}>
                                       <View style={[Style.col1]}>
                                          <Text style={[Style.textMediumg]}>{item.Titulo}</Text>
                                       </View>
                                    </View>
                                   
                               </View>
                           </TouchableOpacity>
                       )}
                   />
               </View>
               
         </View>
       </View>
       :
       <View></View>
    }
       
     </ScrollView>
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
            <Text>Perfil</Text>
          </Button>
          <Button style={{backgroundColor:'transparent'}}>
            
          </Button>
        </FooterTab>
      </Footer>
 </Container>
      )
  }
}




