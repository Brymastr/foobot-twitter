module.exports = () => {
  const env = process.env;
  return config = {
    twitter_api_key: env.FOOBOT_TWITTER_API_KEY,
    twitter_api_secret: env.FOOBOT_TWITTER_API_SECRET,
    twitter_access_token_key: env.FOOBOT_TWITTER_ACCESS_TOKEN_KEY,
    twitter_access_token_secret: env.FOOBOT_TWITTER_ACCESS_TOKEN_SECRET,
    rabbit_url: env.FOOBOT_RABBIT_QUEUE,
    rabbit_exchange: 'foobot',
    rabbit_twitter_queue: 'twitter',
    rabbit_internal_queue: 'internal',
    foobot_core_url: env.FOOBOT_CORE_URL || 'http://localhost:9000'
  }
};