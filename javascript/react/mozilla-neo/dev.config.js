const dev = require('mozilla-neo/config/webpack.dev');
const FlowStatusPlugin = require('flow-status-webpack-plugin');

dev.plugins.push(new FlowStatusPlugin({
  binaryPath: 'node_modules/.bin/flow'
}));

module.exports = dev;
