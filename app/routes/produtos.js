"use strict";
let express = require('express');
module.exports = function(application) {
    let router = express.Router();

	router.get('/produtos', function(req, res){
		application.app.domain.produtos.list(function(resp){
			res.json(resp);
		});
	});

	router.post('/produtos', function(req, res){
		   
		application.app.domain.produtos.save(req.body, function(resp){
			res.json(resp);
		});

	});

	router.delete('/produtos/:id', function(req, res){
		application.app.domain.produtos.delete(req, function(resp){
			res.json(resp);
		});
	})
    return router;
};