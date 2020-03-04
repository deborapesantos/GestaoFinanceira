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

  // static setCallbackAfterInsertRecentlySeen(fn){
  //     if(fn)
  //       callback = fn;
  // }
  // static execCallbackAfterInsertRecentlySeen(){
  //       callback();
  // }

  // async list(listRequest) {
  //   listRequest = listRequest || {};
  //   listRequest.Criteria = Serenity.Criteria.and(
  //     listRequest.Criteria,
  //     []
  //     //[['DataVencimento'], '>=', moment().format('YYYY-MM-DD')]
  //     );
  //   return await this.post(this.api_url + 'List/', listRequest)
  // };

  async retrieve(id) {
    return await this.post(this.api_url + 'Retrieve/',{EntityId: id})
  };
  
  async count() {
    return await this.get(this.api_url + 'Count/')
                 .then((data) => data.TotalCount)
    
  };

  async getSumValor() {
    return await this.get(this.api_url + 'GetSumValor/')
                 .then((data) => data.TotalCount)
    
  };

  openCadReceitaById(cadReceitaId,params){
    return this.retrieve(cadReceitaId)
    .then((data) => {
        let receita = data.Entity;
        this.openCadReceita(receita,params)
    })
  }
  openCadReceita(receita,params){
      var parameters = params || {};
      parameters.detail = receita
      NavigationService.navigate('CadReceitaDetail', parameters, null, 'cadReceita'+ receita.cadReceitaId);
  }

  // async setRecentlySeenEventAddress(eventAddress){
    
  //   return  await AsyncStorage.getItem('RECENTLY_SEEN_EVENTS_ADDRESS')
  //    .then(eventListStr => {
  //     let eventAddressList = [];
  //     if (eventListStr){
  //         let eventMaxLength = 15
  //         eventAddressList = JSON.parse(eventListStr)
  //         if(eventAddressList.length > eventMaxLength){
  //           eventAddressList.splice(eventMaxLength,eventAddressList.length - eventMaxLength)
  //         }
  //         eventAddressList = eventAddressList.filter( 
  //                               x => x.EventAddressId != eventAddress.EventAddressId)
  //         eventAddressList.unshift(eventAddress);
  //     }                        
  //     else{
  //       eventAddressList = [eventAddress]      
  //     }
  //       let obj = JSON.stringify(eventAddressList);
  //       AsyncStorage.setItem('RECENTLY_SEEN_EVENTS_ADDRESS', obj);
  //       return eventAddress;
  //     });

  // }

  // async getRecentlySeenEventAddresses(){
  //   return await AsyncStorage.getItem('RECENTLY_SEEN_EVENTS_ADDRESS')
  //   .then(eventListStr => {
  //     let eventAddressList = [];
  //     if (eventListStr) {
  //       eventAddressList = JSON.parse(eventListStr);
  //     }
  //     return eventAddressList;
  //   })  
  // }

  
}