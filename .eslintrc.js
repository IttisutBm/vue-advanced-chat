module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: ['plugin:vue/recommended', '@vue/typescript'],
	rules: {
		'no-console': 'off',
		'no-debugger':  'off',
		'no-control-regex': 0,
		'vue/no-unused-properties': [
			'error',
			{
				groups: ['props', 'data', 'computed', 'methods', 'setup'],
				deepData: true
			}
		],
		'no-empty-pattern': 'off',
		'no-unused-vars': 'warn',
		'valid-typeof': 'off',
		indent: 'off',
		'no-tabs': 'off',
		'vue/html-indent': 'off',
		'space-before-function-paren': 'off',
		'vue/max-attributes-per-line': 'off',
		'vue/html-self-closing': [
			'error',
			{
				html: {
					void: 'always',
					normal: 'always',
					component: 'always'
				}
			}
		]
	},
	parserOptions: {
		parser: '@typescript-eslint/parser'
	}
}
