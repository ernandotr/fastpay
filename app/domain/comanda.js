var Comanda = require('../models/comanda');


exports.save = function(comanda, callback){
	new Comanda(comanda).save(function(error, comanda){
		if(error){
			callback({error: 'Nao foi possivel salvar.'});
		}else{
			callback(comanda);
		}
	});
}

exports.add = function(req, callback){
	var id = req.body.id;
		var item = req.body.item;
	Comanda.findById(id, function(error, comanda){
		if (error) {
			callback({error: 'Nao foi possivel add pedido.'});
		}else{
			comanda.itens.push(item);
			comanda.valorTotal = 0;
			comanda.itens.forEach(function(item){
				comanda.valorTotal += item.valor;
			});
		
			comanda.save(function(error, comanda){
				if (error) {
					callback({error: 'Pedido nao incluido.'});
				}else{
					callback(comanda);
				}
			});
		}
	});
	
}

exports.list = function(callback){
	Comanda.find({}, function(error, comandas){
		if(error){
			callback({error: 'Nao foi possivel encontrar a comanda.'});
		}else{
			callback(comandas);
		}
	});
}

exports.delete = function(req, callback){
	var id = req.params.id;
	Comanda.findById(id, function(error, comanda){
		if(error){
			callback({error: 'Nao foi possivel excluir.'});
		}else{
			console.log(comanda);
			comanda.remove(function(error){
				if(!error){
					callback({resposta: 'Comanda excluido com sucesso.'});
				}
			});
		}
	});
}
