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
 * @constructor
 * 
 * @property {object} vertices The vertices of the graph
 * @property {array} edges The edges of the graph
 * @property {number} length Length of the graph
 */
var Graph = function () {

    /** 
     * Object for holding vertices of the Graph
     *
     */
    this.vertices = {};
    
    /** Array of edges of the Graph */
    this.edges = [];
    
    /** Length of the Graph, initially set to 0 */
    this.length = 0;
};

/**
 * Constructor for a vertex of {@link Graph}
 *
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
 * Prototype function which returns the number of edges of a {@link Graph.Vertex}
 *
 * @returns {number} The length of the edges
 */
Graph.Vertex.prototype.degree = function () {
    return this.edges.length;
};

/**
 * Constructor for edge of a {@link Graph}
 *
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
 * Add a new {@link Graph.Vertex} or updates the value of an existing one
 *
 * @example
 * var newVertex = Graph.addVertex("vertex1", 20);
 *
 * @param {string} name Name of the new vertex
 * @param {number} value Value of the new vertex
 *
 * @returns {Graph.Vertex} New or updated {@link Graph.Vertex}
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
 * Method for adding new {@link Graph.Edge}
 *
 * @returns {Graph.Edge} An instance of a {@link Graph.Edge}
 */
Graph.prototype.addEdge = function (tail, head) {
    return new Graph.Edge(this.addVertex(tail), this.addVertex(head));
};

/**
 * Exports the {@link Graph}
 *
 * @memberof member
 */
module.exports = Graph;