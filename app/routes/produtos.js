module.exports = function(application) {

	application.get('/produtos', function(req, res){
		application.app.domain.produtos.list(function(resp){
			res.json(resp);
		});
	});

	application.post('/produtos', function(req, res){
		   
		application.app.domain.produtos.save(req.body, function(resp){
			res.json(resp);
		});

	});

	application.delete('/produtos/:id', function(req, res){
		application.app.domain.produtos.delete(req, function(resp){
			res.json(resp);
		});
	})

};