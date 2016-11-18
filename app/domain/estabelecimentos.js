var Estabelecimento = require('../models/estabelecimento');

exports.save = function(estabelecimento, callback){
	new Estabelecimento(estabelecimento).save(function(error, estabelecimento){
		if(error){
			callback({error: 'Nao foi possivel salvar.'});
		}else{
			callback(estabelecimento);
		}
	});
}

exports.list = function(callback){
	Estabelecimento.find({}, function(error, estabelecimentos){
		if(error){
			callback({error: 'Nao foi possivel encontra o estabelecimento.'});
		}else{
			callback(estabelecimentos);
		}
	});
}
exports.delete = function(req, callback){
	Estabelecimento.findById(req.params.id, function(error, estabelecimento){
		if(error){
			callback({error: 'Nao foi possivel excluir.'});
		}else{
			estabelecimento.remove(function(error){
				if(!error){
					callback({resposta: 'Estabelecimento excluido com sucesso.'});
				}
			});
		}
	});
}