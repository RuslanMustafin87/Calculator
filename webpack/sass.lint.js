const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = () => {
	return {
		plugins: [
			new StyleLintPlugin({
				configFile: './stylelint.config.js',
				context: 'src',
				syntax: 'scss',
				fix: true
			})
		]
	};
};