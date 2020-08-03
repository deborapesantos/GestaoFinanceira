import * as React from 'react';
import { Image, Platform, StyleSheet,  TouchableOpacity, View,TextInput,Alert, AppRegistry,ListItem,Body,Text ,Switch } from 'react-native';
import { Container, Header, Content, Picker, Form ,CheckBox,Footer,Button,Item,Label,Input,DatePicker,ActionSheet } from "native-base";
import {Root} from 'native-base';
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native-gesture-handler';
import Style from '../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadUsuarioService from '@Service/CadUsuarioService';


let CadUsuarioServiceInstance = new CadUsuarioService();

export default class NovoCadUsuario extends React.Component {
  onGoFocus() {
    // when you call getElement method, the instance of native TextInput will returned.
    this._myTextInputMask.getElement().focus()
}
  constructor(props) {
    super(props);
    this.state={
      CadGrupoFamiliarId:0,
      UserId:0,
      Nome:"",
      NomeGrupoFamiliar:"",
      NomeUsuario:"",
      Password:"",
      Telefone:"",
      DataCriacao:null,
      Email:"",
      Ativo:true,
        tabAux:{
          ListaGrupo:[],
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
      Nome:this.state.Nome,
      NomeUsuario:this.state.NomeUsuario,
      Password:this.state.Password,
      Telefone:this.state.Telefone,
      DataCriacao:null,
      Email:this.state.Email,
      Ativo:true,
 };

 console.log(model);

 CadUsuarioServiceInstance.create(model)
    .then(x=>{
      this.props.navigation.navigate('HomeIndex', { isload: true})
    })
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
    CadUsuarioServiceInstance.GetTabelasAuxiliares()
    .then(x=>{
      this.setState({ tabAux:x });
      console.log(this.state.tabAux)
    })
  }

 
  
render() {
    return (
      <Root>
      <Container style={[Style.container,{backgroundColor:'#ffffff'}]}>
       <ScrollView>
        <View style={[{height:30,backgroundColor:'#930D72'}]}>

        </View>
        <View style={[Style.row]}>
          
          <View style={[Style.col1, {backgroundColor:'#ffffff',padding:20,marginTop:-13,borderTopStartRadius:20,borderTopEndRadius:20}]}>
          
          <View style={Style.row}>
          <View style={[Style.col1,styles.inputViewMoney]}>
              {/* <TextInput  
                style={[styles.inputTextMoney,{color:"red",fontSize:30}]}
                defaultValue="R$"/> */}
            </View>
          
        </View>
        <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
            <Item inlineLabel>
              <Label style={styles.labelText}>Nome Completo</Label>
              <TextInput  
                style={styles.inputText}
                placeholder="ex. João da Silva"
                keyboardType="default"
                placeholderTextColor="#d3d3d3"
                onChangeText={text => this.setState({ Nome:text })}/>
            </Item>
          
          </View>
        </View>
        <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
            <Item inlineLabel>
              <Label style={styles.labelText}>Nome de Usuário</Label>
              <TextInput  
                style={styles.inputText}
                placeholder="ex. joaodasilva"
                keyboardType="default"
                placeholderTextColor="#d3d3d3"
                onChangeText={text => this.setState({ NomeUsuario:text })}/>
            </Item>
          
          </View>
        </View>
        <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
            <Item inlineLabel>
              <Label style={styles.labelText}>E-mail</Label>
              <TextInput  
                style={styles.inputText}
                placeholder="ex. joaodasilva@dominio.com"
                keyboardType="default"
                placeholderTextColor="#d3d3d3"
                onChangeText={text => this.setState({ Email:text })}/>
            </Item>
          
          </View>
        </View>
        <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
            <Item inlineLabel>
              <Label style={styles.labelText}>Senha</Label>
              <TextInput  
                style={styles.inputText}
                placeholder="deve conter no minino 6 caracteres"
                keyboardType="visible-password"
                placeholderTextColor="#d3d3d3"
                onChangeText={text => this.setState({ Password:text })}/>
            </Item>
          
          </View>
        </View>
      <View style={[Style.row]} >
          <View style={[Style.col1,styles.inputView]}>
          <Item inlineLabel>
              <Label style={styles.labelText}>Grupo </Label>
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
        </ScrollView>
        <View style={[styles.footer,Style.row]}>
          <Button rounded style={[Style.col1,{backgroundColor:"#930D72"}]} onPress={()=>this.salvar()}>
            <Text style={{color:"#ffffff"}} >Salvar</Text>
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



