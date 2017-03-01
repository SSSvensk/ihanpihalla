console.log("This is a yard design game called Ihan Pihalla.");

var express = require("express");
var app = express();

app.use(express.static("css"));
app.use(express.static("images"));
app.use(express.static("js"));
app.use(express.static("objects"));

app.set("view engine", "ejs");

// app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);

// Tell express to listen for requests
var listener = app.listen(3000, function(){
	console.log("Server has started on port " + listener.address().port + "...");
})

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

//Routing CSS-files


app.get("/css/mapscss.css", function(req,res){
res.sendFile(__dirname + '/css/mapscss.css');
})
app.get("/css/gamestyles.css", function(req,res){
res.sendFile(__dirname + '/css/gamestyles.css');
})
app.get("/css/ihanpihallacss.css", function(req,res){
res.sendFile(__dirname + '/css/ihanpihallacss.css');
})

app.get("/js/three.min.js", function(req,res){
res.sendFile(__dirname + '/js/three.min.js');
})
app.get("/js/OBJLoader.js", function(req,res){
res.sendFile(__dirname + '/js/OBJLoader.js');
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

