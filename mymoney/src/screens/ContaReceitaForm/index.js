import * as React from 'react';
import { Image, Platform, StyleSheet,  TouchableOpacity, View,TextInput,Alert, AppRegistry,ListItem,Body,Text ,Switch } from 'react-native';
import { Container, Header, Content, Picker, Form ,CheckBox,Footer,Button,Item,Label,Input,DatePicker,ActionSheet } from "native-base";
import {Root} from 'native-base';
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';

import Style from './../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadReceitaService from '@Service/CadReceitaService';

let CadReceitaServiceInstance = new CadReceitaService();

export default class ContaReceitaForm extends React.Component {
  //Este método é usado para inicializar nosso componente com estado inicial, nenhum elemento de UI nativo foi renderizado
  constructor(props) {
    super(props);
    this.state={
      Titulo:'',
      Descricao:'',
      DataRecebimento:null,
      DataCriacao:null,
      IsFixo:false,
      DataFixaVencimento:null,
      QdteParcelas:0,
      DataVencimento:null,
      Valor:0,
      Juros:0,
      Recebido:false,
      Ativo:true,
      Imposto:0,
      Rendimento:0,
      CadContaId:null,
      CadUsuarioId:null,
      CodigoTabTipoReceita:null,
      CadParticipanteId:null,
      tabAux:{
        ListaConta:[],
        ListaTipoReceita:[],
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
      listaContaFiltrada:[]
  };
  
}

criarNovo(){
let receita = {
      Titulo:this.state.Titulo,
      Descricao:'',
      DataRecebimento:this.state.DataRecebimento,
      DataCriacao:null,
      IsFixo:false,
      DataFixaRecebimento:null,
      Valor:this.state.Valor,
      Juros:0,
      Recebido:this.state.Recebido,
      Ativo:true,
      Imposto:0,
      Rendimento:0,
      CadContaId:this.state.CadContaId,
      CadUsuarioId:null,
      CodigoTabTipoReceita:this.state.CodigoTabTipoReceita,
}

 CadReceitaServiceInstance.criarNovo(receita)
     .then(x=>{
       this.props.navigation.navigate('HomeIndex', { isload: true})
     })

}

selecionarCategoria(param,index){
  if(param){
    var indexi = index+1;
    if(indexi != this.state.tabAux.ListaTipoReceita.length){
      this.setState({ categoriaSelecionada: param})
      this.setState({ CodigoTabTipoReceita: param.id})
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
  CadReceitaServiceInstance.GetTabelasAuxiliares()
  .then(x=>{
    this.setState({ tabAux:x });
    console.log(this.state.tabAux)
  })
}
render() {
    return (
      <Root>
      <Container style={[Style.container,{backgroundColor:'#ffffff'}]}>
       
        <View style={[{height:30,backgroundColor:'green'}]}>

        </View>
        <View style={[Style.row]}>
          
          <View style={[Style.col1, {backgroundColor:'#ffffff',padding:20,marginTop:-13,borderTopStartRadius:20,borderTopEndRadius:20}]}>
          
          <View style={Style.row}>
          <View style={[Style.col1,styles.inputViewMoney]}>
              {/* <TextInput  
                style={[styles.inputTextMoney,{color:"red",fontSize:30}]}
                defaultValue="R$"/> */}
            </View>
          <View style={[Style.col4,styles.inputViewMoney]}>
            <Label>Valor da receita</Label>
            {/* <TextInput  
              style={[styles.inputTextMoney]}
              keyboardType="decimal-pad"              
              placeholderTextColor="#d3d3d3"
              defaultValue="0,00"
              onChangeText={text =>  this.setState({model:{ ValorTotal:text }})}/> */}
              <TextInputMask
                type={'money'}
                refInput={(ref) => this.myDateText = ref}
                style={[styles.inputTextMoney]}
                onChangeText={valor => this.setState({Valor: valor} )}
                value={this.state.Valor}
                />
              
          </View>
        </View>
        <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
            <Item inlineLabel>
              <Label style={styles.labelText}>Titulo</Label>
              <TextInput  
                style={styles.inputText}
                placeholder="ex. Salário"
                keyboardType="default"
                placeholderTextColor="#d3d3d3"
                onChangeText={text => this.setState({ Titulo:text })}/>
            </Item>
          
          </View>
        </View>
        <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
          <Item inlineLabel>
              <Label style={styles.labelText}>Data de recebimento</Label>
          
              <DatePicker
              defaultDate={new Date()}
              minimumDate={new Date(2019, 12, 1)}
              maximumDate={new Date(2022, 12, 31)}
              locale={"pt"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="ex. 15/08/2019"
              textStyle={{ color: "#000000" }}
              placeHolderTextStyle={{ color: "#d3d3d3" }}
              onDateChange={(date)=> this.setState({DataRecebimento:date })}
              disabled={false}
              />
              
            </Item>
            
          </View>
        </View>
        <View style={[Style.row]}>
          <View style={[Style.col1,styles.inputView]}>
          <Item inlineLabel>
              <Label style={styles.labelText}>Recebido?</Label>
              <Switch
                  value={this.state.Recebido}
                  testID="Recebido"
                  onValueChange={(value)=> this.setState({Recebido: value})}/>
            </Item>
          </View>
        </View>

            
        <View style={[Style.row]} >
          <View style={[Style.col1,styles.inputView]}>
          <Item inlineLabel>
              <Label style={styles.labelText}>Tipo de receita</Label>
          <TouchableOpacity style={[Style.BtnAction,{paddingVertical:5}]} 
          onPress={() =>
            ActionSheet.show(
              {
                options: this.state.tabAux.ListaTipoReceita,
                cancelButtonIndex: this.state.tabAux.ListaTipoReceita.length,
                destructiveButtonIndex: this.state.tabAux.ListaTipoReceita.length,
                title: "Escolha uma categoria"
              },
              buttonIndex => {
                this.selecionarCategoria(this.state.tabAux.ListaTipoReceita[buttonIndex],buttonIndex);
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
      <View style={[Style.row]} >
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
        <View style={[styles.footer,Style.row]}>
          <Button rounded style={[Style.col1,{backgroundColor:'#930D72'}]} onPress={()=>this.criarNovo()}>
            <Text style={{color:'#ffffff'}}>Adicionar</Text>
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