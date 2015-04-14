var http  = require('http');
var fs    = require('fs');
var index = fs.readFileSync('index.html');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end(index);
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');