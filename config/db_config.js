var mongoose = require('mongoose');

var urlString = process.env.MONGODB_URI || 'mongodb://localhost/API';

var connMongoDB = mongoose.connect(urlString, function(err, res){
	if(err){
		console.log('Não foi possíve conectar com a ',urlString);
	}else{
		console.log('conectado a ',urlString);
	}
});

module.exports = function(){
	return connMongoDB;
}