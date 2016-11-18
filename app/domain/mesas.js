var Mesa = require('../models/mesa');


exports.save = function(mesa, callback){
	new Mesa(mesa).save(function(error, mesa){
		if(error){
			callback({error: 'Nao foi possivel salvar.'});
		}else{
			callback(mesa);
		}
	});
}

exports.list = function(callback){
	Mesa.find({}, function(error, mesas){
		if(error){
			callback({error: 'Nao foi possivel encontrar a mesa.'});
		}else{
			callback(mesas);
		}
	});
}
exports.delete = function(req, callback){
	Mesa.findById(req.params.id,function(error, mesa){
		if(error){
			callback({error: 'Nao foi possivel excluir.'});
		}else{
			mesa.remove(function(error){
				if(!error){
					callback({resposta: 'Mesa excluida com sucesso.'});
				}
			});
		}
	});
}