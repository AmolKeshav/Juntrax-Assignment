const assert = require("assert");
const Graph = require("./graph.service");

describe("Graph Tests", () => {
  it("Shoul create a graph from a given json object", () => {
    let graphJson = {
      1: [2, 3, 4, 5],
      2: [6],
      3: [6, 7],
      4: [7, 8],
      5: [8],
      7: [7, 8]
    }

    let graph = new Graph(graphJson);

    assert.strictEqual(Object.keys(graph.adjObject).length, 8);
    assert.strictEqual(graph.adjObject['8'].length, 0);
    assert.strictEqual(graph.adjObject['4'].length, 2);
    assert.strictEqual(graph.adjObject['1'].length, 4);
  });


  it("Shoul find all paths from a given source object", () => {
    let graphJson = {
      1: [2],
      3: [4, 5],
      4: [6],
      5: [7],
      6: [8],
      7: [7, 8]
    }

    let graph = new Graph(graphJson);

    graph.findPaths(1);
    assert.strictEqual(graph.paths.length, 1);

    graph.findPaths(3);
    assert.strictEqual(graph.paths.length, 2);

    graphJson = {
      1: [2, 3, 4, 5],
      2: [6],
      3: [6, 7],
      4: [7, 8],
      5: [8],
      7: [7, 8]
    };

    graph = new Graph(graphJson);

    graph.findPaths(1);
    assert.strictEqual(graph.paths.length, 6);
  })
})