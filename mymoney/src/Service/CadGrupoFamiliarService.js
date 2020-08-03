import {
    BaseService
  } from "./BaseService";
  
  export  default class CadGrupoFamiliarService extends BaseService {  
  
    api_url = this.servicesUrl + "CadGrupoFamiliar/";

    async create(model) {
        return await this.post(this.api_url + 'CriarGrupo/',{Entity: model})
    };

    async AlterarGrupo(model){
      return await this.post(this.api_url + 'AlterarGrupo/',
      {
        CadGrupoFamiliarId:model.CadGrupoFamiliarId}
        )}
      
  }