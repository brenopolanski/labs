var events = require('events');

// Mas há uma prática comumente usada na comunidade que é herdar 
// a classe eventEmitter, para fazer isso vamos criar um objeto e 
// herdar o prototype do EventEmitter e criar uma função que irá emitir nosso evento:

function Cagar(vontade) {
  this.vontade = vontade;

  events.EventEmitter.call(this);

  this.vontadeDeCagar = function (vontade) {
    this.emit('vontadeDeCagar', vontade);
  }
};

Cagar.prototype.__proto__ = events.EventEmitter.prototype;

// JSON a ser passado para o evento
var vontade = {
    queredeira: 'dimais',
    lugar: 'banheiro químico'
  };
var Caganeira = new Cagar(vontade);


// Criamos as funções que serão chamadas quando o evento acontecer
var correrParaOBanheiro = function (vontade) {
  var velocidade = 'devagarosamente';
  if (vontade.queredeira === 'dimais') {
    velocidade = 'putavelozmente';
  }
  console.log('correndo para o banheiro ' + velocidade + '...');
};

var cagar = function () {
  console.log('cagando...');
};

var pegarPapelHigienico = function () {
  console.log('pegando o papele higienico com calma e cuidado...');
};
var limparABunda = function () {
  console.log('limpando o orifício anal para ficar macio e sedoso...');
};
var passarBomAr = function (vontade) {
  var msg = 'passando Bom Ar para mascarar o fedor de gambá apodrecendo...';
  if (vontade.lugar === 'banheiro químico') {
    msg = 'Sai fora vazado e FODA-SE!';
  }
  console.log(msg);
};


// Ligamos o evento vontadeDeCagar com as funções
Caganeira.on('vontadeDeCagar', correrParaOBanheiro);
Caganeira.on('vontadeDeCagar', cagar);
Caganeira.on('vontadeDeCagar', pegarPapelHigienico);
Caganeira.on('vontadeDeCagar', limparABunda);
Caganeira.on('vontadeDeCagar', passarBomAr);

Caganeira.vontadeDeCagar(vontade);