import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View,TextInput,Alert, AppRegistry  } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import NavigationService from '@Service/Navigation';
import * as WebBrowser from 'expo-web-browser';
import {
  AsyncStorage
} from "react-native";
import LoginService from "@Service/LoginService";
import UsuarioProcess from "./../../process/UsuarioProcess";
import store from "@Service/AsyncStorageProcess";

let LoginServiceInstance = new LoginService();
let UsuarioProcessInstance = new UsuarioProcess();


export default class Login extends React.Component {
 //static navigationOptions = { header: null }
  constructor(props) {
    super(props);
    state={
      username:"",
      password:"",
      isAutenticado:false,
      Usuario :{
        CadUsuarioId: 0,
        Username : "",
        Password : "",
        DisplayName : ""
        }
    };

  }

 componentDidMount() {
  UsuarioProcessInstance.usuarioAuthenticado()
  .then(res =>{
    if(res){
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

            LoginServiceInstance.logar(usuario.Username,usuario.Password)
            .then(x=>{
              this.props.navigation.navigate('HomeIndex')
            })
           
          }
        })

        }else{
          console.log("::usuario não autenticado deve logar");
      }
  });

  
 }

  logar(username,password){
     if(username == null || password == null){
       Alert.alert('Alerta de login','preencha usuario e senha');
       return;
     }

    LoginServiceInstance.logar(username,password)
    .then(res=>{
      this.props.navigation.navigate('HomeIndex')
    })
  }


  
render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Saldo Positivo</Text>
        <View style={styles.inputView} >
          <TextInput  
            style={styles.inputText}
            placeholder="Nome de usuário" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({username:text})}/>
        </View>
        <View style={styles.inputView} >
          <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Senha" 
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({password:text})}/>
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Esqueceu a senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn} onPress={()=>{this.logar(this.state.username,this.state.password)}}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.loginText}>Cadastrar</Text>
        </TouchableOpacity>
        </View>
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
    width:"80%",
    backgroundColor:"#f2f2f2",//dark purple
    color:'#ffffff',
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:10
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
  }
});

Login.navigationOptions = ({ /*navigation*/ }) => {
  return {
      headerMode: 'none'
  }
}



