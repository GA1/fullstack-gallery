var express = require('express');
var { getImages } = require('./http/flickrApi');

var app = express();

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