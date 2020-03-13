import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import { Container,Right} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Style from './../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadContaService from '@Service/CadContaService';
import LoginService from "@Service/LoginService";
import Moment from 'moment';
let LoginServiceInstance = new LoginService();
let CadContaServiceInstance = new CadContaService();


const data = new Date();
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
     }
    }
  }  

  componentDidMount() {
    let listRequest = {
        mes: 3,
      }

    CadContaServiceInstance.getDashboard(listRequest)
    .then(x=>{
      this.setState({ dashboardRequest: x })
    })
   }



   openCadReceitaList(){
    this.props.navigation.navigate('ContaReceita')
   }

   openCadDespesaList(){
    this.props.navigation.navigate('ContaDespesa')
  }

  currencyFormat(num){
    return  num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  openCadDespesaByFilter(pfiltro){
    this.props.navigation.navigate('ContaDespesa',{filtro:pfiltro})
  }

  openCartaoCredito(item){
    this.props.navigation.navigation('CartaoCredito',{filtro:item});
  }
  
render() {
  
    return (
      
            <Container style={[Style.container]}>
              <View style={Style.row}>
                <View style={[Style.col1, {backgroundColor:'#930D72',Color:"#ffffff", height:80,width:'100%',borderRadius:100,padding:40}]}>
                    <Text style={[Style.textCenter, Style.textMedium,{color:"#ffffff"}]}> {'<  '} {Moment(data).format("MMMM")} {'  >'} </Text>
                </View>
              </View>
               <ScrollView style={Style.body}>              
               <View style={[Style.row,{paddingHorizontal:20}]}>
                  <View style={[Style.boxInfoflatList,Style.col1]}>
                    {/* <View style={[Style.row]}>
                        <Text style={[Style.col1,Style.textCenter, Style.textMedium,{padding:10}]}>{Moment(data).format("MMMM")} </Text>
                    </View> */}
                    <View style={[Style.row,{paddingBottom:10}]}>
                        <View style={[Style.col1]}>
                          
                          <Text style={[Style.textCenter,Style.textLarge]}>
                          <Text style={[Style.textCenter,Style.textMedium]}  >R$</Text>
                          { this.currencyFormat(this.state.dashboardRequest.SaldoAtual)   }
                            </Text>
                            <Text style={[{color:"#414a4c"},Style.textCenter,Style.textSmall]}>Saldo em Contas</Text>
                        </View>
                    </View>
                    <View style={[Style.row]}>
                      <View style={[Style.col2]} >
                       
                        <Text style={[Style.textCenter,Style.textBlue,Style.textLarge]} onPress={()=> this.openCadReceitaList() }>
                        <Text style={[Style.textCenter,Style.textMedium]}  >R$</Text>
                          { this.currencyFormat(this.state.dashboardRequest.TotalReceitas)   }
                          </Text>
                          <Text style={[{color:"#414a4c"},Style.textCenter,Style.textSmall]} onPress={()=> this.openCadReceitaList() } >Receitas</Text>
                      </View>
                      <View style={[Style.col2]} >
                        
                        <Text style={[Style.textCenter,Style.textRed,Style.textLarge]} onPress={()=> this.openCadDespesaList()}>
                        <Text style={[Style.textCenter,Style.textMedium]}  >R$</Text>
                        { this.currencyFormat(this.state.dashboardRequest.TotalDespesas)   }
                       
                          </Text>
                          <Text style={[{color:"#414a4c"},Style.textCenter,Style.textSmall]} onPress={()=> this.openCadDespesaList()}>Despesas</Text>
                      </View>

                    </View>
                </View>
              </View>
             
                <View style={[{paddingHorizontal:10}]}>
                  <View style={[Style.row]}>

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
                                    <TouchableOpacity style={[Style.boxInfoflatList,{backgroundColor:'#00adb5',height:95}]} underlayColor='transparent' onPress={() => this.openCadDespesaByFilter(item.Descricao)}>
                                     
                                        <View style={[Style.row,{padding:6,paddingHorizontal:10}]}>
                                           <View style={[Style.col1]}>
                                                  <Text style={[Style.textWhite,Style.textMedium]} >{item.Qtde}   {item.Descricao}</Text>
                                            </View>
                                        </View>
                                        <View style={[Style.row,{padding:5}]}>
                                           <View style={[Style.col2]}>
                                                  <Text style={[Style.textWhite]} >
                                                    Valor total
                                                    
                                                    </Text>
                                            </View>
                                            <View style={[Style.col3]}>
                                              <Text style={[Style.textMedium,Style.textRight,Style.boxInfoflatListTitle,Style.textWhite]}>
                                                <Text style={[Style.textCenter,Style.textMedium]}  >R$</Text>
                                                { this.currencyFormat(item.Valor) }
                                                </Text>
                                            </View>
                                        </View>


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
                                                <Text style={[Style.textMediumg]}>
                                                <Text style={[Style.textCenter,Style.textMedium]}  >R$</Text>
                                                  { this.currencyFormat(item.Valor) }
                                                </Text>
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
                                    <TouchableOpacity style={Style.boxInfoflatList} underlayColor='transparent' onPress={() => this.openCartaoCredito(item)}>
                                        
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
                                                <Text style={[Style.textSmall,Style.textGrey,Style.textMediumg]}>
                                              
                                                  <Text style={[Style.textCenter,Style.textMedium]}  >R$</Text>
                                                  { this.currencyFormat(item.ValorFatura) }
                                                </Text>
                                            </View>
                                            <View style={[Style.row]}>
                                                <View style={[Style.col3]}>
                                                   <Text style={[Style.textSmall,Style.textGrey]}>Limite disponível</Text>
                                                </View>
                                                <View style={[Style.col2]}>
                                                   <Text style={[Style.textRight]}>
                                                   <Text style={[Style.textCenter,Style.textMedium]}  >R$</Text>
                                                  { this.currencyFormat(item.LimiteDisponivel) }
                                                </Text>
                                                 
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