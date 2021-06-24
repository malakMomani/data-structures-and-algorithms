'use strict';

const Vertex = require('./vertex.js');
const Edge = require('./edge.js');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }

  addDirectedEdge(start, end, weight) {
    if(!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log('VERTEX DOES NOT EXIST');
      return;
    }

    const adjacencies = this.adjacencyList.get(start);
    adjacencies.push(new Edge(end, weight));
  }

}
