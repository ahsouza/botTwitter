console.log('o bot está iniciando');

var Twit = require('twit');

var config = require('./config');
var T = new Twit(config);

// FUNCTION TO SEARCH TWEETS
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

// FUNCTION TO POST TWEETS
var tweet = {
  status: '#codificando campanha por node.js. Tutorials example in repository: https://github.com/ahsouza/botTwitter'
}

T.post('statuses/update', tweet, tweeted);

function tweeted(err, data, response) {
  console.log(data)
}