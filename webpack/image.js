module.exports = function(){
	return {
		module: {
			rules: [
				{
					test: /\.(jpg|png)$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'images/'
							}
						}
					]
				},
				{
					test: /\.svg$/,
					use: [
						{
							loader: 'file-loader',
							options: {
								name: '[name].[ext]',
								outputPath: 'images/icons/'
							}
						},
						{
							loader: 'svgo-loader',
							options: {
								plugins: [
									{cleanupIDs: false}
								]
							}
						}
					]
				}
			]
		}
	};
};
