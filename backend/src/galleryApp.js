var express = require('express');


class GalleryApp {
  constructor(getImages) {
    this.app = express();

    this.app.get('/api/v1/images/sportImages', function (req, res) {
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
    this.app.use('/', express.static('public'));
    this.getApp = this.getApp.bind(this)
  }

  getApp() {
    return this.app
  }

}

module.exports.GalleryApp = GalleryApp;
