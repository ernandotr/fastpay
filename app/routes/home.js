"use strict";
let express = require('express');
module.exports = function(application){
    let router = express.Router();
	router.get('/', function(req, res){
		application.app.domain.home.index(application, req, res);
	});

	router.post('/autenticar', function(req, res){

		application.app.controllers.index.autenticar(application, req, res);
	});
	return router;
}