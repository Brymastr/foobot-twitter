const 
  schedule = require('node-schedule'),
  twitter = require('./twitter'),
  strings = require('./strings'),
  async = require('async'),
  config = require('./config')();

// Twitter
schedule.scheduleJob({
  hour: 10,
  minute: 30
}, () => {
  async.retry({
    times: 3,
    interval: 2000,
    errorFilter: err => {
      return err === 187
    }
  }, (cb, results) => {
    twitter.sendTweet(config, strings.$('tweet'))
      .then(tweet => {
        console.log('NEW TWEET:' + tweet);
        cb(tweet);
      })
      .catch(err => {
        cb(new Error(err));
      });
  });
});