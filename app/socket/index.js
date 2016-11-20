/**
 * Created by douglas on 19/11/16.
 */
const http = require("http");
const SocketIO = require("socket.io");

const User = require("./user");

class FuraFilaIO extends SocketIO {

    constructor(app) {
        super(http.Server(app));

        this.users = [];
        this.connections = {};
        this.setupSocket();
    }

    setupSocket() {
        this.on("connection", (socket) => {
            let nome = socket.handshake.query.nome;

            let currentUser = new User(socket, nome);

            if (FuraFilaIO.findIndex(this.users, currentUser.id) > -1) {
                console.log("[INFO] desconecta.");
                socket.disconnect();
            } else {
                console.log("[INFO] Usuaio " + currentUser.nome + " connectado!");
                this.connections[currentUser.id] = socket;
                this.users.push(currentUser);
                socket.emit("userJoin", {
                    nome: currentUser.nome
                });
                console.log("[INFO] Total usuarios: " + this.users.length);
            }
            socket.on("disconnect", () => {
                if (FuraFilaIO.findIndex(this.users, currentUser.id) > -1)
                    this.users.splice(FuraFilaIO.findIndex(this.users, currentUser.id), 1);

                console.log("[INFO] User " + currentUser.nome + " disconectado!");
                socket.broadcast.emit("userDisconnect", {
                    nome: currentUser.nome
                });
            });

            socket.on("ding", () => {
                socket.emit("dong");
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

module.exports = app => new FuraFilaIO(app);