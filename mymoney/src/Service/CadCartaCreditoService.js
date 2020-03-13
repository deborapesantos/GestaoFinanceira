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

  

}