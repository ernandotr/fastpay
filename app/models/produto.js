var mongoose = require('mongoose');

var schema = mongoose.Schema;

var ProdutoSchema = new schema({
	nome: String,
	descricao: String,
	valor: Number
});

module.exports = mongoose.model('produto', ProdutoSchema);