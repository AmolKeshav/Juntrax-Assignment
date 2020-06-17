/**
 * Aggregates all routes
 */

const GraphRoutes = require("./graph.routes");
const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("New api request arrived at: ", new Date().toISOString());
  next();
})
router.use('/graphs', GraphRoutes);

module.exports = router;