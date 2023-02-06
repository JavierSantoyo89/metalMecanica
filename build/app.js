// ------- Variables de rutas ------- //
import express from "express";
import { url } from "inspector";
import ejs from 'ejs';
// const express = require('express')
const app = express();
import path from "path";
import { fileURLToPath } from 'url';
// const  path = require('path');
// ------- Ruta para hacer publica la carpeta "public" ------- //
// app.use('/static',express.static(path.join(__dirname + '/public')))
//  app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.dirname + '/public'));
// const routes = require('./routers/main')
import routes from './routers/main.js';
app.use('/', routes);
// ------- Template engine ------- //
app.set('view engine', 'ejs');
app.set('views', './views');
// ------- Cadena de ruta para error 404 ------- //
app.use((req, res, next) => {
    res.status(404).render('not-found');
});
// ------- levantar servidor ------- //
const port = process.env.PORT || 1689;
app.listen(port, () => {
    console.log('Servidor funcionando en http://localhost:' + port);
});
