module.exports={
  'facebookAuth' : {
        'facebook_api_key'      : '[YOUR_FB_API_KEY]', // your App ID
        'facebook_api_secret'  : '[YOUR_FB_API_SECRET]', // your App Secret
        'callback_url'   : 'http://localhost:3000/auth/facebook/callback',
         "use_database"          :     'true',
         "host"                  :     "localhost",
         "username"              :     "root",
         "password"              :     "",
         "database"              :     "test"
    },

    'twitterAuth' : {
        'consumerKey'       : '[YOUR_TWITER_API_KEY]',
        'consumerSecret'    : '[YOUR_TWITTER_API_SECRET]',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },
}