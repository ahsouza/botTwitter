console.log('o bot está iniciando');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

var params = {
  q: 'concurso publico espirito santo since:2016-03-26',
  count: 100
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
  var tweets = data.statuses;
  for (var i=0; i< tweets.length; i++) {
    console.log(tweets[i].text);
  }
}