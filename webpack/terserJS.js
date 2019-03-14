const TerserJsPlugin = require('terser-webpack-plugin');

module.exports = function(){
	return {
		optimization: {
			minimizer: [
				new TerserJsPlugin({
					test: /\.js(\?.*)?$/i,
					parallel: true,
					cache: true
				}),
			],
		}
	};
};