import Config from '../Config'
import moment from 'moment'



let getThumbUrl = (imageUrl) => {
  let imgUrl = imageUrl;
  let thumbUrl = "";
  let ext = imgUrl.substr(imgUrl.length-4)
  let thumbExt = "_t.jpg";
  thumbUrl = imgUrl.replace(ext,thumbExt)
  return thumbUrl
}

let getImageUrl = (url) => {
  if(!url)
     return Config.BASE_URL + 'content/images/AgitaImgDefault720x480.png'
  return Config.IMAGE_BASE_URL + url;
}

let formatDateAsString = (date)=>{
  return  moment(date).format('DD/MM')+" - " + moment(date).format('HH')+ "h" + moment(date).format('mm') + 'min'
}

export default {
  getThumbUrl,
  getImageUrl,
  formatDateAsString
}
