var { mapFlickrPhoto } = require('../http/photoMapper');


test('map flickr object to a photo', () => {
  let flickrObject = {
    farm: '1',
    server: '2',
    id: '3',
    secret: '4',
    title: 'dummyTitle'
  }
  let expected = {
    'smallUrl': "http://farm1.staticflickr.com/2/3_4_n.jpg",
    'bigUrl': "http://farm1.staticflickr.com/2/3_4_z.jpg",
    'title': 'dummyTitle'
  }
  expect(mapFlickrPhoto(flickrObject)).toEqual(expected);
});

test('map flickr object to a photo when no title', () => {
  let flickrObject = {
    farm: '1',
    server: '2',
    id: '3',
    secret: '4',
    title: undefined
  }
  let expected = {
    'smallUrl': "http://farm1.staticflickr.com/2/3_4_n.jpg",
    'bigUrl': "http://farm1.staticflickr.com/2/3_4_z.jpg",
    'title': 'NO TITLE'
  }
  expect(mapFlickrPhoto(flickrObject)).toEqual(expected);
})
