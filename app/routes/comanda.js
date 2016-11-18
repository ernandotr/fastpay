module.exports = function(application) {

	application.get('/comandas', function(req, res){
		application.app.domain.comanda.list(function(resp){
			res.json(resp);
		});
	});

	application.post('/comandas', function(req, res){
		   
		application.app.domain.comanda.save(req.body, function(resp){
			res.json(resp);
		});

	});

	application.post('/pedido', function(req, res){
		application.app.domain.comanda.add(req, function(resp){
			res.json(resp);
		});
	});

	application.delete('/comandas/:id', function(req, res){
		application.app.domain.comanda.delete(req, function(resp){
			res.json(resp);
		});
	})

};