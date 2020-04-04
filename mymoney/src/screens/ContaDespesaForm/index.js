import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Container, Header, Content, Picker, Form ,CheckBox } from "native-base";
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import RNPickerSelect from 'react-native-picker-select';
import { MonoText } from '../components/StyledText';


const listaTabTipoDespesa = [];
const listaCadParticipante = [];
export default class ContaDespesaForm extends React.Component {
  //Este método é usado para inicializar nosso componente com estado inicial, nenhum elemento de UI nativo foi renderizado
  
  constructor(props) {
    super(props);
    state={
      model:{
        Titulo:'',
        DataPagamento:null,
        DataCriacao:new Date(),
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
        CadContaId:0,
        CadGrupoFamiliarId:0,
        CadUsuarioId:0,
        CadFaturaCartaoCreditoId:0,
        CodigoTabTipoDespesa:0,
        CadParticipanteId:0,
      }

    }
    
  }

 componentDidMount() {
    
  }
  
render() {
    return (
        <View >
            <View style={styles.inputView} >
              <TextInput  
                style={styles.inputText}
                placeholder="Valor Total" 
                placeholderTextColor="#003f5c"
                onChangeText={text => this.setState({model:{
                  ValorTotal:text
                }})}/>
            </View>
            <ListItem>
                <Body>
                  <Text>Pago</Text>
                </Body>
                <CheckBox checked={this.state.model.Pago} color="green" />
          </ListItem>
            
            {
              this.state.model.Pago ?
              <View style={styles.inputView} >
              <TextInput  
              style={styles.inputText}
              placeholder="Data Pagamento" 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({model:{
                DataPagamento:text
                }})}/>
            </View>
            :
            <View/>
              
            }


         <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Descrição" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({model:{
              Titulo:text
            }})}/>
        </View>

        <ListItem>
                <Body>
                  <Text>Despesa Fixa</Text>
                </Body>
                <CheckBox checked={this.state.model.IsFixo} color="green" />
          </ListItem>
            
            {
              this.state.model.IsFixo ?
              <View style={styles.inputView} >
              <TextInput  
              style={styles.inputText}
              placeholder="Data Fixa" 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({model:{
                DataFixaVencimento:text
                }})}/>
                <TextInput  
              style={styles.inputText}
              placeholder="Repetir" 
              placeholderTextColor="#003f5c"
              onChangeText={text => this.setState({model:{
                RepeticaoDespesaFixa:text
                }})}/>
            </View>
            :
            <View/>
              
            }


        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            placeholder="Categoria "
            items={listaTabTipoDespesa}
            />

        <RNPickerSelect
            onValueChange={(value) => console.log(value)}
            placeholder="Destinatário"
            items={listaCadParticipante}
            />
        </View>
      )
  }
}

ContaDespesaForm.navigationOptions = {
  header: null,
};


