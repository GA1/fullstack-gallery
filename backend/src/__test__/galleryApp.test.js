const request = require('supertest');
var  { GalleryApp } = require('../galleryApp')

test('when external api returns error app returns an empty array of images', () => {
  function getImages(pageNumber, sucCallback, errCallback) {
    errCallback([])
  }

  var galleryApp = new GalleryApp(getImages)
  request(galleryApp.getApp()).get('/api/v1/images/sportImages').then((response) => {
    expect(response.statusCode).toBe(200);
    var jsonResponse = JSON.parse(response['text']);
    expect(jsonResponse).toEqual([]);
  });
});

test('when external api returns some images the app returns them ', () => {

  let dummyImage = {
    farm: '1',
    server: '2',
    id: '3',
    secret: '4',
    title: 'dummyTitle'
  };

  function getImages(pageNumber, sucCallback, errCallback) {
    sucCallback([dummyImage, dummyImage])
  }

  var galleryApp = new GalleryApp(getImages)
  request(galleryApp.getApp()).get('/api/v1/images/sportImages').then((response) => {
    expect(response.statusCode).toBe(200);
    var jsonResponse = JSON.parse(response['text']);
    expect(jsonResponse).toEqual([dummyImage, dummyImage]);
  });
})