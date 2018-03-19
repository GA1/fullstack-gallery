var axios = require('axios')

function generateSmallUrl(farm, server, id, secret) {
  return `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`
}

function generateBigUrl(farm, server, id, secret) {
  return `http://farm${farm}.staticflickr.com/${server}/${id}_${secret}_z.jpg`
}

module.exports.generateSmallUrl = generateSmallUrl;
module.exports.generateBigUrl = generateBigUrl;
