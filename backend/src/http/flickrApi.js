var axios = require('axios')
var { flickrApiKey } = require('./apiKeys');
var { mapFlickrPhoto } = require('../http/photoMapper');

const perPage = 20
const sportSearchUrl = `https://api.flickr.com/services/rest/?api_key=${flickrApiKey}&` +
    "method=flickr.photos.search&" +
    "format=json&" +
    "text=sport&" +
    "nojsoncallback=1&" +
    `per_page=${perPage}&` +
    "page="


function getImages(pageNumber, sucCallback, errCallback) {
  function mapFlickrPhotosToAppPhotos(flickrPhotos) {
    return flickrPhotos.map(flickrPhoto => {
      return mapFlickrPhoto(flickrPhoto)
    })
  }
  axios.get(sportSearchUrl + pageNumber)
    .then(function(response) {
      let photos = response.data['photos']['photo'];  // Flickr api returns incorrectly an array of photos at '... .photo'
                                                      // probably a legacy bug which persisted, looks strange but this is how we have to use it
      let photosObjects = mapFlickrPhotosToAppPhotos(photos)
      sucCallback(photosObjects)
    }).catch(function (error) {
      errCallback(error)
    })
}

module.exports.getImages = getImages;