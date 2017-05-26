const path = require('path');

module.exports = {
	entry: {
		app: [
			'webpack-dev-server/client?http://localhost:8080',
			path.join( __dirname, 'src', 'js', 'main.js' )
		],
		splash: [
			'webpack-dev-server/client?http://localhost:8080',
			path.join( __dirname, 'src', 'js', 'splash.js' )
		]
	},
	output: {
		path: path.join(__dirname, 'dist', 'js'),
		filename: "[name].bundle.js"
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'stage-2']
				}
			},
			{ 
				test: /\.jsx$/, 
				loader: 'babel-loader', 
				exclude: /node_modules/,
				query: {
					presets: ['es2015', 'stage-2']
				}
			}
		]
	}

}