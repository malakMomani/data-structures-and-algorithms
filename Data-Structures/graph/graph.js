'use strict';

const Edge = require('./edge.js');
const { Queue } = require('../stacksAndQueues/stacks-and-queues');

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
    let objs = [];
    for (const k of this.adjacencyList.keys()) {
      objs.push(k);
    }
    objs.forEach(v => {
      vertices.push(v.value);
    });

    return vertices ? vertices : null;
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
    console.log('--------------', neighbours);
    let nSet = [];
    neighbours.forEach(n => {
      nSet.push({ value: n.vertex.value, weight: n.vertex.weight });
    });
    return nSet;
  }

  size() {
    return this.adjacencyList.size;
  }

  ////////////////////////////////////////////////// code challenge 36 //////////////////////////////////////////
  // function BFS
  //    Initialize an empty queue, empty 'result' array & a 'visited' map
  //    Add the starting vertex to the queue & visited map
  //    While Queue is not empty:
  //      - Dequeue and store current vertex
  //      - Push current vertex to result array
  //      - Iterate through current vertex's adjacency list:
  //        - For each adjacent vertex, if vertex is unvisited:
  //          - Add vertex to visited map
  //          - Enqueue vertex
  //    Return result array


  breadthFirst(start) {

    const visited = new Map();
    const queue = new Queue();
    const result = new Array();

    queue.enqueue(start);
    visited.set(start, true);

    while (!queue.isEmpty()) {
      let current = queue.dequeue();
      result.push(current);

      const adjacencies = this.adjacencyList.get(current.value);

      adjacencies.forEach(adjacency => {
        if (!visited.get(adjacency.vertex)) {
          visited.set(adjacency.vertex, true);
          queue.enqueue(adjacency.vertex);
        }
      });
    }
    let finalResult = [];
    result.forEach(node =>{
      finalResult.push(node.value.value);
    });
    return finalResult;
  }
}

module.exports = Graph;
