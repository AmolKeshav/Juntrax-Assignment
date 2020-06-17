const express = require("express");
const bodyParser = require("body-parser");
const serverConfig = require("./config");
const Routes = require("./routes");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const setHeaders = (req, res, next) => {
  for(let key of Object.keys(serverConfig.resHeaders)) {
    res.setHeader(key, serverConfig.resHeaders[key]);
  }
  
  next();
};

app.use("/api", Routes);

module.exports = app;