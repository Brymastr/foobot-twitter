const
  Twitter = require('twitter');

/**
 * Connect to a twitter stream. Sends an HTTP GET to the twitter api and returns a stream object
 * @param {Object} config - Configuration Object with app settings from config.js
 * @return {stream}
 */
exports.connectStream = (config) => {
  return new Promise((resolve, reject) => {
    resolve();
  });
};

/**
 * Send a tweet as Morty
 * {@link desmondmorris/node-twitter}
 * @requires module:desmondmorris/node-twitter
 * @param {Object} config configuration file with twitter info
 * @param {String} status the content to be tweeted
 * @return {Promise} returns a new promise with tweet confirmation or error
 */
exports.sendTweet = (config, status) => {
  return new Promise((resolve, reject) => {
    var twitter = new Twitter({
      consumer_key: config.twitter_api_key,
      consumer_secret: config.twitter_api_secret,
      access_token_key: config.twitter_access_token_key,
      access_token_secret: config.twitter_access_token_secret
    });
    twitter
      .post('statuses/update', {status})
      .then(tweet => {
        resolve(tweet.text);
      })
      .catch(err => {
        if(err[0].code == 187) reject(187);
        else reject(err);
      });
  });
};