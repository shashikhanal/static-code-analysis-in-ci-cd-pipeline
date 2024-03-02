module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2021,
	},
	env: {
	  node: true,
	  es2021: true,
	},
	extends: [
	  'eslint:recommended',
	  'plugin:import/errors',
	  'plugin:import/warnings',
	  'plugin:promise/recommended',
	],
	plugins: ['import', 'node', 'promise'],
	rules: {
	  // Add additional rules as needed
	},
  };
  