/**
 * Defining the route for graph data-structure
 */

const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.use((req, res, next) => {
  console.log("Request to graph routes arrived at: ", new Date().toISOString());
  next();
});

router.post("/findpaths", Controllers.GraphController.findPaths);

module.exports = router;
