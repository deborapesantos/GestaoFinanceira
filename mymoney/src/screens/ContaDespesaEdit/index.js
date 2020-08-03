import * as React from 'react';
import { Image, Platform, StyleSheet,  TouchableOpacity, View,TextInput,Alert, AppRegistry,ListItem,Body,Text ,Switch } from 'react-native';
import { Container, Header, Content, Picker, Form ,CheckBox,Footer,Button,Item,Label,Input,DatePicker,ActionSheet } from "native-base";
import {Root} from 'native-base';
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';
import Moment from 'moment';
import Style from './../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadDespesaService from '@Service/CadDespesaService';


let CadDespesaServiceInstance = new CadDespesaService();
let isDateSelecionado=false;
export default class ContaDespesaEdit extends React.Component {
  onGoFocus() {
    // when you call getElement method, the instance of native TextInput will returned.
    this._myTextInputMask.getElement().focus()
}
  constructor(props) {
    super(props);
    this.state={
        Titulo:'',
        DataPagamento:null,
        DataCriacao:null,
        IsFixo:false,
        DataFixaVencimento:null,
        IsParcelado:false,
        QdteParcelas:0,
        DataVencimento:new Date(),
        ValorTotal:0,
        MultasJuros:0,
        Pago:false,
        Ativo:true,
        Imposto:0,
        Descontos:0,
        CadContaId:null,
        CadGrupoFamiliarId:null,
        CadUsuarioId:null,
        CadFaturaCartaoCreditoId:null,
        CodigoTabTipoDespesa:null,
        CadParticipanteId:null,
        isCartaoCredito:false,
        tabAux:{
          ListaConta:[],
          ListaFaturaCartaoCredito:[],
          ListaParticipante:[],
          ListaTipoDespesa:[],
          despesa:{
            
          }
        },
        model:{

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

salvar(){
    this.editar();
 }
 
editar(){
  let model   = {
    Titulo: this.state.Titulo,
    CadDespesaId : this.state.model.CadDespesaId,
    DataPagamento:this.state.DataPagamento,
    //IsFixo:this.state.IsFixo,
    //DataFixaVencimento:this.state.DataFixaVencimento,
    //IsParcelado:this.state.IsParcelado,
    //QdteParcelas:this.state.QdteParcelas,
    DataVencimento:this.state.DataVencimento,
    ValorTotal:this.state.ValorTotal.toString(),
    //MultasJuros:this.state.MultasJuros,
    Pago:this.state.Pago,
    //Ativo:true,
    //Imposto:0,
    //Descontos:0,
    CadContaId:this.state.CadContaId,
    //CadGrupoFamiliarId:null,
    //CadUsuarioId:null,
    //CadFaturaCartaoCreditoId:null,
    CodigoTabTipoDespesa:this.state.CodigoTabTipoDespesa,
    //CadParticipanteId:null,
};

console.log(model);

CadDespesaServiceInstance.editar(model)
.then(x=>{
  this.props.navigation.navigate('HomeIndex', { isload: true})
})
}

  selecionarCategoria(param,index){
    if(param){
      var indexi = index+1;
      if(indexi != this.state.tabAux.ListaTipoDespesa.length){
        this.setState({ categoriaSelecionada: param})
        console.log(param.id);
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
    const { filtro }  = this.props.route.params;
     console.log(filtro);
     if(filtro != null){
      CadDespesaServiceInstance.GetById(filtro.CadDespesaId)
      .then(x=>{
        this.setState({ model:x });
        this.traduzirDespesaParaTela();
        console.log(this.state.model)
      })
     }
      
     CadDespesaServiceInstance.GetTabelasAuxiliares()
      .then(x=>{
        this.setState({ tabAux:x });

   })


  }

  traduzirDespesaParaTela(){
    this.setState({ Titulo:this.state.model.Titulo});
    this.setState({ DataPagamento:this.state.model.DataPagamento});
    this.setState({ IsFixo:this.state.model.IsFixo});
    this.setState({ DataFixaVencimento:this.state.model.DataFixaVencimento});
    this.setState({ IsParcelado:this.state.model.IsParcelado});
    this.setState({ DataVencimento:this.state.model.DataVencimento});
    this.setState({ ValorTotal:this.state.model.ValorTotal});
    this.setState({ Pago:this.state.model.Pago});
    this.setState({ CadContaId:this.state.model.CadContaId});
    this.setState({ CodigoTabTipoDespesa:this.state.model.CodigoTabTipoDespesa});
      
    console.log(this.state.model);
    this.state.contaSelecionada = {
      text: this.state.model.CadContaTitulo,
      id:this.state.CadContaId
    } 
    this.state.categoriaSelecionada =  {
     text: this.state.model.CodigoTabTipoDespesaDescricao,
     id:this.state.CodigoTabTipoDespesa
    }
    
  }

  onDateChange(date){
    this.setState({DataVencimento:date });
    isDateSelecionado = true;
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
                onChangeText={valor => this.setState({ValorTotal: valor} )}
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
                defaultValue={this.state.Titulo}
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
              defaultDate={this.state.DataVencimento}
              minimumDate={new Date(2019, 12, 1)}
              maximumDate={new Date(2022, 12, 31)}
              locale={"pt"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}

              androidMode={"default"}
              placeHolderText={Moment(this.state.DataVencimento).format('DD/MM/YYYY')}
              textStyle={{ color: "#000000" }}
              placeHolderTextStyle={{ color: "#000000" }}
              onDateChange={(date)=> this.onDateChange(date)}
              disabled={false}
              />
              
            </Item>
            
          </View>
        </View>
        <View style={[Style.row]}>
          <View style={[Style.col1,styles.inputView]}>
          <Item inlineLabel>
              <Label style={styles.labelText}>Pago?</Label>
              <Switch
                  value={this.state.Pago}
                  testID="pago"
                  onValueChange={(value)=> this.setState({Pago: value})}/>
            </Item>
          </View>
        </View>

            {
              this.state.Pago ? 
              <View style={Style.row}>
                      <View style={Style.col1,styles.inputView} >
                      <Item inlineLabel>
                          <Label style={styles.labelText}>Data de pagamento</Label>

                          <DatePicker
                            defaultDate={this.state.DataPagamento}
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
                    :
                    <View></View>
            }

        
        <View style={[Style.row]} >
          <View style={[Style.col1,styles.inputView]}>
          <Item inlineLabel>
              <Label style={styles.labelText}>Categoria</Label>
          <TouchableOpacity style={[Style.BtnAction,{paddingVertical:5}]} 
          onPress={() =>
            ActionSheet.show(
              {
                options: this.state.tabAux.ListaTipoDespesa,
                cancelButtonIndex: this.state.tabAux.ListaTipoDespesa.length,
                destructiveButtonIndex: this.state.tabAux.ListaTipoDespesa.length,
                title: "Escolha uma categoria"
              },
              buttonIndex => {
                this.selecionarCategoria(this.state.tabAux.ListaTipoDespesa[buttonIndex],buttonIndex);
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
              <Label style={styles.labelText}>Conta </Label>
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
        {/* <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
          <Item inlineLabel>
              <Label style={styles.labelText}>Repetir despesa?</Label>
              <Switch
                  value={this.state.IsFixo}
                  testID="fixo"
                  onValueChange={(value)=> this.setState({IsFixo: value})}/>
            </Item>
           
          </View>
        </View>

          {
            this.state.IsFixo ?

                <View>
                <View style={Style.row}>
                          <View style={Style.col1,styles.inputView} >
                          <Item inlineLabel>
                              <Label style={styles.labelText}>Repetir quantas vezes?</Label>
                              <TextInput  
                              style={styles.inputText}
                              placeholder="ex. 12"
                              keyboardType="number-pad"
                              placeholderTextColor="#d3d3d3"
                              onChangeText={text => this.setState({QdteParcelas:text })}/>
                            </Item>
                          </View>
                        </View>
                        <View style={Style.row}>
                        <View style={Style.col1,styles.inputView} >
                        <Item inlineLabel>
                            <Label style={styles.labelText}>Data fixa</Label>
                            <TextInput  
                            style={styles.inputText}
                            placeholder="ex. 15"
                            keyboardType="number-pad"
                            placeholderTextColor="#d3d3d3"
                            onChangeText={text => this.setState({DataFixaVencimento:text })}/>
                          </Item>
                          
                        </View>
                    </View>
                </View>
            :
              <View></View>

          } */}

        
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



