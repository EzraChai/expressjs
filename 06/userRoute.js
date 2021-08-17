const express = require('express');

//User
const routes = new express.Router();

// Add routes
routes.get('/', function(req, res,next) {
    try {
        res.send("GET");
        throw new Error("JIBAI")
    } catch (error) {
        next(error);        
    }
});

routes.post('/', function(req, res) {
    res.send("POST");
});

routes.put('/', function(req, res) {
    res.send("PUT");
});

routes.delete('/', function(req, res) {
    res.send("DELETE");
});

module.exports = routes;
