/**
 * Graph implementation
 */

module.exports = class Graph {
  constructor(graphJson) {
    this.graphData = graphJson;
    this.adjObject = {};
    this.paths = [];
    this.createGraph();
  }

  createGraph() {
    let nodes = Object.keys(this.graphData);
    for (let itr = 0; itr < nodes.length; itr++) {
      if (!this.adjObject.hasOwnProperty()) {
        this.adjObject[nodes[itr]] = [];
      }

      for (let jtr = 0; jtr < this.graphData[nodes[itr]].length; jtr++) {
        if (!this.adjObject.hasOwnProperty()) {
          this.adjObject[this.graphData[nodes[itr]][jtr]] = [];
        }
        this.adjObject[nodes[itr]].push(this.graphData[nodes[itr]][jtr]);
      }
    }
  }

  dfsUtil(currentNode, path) {
    path.push(currentNode);
      
    if (this.adjObject[currentNode].length) {
      for (let itr = 0; itr < this.adjObject[currentNode].length; itr++) {
        let adjNode = this.adjObject[currentNode][itr];

        if (adjNode !== currentNode) {
          this.dfsUtil(adjNode, path); 
        }
      }
    } else {
      this.paths.push([...path]);
    }

    path.pop();
    return;
  }

  findPaths(rootNode) {
    this.paths = [];
    this.dfsUtil(rootNode, []);
  }
}