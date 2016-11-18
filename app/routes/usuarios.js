module.exports = function(application) {

	application.get('/usuarios', function(req, res){
		application.app.domain.usuarios.list(function(resp){
			res.json(resp);
		});
	});

	application.post('/usuarios', function(req, res){
		
		application.app.domain.usuarios.save(req.body, function(resp){
			res.json(resp);
		});

	});

	application.delete('/usuarios/:id', function(req, res){
		
		application.app.domain.usuarios.delete(req, function(resp){
			res.json(resp);
		});
	})

};