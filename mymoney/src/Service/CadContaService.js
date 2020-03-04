import {
  BaseService
} from "./BaseService";

export  default class CadContaService extends BaseService {  
  
  api_url = this.servicesUrl + "CadConta/";
  
  async getSumValor() {
    return await this.get(this.api_url + 'GetSumValor/')
                 .then((data) => data.TotalCount)
    
  };


  // async list(listRequest) {
  //   listRequest = listRequest || {};
  //   listRequest.Criteria = Serenity.Criteria.and(
  //     listRequest.Criteria,
  //     []
  //    // [['EndDate'], '>', moment().format('YYYY-MM-DD')]
      
  //     );
  //   return await this.post(this.api_url + 'List/', listRequest)
  // };

  async retrieve(id) {
    return await this.post(this.api_url + 'Retrieve/',{EntityId: id})
  };


}