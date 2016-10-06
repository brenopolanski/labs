var express = require('express');
var fs = require('fs');
var app = express();

app.get('/', function(req, res) {
  var filePath = '/report.pdf';

  fs.readFile(__dirname + filePath, function(err, data) {
    res.contentType('application/pdf');
    res.send(data);
  });
});

app.listen(3000, function() {
  console.log('Listening on 3000');
});
