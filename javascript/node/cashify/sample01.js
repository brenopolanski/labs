const {Cashify} = require('cashify');

const rates = {
  USD: 1.0000000000000000,
  ARK: 0.2080325454335759,
  EUR: 1.0975454493570578,
  BRL: 0.2347053661391977,
  BTC: 9719.5564583014163242,
};

const cashify = new Cashify({base: 'USD', rates});

const result = cashify.convert(1, {from: 'BTC', to: 'ARK'});

console.log(result); // => 0.000021403501932014247
