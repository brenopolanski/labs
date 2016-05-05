var jsonfile = require('jsonfile');
var data     = './data.json';
var dataMock;

var appRouter = function(app) {
  app.get('/data', function(req, res) {
    dataMock = jsonfile.readFileSync(data);
    return res.send(dataMock);
  });
};

module.exports = appRouter;
