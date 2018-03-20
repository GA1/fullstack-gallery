var { getImages } = require('./http/flickrApi');
var  { GalleryApp } = require('./galleryApp')

var galleryApp = new GalleryApp(getImages)

galleryApp.getApp().listen(4000, function () {
  console.log('Example app listening on port 4000!');
});