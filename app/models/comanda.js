var mongoose = require('mongoose');

var schema = mongoose.Schema;

var ComandaSchema = new schema({
	codigo: String,
	status: String,
	estabelecimento: String,
	usuario: String,
	mesa: String,
	created: {
       type: Date,
       default: Date.now
    },
	valorTotal: Number,
	itens: [new schema({codigo : Number, produto : String, valor : Number, quantidate : Number})]
	
});

module.exports = mongoose.model('comanda', ComandaSchema);