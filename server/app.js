const express = require("express");
const bodyParser = require("body-parser");
const serverConfig = require("./config");
const Routes = require("./routes");
const Routes2 = require("./routes2")
const authenticateUser = require("./middleware");
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
app.use("/serve", Routes2);


module.exports = app;


/**
 * http request: incoming
 * for every incoming request ==> do body parse, do encoding, and then only do something else...
 * 
 * /api/graphs/getpaths
 * /addusr/graphs/adduser
 */