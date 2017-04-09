console.log("This is a yard design game called Ihan Pihalla.");

var express = require("express");
var app = express();
var passport = require('passport');
var FacebookStrategy  = require('passport-facebook').Strategy;
var session = require('express-session');
var config = require('./config/config');
var TwitterStrategy  = require('passport-twitter').Strategy;

app.use(express.static("css"));
app.use(express.static("images"));
app.use(express.static("js"));
app.use(express.static("objects"));
app.use(express.static("OSMBuildings"));

app.use(session({ secret: 'keyboard cat', key: 'sid', resave: true, saveUninitialized: true}));
app.use(passport.initialize());

app.set("view engine", "ejs");

var userid;
var username;

// app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);

// Tell express to listen for requests
var listener = app.listen(3000, function(){
	console.log("Server has started on port " + listener.address().port + "...");
})

app.get('/auth/facebook', passport.authenticate('facebook'));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
       successRedirect : '/map',
       failureRedirect: '/'
  }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', {
       successRedirect : '/map',
       failureRedirect: '/'
  }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
  userid = null;
  username = null;
  console.log("Logged out");
});

app.get('/username', function (req, res){
     res.send(username);
})

passport.serializeUser(function(user, done) {
  done(null, user);
  console.log(user.displayName);
  console.log(user.id);
  console.log(user.gender);
  userid = user.id;
  username = user.displayName;
  /*db.selectUserByFBID(user.id, function(callback){
    if (callback == null) {
      //db.insertUser(user.displayName, user.id);
    };
  })
*/
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

//Facebook-login

passport.use(new FacebookStrategy({
    clientID: config.facebookAuth.facebook_api_key,
    clientSecret:config.facebookAuth.facebook_api_secret ,
    callbackURL: config.facebookAuth.callback_url,
    profileFields: ['id', 'emails', 'displayName', 'gender']
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      //Check whether the User exists or not using profile.id

      if(config.use_database==='true')
      {
      }
      return done(null, profile);
    });
  }
));

//Twitter-login

passport.use(new TwitterStrategy({
  consumerKey     : config.twitterAuth.consumerKey,
  consumerSecret  : config.twitterAuth.consumerSecret,
  callbackURL     : config.twitterAuth.callbackURL
},
function(token, tokenSecret, profile, done) {
  process.nextTick(function () {
  //Check whether the User exists or not using profile.id
  if(config.use_database==='true') 
  {
  //Perform MySQL operations.
  }
  return done(null, profile);
});
}
));

// Define routes
app.get("/", function(req, res){
	console.log("Request made to /.");
	res.sendFile(__dirname + '/index.html');
	console.log("Response sent to IP.");
})

app.get("/map", function(req,res){
	res.sendFile(__dirname + '/mapstesti.html');
	console.log("Request made to /map.");
})

app.get("/play", function(req,res){
	console.log("Request made to /play.");
	res.sendFile(__dirname + '/game.html');
})

app.get("/gallery", function(req,res){
	console.log("Request made to /gallery.");
	res.sendFile(__dirname + '/gallery.html');
})

// Might be useful later
//app.get("/users/:userid", function(req,res){
//	var userid = req.params.userid;
//	res.render("home", {username: userid}); // home is ejs file where var username exists
//	console.log("Request made to users/" + userid + ".");
//})
//app.get("/ihanpihalla", function(req,res){
//	res.render('index.html'); // this has to be in the views directory, specified in line 13.
	// res.sendFile(path.join(__dirname+'views/index.html'));
//})
// For everything else
app.get("*", function(req,res){
	res.send("This page has not been created yet. What do you think should go here?");
	console.log("Request made to an undefined location.");
})

