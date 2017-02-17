module.exports = {
	entry: './js/main.js',
	output: {
		filename: './dist/bundle.js'
	},
	watch: true,
	module: {
		loaders: [
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader'
			}
		]
	}
};