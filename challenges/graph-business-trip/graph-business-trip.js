'use strict';

const Vertex = require('../../Data-Structures/graph/vertex.js');
const Graph = require('../../Data-Structures/graph/graph');

function graphBusinessTrip(graph, cities) {

  let cost = 0;
  let flag = false;
  console.log('1-------------');
  if (graph.size === 0) return `${flag}, ${cost}`;
  for (let i = 0; i < cities.length; i++) {

    console.log(new Vertex(cities[i]));
    let neighbours = graph.getNeighbours(new Vertex(cities[i]));
    let values = neighbours.map(n => n.value);
    let weights = neighbours.map(n => n.weight);
    if (i < cities.length) {
      if (!values.includes(cities[i + 1])) {
        console.log('3-------------');

        return `${flag}, ${cost}`;
      }
      else {
        cost += weights[0];
      }
    }
  }
  flag = true;

  console.log('4-------------');

  return `${flag}, ${cost}`;
}

const myGraph = new Graph();

const pandora = new Vertex('Pandora');
const arendelle = new Vertex('Arendelle');
const monstropolis = new Vertex('Monstropolis');
const naboo = new Vertex('Naboo');
const metroville = new Vertex('Metroville');
const narina = new Vertex('Narnia');


myGraph.addVertex(pandora);
myGraph.addVertex(arendelle);
myGraph.addVertex(monstropolis);
myGraph.addVertex(naboo);
myGraph.addVertex(metroville);
myGraph.addVertex(narina);

myGraph.addDirectedEdge(pandora, arendelle, 150);
myGraph.addDirectedEdge(pandora, metroville, 82);
myGraph.addDirectedEdge(arendelle, metroville, 99);
myGraph.addDirectedEdge(arendelle, monstropolis, 42);
myGraph.addDirectedEdge(monstropolis, metroville, 105);
myGraph.addDirectedEdge(monstropolis, naboo, 73);
myGraph.addDirectedEdge(naboo, metroville, 26);
myGraph.addDirectedEdge(naboo, narina, 250);
myGraph.addDirectedEdge(metroville, narina, 37);

console.log(graphBusinessTrip(myGraph, ['Metroville', 'Pandora']));
module.exports = graphBusinessTrip;
