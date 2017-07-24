//===========================
// REQUIREMENTS
//===========================
var express = require("express");
var app = express();
var logger = require("morgan");
var bodyParser = require("body-parser");
var hbs = require('hbs');
const methodOverride = require('method-override');


//===========================
// MIDDLEWARE
//===========================
//this is for morgan
app.use(logger("dev"));
//these are for bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//set handlebars as view engine
app.set("view engine", "hbs");
app.set('views', './views');
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public/css'));



//===========================
// CONTROLLERS
//===========================

//controllers for `/pirates` resource
var pirateController = require('./controllers/pirates.js');
app.use("/pirates", pirateController);


//===========================
// LISTENERS
//===========================
app.listen(3000, function(req, res){
	console.log("listening");
});
