module.exports = {
	plugins: {
		'postcss-multiple-tailwind': {
			mode: 'auto',
		},
		autoprefixer: {},
		...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
	},
};
