module.exports = function(application) {

	application.get('/mesas', function(req, res){
		application.app.domain.mesas.list(function(resp){
			res.json(resp);
		});
	});

	application.post('/mesas', function(req, res){
		   
		application.app.domain.mesas.save(req.body, function(resp){
			res.json(resp);
		});

	});

	application.delete('/mesas/:id', function(req, res){
		application.app.domain.mesas.delete(req, function(resp){
			res.json(resp);
		});
	})

};