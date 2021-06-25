# Graph

Graph is non-linear data strucure contains vertecies and edges connected between two vertices

## Challenge

implement Graph data structure with some methods

## Approach & Efficiency

I used classes to implement the Graph, add some methods
addVertex -> O(1)
addDirectedEdge -> O(1)
getVertices -> O(n)
getNeighbours -> O(n)
size -> O(1)

## API

addVertex --> it takes a vertex as parameter and set it to adjacency list and return it

addDirectedEdge --> it take to vertices start and end and the weight of the edge between, check if the graph has end and the start vertices if not return , else get the start vertex and push to his neighbours new Edge that takes end vertex and the weight

getVertices --> it return all vertices in the graph

getNeighbours --> it take a vertex as parameter and find his neighbours

size --> returns number of vertices in the graph
