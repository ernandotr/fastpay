"use strict";
let express = require('express');
module.exports = function(application) {
    let router = express.Router();
	router.get('/comandas', function(req, res){
		application.app.domain.comanda.list(function(resp){
			res.json(resp);
		});
	});

	router.post('/comandas', function(req, res){
		   
		application.app.domain.comanda.save(req.body, function(resp){
			res.json(resp);
			req.io.emit("comanda add", resp);
		});

	});

	router.delete('/comandas/:id', function(req, res){
		application.app.domain.comanda.delete(req, function(resp){
			res.json(resp);
			req.io.emit("comanda delete", resp);
		});
	})
	return router;
};