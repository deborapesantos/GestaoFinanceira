import * as React from 'react';
import { Image, Platform, StyleSheet,  TouchableOpacity, View,TextInput,Alert, AppRegistry,ListItem,Body,Text ,Switch } from 'react-native';
import { Container, Header, Content, Picker, Form ,CheckBox,Footer,Button,Item,Label,Input,DatePicker,ActionSheet } from "native-base";
import {Root} from 'native-base';
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';

import Style from '../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadContaService from '@Service/CadContaService';


let CadContaServiceInstance = new CadContaService();

export default class CadContaForm extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      CadGrupoFamiliarId :0,
      CadUsuarioId :0,
      CodigoTabTipoConta :0,
      ValorInicial :0,
      SaldoAtual :0,
      Titulo:0,
      Ativo:true,
      DataInicial :null,
      tabAux:{
          ListaTipoConta:[],
          ListaGrupo:[]
        },
        categoriaSelecionada:{
          text:null,
          id:null
        },
        grupoSelecionado:{
          text:null,
          id:null
        },
    };
}

salvar(){
    this.criarNovo();
}
 
  criarNovo(){
    let model   = {
      CadGrupoFamiliarId:this.state.CadGrupoFamiliarId,
      CodigoTabTipoConta:this.state.CodigoTabTipoConta,
      ValorInicial:this.state.ValorInicial,
      SaldoAtual:this.state.ValorInicial,
      Titulo:this.state.Titulo,
      Ativo:true
    };

  CadContaServiceInstance.create(model)
    .then(x=>{
      this.props.navigation.navigate('HomeIndex', { isload: true})
    })
  }

  selecionarCategoria(param,index){
    if(param){
      var indexi = index+1;
      if(indexi != this.state.tabAux.ListaTipoConta.length){
        this.setState({ categoriaSelecionada: param})
        console.log(param.id);
        this.setState({ CodigoTabTipoConta: param.id})
      }  
    }
  }

  selecionarGrupo(param,index){
    if(param){
      var indexi = index+1;
      if(indexi != this.state.tabAux.ListaGrupo.length){
        this.setState({ grupoSelecionado: param})
        this.setState({ CadGrupoFamiliarId: param.id})
      }
    }
        
  }
              

  componentDidMount() {
    var filtro = {}
    CadContaServiceInstance.GetTabelasAuxiliares(filtro)
    .then(x=>{
      this.setState({ tabAux:x });      
      console.log(this.state.tabAux)
    })
  }

render() {
    return (
      <Root>
      <Container style={[Style.container,{backgroundColor:'#ffffff'}]}>
       
        <View style={[{height:30,backgroundColor:'red'}]}>

        </View>
        <View style={[Style.row]}>
          
          <View style={[Style.col1, {backgroundColor:'#ffffff',padding:20,marginTop:-13,borderTopStartRadius:20,borderTopEndRadius:20}]}>
          
          <View style={Style.row}>
          <View style={[Style.col1,styles.inputViewMoney]}>
            </View>
          <View style={[Style.col4,styles.inputViewMoney]}>
            <Label>Valor inicial</Label>
              <TextInputMask
                type={'money'}
                refInput={(ref) => this.myDateText = ref}
                style={[styles.inputTextMoney]}
                onChangeText={valor => this.setState({ValorInicial: valor} )}
                value={this.state.ValorInicial}
                />
              
          </View>
        </View>
        <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
            <Item inlineLabel>
              <Label style={styles.labelText}>Titulo</Label>
              <TextInput  
                style={styles.inputText}
                placeholder="ex. Dinheiro"
                keyboardType="default"
                placeholderTextColor="#d3d3d3"
                onChangeText={text => this.setState({ Titulo:text })}/>
            </Item>
          
          </View>
        </View>
        
        <View style={[Style.row]} >
          <View style={[Style.col1,styles.inputView]}>
          <Item inlineLabel>
              <Label style={styles.labelText}>Categoria</Label>
          <TouchableOpacity style={[Style.BtnAction,{paddingVertical:5}]} 
          onPress={() =>
            ActionSheet.show(
              {
                options: this.state.tabAux.ListaTipoConta,
                cancelButtonIndex: this.state.tabAux.ListaTipoConta.length,
                destructiveButtonIndex: this.state.tabAux.ListaTipoConta.length,
                title: "Escolha uma categoria"
              },
              buttonIndex => {
                this.selecionarCategoria(this.state.tabAux.ListaTipoConta[buttonIndex],buttonIndex);
              }
            )}
          >
            {
              this.state.categoriaSelecionada?.text == null ?
              <Text>Escolha uma opção</Text>
              :
              <Text>{this.state.categoriaSelecionada?.text}</Text>
              }
        </TouchableOpacity>
        </Item>
        </View>
      </View>
      <View style={[Style.row]} >
          <View style={[Style.col1,styles.inputView]}>
          <Item inlineLabel>
              <Label style={styles.labelText}>Grupo</Label>
          <TouchableOpacity style={[Style.BtnAction,{paddingVertical:5}]} 
          onPress={() =>
            ActionSheet.show(
              {
                options: this.state.tabAux.ListaGrupo,
                cancelButtonIndex: this.state.tabAux.ListaGrupo.length,
                destructiveButtonIndex: this.state.tabAux.ListaGrupo.length,
                title: "Escolha um grupo"
              },
              buttonIndex => {
                this.selecionarGrupo(this.state.tabAux.ListaGrupo[buttonIndex],buttonIndex);
              }
            )}
          >
            {
              this.state.grupoSelecionado.text == null ?
              <Text>Escolha uma opção</Text>
              :
              <Text>{this.state.grupoSelecionado.text}</Text>
              }
        </TouchableOpacity>
        </Item>
        </View>
      </View>
        </View>
        </View>
        <View style={[styles.footer,Style.row]}>
          <Button rounded warning style={[Style.col1]} onPress={()=>this.salvar()}>
            <Text >Salvar</Text>
          </Button> 
          </View>
        
      </Container>
      </Root>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#930D72',//purple
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#FF9102",
    marginBottom:40
  },
  inputView:{
    width:"100%",
    backgroundColor:"#ffffff",//dark purple
    color:'#ffffff',
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:10
  },
  inputTextMoney:{
    fontSize:40,
    color:'#000000'
  },
  inputText:{
    width:"100%",
  },
  inputViewMoney:{
    width:"80%",
    backgroundColor:"#ffffff",//dark purple
    color:'#000000',
    marginBottom:20,
    justifyContent:"center",
    padding:10,
    height:100,
    
  },
  forgot:{
    color:"#ffffff",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#FF9102",
    color:"#ffffff",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"#ffffff",
  },
  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor:'transparent',
    flexDirection:'row',
    height:80,
    alignItems:'center',
    paddingHorizontal:40
  },
  labelText:{
    fontSize:15,
  }
  
});



