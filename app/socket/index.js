"use strict";

const User = require("./user");

class FuraFilaIO {

	constructor(io) {
		this.io = io;
		this.users = [];
		this.sockets = {};
		this.setupSocket();
	}

	setupSocket() {
		this.io.on('connection', (socket) => {
			let nome = socket.handshake.query.nome;

			let currentUser = new User(socket, nome);

			if (FuraFilaIO.findIndex(this.users, currentUser.id) > -1) {
				console.log('[INFO] desconecta.');
				socket.disconnect();
			} else {
				console.log('[INFO] Usuaio ' + currentUser.nome + ' connectado!');
				this.sockets[currentUser.id] = socket;
				this.users.push(currentUser);
				socket.emit('userJoin', {
					nome: currentUser.nome,
					total:this.users.length
				});
				console.log('[INFO] Total usuarios: ' + this.users.length);
			}
			socket.on('disconnect', () => {
				if (FuraFilaIO.findIndex(this.users, currentUser.id) > -1) this.users.splice(FuraFilaIO.findIndex(this.users, currentUser.id), 1);
				console.log('[INFO] User ' + currentUser.nome + ' disconectado!');
				socket.broadcast.emit('userDisconnect', {
					nome: currentUser.nome
				});
			});

			socket.on('ding', () => {
				socket.emit('dong');
			});
		});
	}

	static findIndex(users, id) {
		var len = users.length;

		while (len--) {
			if (users[len].id === id) {
				return len;
			}
		}

		return -1;
	}
}
module.exports = FuraFilaIO;