import {
  BaseService
} from "./BaseService";
import {AsyncStorage} from "react-native";
import Serenity from '@Service/Serenity'
import moment from 'moment'
import NavigationService from '@Service/Navigation'

export  default class CadReceitaService extends BaseService {  
  
  api_url = this.servicesUrl + "CadReceita/"
   

  static callback = () => {};

  async retrieve(id) {
    return await this.post(this.api_url + 'Retrieve/',{EntityId: id})
  };

  openCadReceitaById(cadReceitaId,params){
    return this.retrieve(cadReceitaId)
    .then((data) => {
        let receita = data.Entity;
        this.openCadReceita(receita,params)
    })
  }  

  async criarNovo(request) {
    return await this.post(this.api_url + 'CriarReceita/',
    {
      CadContaId : request.CadContaId,
      CadGrupoFamiliarId: null,
      CadUsuarioId : null,
      CodigoTabTipoReceita : request.CodigoTabTipoReceita,
      Titulo : request.Titulo,
      Descricao : request.Descricao,
      DataRecebimento :request.DataRecebimento,
      DataCriacao :null,
      DataFixaRecebimento : request.DataFixaRecebimento,
      IsFixo : request.IsFixo,
      QdteParcelas:0,
      Valor : request.Valor,
      Recebido : request.Recebido,
      Juros : request.Juros,
      Rendimento : request.Rendimento,
      Imposto : request.Imposto,
      Ativo : request.Ativo
    })
  };

  openCadReceita(receita,params){
    var parameters = params || {};
    parameters.detail = receita
    NavigationService.navigate('CadReceitaDetail', parameters, null, 'cadReceita'+ receita.cadReceitaId);
}
  async GetTabelasAuxiliares(listRequest) {
    return await this.post(this.api_url + 'GetTabelasAuxiliares/',listRequest)
  };
  
  async count() {
    return await this.get(this.api_url + 'Count/')
                 .then((data) => data.TotalCount)
    
  };

  async listar(listRequest) {
    return await this.post(this.api_url + 'ListCadReceita/',listRequest)
  };


  async getSumValor() {
    return await this.get(this.api_url + 'GetSumValor/')
                 .then((data) => data.TotalCount)
    
  };

  
}