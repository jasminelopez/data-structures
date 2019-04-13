

// Instantiate a new graph
var Graph = function(value) { 
  if (value) {
    this.edges = [];
  }
};

// graph.nodes: { 
//   "1": {
//     value: 23,
//     edges: ["2", ],
//   }
// }
// Add a node to the graph, passing in the node's value.

Graph.prototype.addNode = function(value) {  //addNode(1)
  var newNode = new Graph(value);
  this[value] = newNode; // '5': {}
};
// Return a boolean value indicating if the value passed to contains is represented in the graph.

Graph.prototype.contains = function(value) {
  //Key value '1'
  if (this[value]) {
    return true;
  } else {
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  delete this[value];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode].edges.indexOf(toNode) !== -1) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) { 
  this[fromNode].edges.push(toNode);
  this[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


