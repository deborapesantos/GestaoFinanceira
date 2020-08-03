import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import { Container,Right,ActionSheet} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Style from './../../theme/style';
import {Root} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadDespesaService from '@Service/CadDespesaService';
import LoginService from "@Service/LoginService";
import Moment from 'moment';
import NavigationService from '@Service/Navigation';

let CadDespesaServiceInstance = new CadDespesaService();
const data = new Date();

export default class ContaDespesa extends React.Component {
  
 
  constructor(props) {
    super(props);
    
    this.state={
      model:{
        Lista:[],
        TotalPendente:0,
        TotalConcluido:0
      },
      menu:[
       { text:'Pagar despesa'},
       { text:'Editar despesa'},
       { text:'Cancelar',icon:'close'},
      ]
    }
    
}

 componentDidMount() {

  const { filtro }  = this.props.route.params;
  filtroDespesa = filtro;
console.log(filtro);
  var listRequest ={
    mes:4,
    tipo:filtro
  };

  this.listarDespesa(listRequest);
 }

 listarDespesa(filtroRequest){
   console.log(filtroRequest);
  CadDespesaServiceInstance.listar(filtroRequest)
  .then(x=>{
    this.setState({ model: x })

    console.log(this.state.model);
  })

 
 }

 currencyFormat(num){
  return  num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

selecionarOpcao(param,index,item){
  if(param){
    
    if(index == 0){
      CadDespesaServiceInstance.pagar(item)
      .then(x=>{
        this.props.navigation.navigate('HomeIndex')
      })
    }

    if(index == 1){
      this.props.navigation.navigate('ContaDespesaEdit', { filtro: item})
    }
  }
}

render() {
    return (
      <Root>
      <Container style={[Style.container]}>
      <ScrollView style={Style.body}>              
      <View style={[Style.row,{paddingHorizontal:20}]}>
         <View style={[Style.boxInfoflatList,Style.col1]}>
           <View style={[Style.row]}>
               <Text style={[Style.col1,Style.textCenter, Style.textMedium,{padding:10}]}></Text>
           </View>
           <View style={[Style.row]} >
             <View style={[Style.col2]} >
               <Text style={[Style.textCenter,Style.textMedium]}>A pagar</Text>
               <Text style={[Style.textCenter,Style.textBlue,Style.textMediumg]}>{this.state.model.TotalPendente}</Text>
             </View>
             <View style={[Style.col2]}>
               <Text style={[Style.textCenter,Style.textMedium]}>Pago(s)</Text>
               <Text style={[Style.textCenter,Style.textBlue,Style.textMediumg]}>{this.state.model.TotalConcluido}</Text>
             </View>
           </View>
       </View>
     </View>
    
       <View style={[{paddingHorizontal:10}]}>
         <View style={[Style.row]}>
          <View style={Style.sectionGrey}>
                   <View style={Style.headerBg}>
                       <Text style={Style.sHeader}>{'Despesas'.toUpperCase()}</Text>
                   </View>
                   <FlatList
                       data={this.state.model.Lista}
                      
                       renderItem={({ item }) => (
                           <TouchableOpacity style={Style.itemsBox} underlayColor='transparent' onPress={()=>
                            {ActionSheet.show(
                              {
                                options: this.state.menu,
                                cancelButtonIndex: 2,
                                destructiveButtonIndex: 2,
                                title: "Escolha uma opção"
                              },
                              buttonIndex => {
                                this.selecionarOpcao(this.state.menu[buttonIndex],buttonIndex,item);
                              }
                            )}
                            
                            
                          //   {
                          //   this.props.navigation.navigate('ContaDespesaDetail', { filtro: item})
                          // }
                        }>
                               {/* onPress={() => this.onDetails(item)} */}
                         
                               <View style={[{padding:5}]}>
                                   <View style={[Style.row]}>
                                       <View style={[Style.col3]}>
                                          <Text style={[Style.boxInfoflatListTitle,Style.textMedium]}>{item.Titulo}</Text>
                                       </View>
                                       <View style={[Style.col2]}>
                                        {
                                           item.Pago?
                                           
                                           <Text style={[Style.textRight,{color:'green'}]}>Pago em {Moment(item.DataPagamento).format("d MMM")}</Text>
                                         :

                                         <Text style={[Style.textRight,{color:'red'}]}>Vence em {Moment(item.DataVencimento).format("d MMM")}</Text>
                                         }
                                       </View>
                                   </View>
                                   <View style={[Style.row]}>
                                     <View style={[Style.col1]}>
                                       <Text style={[Style.boxInfoflatListTitle,Style.textMedium,Style.textRight]}>-{this.currencyFormat(item.ValorTotal) }</Text>
                                     </View>
                                   </View>
                               </View>
                           </TouchableOpacity>
                       )}
                   />
               </View>
               
         </View>
       </View>
     </ScrollView>
 </Container>
 </Root>
      )
  }
}




