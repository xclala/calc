module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{html,png,json,md,txt}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};