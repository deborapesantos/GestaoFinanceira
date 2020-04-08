import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import { Container,Right} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Style from '../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadDespesaService from '@Service/CadDespesaService';
import LoginService from "@Service/LoginService";
import Moment from 'moment';
import NavigationService from '@Service/Navigation';

let CadDespesaServiceInstance = new CadDespesaService();
const data = new Date();

export default class ContaDespesaDetail extends React.Component {
  
 
  constructor(props) {
    super(props);
    
    this.state={
      model:{
        Ativo:true,
        CadContaId:0,
        CadDespesaId:0,
        CadFaturaCartaoCreditoId:0,
        CadGrupoFamiliarId:0,
        CadUsuarioId:0,
        CodigoTabTipoDespesa:0,
        DataCriacao:null,
        DataVencimento:null,
        IsFixo:false,
        IsParcelado: false,
        NumParcela: 0,
        Pago: false,
        Titulo: "",
        ValorTotal: 0,
      }
    }
    
}

 componentDidMount() {
  const { filtro }  = this.props.route.params;
  console.log(filtro);
  if(filtro != null){
    this.setState({ model: filtro })
  }
 }

pagarDespesa(model){
  console.log("pagar");
  CadDespesaServiceInstance.pagar(model)
  .then(x=>{
    this.props.navigation.navigate('HomeIndex', { isload: true})
  })
}

 currencyFormat(num){
if(num != null){

  return  num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

}


  
render() {
    return (
      <Container style={[Style.container]}>
      <ScrollView style={Style.body}>              
      <View style={Style.row}>
          <View style={[Style.col1, {backgroundColor:'red',Color:"#ffffff", height:200,width:'100%',padding:40, borderBottomLeftRadius:10,borderBottomRightRadius:10}]}>
                <Text style={[Style.textCenter, Style.textMedium,{color:"#ffffff"}]}> {this.state.model.Titulo} </Text>
                  <Text style={[Style.textCenter,{color:"#ffffff",fontSize:40}]}>
                    <Text style={[Style.textCenter,Style.textMedium]}  >R$</Text>
                    {  
                    
                    this.currencyFormat(this.state.model.ValorTotal)
                    }
                  </Text>
                <Text style={[{color:"#ffffff"},Style.textCenter,Style.textSmall]}>Data Vencimento {Moment(this.state.model.DataVencimento).format('d MMM')}</Text>
            </View>
      </View>
      <View style={Style.row}>
      <TouchableOpacity style={[Style.BtnAction,Style.bgPink]} underlayColor='transparent' onPress={() => {
        this.pagarDespesa(this.state.model)
      }}>
        <Text>Pagar</Text>
      </TouchableOpacity>
      </View>
     </ScrollView>
 </Container>
      )
  }
}




