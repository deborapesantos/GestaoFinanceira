import {
  BaseService
} from "./BaseService";

export  default class CadFaturaCartaoCreditoService extends BaseService {  

  api_url = this.servicesUrl + "CadFaturaCartaoCredito/";

  async retrieve(id) {
    return await this.post(this.api_url + 'Retrieve/',{EntityId: id})
  };
  async listar(listRequest) {
    return await this.post(this.api_url + 'ListarCartaoCreditoDepesas/',listRequest)
  };

  async pagar(id) {
    return await this.post(this.api_url + 'PagarFatura/',
    {
      EntityId:id,
    })
  };

}