var Produto = require('../models/produto');

exports.save = function(produto, callback){
	new Produto(produto).save(function(error, produto){
		if(error){
			callback({error: 'Nao foi possivel salvar.'});
		} else {
			callback(produto);
		}
	});
}

exports.list = function(callback){
	Produto.find({}, function(error, produtos){
		if(error){
			callback({error: 'Nao foi possivel encontra o produto.'});
		}else{
			callback(produtos);
		}
	});
}
exports.delete = function(req, callback){
	Produto.findById(req.params.id,function(error, produto){
		if(error){
			callback({error: 'Nao foi possivel excluir.'});
		}else{
			produto.remove(function(error){
				if(!error){
					callback({resposta: 'Produto excluido com sucesso.'});
				}
			});
		}
	});
}