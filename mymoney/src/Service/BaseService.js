import Axios from "axios";
import Config from "./../Config";

export class BaseService {  
    baseRequest = {
        method: "", //POST, GET, PUT ETC
        headers: {
            "accept": "application/json, text/javascript, */*; q=0.01",
            "content-type": "application/json",
        },
        url: "",
        data: {}
    };
    static axioInstance;    
    baseUrl = Config.BASE_URL;
    servicesUrl = this.baseUrl + "Services/Default/"

    constructor(){
        if(!this.axionsInstance)
            this.axioInstance = Axios.create();
    }

    
    async post(url, data, axiosConfig){
        return this.doRequest("POST",url,data, axiosConfig);
    }

    async get(url) {
        return await this.doRequest("GET", url, null)
    }
    
    async doRequest(method, url, data, axiosConfig) {
        var request = this.baseRequest;
        request.method = method || request.method;
        request.data = data;
        request.url = url;
        return this.axioInstance.request(request).then((response) => response.data);
    }

    async list(listRequest) {
        return await this.post(this.api_url + 'List/', listRequest)
    };
    async retrieve(id) {
        return await this.post(this.api_url + 'Retrieve/',{EntityId: id} )
    };
       

 };