var express = require('express');
var { getImages } = require('./http/flickrApi');

var app = express();

app.get('/api/v1/images/randomImages', function (req, res) {
  var img1 = {
    'url': 'https://s3.eu-central-1.amazonaws.com/react-gallery/example_image2.jpg',
  };
  var img2 = {
    'url': 'https://s3.eu-central-1.amazonaws.com/react-gallery/example_image.jpg',
  };
  var result = []
  for (var i = 0; i < 50; i++) {
    if (Math.random() < 0.5 )
      result.push(img1)
    else
      result.push(img2)
  }
  res.json(result);
});

app.get('/api/v1/images/sportImages', function (req, res) {
  let pageNumber = req.query.pageNumber;
  let sucCallback = function(result) {
    res.json(result)
  };
  let errCallback = function(error) {
    console.log(error)
    res.json([])
  };
  getImages(pageNumber, sucCallback, errCallback)
});

app.use('/', express.static('public'));

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});