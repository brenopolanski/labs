const translate = require('google-translate-api');

translate('I speak English', { to: 'pt' }).then(res => {
  console.log(res.text);
  //=> I speak English
  console.log(res.from.language.iso);
  //=> nl
}).catch(err => {
  console.error(err);
});
