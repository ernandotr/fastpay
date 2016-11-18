var Usuario = require('../models/usuario');

exports.save = function(usuario, callback){
	new Usuario(usuario).save(function(error, usuario){
		if(error){
			callback({error: 'Nao foi possivel salvar.'});
		}else{
			callback(usuario);
		}
	});
}

exports.list = function(callback){
	Usuario.find({}, function(error, usuarios){
		if(error){
			callback({error: 'Nao foi possivel encontra o usuarios.'});
		}else{
			callback(usuarios);
		}
	});
}
exports.delete = function(req, callback){
	var id = req.params.id;
	Usuario.findById(id,function(error, usuario){
		if(error){
			callback({error: 'Nao foi possivel excluir.'});
		}else{
			usuario.remove(function(error){
				if(!error){
					callback({resposta: 'Usuario excluido com sucesso.'});
				}
			});
		}
	});
}