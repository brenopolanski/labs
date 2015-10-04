module.exports = {
	entry: "./entry.js",
	output: {
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{test: /\.jsx/, loader: 'jsx-loader'}
		]
	}
};
