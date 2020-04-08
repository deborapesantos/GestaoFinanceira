import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import { Container,Right} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Style from './../../theme/style';
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
      }
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
  })
 }

 currencyFormat(num){
  return  num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

render() {
    return (
      <Container style={[Style.container]}>
      <ScrollView style={Style.body}>              
      <View style={[Style.row,{paddingHorizontal:20}]}>
         <View style={[Style.boxInfoflatList,Style.col1]}>
           <View style={[Style.row]}>
               <Text style={[Style.col1,Style.textCenter, Style.textMedium,{padding:10}]}>{Moment(data).format("MMMM")} </Text>
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
                       style={Style.flatList}
                       renderItem={({ item }) => (
                           <TouchableOpacity style={Style.itemsInfoflatList} underlayColor='transparent' onPress={()=>{
                            this.props.navigation.navigate('ContaDespesaDetail', { filtro: item})
                          }}>
                               {/* onPress={() => this.onDetails(item)} */}
                         
                               <View style={[{padding:5}]}>
                                   <View style={[Style.row]}>
                                       <View style={[Style.col3]}>
                                          <Text style={[Style.boxInfoflatListTitle,Style.textMedium]}>{item.Titulo}</Text>
                                       </View>
                                       <View style={[Style.col2]}>
                                        {
                                           item.Pago?
                                           
                                           <Text style={[Style.textRight]}>Pago em {Moment(item.DataPagamento).format("d MMM")}</Text>
                                         :

                                         <Text style={[Style.textRight]}>Vence em {Moment(item.DataVencimento).format("d MMM")}</Text>
                                         }
                                       </View>
                                   </View>
                                   <View style={[Style.row]}>
                                     <View style={[Style.col1]}>
                                       <Text style={[Style.boxInfoflatListTitle,Style.textMedium,Style.textRight]}>{item.ValorTotal}</Text>
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
      )
  }
}




