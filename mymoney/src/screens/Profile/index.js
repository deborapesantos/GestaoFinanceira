import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import { Container,Right,Fab,Button,FooterTab,Footer,ActionSheet} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Style from './../../theme/style';
import CadGrupoFamiliarService from '@Service/CadGrupoFamiliarService';
let CadGrupoFamiliarServiceInstance = new CadGrupoFamiliarService();
import {Root} from 'native-base';
import CadUsuarioService from '@Service/CadUsuarioService';
let CadUsuarioServiceInstance = new CadUsuarioService();
import LoginService from '@Service/LoginService';
let LoginServiceInstance = new LoginService();
export default class Perfil extends React.Component {

  constructor(props) {
    super(props);
    
    this.state={
      listaMenu:[
   // {Titulo:"Conta",route:"CadContaForm"},
      ],
      model:{
        ListaGrupo:[]
      },
      CadGrupoFamiliarId:0
    }
    
}



 componentDidMount() {
   var filtro = null;
  CadUsuarioServiceInstance.GetPerfil(filtro)
  .then(x=>{
    this.setState({ model:x });
    console.log(this.state.model);
  })

 }

 selecionarGrupo(param,index){
  if(param){
    var indexi = index+1;
    if(indexi != this.state.model.ListaGrupo.length){
      this.setState({ CadGrupoFamiliarId: param.id})

      this.AlterarGrupo(param.id);
    }
  }        
}

AlterarGrupo(id){
  var mymodel = {
    CadGrupoFamiliarId:id
  };
  CadGrupoFamiliarServiceInstance.AlterarGrupo(mymodel)
  .then(x=>{
    this.setState({ model:x });
  })
}

Signout(){
  LoginServiceInstance.Signout()
  .then(x=>{
    this.props.navigation.navigate('Login')
  })
}

render() {
    return (
      <Root>
      <Container style={[Style.container]}>
      <ScrollView style={Style.body}>              
       <View style={[{paddingHorizontal:20,paddingVertical:20}]}>
       <View style={Style.row}>
          <Button rounded style={[Style.col1,{backgroundColor:'#930D72'}]} 
          
            onPress={() =>
              ActionSheet.show(
                {
                  options: this.state.model.ListaGrupo,
                  cancelButtonIndex: this.state.model.ListaGrupo.length,
                  destructiveButtonIndex: this.state.model.ListaGrupo.length,
                  title: "Escolha um grupo"
                },
                buttonIndex => {
                  this.selecionarGrupo(this.state.model.ListaGrupo[buttonIndex],buttonIndex);
                }
              )}
            > 
          
            <Text style={{color:'#ffffff'}}>Trocar Grupo</Text>
          </Button> 
        </View> 
         <View style={Style.row}>
            <Text style={Style.textMedium}>{this.state.model.Nome}</Text>
        </View>
        <View style={Style.row}>
            <Text style={Style.textMedium}>{this.state.model.Email}</Text>
        </View>
        {/* <View style={Style.row}>
            <Text style={Style.textMedium}>{this.state.model.Telefone}</Text>
        </View> */}
        <View style={Style.row}>
            <Text style={Style.textMedium}>Seu grupo ativo é {this.state.model.NomeGrupoFamiliar}</Text>
        </View>
        {/* <Button rounded style={[Style.col1,{backgroundColor:'#930D72'}]} onPress={this.Signout()}>
         <Text> Sair</Text>
        </Button> */}
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
        <Button active style={{backgroundColor:'#ffffff',width:100, borderTopRightRadius:80, borderRightWidth:2,borderRightColor:'#cccccc'}}
        onPress={()=> this.props.navigation.navigate('Perfil')}>
          <Text>Perfil</Text>
        </Button>
        <Button style={{backgroundColor:'transparent'}} >
        <Text> </Text>
        </Button>
      </FooterTab>
    </Footer>
 </Container>
 </Root>
      )
  }
}




