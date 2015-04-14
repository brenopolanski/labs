/**
 * @file Provides data structure for directed graphs
 * @name Directed Graph
 * @author Mr. Bean <mr@bean.com>
 * @license MIT
 * @copyright 2013 Mr. Bean
 */

/**
 * A Graph object with the basic properties
 *
 * @class Graph
 * @constructor
 */
var Graph = function () {

    /** 
     * Object for holding vertices of the Graph
     *
     * @property vertices
     * @type object
     */
    this.vertices = {};
    
    /**
     * Array of edges of the Graph
     * @property edges
     * @type array
     */
    this.edges = [];
    
    /**
     * Length of the Graph, initially set to 0
     * @property length
     * @type number
     */
    this.length = 0;
};

/**
 * Constructor for a vertex of Graph
 *
 * @namespace Graph
 * @class Vertex
 * @constructor
 * @param {string} name Name of the vertex
 * @param {number} value Value of the vertex
 *
 * @property {string} name The name given to the vertex
 * @property {array} edges Edges of the vertex
 * @property {number} value The value of the value argument
 */
Graph.Vertex = function (name, value) {

    /** Store the name argument as a property **/
    this.name = name;
    
    /** Create an empty array for edges */
    this.edges = [];
    
    /** Store the value argument as a property */
    this.value = value;
};

/**
 * Prototype function which returns the number of edges of a {{#crossLink "Graph.Vertex"}}{{/crossLink}}
 *
 * @method degree
 * @return {number} The length of the edges
 */
Graph.Vertex.prototype.degree = function () {
    return this.edges.length;
};

/**
 * Constructor for edge of a {{#crossLink "Graph"}}{{/crossLink}}
 *
 * @namespace Graph
 * @class Edge
 * @constructor
 * @param {Graph.Vertex} tail The tail vertex
 * @param {Graph.Vertex} head The head vertex
 */
Graph.Edge = function (tail, head) {
    this.tail = tail;
    this.head = head;
    tail.edges.push(this);
    head.edges.push(this);
};

/**
 * Add a new {{#crossLink "Graph.Vertex"}}{{/crossLink}} or updates the value of an existing one
 *
 * @method addVertex
 * @example
 * var newVertex = Graph.addVertex("vertex1", 20);
 *
 * @param {string} name Name of the new vertex
 * @param {number} value Value of the new vertex
 *
 * @return {Graph.Vertex} New or updated {{#crossLink "Graph.Vertex"}}{{/crossLink}}
 */
Graph.prototype.addVertex = function (name, value) {
    if (!this.vertices[name]) {
        this.vertices[name] = new Graph.Vertex(name, value);
        this.length++;

    }
    else if (value) {
        this.vertices[name].value = value;
    }
    return this.vertices[name];
};

/**
 * Method for adding new {{#crossLink "Graph.Edge"}}{{/crossLink}}
 *
 * @method addEdge
 * @return {Graph.Edge} An instance of a {{#crossLink "Graph.Edge"}}{{/crossLink}}
 */
Graph.prototype.addEdge = function (tail, head) {
    return new Graph.Edge(this.addVertex(tail), this.addVertex(head));
};

/**
 * Exports the {{#crossLink "Graph"}}{{/crossLink}}
 *
 * @function exports
 */
module.exports = Graph;