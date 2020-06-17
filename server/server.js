const http = require("http");
const app = require("./app");
const env = require("dotenv").config();

const normalizePort = (val) => {
  let port = parseInt(val, 10);
  if (isNaN(port)) {
    return port;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const onError = error => {
  if (error.syscall !== "listen") { 
    throw error;
  }

  const bind = typeof addr === "string" ? "pipe " + addr : "Port " + port;
  switch (error.code) {
    case "EACCESS":
      console.error(bind + " requires elevated privileges.");
      process.exit();
      break;
    case "EADDRESSINUSE":
      console.error(bind + " is already in use");
      process.exit();
      break;
    default:
      throw error;
  }
};

const onListening = () => {
  let addr = server.address();
  let bind = typeof addr === "string" ? "pipe " + add : "port " + port;
  console.log("Juntrax server is listening on " + bind);
};

const port = normalizePort(process.env.SERVER_PORT || "9000");
const server = http.createServer(app);

server.on('error', onError);
server.on('listening', onListening);
server.listen(port);