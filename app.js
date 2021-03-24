const express = require('express');
// const configureRoutes = require('./controllers');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configureRoutes(app);

module.exports =  app;
