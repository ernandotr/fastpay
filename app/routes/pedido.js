"use strict";
let express = require('express');
module.exports = function(application) {
    let router = express.Router();
	
	router.post('/pedido', function(req, res){
		application.app.domain.comanda.add(req, function(resp){
			res.json(resp);
			req.io.emit("pedido add", resp);
		});
	});

	return router;

};