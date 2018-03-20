var axios = require('axios')
var { flickrApiKey } = require('./apiKeys');
var { mapFlickrPhotos } = require('../http/photoMapper');

const perPage = 20
const host = "https://api.flickr.com"
const sportSearchUrl = `${host}/services/rest/?api_key=${flickrApiKey}&` +
    "method=flickr.photos.search&" +
    "format=json&" +
    "text=sport&" +
    "nojsoncallback=1&" +
    `per_page=${perPage}&` +
    "page="


function getImages(pageNumber, sucCallback, errCallback) {
  axios.get(sportSearchUrl + pageNumber)
    .then(function(response) {
      // Flickr api returns incorrectly an array of photos at '.photo'
      // probably a legacy bug which persisted, looks strange but this is how we have to use it
      let photos = response.data['photos']['photo'];
      let photosObjects = mapFlickrPhotos(photos)
      sucCallback(photosObjects)
    }).catch(function (error) {
      errCallback(error)
    })
}

module.exports.getImages = getImages;