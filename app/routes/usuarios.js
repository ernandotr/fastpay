"use strict";
let express = require('express');
module.exports = function(application) {
    let router = express.Router();
	let jwtConfig = require("../../config/jwt");

	application.get('/usuario', jwtConfig(application), function(req, res){

		application.app.domain.usuarios.autenticar(req, function(resp){
			res.json(resp);
		});
	});

	router.get('/usuarios', function(req, res){
		application.app.domain.usuarios.list(function(resp){
			res.json(resp);
		});
	});

	router.post('/usuarios', function(req, res){
		
		application.app.domain.usuarios.save(req.body, function(resp){
			if(resp.error) {
				return res.json(resp);
			}
			application.app.domain.usuarios.autenticar(req, function(resp){
				res.json(resp);
			});
		});
	});
	
	router.post('/usuarios/login', function(req, res){

		application.app.domain.usuarios.autenticar(req, function(resp){
			res.json(resp);
		});

	});

	router.delete('/usuarios/:id', function(req, res){

		application.app.domain.usuarios.delete(req, function(resp){
			res.json(resp);
		});
	});
	return router;
};