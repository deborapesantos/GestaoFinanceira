import {
  BaseService
} from "./BaseService";

export  default class CadCartaCreditoService extends BaseService {  

  api_url = this.servicesUrl + "CadCartaoCredito/";

  async retrieve(id) {
    return await this.post(this.api_url + 'Retrieve/',{EntityId: id})
  };
  async listar(listRequest) {
    return await this.post(this.api_url + 'ListarCartaoCreditoDepesas/',listRequest)
  };

  async create(model) {
    return await this.post(this.api_url + 'CriarCartaoCredito/',
    {
      CadContaId:model.CadContaId,
      CadGrupoFamiliarId:model.CadGrupoFamiliarId,
      CodigoTabTipoCartaoCredito:model.CodigoTabTipoCartaoCredito,
      Titulo:model.Titulo,
      Descricao:"",
      DiaVencimentofatura:model.DiaVencimentofatura,
      DiaPagarFatura:model.DiaPagarFatura,
      DiaFecharFatura:model.DiaFecharFatura,
      ValorLimiteTotal:model.ValorLimiteTotal,
      ValorLimiteAtual:model.ValorLimiteAtual,
      Ativo:true,

    })
  };

  async GetTabelasAuxiliares(listRequest) {
    return await this.post(this.api_url + 'GetTabelasAuxiliares/',listRequest)
  };  

}