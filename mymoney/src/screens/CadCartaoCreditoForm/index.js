import * as React from 'react';
import { Image, Platform, StyleSheet,  TouchableOpacity, View,TextInput,Alert, AppRegistry,ListItem,Body,Text ,Switch } from 'react-native';
import { Container, Header, Content, Picker, Form ,CheckBox,Footer,Button,Item,Label,Input,DatePicker,ActionSheet } from "native-base";
import {Root} from 'native-base';
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';
import { ScrollView } from 'react-native-gesture-handler';
import Style from '../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadCartaCreditoService from '@Service/CadCartaCreditoService';

let CadCartaCreditoServiceInstance = new CadCartaCreditoService();

export default class CadCartaoCreditoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state={

     CadContaId :0,
     CadGrupoFamiliarId:0,
     CodigoTabTipoCartaoCredito:0,
     Titulo:'',
     Descricao:'',
     DiaVencimentofatura:0,
     DiaPagarFatura:0,
     DiaFecharFatura:0,
     ValorLimiteTotal:0,
     ValorLimiteAtual:0,
     Ativo:true,
        tabAux:{
          ListaConta:[],
          ListaTipCartaoCredito:[],
          ListaGrupo:[]
        },
        categoriaSelecionada:{
          text:null,
          id:null
        },
        contaSelecionada:{
          text:null,
          id:null
        },
        grupoSelecionado:{
          text:null,
          id:null
        },
        listaContaFiltrada:[],

    };
    
}

