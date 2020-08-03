import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import { Container,Right,ActionSheet} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Style from './../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadReceitaService from '@Service/CadReceitaService';
import LoginService from "@Service/LoginService";
import Moment from 'moment';

const data = new Date();
let CadReceitaServiceInstance = new CadReceitaService();

export default class ContaReceita extends React.Component {
  //Este método é usado para inicializar nosso componente com estado inicial, nenhum elemento de UI nativo foi renderizado
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
    var listRequest ={
      mes:3
    };
    CadReceitaServiceInstance.listar(listRequest)
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
           <View style={[Style.row]}>
             <View style={[Style.col2]}>
               <Text style={[Style.textCenter,Style.textMedium]}>A receber</Text>
               <Text style={[Style.textCenter,Style.textBlue,Style.textMediumg]}>{this.state.model.TotalPendente}</Text>
             </View>
             <View style={[Style.col2]}>
               <Text style={[Style.textCenter,Style.textMedium]}>Recebido(s)</Text>
               <Text style={[Style.textCenter,Style.textBlue,Style.textMediumg]}>{this.state.model.TotalConcluido}</Text>
             </View>
           </View>
       </View>
     </View>
    
       <View style={[{paddingHorizontal:10}]}>
         <View style={[Style.row]}>
          <View style={Style.sectionGrey}>
                   <View style={Style.headerBg}>
                       <Text style={Style.sHeader}>{'Receitas'.toUpperCase()}</Text>
                   </View>
                   <FlatList
                       data={this.state.model.Lista}
                       
                       renderItem={({ item }) => (
                           <TouchableOpacity style={Style.itemsBox} underlayColor='transparent' onPress={() => this.onDetails(item)}>
                               
                         
                               <View style={[{padding:5}]}>
                                   <View style={[Style.row]}>
                                       <View style={[Style.col3]}>
                                          <Text style={[Style.boxInfoflatListTitle,Style.textMedium]}>{item.Titulo}</Text>
                                       </View>
                                       <View style={[Style.col2]}>
                                         {
                                           item.Recebido?
                                           
                                           <Text style={[Style.textRight]}>Recebido em {Moment(item.DataRecebimento).format("d MMM")}</Text>
                                         :

                                         <Text style={[Style.textRight]}>Criado em {Moment(item.DataCriacao).format("d MMM")}</Text>
                                         }
                                         
                                       </View>
                                   </View>
                                   <View style={[Style.row]}>
                                     <View style={[Style.col1]}>
                                       <Text style={[Style.boxInfoflatListTitle,Style.textMedium]}>{item.ValorTotal}</Text>
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
