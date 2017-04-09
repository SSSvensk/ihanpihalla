module.exports={
	/*
  "facebook_api_key"      :     "1692362064394687",
  "facebook_api_secret"   :     "2af4e87fb673700544491fbbd3a6c728",
  "callback_url"          :     "http://localhost:3000/auth/facebook/callback",
  "use_database"          :     'false',
  "host"                  :     "localhost",
  "username"              :     "root",
  "password"              :     "",
  "database"              :     "test"
  */
  'facebookAuth' : {
        'facebook_api_key'      : '1692362064394687', // your App ID
        'facebook_api_secret'  : '2af4e87fb673700544491fbbd3a6c728', // your App Secret
        'callback_url'   : 'http://localhost:3000/auth/facebook/callback',
         "use_database"          :     'false',
         "host"                  :     "localhost",
         "username"              :     "root",
         "password"              :     "",
         "database"              :     "test"
    },

    'twitterAuth' : {
        'consumerKey'       : 'XlbvLr2lnbqQhYbGwqZrrcFQn',
        'consumerSecret'    : '5A5z1CNKPZmLwsMBUxJDih3uUVoPMPJLIWU2iWPecAjib2CpcY',
        'callbackURL'       : 'http://localhost:3000/auth/twitter/callback'
    },
}