module.exports = function(application) {

	application.get('/estabelecimentos', function(req, res){
		application.app.domain.estabelecimentos.list(function(resp){
			res.json(resp);
		});
	});

	application.post('/estabelecimentos', function(req, res){
		   
		application.app.domain.estabelecimentos.save(req.body, function(resp){
			res.json(resp);
		});

	});

	application.delete('/estabelecimentos/:id', function(req, res){
		application.app.domain.estabelecimentos.delete(req, function(resp){
			res.json(resp);
		});
	})

};