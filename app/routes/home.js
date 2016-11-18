module.exports = function(application){
	application.get('/', function(req, res){
		application.app.domain.home.index(application, req, res);
	});

	application.post('/autenticar', function(req, res){

		application.app.controllers.index.autenticar(application, req, res);
	});
}