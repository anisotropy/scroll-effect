var webpack = require('webpack');

module.exports = {
	entry: __dirname + '/app/scroll-effect.js',
	output: {
		path: __dirname + '/build',
		filename: 'scroll-effect.min.js'
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin()
	]
}
