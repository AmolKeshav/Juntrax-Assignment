/**
 * Aggregate all controllers for eash communication with other modules
 */

const GraphController = require("./graph.controllers");
const ArrayController = require("./array.controllers");
const HelloController = require("./hello.controllers");

module.exports = { GraphController, ArrayController, HelloController };