module.exports = (paths) => {
	return {
		module: {
			rules: [
				{
					test: /\.js$/,
					enforce: 'pre',
					loader: 'eslint-loader',
					include: paths, 
					exclude: [/node_modules/,
						/dist/],
					options: {
						fix: true,
					}
				}
			]
		}
	};
};