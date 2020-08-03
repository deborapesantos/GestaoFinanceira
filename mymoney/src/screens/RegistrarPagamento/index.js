import * as React from 'react';
import { Image, Platform, StyleSheet,  TouchableOpacity, View,TextInput,Alert, AppRegistry,ListItem,Body,Text ,Switch } from 'react-native';
import { Container, Header, Content, Picker, Form ,CheckBox,Footer,Button,Item,Label,Input,DatePicker,ActionSheet } from "native-base";
import {Root} from 'native-base';

import { TextInputMask } from 'react-native-masked-text';

import RNPickerSelect from 'react-native-picker-select';
const listaTabTipoDespesa = [];
const listaCadParticipante = [];
import Style from './../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadDespesaService from '@Service/CadDespesaService';


let CadDespesaServiceInstance = new CadDespesaService();

export default class RegistrarPagamento extends React.Component {
  onGoFocus() {
    // when you call getElement method, the instance of native TextInput will returned.
    this._myTextInputMask.getElement().focus()
  }
  constructor(props) {
    super(props);
    this.state={
        Titulo:'',
        DataPagamento:null,
        DataCriacao:new Date(),
        IsFixo:false,
        DataFixaVencimento:1,
        IsParcelado:false,
        QdteParcelas:0,
        DataVencimento:new Date(),
        ValorTotal:0,
        MultasJuros:0,
        Pago:false,
        Ativo:true,
        Imposto:0,
        Descontos:0,
        CadContaId:0,
        CadGrupoFamiliarId:0,
        CadUsuarioId:0,
        CadFaturaCartaoCreditoId:0,
        CodigoTabTipoDespesa:0,
        CadParticipanteId:0,
        tabAux:{
          ListaConta:[],
          ListaFaturaCartaoCredito:[],
          ListaParticipante:[],
          ListaTipoDespesa:[],
        },
        categoriaSelecionada:{
          text:null,
          id:null
        },
        contaSelecionada:{
          text:null,
          id:null
        }
    };
    
}

 
  criarNovo(){
    
    let model   = {
        Titulo: this.state.Titulo,
        DataPagamento:this.state.DataPagamento,
        DataCriacao:new Date().no,
        IsFixo:this.state.IsFixo,
        DataFixaVencimento:this.state.DataFixaVencimento,
        IsParcelado:this.state.IsParcelado,
        QdteParcelas:this.state.QdteParcelas,
        DataVencimento:this.state.DataVencimento,
        ValorTotal:this.state.ValorTotal,
        MultasJuros:this.state.MultasJuros,
        Pago:this.state.Pago,
        Ativo:true,
        Imposto:0,
        Descontos:0,
        CadContaId:0,
        CadGrupoFamiliarId:0,
        CadUsuarioId:0,
        CadFaturaCartaoCreditoId:0,
        CodigoTabTipoDespesa:0,
        CadParticipanteId:0,
 };

 console.log(model);

     CadDespesaServiceInstance.criarNovo(model)
     .then(x=>{
       this.props.navigation.navigate('HomeIndex', { isload: true})
     })
  }

  selecionarCategoria(param,index){
    if(param){
      var indexi = index+1;
      if(indexi != this.state.tabAux.ListaTipoDespesa.length){
        this.setState({ categoriaSelecionada: param})
      this.setState({ CodigoTabTipoDespesa: param.id})
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
              

  componentDidMount() {
    
    CadDespesaServiceInstance.GetTabelasAuxiliares()
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
              {/* <TextInput  
                style={[styles.inputTextMoney,{color:"red",fontSize:30}]}
                defaultValue="R$"/> */}
            </View>
          <View style={[Style.col4,styles.inputViewMoney]}>
            <Label>Valor da despesa</Label>
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
                onChangeText={text => this.setState({ValorTotal: valor} )}
                value={this.state.ValorTotal}
                />
              
          </View>
        </View>
        <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
            <Item inlineLabel>
              <Label style={styles.labelText}>Titulo</Label>
              <TextInput  
                style={styles.inputText}
                placeholder="ex. Conta de luz"
                keyboardType="default"
                placeholderTextColor="#d3d3d3"
                onChangeText={text => this.setState({ Titulo:text })}/>
            </Item>
          
          </View>
        </View>


        <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
          <Item inlineLabel>
              <Label style={styles.labelText}>Data de vencimento</Label>
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
              onDateChange={(date)=> this.setState({DataVencimento:date })}
              disabled={false}
              />
              
            </Item>
           </View>
        </View>
        <View style={Style.row}>
                  <View style={Style.col1,styles.inputView} >
                  <Item inlineLabel>
                      <Label style={styles.labelText}>Data de pagamento</Label>
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
                        onDateChange={(date)=> this.setState({ DataPagamento:date })}
                        disabled={false}
                        />
                  
                    </Item>
                  </View>
          </View>
           
         <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
          <Item inlineLabel>
              <Label style={styles.labelText}>Pagar com cartão de crédito?</Label>
              <Switch
                  value={this.state.IsCartaoCredito}
                  testID="IsCartaoCredito"
                  onValueChange={(value)=> this.setState({IsCartaoCredito: value})}/>
            </Item>
           
          </View>
        </View>
        
        <View style={[Style.row]} >
          <View style={[Style.col1,styles.inputView]}>
          <Item inlineLabel>
              <Label style={styles.labelText}>Cartão de crédito</Label>
          <TouchableOpacity style={[Style.BtnAction,{paddingVertical:5}]} 
          onPress={() =>
            ActionSheet.show(
              {
                options: this.state.tabAux.ListaCartaoCredito,
                cancelButtonIndex: this.state.tabAux.ListaCartaoCredito.length,
                destructiveButtonIndex: this.state.tabAux.ListaCartaoCredito.length,
                title: "Escolha um cartão de crédito"
              },
              buttonIndex => {
                this.selecionarCategoria(this.state.tabAux.ListaCartaoCredito[buttonIndex],buttonIndex);
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
              <Label style={styles.labelText}>Fatura </Label>
          <TouchableOpacity style={[Style.BtnAction,{paddingVertical:5}]} 
          onPress={() =>
            ActionSheet.show(
              {
                options: this.state.tabAux.ListaConta,
                cancelButtonIndex: this.state.tabAux.ListaConta.length,
                destructiveButtonIndex: this.state.tabAux.ListaConta.length,
                title: "Escolha uma conta"
              },
              buttonIndex => {
                this.selecionarConta(this.state.tabAux.ListaConta[buttonIndex],buttonIndex);
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
          <Button rounded warning style={[Style.col1]} onPress={()=>this.criarNovo()}>
            <Text >Adicionar</Text>
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



