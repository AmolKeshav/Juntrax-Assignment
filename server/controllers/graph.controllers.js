/**
 * Controller corresponding to the graph data-structures
 */

const Graph = require("../services/graph.service");

module.exports = {
  findPaths: (req, res) => {
    let graph = new Graph(req.body.graphJson);
    graph.findPaths(req.body.rootNode);
    
    res.status(200).json({
      message: "Paths found!",
      data: {
        paths: graph.paths
      }
    });
  }
}