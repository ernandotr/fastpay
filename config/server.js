"use strict";
var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

const cors = require('cors');
const http = require('http');
const SocketIO = require('socket.io');
var app = express();

let server = http.createServer(app);
let io = SocketIO.listen(server);

const FuraFilaIO = require('../app/socket');
let furafila = new FuraFilaIO(io);

app.use('/static', express.static(__dirname + '/node_modules'));

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(cors());

app.use(function(req, res, next){
	req.io = io;
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

module.exports = server;

