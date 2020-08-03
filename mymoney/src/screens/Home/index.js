import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,FlatList ,
  ActivityIndicator,
  RefreshControl} from 'react-native';
import { Container,Right,Fab,Button,FooterTab,Footer,ActionSheet} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
import Style from './../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadContaService from '@Service/CadContaService';
import LoginService from "@Service/LoginService";
import Moment from 'moment';
import ActionButton from 'react-native-action-button';
import {Root} from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import NavigationService from '@Service/Navigation';
let LoginServiceInstance = new LoginService();
let CadContaServiceInstance = new CadContaService();

const filtro = {};
const data = new Date();



 class HomeIndex extends React.Component {

  constructor(props) {
    super(props);
    
    this.state={
     dashboardRequest:{
      ListaTodasReceitasDoMes:[],
      ListaProximosVencimentos:[],
      ListaDespesaCategoria:[],
      ListaCartaoCredito:[],
      SaldoAtual:0,
      TotalReceitas:0,
      TotalDespesas:0,
      NomeGrupoAtivo:"",
      MesVigente:Number(Moment(new Date()).format('MM'))
     },
     meses:[
        {text:'Janeiro', id: 1},
        {text:'Fevereiro',id: 2},
        {text:'Março',id: 3},
        {text:'Abril',id: 4},
        {text:'Maio',id: 5},
        {text:'Junho',id: 6},
        {text:'Julho',id: 7},
        {text:'Agosto',id: 8},
        {text:'Setembro',id: 9},
        {text:'Outubro',id: 10},
        {text:'Novembro',id: 11},
        {text:'Dezembro',id: 12},
      ],
      mesSelecionado:{
        text:'',
        id:''
      },
      refreshing: true
      
    }
    let mesativo= Number(Moment(new Date()).format('MM'));
    var listRequest = {
      mes:mesativo
    }
   this.getDashboard(listRequest);
  }

  componentDidMount() {
    let mesativo= Number(Moment(new Date()).format('MM'));
  
    var mesSel = this.state.meses.filter(x=>x.id == mesativo);
    this.state.mesSelecionado.text = mesSel[0].text;
    this.state.mesSelecionado.id = mesSel[0].id;
    console.log(this.state.mesSelecionado)

    var listRequest = {
      mes:mesativo
    }
   this.getDashboard(listRequest);
   
 }

   getDashboard(listRequest){
    CadContaServiceInstance.getDashboard(listRequest)
    .then(x=>{
      this.setState({ dashboardRequest: x })
      this.setState({
        refreshing: false,
      });

    })

   }

   onRefresh() {
    let mesativo= Number(Moment(new Date()).format('MM'));
    var listRequest = {
      mes:mesativo
    }
   this.getDashboard(listRequest);
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
     console.log(pfiltro + " 1");
     this.props.navigation.navigate('ContaDespesa', { pfiltro:pfiltro});

   }

   openCartaoCredito(item){
     this.props.navigation.navigation('CartaoCredito', {filtro:item});
   }

   selecionarMes(param,index){
    if(param){
      var indexi = index+1;
      if(indexi != this.state.meses.length){
        this.setState({ mesSelecionado: param})
        this.setState({ MesVigente: param.id})

        var listRequest= {
          mes:param.id
        }
       
        this.getDashboard(listRequest)
      }
    }
        
  }

render() {
  if (this.state.refreshing) {
    return (
      //loading view while data is loading
      <View style={{ flex: 1,  backgroundColor: "#C2185B", paddingTop: 20 }}>
      <Text> Carregando!</Text>
        <ActivityIndicator />
      </View>
    );
  }
    return (
        <Root >
            <Container style={[Style.container]}>
              <View style={Style.row}>
                <View style={[Style.col1, {backgroundColor:'#930D72',Color:"#ffffff", height:200,padding:40, borderBottomLeftRadius:10,borderBottomRightRadius:10}]}
                onPress={this.onRefresh.bind(this)}>
                <Text style={[Style.textCenter, Style.textMedium,{color:"#ffffff"}]}
                onPress={() =>
                  ActionSheet.show(
                    {
                      options: this.state.meses,
                      cancelButtonIndex: this.state.meses,
                      destructiveButtonIndex: this.state.meses,
                      title: "Escolha uma categoria"
                    },
                    buttonIndex => {
                      this.selecionarMes(this.state.meses[buttonIndex],buttonIndex);
                    }
                  )}
                > 
                 {this.state.mesSelecionado.text} 
                </Text>
                  <Text style={[Style.textCenter,{color:"#ffffff",fontSize:40}]}>
                    <Text style={[Style.textCenter,Style.textMedium]}  >R$</Text>
                    { this.currencyFormat(this.state.dashboardRequest.SaldoAtual)   }
                  </Text>
                  <Text style={[{color:"#ffffff"},Style.textCenter,Style.textSmall]}>
                    Saldo em conta do grupo {this.state.dashboardRequest.NomeGrupoAtivo}</Text>
                </View>
              </View>
              <View style={[Style.body,{marginTop:-60},Style.row]}>
                  <View style={[Style.col2,Style.boxInfoflatList,{height:90,marginBottom: 2}]} >

                    <Text style={[Style.textCenter,Style.textBlue,Style.textLarge]} onPress={()=> this.openCadReceitaList() }>
                    <Text style={[Style.textCenter,Style.textMedium]}  >R$</Text>
                      { this.currencyFormat(this.state.dashboardRequest.TotalReceitas)   }
                      </Text>
                      <Text style={[{color:"#414a4c"},Style.textCenter,Style.textSmall]} onPress={()=> this.openCadReceitaList() } >Receitas</Text>
                  </View>
                  <View style={[Style.col2,Style.boxInfoflatList,{height:90,marginBottom: 2}]} >

                    <Text style={[Style.textCenter,Style.textRed,Style.textLarge]} 
                    onPress={()=> {
                      this.props.navigation.navigate('ContaDespesa', { filtro: null})
                    }}>
                    <Text style={[Style.textCenter,Style.textMedium]}  >R$</Text>
                    { this.currencyFormat(this.state.dashboardRequest.TotalDespesas)   }

                      </Text>
                      <Text style={[{color:"#414a4c"},Style.textCenter,Style.textSmall]} >Despesas</Text>
                  </View>
               </View>
               <ScrollView refreshControl={
            <RefreshControl
              //refresh control used for the Pull to Refresh
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }>
               
                    {/* <View style={[Style.row]}>
                        <Text style={[Style.col1,Style.textCenter, Style.textMedium,{padding:10}]}>{Moment(data).format("MMMM")} </Text>
                    </View> */}
                    {/* <View style={[Style.row,{paddingBottom:10}]}>
                        <View style={[Style.col1]}>

                          <Text style={[Style.textCenter,Style.textLarge]}>
                          <Text style={[Style.textCenter,Style.textMedium]}  >R$</Text>
                          { this.currencyFormat(this.state.dashboardRequest.SaldoAtual)   }
                            </Text>
                            <Text style={[{color:"#414a4c"},Style.textCenter,Style.textSmall]}>Saldo em Contas</Text>
                        </View>
                    </View> */}

                   
             

                <View style={[{paddingHorizontal:5}]}>
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
                                    <TouchableOpacity style={[Style.boxInfoflatList,{backgroundColor:'#00adb5',height:95}]} underlayColor='transparent' 
                                    onPress={() => {
                                      this.props.navigation.navigate('ContaDespesa', { filtro: item.Descricao})
                                    }
                                   
                                    }>

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
                                <Text style={Style.sHeader}>{'Por categoria'.toUpperCase()}</Text>
                            </View>
                            <FlatList
                                data={this.state.dashboardRequest.ListaDespesaCategoria}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                style={Style.flatList}
                                renderItem={({ item }) => (
                                    <TouchableOpacity style={[Style.boxInfoflatList,{backgroundColor:'#fff',height:80}]}
                                    underlayColor='transparent' 
                                    >

                                        <View style={[Style.row,{padding:5}]}>
                                           <View style={[Style.col1]}>
                                             
                                           <Image
                                              style={{width: 50, height: 50}}
                                              source={{ uri: item.Icon}}
                                            />
                                                
                                            </View>
                                              <View style={[Style.col3]}>
                                                <Text style={[Style.textMedium,Style.textRight,Style.boxInfoflatListTitle,Style.textGreyDark]}>
                                                  {item.Descricao}
                                              </Text>
                                              <Text style={[Style.textMedium,Style.textRight,Style.boxInfoflatListTitle,Style.textGreyDark]}>
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
                                    <TouchableOpacity style={Style.boxInfoflatList} underlayColor='transparent' onPress={() => 
                                      this.props.navigation.navigate('ContaDespesaDetail', { filtro: item})}>


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
                                    <TouchableOpacity style={Style.boxInfoflatList} underlayColor='transparent' onPress={() => {

                                      this.props.navigation.navigate('CartaoCredito', {filtro:item});

                                    }}>

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

                                                    {
                                                    item.FaturaAberta ?
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
              
              <ActionButton buttonColor="#9b59b6">
              <ActionButton.Item buttonColor='#1abc9c' title="Adicionar receita" 
              onPress={() => this.props.navigation.navigate('ContaReceitaForm')}>
                  <Icon name="level-up" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item buttonColor='rgba(231,76,60,1)' title="Adicionar despesa" 
                onPress={() => this.props.navigation.navigate('ContaDespesaForm')}>
                  <Icon name="level-down" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                
                <ActionButton.Item buttonColor='rgba(231,76,60,1)' title="Adicionar despesa de cartão de crédito" 
                onPress={() => this.props.navigation.navigate('ContaDespesaCartaoCreditoForm')}>
                  <Icon name="credit-card" style={styles.actionButtonIcon} />
                </ActionButton.Item>
              </ActionButton>
              <Footer style={{backgroundColor:'transparent'}}>
                <FooterTab style={{backgroundColor:'transparent'}}>
                  <Button style={{backgroundColor:'#ffffff'}}
                   onPress={()=> this.props.navigation.navigate('HomeIndex')}>
                    <Text>Carteira</Text>
                  </Button>
                  <Button style={{backgroundColor:'#ffffff'}}
                  onPress={()=> this.props.navigation.navigate('Cadastros')}>
                    <Text>Cadastros</Text>
                  </Button>
                  <Button active style={{backgroundColor:'#ffffff',width:100, borderTopRightRadius:80, borderRightWidth:2,borderRightColor:'#cccccc'}}
                  onPress={()=> this.props.navigation.navigate('Perfil')}>
                    <Text>Perfil</Text>
                  </Button>
                  <Button style={{backgroundColor:'transparent'}}>
                    
                  </Button>
                </FooterTab>
              </Footer>
          </Container>
          </Root>
       )
  }
}

const styles = StyleSheet.create({
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },
});
export default HomeIndex;