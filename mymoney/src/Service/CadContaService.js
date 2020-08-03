import {
  BaseService
} from "./BaseService";

export  default class CadContaService extends BaseService {  
  
  api_url = this.servicesUrl + "CadConta/";
  
 
  
  async getDashboard(listRequest) {
    return await this.post(this.api_url + 'GetDashboard/',listRequest)
  };

  async retrieve(id) {
    return await this.post(this.api_url + 'Retrieve/',{EntityId: id})
  };

  async create(model) {
    return await this.post(this.api_url + 'CriarConta/',{
      CadGrupoFamiliarId:model.CadGrupoFamiliarId,
      CodigoTabTipoConta:model.CodigoTabTipoConta,
      ValorInicial:model.ValorInicial,
      SaldoAtual:model.SaldoAtual,
      Titulo:model.Titulo,
      Ativo:true
    })
  };

  async GetTabelasAuxiliares(listRequest) {
    return await this.post(this.api_url + 'GetTabelasAuxiliares/',listRequest)
  };

}