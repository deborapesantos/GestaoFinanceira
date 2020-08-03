import * as React from 'react';
import { Image, Platform, StyleSheet,  TouchableOpacity, View,TextInput,Alert, AppRegistry,ListItem,Body,Text ,Switch } from 'react-native';
import { Container, Header, Content, Picker, Form ,CheckBox,Footer,Button,Item,Label,Input,DatePicker,ActionSheet } from "native-base";
import {Root} from 'native-base';
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';

import Style from '../../theme/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import CadGrupoFamiliarService from '@Service/CadGrupoFamiliarService';


let CadGrupoFamiliarServiceInstance = new CadGrupoFamiliarService();

export default class CadGrupoFamiliarForm extends React.Component {

  constructor(props) {
    super(props);
    this.state={
       Ativo:true,
       CodigoAcesso:'',
       Titulo:''
    };
  }

salvar(){
    this.criarNovo();
}
 
  criarNovo(){
    let model   = {
      Ativo:true,
      CodigoAcesso:this.state.CodigoAcesso,
      Titulo:this.state.Titulo
    };

    CadGrupoFamiliarServiceInstance.create(model)
    .then(x=>{
      this.props.navigation.navigate('HomeIndex', { isload: true})
    })
  }

  

  componentDidMount() {
   
  }

render() {
    return (
      <Root>
      <Container style={[Style.container,{backgroundColor:'#ffffff',paddingHorizontal:10}]}>
         <View style={[Style.row]}>
            <View style={Style.sectionGrey}>
              <View style={Style.headerBg}>
                <Text style={Style.sHeader}>{'Cadastro de Grupo'.toUpperCase()}</Text>
              </View>
            </View>
        </View>
        <View style={Style.row}>
          <View style={Style.col1,styles.inputView} >
            <Item inlineLabel>
              <Label style={styles.labelText}>Titulo do Grupo</Label>
              <TextInput  
                style={styles.inputText}
                placeholder="ex. grupo da Familia"
                keyboardType="default"
                placeholderTextColor="#d3d3d3"
                onChangeText={text => this.setState({ Titulo:text })}/>
            </Item>
          </View>
        </View>
       
        <View style={[styles.footer,Style.row]}>
          <Button rounded warning style={[Style.col1]} onPress={()=>this.salvar()}>
            <Text >Salvar</Text>
          </Button> 
          </View>
        
      </Container>
      </Root>
      )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#930D72',//purple
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#FF9102",
    marginBottom:40
  },
  inputView:{
    width:"100%",
    backgroundColor:"#ffffff",//dark purple
    color:'#ffffff',
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:10
  },
  inputTextMoney:{
    fontSize:40,
    color:'#000000'
  },
  inputText:{
    width:"100%",
  },
  inputViewMoney:{
    width:"80%",
    backgroundColor:"#ffffff",//dark purple
    color:'#000000',
    marginBottom:20,
    justifyContent:"center",
    padding:10,
    height:100,
    
  },
  forgot:{
    color:"#ffffff",
    fontSize:11
  },
  loginBtn:{
    width:"80%",
    backgroundColor:"#FF9102",
    color:"#ffffff",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:10
  },
  loginText:{
    color:"#ffffff",
  },
  footer: {
    position: 'absolute',
    flex:0.1,
    left: 0,
    right: 0,
    bottom: -10,
    backgroundColor:'transparent',
    flexDirection:'row',
    height:80,
    alignItems:'center',
    paddingHorizontal:40
  },
  labelText:{
    fontSize:15,
  }
  
});



