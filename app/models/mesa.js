var mongoose = require('mongoose');

var schema = mongoose.Schema;

var MesaSchema = new schema({
	codigo: String,
	status: String,
	estabelecimento: String
});

module.exports = mongoose.model('mesa', MesaSchema);