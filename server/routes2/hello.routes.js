const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.use((req, res, next) => {
    console.log("Request to array routes arrived at: ", new Date().toISOString());
    next();
  });
  
router.post("/sayhello", Controllers.HelloController.sayHello);
router.get("/getnginxlogs", Controllers.HelloController.getNginxLogs);
  
  module.exports = router;