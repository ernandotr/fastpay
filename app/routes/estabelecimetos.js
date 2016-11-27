"use strict";
let express = require('express');
module.exports = function(application) {
	let router = express.Router();
	router.get('/estabelecimentos', function(req, res){
		application.app.domain.estabelecimentos.list(function(resp){
			res.json(resp);
		});
	});

	router.post('/estabelecimentos', function(req, res){
		   
		application.app.domain.estabelecimentos.save(req.body, function(resp){
			res.json(resp);
		});

	});

	router.delete('/estabelecimentos/:id', function(req, res){
		application.app.domain.estabelecimentos.delete(req, function(resp){
			res.json(resp);
		});
	});
	return router;
};