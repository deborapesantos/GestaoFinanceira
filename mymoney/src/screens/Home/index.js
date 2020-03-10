import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import { Container,Right} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Style from './../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import Serenity from '@Service/Serenity'
import CadContaService from '@Service/CadContaService';
import LoginService from "@Service/LoginService";
import Moment from 'moment';

let LoginServiceInstance = new LoginService();
let CadContaServiceInstance = new CadContaService();


export default class HomeIndex extends React.Component {
 
  constructor(props) {
    super(props);
    this.state={
     dashboardRequest:{
      ListaTodasReceitasDoMes:[],
      ListaProximosVencimentos:[],
      ListaCartaoCredito:[],
      SaldoAtual:0,
      TotalReceitas:0,
      TotalDespesas:0,
      MesVigente:3
     },
     filter:{
       data:new Date()
     }
      
    }

    Moment.locale(); 
  }

  componentDidMount() {
    LoginServiceInstance.getUsuarioLogado()
      .then(res =>{
        if(res){
          var restoJson = JSON.parse(res);
          var usuario = {
            CadUsuarioId: restoJson.CadUsuarioId,
            Username : restoJson.Username,
            Password : restoJson.Password,
            DisplayName : restoJson.DisplayName
          }

          let listRequest = {
            mes: 3 ,
          }

          CadContaServiceInstance.getDashboard(listRequest)
          .then(x=>{
            this.setState({ dashboardRequest: x })
          })
        }
      })
    
   }
  
render() {


    return (
      
            <Container style={[Style.container]}>
               <ScrollView style={Style.body}>              
               <View style={[Style.row,{paddingHorizontal:20}]}>
                  <View style={[Style.boxInfoflatList,Style.col1]}>
                    <View style={[Style.row]}>
                        <Text style={[Style.col1,Style.textCenter, Style.textMedium,{padding:10}]}>{Moment(this.state.filter.data).format("MMMM")} </Text>
                    </View>
                    <View style={[Style.row]}>
                        <View style={[Style.col1]}>
                          <Text style={[Style.textCenter,Style.textMedium]}>Saldo</Text>
                          <Text style={[Style.textCenter,Style.textMediumg]}>{this.state.dashboardRequest.SaldoAtual}</Text>
                        </View>
                    </View>
                    <View style={[Style.row]}>
                      <View style={[Style.col2]}>
                        <Text style={[Style.textCenter,Style.textMedium]}>Receita</Text>
                        <Text style={[Style.textCenter,Style.textBlue,Style.textMediumg]}>{this.state.dashboardRequest.TotalReceitas}</Text>
                      </View>
                      <View style={[Style.col2]}>
                        <Text style={[Style.textCenter,Style.textMedium]}>Despesa</Text>
                        <Text style={[Style.textCenter,Style.textRed,Style.textMediumg]}>{this.state.dashboardRequest.TotalDespesas}</Text>
                      </View>
                    </View>
                </View>
              </View>
             
                <View style={[{paddingHorizontal:10}]}>
                  <View style={[Style.row]}>
                  {/* <FlatList
                      data={this.state.categories}
                      style={[]}
                      numColumns={4}
                      renderItem={({ item }) => (
                          <TouchableOpacity style={[]} underlayColor='transparent' onPress={() => this.onSelectEventCategory(item)}>
                              <View style={[]}>
                                  <Text style={[]}>{item.descricao}</Text>
                              </View>
                          </TouchableOpacity>
                      )}
                      
                  /> */}
                   <View style={Style.sectionGrey}>
                            <View style={Style.headerBg}>
                                <Text style={Style.sHeader}>{'Todos os titulos'.toUpperCase()}</Text>
                            </View>
                            <FlatList
                                data={this.state.dashboardRequest.ListaTodasReceitasDoMes}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={Style.flatList}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={[Style.boxInfoflatList,{backgroundColor:'#00adb5',height:95}]} underlayColor='transparent' onPress={() => this.onLearnMoreEvent(item)}>
                                        {/* <View style={[Style.row,{padding:5}]}>
                                           <View style={[Style.col1]}>
                                                  <Text style={[Style.textMedium,Style.textWhite]} >{item.qdte}</Text>
                                            </View>
                                            <View style={[Style.col3]}>
                                              <Text style={[Style.textMedium,Style.boxInfoflatListTitle,Style.textWhite]}>{item.qdte} - {item.nome}</Text>
                                            </View>
                                        </View> */}
                                        <View style={[Style.row,{padding:6,paddingHorizontal:10}]}>
                                           <View style={[Style.col1]}>
                                                  <Text style={[Style.textWhite,Style.textMedium]} >{item.Qtde}   {item.Descricao}</Text>
                                            </View>
                                        </View>
                                        <View style={[Style.row,{padding:5}]}>
                                           <View style={[Style.col2]}>
                                                  <Text style={[Style.textWhite]} >Valor total</Text>
                                            </View>
                                            <View style={[Style.col3]}>
                                              <Text style={[Style.textMedium,Style.textRight,Style.boxInfoflatListTitle,Style.textWhite]}>R$ {item.Valor}</Text>
                                            </View>
                                        </View>
{/*                                        
                                          <View>
                                                <Text style={[Style.textMediumg,Style.textRight,Style.textWhite]}>R$ {item.valorTotal}</Text>
                                                <Text style={[Style.textSmall,Style.textRight,Style.textWhite]}>Valor total</Text>
                                          </View> */}
                                       

                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                        
                  </View>
                  <View style={[Style.row]}>
                   <View style={Style.sectionGrey}>
                            <View style={Style.headerBg}>
                                <Text style={Style.sHeader}>{'Próximos vencimentos'.toUpperCase()}</Text>
                            </View>
                            <FlatList
                                data={this.state.dashboardRequest.ListaProximosVencimentos}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={Style.flatList}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={Style.boxInfoflatList} underlayColor='transparent' onPress={() => this.onLearnMoreEvent(item)}>
                                        
                                        
                                        {
                                        !item.isAdicionar ?
                                        
                                        <View style={[{padding:10}]}>
                                            <Text style={[Style.textMedium,Style.boxInfoflatListTitle]}>{Moment(item.DataVencimento).format('d MMM')}</Text>
                                            <Text style={[Style.textMedium,Style.textGrey,{marginTop:5}]}>{item.Descricao}</Text>
                                            <View style={Style.boxInfoflatListFooter}>

                                            <View style={[Style.row]}>
                                                <View style={[Style.col4]}>
                                                <Text style={[Style.textMediumg]}>R$ {item.Valor}</Text>
                                                <Text style={[Style.textSmall,Style.textGrey]}>Valor total</Text>
                                                </View>

                                                <View style={[Style.col2]}>
                                                  
                                                     {/* <Icon
                                                        name='check-circle'
                                                        type='evilicon'
                                                        color='#00adb5'
                                                        style={[{fontSize:33},Style.textRight]}
                                                      /> */}
                                                </View>
                                            </View>


                                                
                                            </View>
                                            
                                        </View>

                                        :
                                        <View style={[{padding:10}]}>
                                        
                                        <View style={Style.boxInfoflatListFooter}>

                                        <View style={[Style.row]}>
                                        

                                            <View style={[Style.col1]}>
                                              <Text style={[Style.textCenter]}>
                                              
                                              </Text>
                                            
                                              <Text style={[Style.textCenter,Style.textMedium]}>
                                                Adicionar nova Despesa
                                             
                                              </Text>
                                                
                                            </View>
                                        </View>
                                       </View>
                                     </View>

                                      }

                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                        
                  </View>
                  <View style={[Style.row]}>
                   <View style={Style.sectionGrey}>
                            <View style={Style.headerBg}>
                                <Text style={Style.sHeader}>{'Cartões de crédito'.toUpperCase()}</Text>
                            </View>
                            <FlatList
                                data={this.state.dashboardRequest.ListaCartaoCredito}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={Style.flatList}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={Style.boxInfoflatList} underlayColor='transparent' onPress={() => this.onLearnMoreEvent(item)}>
                                        
                                        {
                                        !item.isAdicionar ?
                                        <View style={[{padding:5}]}>
                                            <View style={[Style.row]}>
                                                <View style={[Style.col3]}>
                                                {/* <Icon
                                                        name='credit-card'
                                                        type='evilicon'
                                                        color='#393e46'
                                                        style={[{fontSize:33}]}
                                                      /> */}
                                                   <Text style={[Style.boxInfoflatListTitle,Style.textMedium]}>{item.Titulo}</Text>
                                                </View>
                                                <View style={[Style.col2]}>
                                                   <Text style={[Style.textRight]}>Venc. {item.DiaVencimento}</Text>
                                                </View>
                                            </View>
                                            <View style={[Style.row]}>
                                              <View style={[Style.col1]}>
                                                <Text style={[Style.boxInfoflatListTitle,Style.textMedium]}>{item.Descricao}</Text>
                                              </View>
                                            </View>
                                             <View style={[Style.row]}>
                                                <View style={[Style.col1]}>

                                                    {item.FaturaAberta ?
                                                    <Text style={[Style.textRight,Style.textRed,Style.textSmall]}>
                                                    Fatura Aberta
                                                    </Text>
                                                    :
                                                    <Text style={[Style.textRight,Style.textRed,Style.textSmall]}>
                                                    Fatura Fechada
                                                    </Text>
                                                  }

                                                  
                                                </View>
                                            </View>
                                            <View style={[{marginTop:10}]}>
                                                <Text style={[Style.textSmall,Style.textGrey]}>Valor parcial da fatura</Text>
                                            </View>
                                            <View style={[{}]}>
                                                <Text style={[Style.textSmall,Style.textGrey,Style.textMediumg]}>R$ {item.ValorFatura}</Text>
                                            </View>
                                            <View style={[Style.row]}>
                                                <View style={[Style.col3]}>
                                                   <Text style={[Style.textSmall,Style.textGrey]}>Limite disponível</Text>
                                                </View>
                                                <View style={[Style.col2]}>
                                                   <Text style={[Style.textRight]}>R$ {item.LimiteDisponivel}</Text>
                                                </View>
                                            </View>
                                            
                                        </View>
                                        :
                                        <View style={[{padding:10}]}>
                                        
                                        <View style={Style.boxInfoflatListFooter}>

                                        <View style={[Style.row]}>
                                        

                                            <View style={[Style.col1]}>
                                              <Text style={[Style.textCenter]}>
                                              
                                              </Text>
                                            
                                              <Text style={[Style.textCenter,Style.textMedium]}>
                                                Adicionar novo cartão de crédito
                                             
                                              </Text>
                                                
                                            </View>
                                        </View>
                                       </View>
                                     </View>
                                                    }

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
HomeIndex.navigationOptions = {

};