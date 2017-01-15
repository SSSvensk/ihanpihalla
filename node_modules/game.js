

var express = require("express"); 
var game = express();

game.get("/", function(req, res){
	res.send("Miau");
})

game.listen(port number here)