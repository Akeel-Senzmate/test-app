module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'react/react-in-jsx-scope': 'off',
		'react/prop-types': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
