const request = require('request');
var x;
module.exports = {
  get: function (crypto){
    request("https://api.cryptonator.com/api/ticker/" + crypto + "-eur", function (error, response, body) {
      if(error){
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
      } else {
      x = Number(JSON.parse(body).ticker.price);
      x = Number(Math.round(x+'e2')+'e-2');
      obj = {
        base: JSON.parse(body).ticker.base,
        price: x
      }
      console.log(obj.base + " is " + obj.price + " euro waard");
    }
    });
  }
};

require('make-runnable/custom')({
    printOutputFrame: false
})
