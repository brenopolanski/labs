var express = require('express');
var load = require('express-load');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// É importante colocar em ordem os recursos a serem carregados pela função load().
// Neste caso, os models são carregados primeiro, para que os controllers possam
// usá-las, e por último, os routes usarem toda lógica de seus controllers.
load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(3000, function() {
  console.log('Ntalk no ar.');
});