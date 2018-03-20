var { mapFlickrPhotos } = require('../http/photoMapper');


let dummyFlickrObject = {
  farm: '1',
  server: '2',
  id: '3',
  secret: '4',
  title: 'dummyTitle'
};

let dummyFlickrPhoto = {
  'smallUrl': "http://farm1.staticflickr.com/2/3_4_m.jpg",
  'bigUrl': "http://farm1.staticflickr.com/2/3_4_z.jpg",
  'title': 'dummyTitle'
};

test('map flickr object to a photo', () => {
  let flickrObjects = [dummyFlickrObject]
  let expected = [dummyFlickrPhoto]
  expect(mapFlickrPhotos(flickrObjects)).toEqual(expected);
});

test('map flickr photos maps ALL objects to photos', () => {
  let flickrObjects = [dummyFlickrObject, dummyFlickrObject]
  let expected = [dummyFlickrPhoto, dummyFlickrPhoto]
  expect(mapFlickrPhotos(flickrObjects)).toEqual(expected);
});

test('map flickr object to a photo when no title', () => {
  let flickrObjects = [{
    farm: '1',
    server: '2',
    id: '3',
    secret: '4',
    title: undefined
  }]
  let expected = [{
    'smallUrl': "http://farm1.staticflickr.com/2/3_4_m.jpg",
    'bigUrl': "http://farm1.staticflickr.com/2/3_4_z.jpg",
    'title': 'NO TITLE'
  }]
  expect(mapFlickrPhotos(flickrObjects)).toEqual(expected);
})
