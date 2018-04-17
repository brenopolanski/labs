const jsonata = require('jsonata');
const data = require('./data');

const result = jsonata('Phone[1]').evaluate(data);

console.log(result);
