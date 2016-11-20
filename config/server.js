var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');


var app = express();

var furafilaIO = require('../app/socket')(app);

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
	req.io = furafilaIO;
	next();
});

app.use(function(req, res, next){
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT,DELETE');
	res.setHeader('Access-Control-Allow-Headers', 'content-type, Authorization');
	next();
});

app.use(expressValidator());

consign()
.include('app/routes')
.then('config/db_config.js')
.then('app/models')
.then('app/controllers')
.then('app/domain')
.into(app);

module.exports = app;

