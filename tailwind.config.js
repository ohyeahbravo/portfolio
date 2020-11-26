module.exports = {
	// added?
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: [
		// added for efficiency; all classes not used in these files will be removed
		'./public/**/*.html',
		'./src/**/*.vue',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
