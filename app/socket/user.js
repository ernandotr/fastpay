/**
 * Created by douglas on 20/11/16.
 */
"use strict";
const Comanda = require("./comanda");

class User {
    constructor(socket, nome) {
        this.socket = socket;
        this.id = this.socket.id;
        this.nome = nome;

        this.setupSoket();
    }

    set comanda(comanda) {
        if (comanda instanceof Comanda)
            this.comanda = comanda;
    }
    setupSoket() {
        this.socket.on("add-item-comanda", (data) => {
            let _user = data.user;
            let _item = data.item;
            let date = new Date();
            let time = ("0" + date.getHours()).slice(-2) + ("0" + date.getMinutes()).slice(-2);

            console.log("[Pedido] [" + time + "] " + _user + ": " + _item);
            this.socket.broadcast.emit("server-add-user-item", {
                user: _user,
                item: _item
            });
        });
    }
}

module.exports = User;