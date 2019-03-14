module.exports = function(){
	return {
		module: {
			rules: [
				{
					test: /\.css$/,
					use: [
						'style-loader',
						'css-loader',
						'postcss-loader',
						// {
						// 	loader: 'stylefmt-loader',
						// 	options: {
						// 		config: '.stylelintrc'
						// 	}
						// }
					]
				},
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						'css-loader',
						'postcss-loader',
						'sass-loader',
						// {
						// 	loader: 'stylefmt-loader',
						// 	options: {
						// 		config: '.stylelintrc'
						// 	}
						// }
					]
				}
			]
		},
	};
};