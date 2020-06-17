/**
 * Controller corresponding to the graph data-structures
 */

module.exports = {
  findPaths: (req, res) => {
    res.status(200).json({
      message: "Paths found!",
      data: {
        paths: []
      }
    });
  }
}