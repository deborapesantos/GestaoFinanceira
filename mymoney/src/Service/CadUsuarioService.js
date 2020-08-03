import {
    BaseService
  } from "./BaseService";
  
  export  default class CadUsuarioService extends BaseService {  
  
    api_url = this.servicesUrl + "CadUsuario/";

    async GetPerfil(listRequest) {
        return await this.post(this.api_url + 'GetPerfil/',listRequest)
    }; 

    async UsuarioIsAdmin(model) {
      return await this.post(this.api_url + 'UsuarioIsAdmin/')
    }; 

    async GetUsuarioGerenciamento(model) {
      return await this.post(this.api_url + 'GetUsuarioGerenciamento/',{
        CadUsuarioId:model
      })
    };     

    async AdicionarGrupoPermissao(model) {
      return await this.post(this.api_url + 'AdicionarGrupoPermissao/',model)
    }; 

    async RemoverGrupoPermissao(model) {
      return await this.post(this.api_url + 'RemoverGrupoPermissao/',model)
    }; 
    
    async ListarUsuarios(listRequest) {
      return await this.post(this.api_url + 'ListarUsuarios/')
   }; 

    async create(model) {
        return await this.post(this.api_url + 'CriarUsuarioByOtherUser/',{
        CadGrupoFamiliarId :model.CadGrupoFamiliarId,
        Nome: model.Nome,
        NomeUsuario:model.NomeUsuario,
        Password:model.Password,
        Telefone:model.Telefone,       
        Email:model.Email,
        Ativo:model.Ativo
        })
      };    

      async GetTabelasAuxiliares(listRequest) {
        return await this.post(this.api_url + 'GetTabelasAuxiliares/',listRequest)
      };

      

  }