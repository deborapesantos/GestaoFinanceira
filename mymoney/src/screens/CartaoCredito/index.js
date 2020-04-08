import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import CadCartaCreditoService from '@Service/CadCartaCreditoService';
import { Container,Right} from 'native-base';
import Style from './../../theme/style';
import {Collapse,CollapseHeader, CollapseBody, AccordionList} from 'accordion-collapse-react-native';
import Moment from 'moment';
let CadCartaCreditoServiceInstance = new CadCartaCreditoService();

export default class CartaoCredito extends React.Component {
  //Este método é usado para inicializar nosso componente com estado inicial, nenhum elemento de UI nativo foi renderizado
  constructor(props) {
    super(props);
    this.state={
      model:{
        CadCoartaoCreditoId:0,
        CadContaId:0,
        CadUsuarioId:0,
        DataPagamento: new Date(),
        Descricao: '',
        DiaVencimento:1,
        LimiteDisponivel:0,
        LimiteTotal:0,
        FaturaAberta:false,
        ValorFatura:0,
        Titulo:'',
        listaDespesaCartaoCredito:[],

      }
  };
}

 componentDidMount() {
  const { filtro }  = this.props.route.params;
   
  if(filtro != null){
    this.setState({ model: filtro })
  }
  else
  {
    var request={
      mes:3,
      Id: 1
    }
    this.listarCartaoCredito(request)
  }
}

  listarCartaoCredito(request){
    CadCartaCreditoServiceInstance.listar(request)
    .then(x=>{
      this.setState({ model: x })
    })
}
  
render() {
    return (
      <Container style={[Style.container]}>
      <ScrollView style={[Style.body,{padding:20}]}>              
        <View style={[Style.row]}>
            <View style={Style.sectionGrey}>
                <View style={Style.headerBg}>
                    {/* <Text style={Style.sHeader}>{'Cartões de crédito'.toUpperCase()}</Text> */}
                </View>
            </View>
          </View>
          <View style={[Style.row,{marginBottom:20}]}>
          <View style={[Style.col1,{ height:200, padding:20, backgroundColor:"#564E95", borderRadius:12 }]}>
            <View style={[Style.row, Style.col1]}>
                <Text style={[{ color:"#ffffff" }]}>{this.state.model.Descricao}</Text>
            </View>
            <View style={[Style.row, Style.col1]}>
               <Text style={[{ color:"#ffffff" },Style.textRight]}>{this.state.model.Titulo}</Text>
            </View>
            {/* <View style={[{height:5,backgroundColor:"#dddddd"}]}>
              <View style={[{height:5,width:50,backgroundColor:"#930D72"}]}>
              </View> 
              </View>*/}
            
              <View style={[Style.row, Style.col2]}>
                  <Text style={[{ color:"#ffffff" },Style.textLeft]}>Limite Disponível: {this.state.model.LimiteDisponivel}</Text>
              </View>
              <View style={[Style.row, Style.col2]}>
                  <Text style={[{ color:"#ffffff" },Style.textRight]}>Limite Total: {this.state.model.LimiteTotal}</Text>
              </View>
           
            </View>
          </View>
          
          <Collapse>
            <CollapseHeader>
            <View style={[Style.row, Style.col1,{ height:50,  backgroundColor:"#ffffff",padding:11 }]}>
                <View style={[Style.col2]}>
                  <Text style={[Style.textLeft,Style.textMedium]}>Total</Text>
                </View>
                <View style={[Style.col2]}>
                      <Text style={[Style.textRight,Style.textMedium]}>{this.state.model.ValorFatura}</Text>
                </View>
              </View>
              </CollapseHeader>
              <CollapseBody>
              <FlatList
                data={this.state.model.listaDespesaCartaoCredito}
                style={Style.flatList}
                renderItem={({ item }) => (
                    <TouchableOpacity style={Style.itemsInfoflatList} underlayColor='transparent' onPress={() => this.onDetails(item)}>
                      <View style={[{padding:5}]}>
                          <View style={[Style.row]}>
                            <View style={[Style.col1]}>
                              <Text style={[Style.boxInfoflatListTitle,Style.textMedium]}>{Moment(item.DataVencimento).format("d MMM")}</Text>
                            </View>
                          </View>
                          <View style={[Style.row]}>
                              <View style={[Style.col3]}>
                                <Text style={[Style.boxInfoflatListTitle,Style.textMedium]}>{item.Titulo}</Text>
                              </View>
                              <View style={[Style.col2]}>
                                <Text style={[Style.textRight]}>{item.ValorTotal}</Text>
                              </View>
                          </View>
                     </View>
                
                  </TouchableOpacity>
                       )}
                   />
            </CollapseBody>
        </Collapse>
     </ScrollView>
 </Container>
      )
  }
}

CartaoCredito.navigationOptions = {
  header: null,
};


