import {
  BaseService
} from "./BaseService";

export  default class CadDespesaService extends BaseService {  

  api_url = this.servicesUrl + "CadDespesa/";

  // async list(listRequest) {
  //   listRequest = listRequest || {};
  //   listRequest.Criteria = Serenity.Criteria.and(
  //     listRequest.Criteria,
  //     [['EndDate'], '>', moment().format('YYYY-MM-DD')]);
  //   return await this.post(this.api_url + 'List/', listRequest)
  // };

  async retrieve(id) {
    return await this.post(this.api_url + 'Retrieve/',{EntityId: id})
  };

  async pagar(model) {
    return await this.post(this.api_url + 'PagarDespesa/',
    {
      CadDespesaId:model.CadDespesaId,
    })
  };

  async criarNovo(model) {
    return await this.post(this.api_url + 'CriarDespesa/',
    {
       
      Titulo:model.Titulo,
      DataPagamento:model.DataPagamento,
      DataCriacao:model.DataCriacao,
      IsFixo:model.IsFixo,
      DataFixaVencimento: model.DataFixaVencimento,
      IsParcelado:model.IsParcelado,
      QdteParcelas:model.QdteParcelas,
      DataVencimento:model.DataVencimento,
      ValorTotal:model.ValorTotal,
      MultasJuros:model.MultasJuros,
      Pago:model.Pago,
      Ativo:model.Ativo,
      Imposto:model.Imposto,
      Descontos:model.Descontos,
      CadContaId:model.CadContaId,
      CadGrupoFamiliarId:model.CadGrupoFamiliarId,
      CadUsuarioId:0,
      CadFaturaCartaoCreditoId:model.CadFaturaCartaoCreditoId,
      CodigoTabTipoDespesa:model.CodigoTabTipoDespesa,
      CadParticipanteId:0,
    })
  };

  async editar(model) {
    return await this.post(this.api_url + 'EditarDespesa/',
    {
       
      Titulo:model.Titulo,
      DataPagamento:model.DataPagamento,
      CadDespesaId : model.CadDespesaId,
      //IsFixo:model.IsFixo,
      //DataFixaVencimento: model.DataFixaVencimento,
      //IsParcelado:model.IsParcelado,
      //QdteParcelas:model.QdteParcelas,
      DataVencimento:model.DataVencimento,
      ValorTotal:model.ValorTotal,
     // MultasJuros:model.MultasJuros,
      Pago:model.Pago,
      //Ativo:model.Ativo,
      //Imposto:model.Imposto,
      //Descontos:model.Descontos,
      CadContaId:model.CadContaId,
      //CadGrupoFamiliarId:0,
      //CadUsuarioId:0,
      //CadFaturaCartaoCreditoId:model.CadFaturaCartaoCreditoId,
      CodigoTabTipoDespesa:model.CodigoTabTipoDespesa,
      //CadParticipanteId:0,
    })
  };

  async listar(listRequest) {
    return await this.post(this.api_url + 'ListCadDespesa/',listRequest)
  };

  async GetTabelasAuxiliares(listRequest) {
    return await this.post(this.api_url + 'GetTabelasAuxiliares/',{ CadDespesaId:listRequest})
  };
  async GetById(listRequest) {
    return await this.post(this.api_url + 'GetById/',{ CadDespesaId:listRequest})
  };
  
  
  

}