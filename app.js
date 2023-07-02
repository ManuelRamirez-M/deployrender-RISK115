const Koa = require('koa');
// const Logger = require('koa-logger');
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors'); // Use 'koa2-cors' package
const routes = require('./routes/index');
require('dotenv').config({ path: './.env' });

// Create an instance of Koa
const app = new Koa();

// Development logging
// app.use(Logger());

// Middleware, body-parser and cors
app.use(cors());
/*
app.use(cors({
    origin: 'http://0.0.0.0:8080',
    credentials: true, // Allow sending cookies with the request
    optionSuccessStatus: 200
  }));
  */

app.use(bodyParser());

// routes
app.use(routes.routes());

module.exports = app;
