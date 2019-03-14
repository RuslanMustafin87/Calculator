module.exports =  {
	syntax: 'postcss-scss',
	plugins: {
		'autoprefixer': {
			browsers:['ie >= 8', 'last 4 version']
		},
		'cssnano': {},
		'postcss-short': {},
		'postcss-utilities': {}
	}
};