const parentConfig = require('../../.eslintrc.js');

module.exports = {
	...parentConfig,
	extends: ['@nuxtjs/eslint-config-typescript'],
};
