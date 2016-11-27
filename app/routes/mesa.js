"use strict";
let express = require('express');
module.exports = function(application) {
    let router = express.Router();
	router.get('/mesas', function(req, res){
		application.app.domain.mesas.list(function(resp){
			res.json(resp);
		});
	});

	router.post('/mesas', function(req, res){
		   
		application.app.domain.mesas.save(req.body, function(resp){
			res.json(resp);
		});

	});

	router.delete('/mesas/:id', function(req, res){
		application.app.domain.mesas.delete(req, function(resp){
			res.json(resp);
		});
	})
    return router;
};