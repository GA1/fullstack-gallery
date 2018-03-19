var express = require('express');

var app = express();

app.get('/api/v1/images', function (req, res) {
  var numbers = [2, 5, 7]
  res.json(numbers.map(n => n*2))
});

app.use('/', express.static('public'));

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});