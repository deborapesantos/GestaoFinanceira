import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,FlatList ,Switch} from 'react-native';
import { Container,Right,Footer, FooterTab,Button,ActionSheet} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Style from '../../theme/style';
import {Root} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadUsuarioService from "@Service/CadUsuarioService";

let CadUsuarioServiceInstance = new CadUsuarioService();
export default class CadUsuarioForm extends React.Component {

  constructor(props) {
    super(props);

    this.state={
      model:{
        CadUsuarioId:0,
        Nome:"",
        Email:"",
        ListaPermissaoGrupo:[],
        ListaGrupo:[]
      },
     ListaGrupo:[]
    }

}

adicionarRemoverPermissaoGrupo(grupo,tipo){
  grupo.Permitido = tipo;
  if(tipo == true){
   
    CadUsuarioServiceInstance.AdicionarGrupoPermissao(grupo)
    .then(x=>{
      CadUsuarioServiceInstance.GetUsuarioGerenciamento(grupo.CadUsuarioId)
      .then(x=>{
        this.setState({ model:x });
      })
    })

  }else{

    CadUsuarioServiceInstance.RemoverGrupoPermissao(grupo)
    .then(x=>{
      CadUsuarioServiceInstance.GetUsuarioGerenciamento(grupo.CadUsuarioId)
      .then(x=>{
        this.setState({ model:x });
      })
    })
    
  }

}

 componentDidMount() {
  const { id }  = this.props.route.params;
  console.log(id);
  if(id != null){
    CadUsuarioServiceInstance.GetUsuarioGerenciamento(id)
  .then(x=>{
    this.setState({ model:x });
  })
  }

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
                       <Text style={Style.sHeader}>{'Gerenciar Permissão de Visualização de Grupo'.toUpperCase()}</Text>
                   </View>
                   <View style={Style.headerBg}>
                   <Text style={[Style.textMediumg]}>{this.state.model.Nome.toUpperCase()}</Text>
                   </View>
                 
                   <FlatList
                       data={this.state.model.ListaGrupo}

                       renderItem={({ item }) => (
                           <View style={Style.itemsNormal}>
                              <View style={[{padding:5}]}>
                                   <View style={[Style.row]}>
                                       <View style={[Style.col2]}>
                                          <Text style={[Style.textMediumg]}>{item.NomeGrupo}</Text>
                                       </View>
                                       <View style={[Style.col2]}>
                                       <Switch
                                          value={item.Permitido}
                                          testID={item.CampoId}
                                          onValueChange={(value)=> {
                                            item.Permitido = value;
                                            this.adicionarRemoverPermissaoGrupo(item,value);
                                            }}/>
                                       </View>
                                    </View>

                               </View>
                           </View>
                       )}
                   />
               </View>

         </View>
       </View>
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




