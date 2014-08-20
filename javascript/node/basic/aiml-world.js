var aiml = require('aiml');
var express = require('express');
var app = express();
var engine;

aiml.parseFiles('alice.aiml', function(err, topics) {
	engine = new aiml.AiEngine('Default', topics, {name: 'Buddy'});
});

app.get('/query/:id', function(req, res) {
	var response = engine.reply({name: 'You'}, req.params.id, function(err, response) {
		res.send(response);
	});
});

app.listen(3000);

console.log('Server running at http://127.0.0.1:3000/');