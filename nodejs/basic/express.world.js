var express = require('express');
var app = express();

app.get('/hello', function(req, res) {
	res.send('Hello World');
});

app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');