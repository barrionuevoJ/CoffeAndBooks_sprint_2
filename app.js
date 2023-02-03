const express = require('express');

const app = express();

const path = require('path');

const port = 3030;

app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.resolve('./views/index.html')));

app.get('/login', (req, res) => res.sendFile(path.resolve('./views/login.html')))

app.get('/register', (req, res) => res.sendFile(path.resolve('./views/register.html')))

app.get('/productCart', (req, res) => res.sendFile(path.resolve('./views/productCart.html')))

app.get('/productDetail', (req, res) => res.sendFile(path.resolve('./views/productDetail.html')))

app.listen(port, () => console.log(`Servidor funcionando en el puerto ${port}!`));