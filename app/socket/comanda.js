/**
 * Created by douglas on 20/11/16.
 */
"use strict";
const EventEmitter = require("events");

class Comanda extends EventEmitter {
    constructor(socket) {
        super();
        this.io = socket;
    }

}
module.exports = Comanda;