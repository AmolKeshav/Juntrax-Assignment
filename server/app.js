const express = require("express");
const bodyParser = require("body-parser");
const serverConfig = require("./config");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const setHeaders = (req, res, next) => {
  for(let key of Object.keys(serverConfig.resHeaders)) {
    res.setHeader(key, serverConfig.resHeaders[key]);
  }
  
  next();
};

module.exports = app;