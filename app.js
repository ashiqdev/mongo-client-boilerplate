const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const start = () => {
  console.log('started');
  const configureRoutes = require('./controllers');
  configureRoutes(app);
};

module.exports = { app, start };
