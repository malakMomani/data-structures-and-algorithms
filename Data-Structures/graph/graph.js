'use strict';

const Edge = require('./edge.js');

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
    return this.adjacencyList.get(vertex);
  }

  addDirectedEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log('VERTEX DOES NOT EXIST');
      return;
    }

    const adjacencies = this.adjacencyList.get(start);
    adjacencies.push(new Edge(end, weight));
  }

  getVertices() {
    let vertices = [];
    let objs =[];
    for (const k of this.adjacencyList.keys()) {
      objs.push(k);
    }
    objs.forEach(v => {
      vertices.push(v.value);
    });

    return vertices? vertices: null;
  }

  // print() {
  //   for (const [k, v] of this.adjacencyList.entries()) {
  //     console.log('key -----', k);
  //     console.log('values---', v);
  //   }
  // }

  getNeighbours(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      console.log('Vertex Does Not Exist');
      return;
    }

    let neighbours = this.adjacencyList.get(vertex);
    console.log('--------------' , neighbours);
    let nSet = [];
    neighbours.forEach(n =>{
      nSet.push({value : n.vertex.value , weight: n.vertex.weight});
    });
    return nSet;
  }

  size() {
    return this.adjacencyList.size;
  }
}

module.exports = Graph;
