var { generateSmallUrl, generateBigUrl } = require('../http/photoUrlGenerator');

function mapFlickrPhoto(flickrPhotoObject) {
  let farm = flickrPhotoObject['farm']
  let server = flickrPhotoObject['server']
  let id = flickrPhotoObject['id']
  let secret = flickrPhotoObject['secret']
  var title = 'NO TITLE'
  if (!!flickrPhotoObject['title'])
      title = flickrPhotoObject['title']
  let result = {
    'smallUrl': generateSmallUrl(farm, server, id, secret),
    'bigUrl': generateBigUrl(farm, server, id, secret),
    'title': title,
  };
  return result
}

function mapFlickrPhotos(flickrPhotos) {
  return flickrPhotos.map(flickrPhoto => {
    return mapFlickrPhoto(flickrPhoto)
  })
}

module.exports.mapFlickrPhotos = mapFlickrPhotos;
