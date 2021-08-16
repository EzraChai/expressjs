const express = require('express');

//User
const routes = new express.Router();

// Add routes
routes.get('/', function(req, res) {
    res.send("GET");
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
