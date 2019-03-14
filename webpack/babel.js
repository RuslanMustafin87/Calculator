module.exports = function(){
	return {
		module: { 
			rules: [
				{
					test: /\.m?js$/,
					exclude: /(node_modules|dist)/,
					use: {
						loader: 'babel-loader',
					}
				}
			]
		}
	};
};