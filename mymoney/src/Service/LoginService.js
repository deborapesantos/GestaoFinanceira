import {
  BaseService
} from "./BaseService";

export default class LoginService extends BaseService {  
  
  async publicLogin() {
    return await this.login({
      Username: "deboraps",
      Password: "e4b65bb"
    })
  }
  
  async login(loginRequest) {
    
    var loginResponse = {
      isAuthenticated : false,
      message : "",
    }   
    return await this.post(this.baseUrl + 'Account/Login/', loginRequest)
      .then((response) => {
        loginResponse.isAuthenticated = true;
      })
      .catch((error) => {
        loginResponse.isAuthenticated = false;
        loginResponse.message = error.message;
      })
      .finally((response) => {
        return loginResponse;
      })
  };
}
