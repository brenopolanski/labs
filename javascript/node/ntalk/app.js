var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var methodOverride = require('method-override');
var error = require('./middlewares/error');
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('ntalk'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(__dirname + '/public'));

// É importante colocar em ordem os recursos a serem carregados pela função load().
// Neste caso, os models são carregados primeiro, para que os controllers possam
// usá-las, e por último, os routes usarem toda lógica de seus controllers.
load('models')
  .then('controllers')
  .then('routes')
  .into(app);

// middleware de tratamento erros
app.use(error.notFound);
app.use(error.serverError);

app.listen(3000, function() {
  console.log('Ntalk no ar.');
});