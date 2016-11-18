var mongoose = require('mongoose');

var schema = mongoose.Schema;

var EstabelecimentoSchema = new schema({
	nomeFantasia: String,
	razaoSocial: String,
	cnpj: String,
	endereco: {
		logradouro: String,
		numero: String,
		complemento: String,
		bairro: String,
		cep: String,
		cidade: String,
		uf: String,
		Pais: String
	},
		usuaario: {
			nome:String,
			email:String,
			senha:String
		}
	

});

module.exports = mongoose.model('estabelecimento', EstabelecimentoSchema);