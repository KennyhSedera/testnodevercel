const express = require('express')
const test  = require('../controller/test')
const route = express.Router()

route.get('/', test.getAll);

route.get('/test', (req, res) => {
    const data = [
        {id:1, libelle:'Manioc'},
        {id:2, libelle:'Carotte'},
        {id:3, libelle:'Tomate'}
    ]
    res.send(data)
});

module.exports = route;