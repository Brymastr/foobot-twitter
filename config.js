module.exports = () => {
  const env = process.env;
  return config = {
    twitter_api_key: env.FOOBOT_TWITTER_API_KEY || 'r6McCqkL3BawDTV9apol8PEvX',
    twitter_api_secret: env.FOOBOT_TWITTER_API_SECRET || 'cmEPpVWKhIHjzpZ5jP9FzQcKSx8rlf09VLQ2Dg3DT4GAu0wZO9',
    twitter_access_token_key: env.FOOBOT_TWITTER_ACCESS_TOKEN_KEY || '829117419297714176-LleeyC5s4hAEDEjflvSV4cAGDCvEOrc',
    twitter_access_token_secret: env.FOOBOT_TWITTER_ACCESS_TOKEN_SECRET || 'MYENs2NeVcN0nx7HHqwpv98iFzh8RI9CpasjRPsQUSLbX',
    rabbit_url: env.FOOBOT_RABBIT_QUEUE,
    rabbit_exchange: 'foobot',
    rabbit_twitter_queue: 'twitter',
    rabbit_internal_queue: 'internal',
    foobot_core_url: env.FOOBOT_CORE_URL || 'http://localhost:9000'
  }
};