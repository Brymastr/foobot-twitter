const 
  Twitter = require('twitter'),
  schedule = require('node-schedule'),
  strings = require('./strings'),
  config = require('./config')();

/**
 * Send a tweet as Morty
 * {@link desmondmorris/node-twitter}
 * @requires module:desmondmorris/node-twitter
 * @param {Object} config configuration file with twitter info
 * @param {String} status the content to be tweeted
 * @return {Promise} returns a new promise with tweet confirmation or error
 */
function sendTweet(status) {
  return new Promise((resolve, reject) => {
    new Twitter({
      consumer_key: config.twitter_api_key,
      consumer_secret: config.twitter_api_secret,
      access_token_key: config.twitter_access_token_key,
      access_token_secret: config.twitter_access_token_secret
    })
    .post('statuses/update', {status})
    .then(tweet => resolve(tweet.text))
    .catch(err => {
      if(err[0].code == 187) reject(187);
      else reject(err);
    });
  });
};

async function scheduleTweet() {
  let rule = new schedule.RecurrenceRule();
  rule.hour = 10;
  rule.minute = 30;

  schedule.scheduleJob(rule, async () => {
    let tweet = strings.$('tweet');
    // let tweet = "I am foobot";
    try {
      let result = await sendTweet(tweet);
      console.log(`Tweet sent: ${result}`);
    } catch(err) {
      console.log(err);
    }
  });
}

scheduleTweet();