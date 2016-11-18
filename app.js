var app = require('./config/server');

var port = process.env.PORT || 3000;

app.set('port', port);

app.listen(port, function(){
	console.log('Aplicao rodando na porta: ', port);
});