salvar(){
    this.criarNovo();
}
 
  criarNovo(){
    
    let model   = {
      CadContaId:this.state.CadContaId,
      CadGrupoFamiliarId:this.state.CadGrupoFamiliarId,
      CodigoTabTipoCartaoCredito:this.state.CodigoTabTipoCartaoCredito,
      Titulo:this.state.Titulo,
      Descricao:this.state.Descricao,
      DiaVencimentofatura:this.state.DiaVencimentofatura,
      DiaPagarFatura:this.state.DiaPagarFatura,
      DiaFecharFatura:this.state.DiaFecharFatura,
      ValorLimiteTotal:this.state.ValorLimiteTotal,
      ValorLimiteAtual:this.state.ValorLimiteAtual,
      Ativo:true,
 };

 console.log(model);

 CadCartaCreditoServiceInstance.create(model)
    .then(x=>{
      this.props.navigation.navigate('HomeIndex', { isload: true})
    })
  }

  selecionarCategoria(param,index){
    if(param){
      var indexi = index+1;
      if(indexi != this.state.tabAux.ListaTipCartaoCredito.length){
        this.setState({ categoriaSelecionada: param})
        console.log(param.id);
        this.setState({ CodigoTabTipoCartaoCredito: param.id})
      }  
    }
   
    
  }
  selecionarConta(param,index){
    if(param){
      var indexi = index+1;
      if(indexi != this.state.tabAux.ListaConta.length){
        this.setState({ contaSelecionada: param})
        this.setState({ CadContaId: param.id})
      }
    }
        
  }

  selecionarGrupo(param,index){
    if(param){
      var filtrado = this.state.tabAux.ListaConta.filter(x=>x.idFilter === param.id);
      this.setState({ listaContaFiltrada:filtrado });
      var indexi = index+1;
      if(indexi != this.state.tabAux.ListaGrupo.length){
        this.setState({ grupoSelecionado: param})
        this.setState({ CadGrupoFamiliarId: param.id})
      }
    }
        
  }              

  componentDidMount() {
    var filtro ={};
    CadCartaCreditoServiceInstance.GetTabelasAuxiliares(filtro)
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
        <View style={[{height:30,backgroundColor:'red'}]}>

        </View>
        <View style={[Style.row]}>
          
          <View style={[Style.col1, {backgroundColor:'#ffffff',padding:20,marginTop:-13,borderTopStartRadius:20,borderTopEndRadius:20}]}>
          
          <View style={Style.row}>
 
          <View style={[Style.col4,styles.inputViewMoney]}>
            <Label>Valor Limite Total</Label>
              <TextInputMask
                type={'money'}
                refInput={(ref) => this.myDateText = ref}
                style={[styles.inputTextMoney]}
                onChangeText={valor => this.setState({ValorLimiteTotal: valor} )}
                value={this.state.ValorLimiteTotal}
                />
              
          </View>
        </View>
        <View style={Style.row}>
        
          <View style={[Style.col4,styles.inputViewMoney]}>
            <Label>Valor limite Atual</Label>
              <TextInputMask
                type={'money'}
                refInput={(ref) => this.myDateText = ref}
                style={[styles.inputTextMoney]}
                onChangeText={valor => this.setState({ValorLimiteAtual: valor} )}
                value={this.state.ValorLimiteAtual}
                />
              
          </View>
        </View>

        <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
            <Item inlineLabel>
              <Label style={styles.labelText}>Titulo</Label>
              <TextInput  
                style={styles.inputText}
                placeholder="ex. Nubank"
                keyboardType="default"
                placeholderTextColor="#d3d3d3"
                onChangeText={text => this.setState({ Titulo:text })}/>
            </Item>
          
          </View>
        </View>
        <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
            <Item inlineLabel>
              <Label style={styles.labelText}>Dia Vencimento</Label>
              <TextInput  
                style={styles.inputText}
                placeholder="ex. 25"
                keyboardType="number-pad"
                placeholderTextColor="#d3d3d3"
                onChangeText={text => this.setState({ DiaVencimentofatura:text })}/>
             
            </Item>          
          </View>
        </View>
        <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
            <Item inlineLabel>
              <Label style={styles.labelText}>Dia de Pagar Fatura</Label>
              <TextInput  
                style={styles.inputText}
                placeholder="ex. 25"
                keyboardType="number-pad"
                placeholderTextColor="#d3d3d3"
                onChangeText={text => this.setState({ DiaPagarFatura:text })}/>
            </Item>          
          </View>
        </View>

        <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
            <Item inlineLabel>
              <Label style={styles.labelText}>Dia de fechamento de Fatura</Label>
              <TextInput  
                style={styles.inputText}
                placeholder="ex. 25"
                keyboardType="number-pad"
                placeholderTextColor="#d3d3d3"
                onChangeText={text => this.setState({ DiaFecharFatura:text })}/>
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
                options: this.state.tabAux.ListaTipCartaoCredito,
                cancelButtonIndex: this.state.tabAux.ListaTipCartaoCredito.length,
                destructiveButtonIndex: this.state.tabAux.ListaTipCartaoCredito.length,
                title: "Escolha uma categoria"
              },
              buttonIndex => {
                this.selecionarCategoria(this.state.tabAux.ListaTipCartaoCredito[buttonIndex],buttonIndex);
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
      <View style={[Style.row,{marginBottom:100}]} >
          <View style={[Style.col1,styles.inputView]}>
          <Item inlineLabel>
              <Label style={styles.labelText}>Conta </Label>
          <TouchableOpacity style={[Style.BtnAction,{paddingVertical:5}]} 
          onPress={() =>
            ActionSheet.show(
              {
                options: this.state.listaContaFiltrada,
                cancelButtonIndex: this.state.listaContaFiltrada.length,
                destructiveButtonIndex: this.state.listaContaFiltrada.length,
                title: "Escolha uma conta"
              },
              buttonIndex => {
                this.selecionarConta(this.state.listaContaFiltrada[buttonIndex],buttonIndex);
              }
            )}
          >
            {
              this.state.contaSelecionada.text == null ?
              <Text>Escolha uma opção</Text>
              :
              <Text>{this.state.contaSelecionada.text}</Text>
              }
        </TouchableOpacity>
        </Item>
        </View>
      </View>
        </View>
        </View>
        </ScrollView>
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



