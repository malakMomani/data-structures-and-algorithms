'use strict';

const Vertex = require('../vertex.js');
const Graph = require('../graph.js');
const myGraph = new Graph();
const two = new Vertex(2);

describe('Graph Class', () => {
  beforeAll(() => {
    const zero = new Vertex(0);
    const one = new Vertex(1);
    const three = new Vertex(3);
    const four = new Vertex(4);
    const five = new Vertex(5);


    myGraph.addVertex(zero);
    myGraph.addVertex(one);
    myGraph.addVertex(two);
    myGraph.addVertex(three);
    myGraph.addVertex(four);
    myGraph.addVertex(five);

    myGraph.addDirectedEdge(zero, two);
    myGraph.addDirectedEdge(two, three);
    myGraph.addDirectedEdge(two, four);
    myGraph.addDirectedEdge(three, five);
    myGraph.addDirectedEdge(four, five);
    myGraph.addDirectedEdge(one, three);
  });

  it('Node can be successfully added to the graph', () => {
    const test = new Vertex(200);
    expect(myGraph.addVertex(test)).toEqual([]);
  });

  it('An edge can be successfully added to the graph', () => {
    const start = new Vertex(40);
    const end = new Vertex(20);

    myGraph.addVertex(start);
    myGraph.addVertex(end);

    myGraph.addDirectedEdge(start, end);
    expect(myGraph.getNeighbours(start)).toEqual([{ value: 20, weight: undefined }]);
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    expect(myGraph.getVertices()).toEqual([0, 1, 2, 3, 4, 5, 200, 40, 20]);
  });

  it('All appropriate neighbors can be retrieved from the graph', () => {
    expect(myGraph.getNeighbours(two)).toEqual([{ value: 3, weight: undefined }, { value: 4, weight: undefined }]);
  });

  it('Neighbors are returned with the weight between nodes included', () => {
    expect(myGraph.getNeighbours(two)[0].weight).toEqual(undefined);
  });

  it('The proper size is returned, representing the number of nodes in the graph', () => {
    expect(myGraph.size()).toEqual(9);
  });

  it('A graph with only one node and edge can be properly returned', () => {
    const g = new Graph();
    const d = new Vertex('Welcome');
    g.addVertex(d);
    expect(g.getVertices()).toEqual(['Welcome']);
  });

  it('An empty graph properly returns null', () => {
    const g = new Graph();
    expect(g.getVertices()).toEqual([]);
  });


  //////////////////////////// code challenge 36 ////////////////////////////////

  it('breadth first traversal', () => {
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

    myGraph.addDirectedEdge(pandora, arendelle);
    myGraph.addDirectedEdge(arendelle, metroville);
    myGraph.addDirectedEdge(arendelle, monstropolis);
    myGraph.addDirectedEdge(monstropolis, metroville);
    myGraph.addDirectedEdge(monstropolis, naboo);
    myGraph.addDirectedEdge(naboo, metroville);
    myGraph.addDirectedEdge(naboo, narina);
    myGraph.addDirectedEdge(metroville, narina);


    expect(myGraph.breadthFirst(pandora)).toEqual(['Pandora' , 'Arendelle', 'Metroville', 'Monstropolis', 'Narnia', 'Naboo']);
  });

});
