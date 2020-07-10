/**
 * Aggregates all routes
 */

const HelloRoutes = require("./hello.routes");
const express = require("express");
const router = express.Router();


router.use((req, res, next) => {
  console.log("New api request arrived at: ", new Date().toISOString());
  next();
})
router.use('/hello', HelloRoutes);

module.exports = router;

/**
 * Routes --> /api ==
 * GraphRoutes --> /api/graphs
 * ArrayRoutes --> /api/array
 */