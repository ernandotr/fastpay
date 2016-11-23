"use strict";
var Usuario = require('../models/usuario');
var jwt = require('jsonwebtoken');

exports.autenticar = function(req, callback){
    /**loga o usuario com um novo token*/
	let signin = function(user) {
		jwt.sign({email: user.email}, "12345", {
			expiresIn: 86400 // expires in 24 hours
		}, function(err, token) {

			var usuario  = {
				id: user._id,
				nome: user.nome,
				cpf: user.cpf,
				email: user.email,
				token: token
			};

			callback({user:usuario});
		});
	};
	var email = req.jwtDecoded ? req.jwtDecoded.email : req.body.email;
	Usuario.findOne({ "email": email }, function(err, user) {

		if (err) throw err;

		if (!user) {
			callback({"errors":{email:["email não encontrado."]}});
		} else if (user) {
			if(req.jwtDecoded) {
				// loga com jwt
				signin(user)
				return;
			}

			if (user.senha != req.body.senha) {
				callback({"errors":{email:["senha incorreta."]}});
			} else {
				// loga com senha
				signin(user);
			}
		}
	});
};

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