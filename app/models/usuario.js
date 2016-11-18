var mongoose = require('mongoose');

var schema = mongoose.Schema;

var UsuarioSchema = new schema({
	nome: String,
	cpf: String,
	email: String,
	senha:String,
	endereco: {
		logradouro: String,
		numero: String,
		complemento: String,
		bairro: String,
		cep: String,
		cidade: String,
		uf: String,
		pais: String
	},
	roles : {
		nome:String
	}
	

});

module.exports = mongoose.model('usuario', UsuarioSchema);