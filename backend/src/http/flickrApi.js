var axios = require('axios')
var { flickrApiKey } = require('./apiKeys');
var { generateSmallUrl, generateBigUrl } = require('./photoUrlGenerator');

const perPage = 20
const sportSearchUrl = `https://api.flickr.com/services/rest/?api_key=${flickrApiKey}&` +
    "method=flickr.photos.search&" +
    "format=json&" +
    "text=sport&" +
    "nojsoncallback=1&" +
    `per_page=${perPage}&` +
    "page="


function getImages(pageNumber, sucCallback, errCallback) {
  function retrieveImagesUrls(photos) {
    return photos.map(photo => {
      let farm = photo['farm']
      let server = photo['server']
      let id = photo['id']
      let secret = photo['secret']
      return {
        'url': generateSmallUrl(farm, server, id, secret),
        'urlBig': generateBigUrl(farm, server, id, secret),
        'title': photo['title'],
      }
    })
  }
  axios.get(sportSearchUrl + pageNumber)
    .then(function(response) {
      let photos = response.data['photos']['photo'];  // Flickr api returns incorrectly an array of photos at '... .photo'
                                                      // probably a legacy bug which persisted, looks strange but this is how we have to use it
      let photosUrls = retrieveImagesUrls(photos)
      sucCallback(photosUrls)
    }).catch(function (error) {
      errCallback(error)
    })
}

module.exports.getImages = getImages;