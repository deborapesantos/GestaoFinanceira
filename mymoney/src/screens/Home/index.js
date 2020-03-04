import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,FlatList } from 'react-native';
import { Container,Right} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Style from './../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class HomeIndex extends React.Component {
  
  constructor(props) {
    super(props);
    this.state={
      categories:[
        {
          qdte:"01",
          descricao:"vencidos"
      },
    ],
      titulos:[
      {
        nome:'Vencidos',
        valorTotal:45000,
        qdte:"01"
      },
      {
        nome:'Esta semana',
        valorTotal:50,
        qdte:"01"
      },
      {
        nome:'Este mês',
        valorTotal:500,
        qdte:"02"
      }
    ],
      proximosVencimentos:[
        {
          nome:'Internet fixa',
          valorTotal:120,
          data:'15 de fevereiro'
        },
        {
          nome:'Energia elétrica',
          valorTotal:86,
          data:'25 de fevereiro'
        },
        {
          isAdicionar:true
        }
        ],
        cartoesCredito:[
          {
            nome:'Itaú final 6002',
            valorTotalFatura:120,
            data:'15 de fevereiro',
            limiteTotal:3000,
            saldoLimite:1200,
            faturaAberta:true,
            
          }
          ,
          {
            isAdicionar:true
          }
          ]
      
    }
  }

  
render() {
    return (
      
            <Container style={[Style.container]}>
               <ScrollView style={Style.body}>
              
               <View style={[Style.row,{paddingHorizontal:20}]}>
                  <View style={[Style.boxInfoflatList,Style.col1]}>
                    <View style={[Style.row]}>
                        <Text style={[Style.col1,Style.textCenter, Style.textMedium,{padding:10}]}>Fevereiro</Text>
                    </View>
                    <View style={[Style.row]}>
                        <View style={[Style.col1]}>
                          <Text style={[Style.textCenter,Style.textMedium]}>Saldo</Text>
                          <Text style={[Style.textCenter,Style.textMediumg]}>1.000,00</Text>
                        </View>
                    </View>
                    <View style={[Style.row]}>
                      <View style={[Style.col2]}>
                        <Text style={[Style.textCenter,Style.textMedium]}>Receita</Text>
                        <Text style={[Style.textCenter,Style.textBlue,Style.textMediumg]}>1.000,00</Text>
                      </View>
                      <View style={[Style.col2]}>
                        <Text style={[Style.textCenter,Style.textMedium]}>Despesa</Text>
                        <Text style={[Style.textCenter,Style.textRed,Style.textMediumg]}>1.030,00</Text>
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
                                data={this.state.titulos}
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
                                                  <Text style={[Style.textWhite,Style.textMedium]} >{item.qdte}   {item.nome}</Text>
                                            </View>
                                        </View>
                                        <View style={[Style.row,{padding:5}]}>
                                           <View style={[Style.col2]}>
                                                  <Text style={[Style.textWhite]} >Valor total</Text>
                                            </View>
                                            <View style={[Style.col3]}>
                                              <Text style={[Style.textMedium,Style.textRight,Style.boxInfoflatListTitle,Style.textWhite]}>R$ {item.valorTotal}</Text>
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
                                data={this.state.proximosVencimentos}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={Style.flatList}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={Style.boxInfoflatList} underlayColor='transparent' onPress={() => this.onLearnMoreEvent(item)}>
                                        
                                        
                                        {
                                        !item.isAdicionar ?
                                        
                                        <View style={[{padding:10}]}>
                                            <Text style={[Style.textMedium,Style.boxInfoflatListTitle]}>{item.data}</Text>
                                            <Text style={[Style.textMedium,Style.textGrey,{marginTop:5}]}>{item.nome}</Text>
                                            <View style={Style.boxInfoflatListFooter}>

                                            <View style={[Style.row]}>
                                                <View style={[Style.col4]}>
                                                <Text style={[Style.textMediumg]}>R$ {item.valorTotal}</Text>
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
                                data={this.state.cartoesCredito}
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
                                                   <Text style={[Style.boxInfoflatListTitle,Style.textMedium]}>{item.nome}</Text>
                                                </View>
                                                <View style={[Style.col2]}>
                                                   <Text style={[Style.textRight]}>Venc. 25</Text>
                                                </View>
                                            </View>
                                             <View style={[Style.row]}>
                                                <View style={[Style.col1]}>
                                                  <Text style={[Style.textRight,Style.textRed,Style.textSmall]}>Fatura Aberta</Text>
                                                </View>
                                            </View>
                                            <View style={[{marginTop:10}]}>
                                                <Text style={[Style.textSmall,Style.textGrey]}>Valor parcial da fatura</Text>
                                            </View>
                                            <View style={[{}]}>
                                                <Text style={[Style.textSmall,Style.textGrey,Style.textMediumg]}>R$ {item.valorTotalFatura}</Text>
                                            </View>
                                            <View style={[Style.row]}>
                                                <View style={[Style.col3]}>
                                                   <Text style={[Style.textSmall,Style.textGrey]}>Limite disponível</Text>
                                                </View>
                                                <View style={[Style.col2]}>
                                                   <Text style={[Style.textRight]}>R$ {item.saldoLimite}</Text>
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