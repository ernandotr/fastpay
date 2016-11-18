module.exports.index = function(application, req, res){
	res.render('home/index', {validacao: {}} );
}

module.exports.autenticar = function(application, req, res){
	var dadosForm  = req.body;
	req.assert('usuario', 'O usuário não pode ser vazio.').notEmpty();
	req.assert('senha', 'A senha não pode ser vazia.').notEmpty();

	var erros = req.validationErrors();
	if(erros){
		res.render('home/index', {validacao:erros});
		return;
	}

	var connection = application.config.dbConnection;

	var UsuariosDAO =  new application.app.models.UsuariosDAO(connection);

	UsuariosDAO.autenticar(dadosForm, req, res);

	// res.send('tudo ok para criar a sessão');
}