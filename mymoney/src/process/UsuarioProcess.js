import LoginService from "@Service/LoginService";


let LoginServiceInstance = new LoginService();
let Usuario ={
  CadUsuarioId: 0,
  Username : "",
  Password : "",
  DisplayName : ""
  };
export default class UsuarioProcess {  
  
 


 getUsuarioLogado(){
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
     console.log(usuario);
     return usuario;
    }})

 }


 //Se Usuario não estiver autenticado, loga
 async usuarioAuthenticado(){
   return await LoginServiceInstance.getUsuarioAutenticado()
}


  // logar(Usuario,senha){
  //   LoginServiceInstance.logar(Usuario,senha)
  //       .then((response) => {
            
  //         LoginServiceInstance.getUsuarioLogado()
  //         .then(res =>{
  //           if(res){

  //             const Usuario ={
  //               CadUsuarioId :res[0][1],
  //               Username : res[1][1],
  //               Password : res[2][1],
  //               DisplayName : res[3][1]
  //               };

  //               console.log(Usuario);

  //               return Usuario;
              
  //           }})

  //         });
  // }

}
