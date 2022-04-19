const Config = {
    //BASE_URL : "http://192.168.43.50:45455/",//cel 
    //BASE_URL : "http://192.168.15.17:45455/", // - vpn
   BASE_URL: "http://192.168.15.110:45455/",
    //BASE_URL :"http://192.168.15.17:45455/",//casa
    get IMAGE_BASE_URL() {
       return this.BASE_URL + '/upload/'
    }
}
export default Config