import {
  BaseService
} from "./BaseService";

export  default class CadContaService extends BaseService {  
  
  api_url = this.servicesUrl + "CadConta/";
  
 
  
  async getDashboard(listRequest) {
    console.log(this.api_url);
    return await this.post(this.api_url + 'GetDashboard/',listRequest)
    
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