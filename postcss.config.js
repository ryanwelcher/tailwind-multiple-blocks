module.exports = {
	plugins: {
		'postcss-multiple-tailwind': {},
		autoprefixer: {},
		...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
	},
};
