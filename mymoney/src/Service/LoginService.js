import {
  BaseService
} from "./BaseService";

import CadUsuarioRow from './../model/CadUsuarioRow';
import store from './AsyncStorageProcess';
import { AsyncStorage } from 'react-native';


export default class LoginService extends BaseService {  
  
  async publicLogin() {
    return await this.login({
      Username: "deboraps",
      Password: "e4b65bb"
    })
  }


  async logar(username,password) {
console.log(username +" "+ password);
    return await this.login({
      Username: username,
      Password: password
    })
  }
  
  async login(loginRequest) {
    
    var loginResponse = {
      isAuthenticated : false,
      message : "",
    }   
    return this.post(this.baseUrl + 'Account/LoginExt/', loginRequest)
      .then((response) => {

        if(response.Sucesso == true){
         const newUsuario ={
            CadUsuarioId :response.Usuario.CadUsuarioId,
            Username : response.Username,
            Password : response.Senha,
            DisplayName : response.Usuario.UserDisplayName
            };

            loginResponse.isAuthenticated = true;
              console.log("::Usuario logado com sucesso");


          //sala informações do Usuario no Dispositivo
          this.setUsuarioLogado(newUsuario)
            .then((response)=>{
              console.log("::Usuario salvo no dispositivo com sucesso");

              //Salva Usuario Autenticado
              store.get('@UsuarioAutenticado')
              .then(res=>{
                if (res){
                  console.log("::Autenticacao do Usuario salva no dispositivo");
                }                        
                else{
                    let initialConfig = {
                        isAppInstaled: true
                    };
                    let obj = JSON.stringify(initialConfig);
                    store.save('@UsuarioAutenticado', obj)
                    .then(res=>{
                      console.log("::Autenticacao do Usuario salva no dispositivo");
                    })
                  }

                  
              })
            })
            .catch((error) => {
              loginResponse.message = error.message;
              console.log("::Erro ao salvar dados do Usuario no dispositivo");
              console.log("::message: "+loginResponse.message);
            })

            return response;
        }else{
          console.log("::Erro ao logar Usuario");
          console.log("::message: "+loginResponse.Error.Message);
        }
      })
      .catch((error) => {
        loginResponse.isAuthenticated = false;
        loginResponse.message = error.message;
        console.log("::Erro ao logar Usuario");
        console.log(loginResponse.message);
      })
      .finally((response) => {
        return loginResponse;
      })
  };

  async setUsuarioLogado(user){
    // const novoUsuario = [
    //   ['@CadUsuarioId', user.CadUsuarioId], 
    //   ['@Username', user.Username],
    //   ['@Password',user.Password],
    //   ['@DisplayName',user.DisplayName]
    // ];

    store.save("@UsuarioId",user.CadUsuarioId);

    return await  store.save("@UsuarioLogado",JSON.stringify(user));
  };




  

  async getUsuarioAutenticado(){
    return store.get('@UsuarioAutenticado');
  };

  async getUsuarioLogado(){
    return store.get("@UsuarioLogado");
  };

  async getUid(){
  return await store.get('UserUid')
  };
  async deleteUid(){
      return await store.delete('UserUid')
  };
  async getSeLogado(){
      return await store.get('logado')
  };
}
