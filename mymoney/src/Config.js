const Config = {
    BASE_URL : "http://26.97.63.142:45455",
    //BASE_URL : "http://webserver.agitamais.com/",
    //BASE_URL : "http://homologa.agitamais.com/",
    get IMAGE_BASE_URL() {
       return this.BASE_URL + '/upload/'
    }
}
export default Config