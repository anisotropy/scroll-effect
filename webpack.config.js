module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + '/app/scroll-effect.js',
	output: {
		path: __dirname + '/test',
		filename: 'scroll-effect.dev.js'
	}
}
