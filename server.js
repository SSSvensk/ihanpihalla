console.log("This is a yard design game called Ihan Pihalla.");

var express = require("express");
var app = express();
var passport = require('passport');
var FacebookStrategy  = require('passport-facebook').Strategy;
var session = require('express-session');
var config = require('./config/config');
var db = require('./js/server/dbcon');
var bodyParser = require('body-parser');
var TwitterStrategy  = require('passport-twitter').Strategy;

app.use(express.static("css"));
app.use(express.static("images"));
app.use(express.static("js"));
app.use(express.static("objects"));
app.use(express.static("OSMBuildings"));

app.use(session({ secret: 'keyboard cat', key: 'sid', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(bodyParser.urlencoded({ extended: true })); 

app.set("view engine", "ejs");

var userid;
var username;
var address;
var addresslist;
var userlist;
var picture;
var act;

// app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);

// Tell express to listen for requests
var listener = app.listen(3000, function(){
	console.log("Server has started on port " + listener.address().port + "...");
})

app.get('/auth/facebook', passport.authenticate('facebook', { scope: [ 'email' ] }));

app.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
       successRedirect : '/gallery',
       failureRedirect: '/'
  }),
  function(req, res) {
    res.redirect('/');
  });

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', {
       successRedirect : '/gallery',
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
  userid = user.id;
  username = user.displayName;
  picture = "http://graph.facebook.com/" + userid + "/picture"; // + "?width=20&height=20";
  console.log(picture);
  db.selectUser(user.id, function(callback){
    if (callback == null) {
      db.insertUser(username, userid);
    } else {
      address = callback.address;
    }
  })
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

//Facebook-login

passport.use(new FacebookStrategy({
    clientID: config.facebookAuth.facebook_api_key,
    clientSecret:config.facebookAuth.facebook_api_secret ,
    callbackURL: config.facebookAuth.callback_url,
    profileFields: ['id', 'email', 'displayName', 'gender', 'education', 'profileUrl', 'name']
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      console.log(profile);
      console.log(profile.emails[0].value);
      act = accessToken;

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
  if (userid == null) {
    res.sendFile(__dirname + '/index.html');
  } else {
    res.render('gallery', {
      username: username,
      address: address
    });
  }
})

app.get("/gallery", function(req,res){
  db.selectUser(userid, function(callback){
    //console.log(callback.address);
    if (callback.address == null) {
      db.selectYards(function(callback){
        res.render('address', {
          username: username,
          addresslist: callback
        });
      });
    } else {
      db.selectUsersByYard(address, function(callback) {
        console.log(callback[0].name);
        res.render('gallery', {
          username: username,
          address: address,
          userlist: callback,
          picture: picture
        });
      });
      
    }
  })
})

app.post("/addaddress", function(req,res){
  console.log(req.body.address);
  db.addAddress(userid, req.body.address);
  address = req.body.address;
  res.render('gallery', {
    username: username,
    address: address
  });
})

app.get("/address", function(req,res){
  db.selectYards(function(callback){
    res.render('address', {
      username: username,
      addresslist: callback
    });
  });
})

app.get("/play", function(req,res){
	console.log("Request made to /play.");
	res.render('game', {
      username: username,
      address: address
  });
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

