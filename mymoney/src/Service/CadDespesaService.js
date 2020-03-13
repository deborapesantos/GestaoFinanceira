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
  async listar(listRequest) {
    return await this.post(this.api_url + 'ListCadDespesa/',listRequest)
  };

  

}