const
  Twitter = require('twitter'),
  schedule = require('node-schedule'),
  strings = require('./strings'),
  config = require('./config')(),
  async = require('async');

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
exports.sendTweet = status => {
  return new Promise((resolve, reject) => {
    new Twitter({
      consumer_key: config.twitterapi_key,
      consumer_secret: config.twitterapi_secret,
      access_token_key: config.twitteraccess_token_key,
      access_token_secret: config.twitteraccess_token_secret
    })
    .post('statuses/update', {status})
    .then(tweet => resolve(tweet.text))
    .catch(err => {
      if(err[0].code == 187) reject(187);
      else reject(err);
    });
  });
};

exports.scheduleTweet = () => {
  let rule = new schedule.RecurrenceRule();
  rule.hour = 10;
  rule.minute = 30;
  schedule.scheduleJob(rule, () => {
    async.retry({
      times: 5,
      interval: 2000,
      errorFilter: err => err === 187
    }, (cb, results) => {
      console.log('tweet scheduled');
      this.sendTweet(require('./strings').$('tweet'))
        .then(tweet => {
          log.info(`Tweet sent: ${tweet}`);
          cb(tweet);
        })
        .catch(err => cb(new Error(err)));
    });
  });
};