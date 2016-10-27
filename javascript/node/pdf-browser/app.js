var express = require('express');
var cors = require('cors');
var fs = require('fs');
var app = express();

app.use(cors());

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
