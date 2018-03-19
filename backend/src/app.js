var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/api/v1/images', function (req, res) {
  res.json("hello")
});


app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});