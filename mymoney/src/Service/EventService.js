import {
  BaseService
} from "./BaseService";
import Serenity from './node_modules/@Service/Serenity'
import moment from './node_modules/moment'
import NavigationService from './node_modules/@Service/Navigation'
import {AsyncStorage} from "react-native";

export  default class EventService extends BaseService {  
  
  api_url = this.servicesUrl + "Event/Event/"
  
  static callback = () => {};

  // static setCallbackAfterInsertRecentlySeen(fn){
  //     if(fn)
  //       callback = fn;
  // }
  // static execCallbackAfterInsertRecentlySeen(){
  //       callback();
  // }

  async list(listRequest) {
    listRequest = listRequest || {};
    listRequest.Criteria = Serenity.Criteria.and(
      listRequest.Criteria,
      [['EndDate'], '>', moment().format('YYYY-MM-DD')]);
    return await this.post(this.api_url + 'ListWT/', listRequest)
  };

  async retrieve(id) {
    return await this.post(this.api_url + 'RetrieveWT/',{EntityId: id})
  };

  async countFutureEvents() {
    return await this.get(this.api_url + 'CountFutureEvents/')
                 .then((data) => data.TotalCount)
    
  };

  async listRelatedEvents(event){    
    let listRequest = {
      Take: 5,
      Criteria: null
    }    
    let categoryCriteria = Serenity.Criteria.or(
        [['CategoryPrimId'], 'in', [[event.CategoryPrimId, event.CategorySecId]]],
        [['CategorySecId'], 'in', [[event.CategoryPrimId, event.CategorySecId]]]
    );
    listRequest.Criteria = Serenity.Criteria.and(
      categoryCriteria, [['EventId'], '!=', event.EventId]);
    
    return this.list(listRequest)
  }

  openEventById(eventId, params){
    return this.retrieve(eventId)
    .then((data) => {
        let event = data.Entity;
        this.openEvent(event,params)
    })
  }
  openEvent(event, params){
    var parameters = params || {};
    parameters.detail = event
    NavigationService.navigate('PublicEventDetail', parameters, null, 'event'+ event.EventId);
  }
  
  // getFullAddress(event){

  //   let addressList = [
  //     event.EventAddressAddress || "",
  //     event.EventAddressAddressNum || "",
  //     event.EventAddressNeighborhood|| "",
  //     event.EventAddressCity || "",
  //   ]
  //   event.EventAddressState = event.EventAddressState || ""

  //   return addressList.join(", ") + " - " + event.EventAddressState  
  // }
  // async setRecentlySeenEvent(event){
    
  //   return  await AsyncStorage.getItem('RECENTLY_SEEN_EVENTS')
  //    .then(eventListStr => {
  //     let eventList = [];
  //     if (eventListStr){
  //         let eventMaxLength = 15
  //         eventList = JSON.parse(eventListStr)
  //         if(eventList.length > eventMaxLength){
  //           eventList.splice(eventMaxLength,eventList.length - eventMaxLength)
  //         }
  //         eventList = eventList.filter( 
  //                               x => x.EventId != event.EventId &&
  //                                    moment(x.EndDate).isAfter(moment()))
  //         eventList.unshift(event);
  //     }                        
  //     else{
  //         eventList = [event]      
  //     }
  //       let obj = JSON.stringify(eventList);
  //       AsyncStorage.setItem('RECENTLY_SEEN_EVENTS', obj);
  //       return event;
  //     });

  // }

  // async getRecentlySeenEvents(){
  //   return await AsyncStorage.getItem('RECENTLY_SEEN_EVENTS')
  //   .then(eventListStr => {
  //     let eventList = [];
  //     if (eventListStr) {
  //       eventList = JSON.parse(eventListStr);
  //     }
  //     return eventList;//eventList.filter(event => moment(event.EndDate).isAfter(moment()));
  //   })  
  // }
}


