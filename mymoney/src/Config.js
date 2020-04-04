const Config = {
    //BASE_URL : "http://192.168.43.50:45455/",//cel giulio
   BASE_URL : "http://192.168.15.17:45457/", //habil - vpn
    //BASE_URL :"http://192.168.15.17:45455/",//casa
    //BASE_URL : "http://webserver.agitamais.com/",
    //BASE_URL : "http://homologa.agitamais.com/",
    get IMAGE_BASE_URL() {
       return this.BASE_URL + '/upload/'
    }
}
export default Config