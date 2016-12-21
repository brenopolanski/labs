const dev = require('mozilla-neo/config/webpack.dev');
const path = require('path');

dev.eslint.configFile = path.join(__dirname, 'eslint.dev.js');

module.exports = dev;
