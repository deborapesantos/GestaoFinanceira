import {
  BaseService
} from "./BaseService";
import Serenity from '@Service/Serenity';

export default class MenuCompetitionService extends BaseService {  
  
  api_url = this.servicesUrl + "SpecialEvent/MenuCompetition/"

  async retrieveByEventId(eventId) {
     var lq =  {
       Criteria : Serenity.Criteria.and(null,  [['EventId'], '=', eventId]),
       Take: 1
     } 
    return await this.list(lq).then(response => response.Entities[0])
  };



}