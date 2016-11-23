"use strict";
module.exports = (app) => function(req, res, next) {

    var jwt = require('jsonwebtoken');
    var token = req.headers['authorization'];

    if (token) {

        jwt.verify(token, "12345", function(err, decoded) {
            if (err) {
                return res.sendStatus(401);
            } else {

                req.jwtDecoded = decoded;
                next();
            }
        });

    } else {
        return res.status(403).send({
            errors: 'é necessario jwt token'
        });
    }
};