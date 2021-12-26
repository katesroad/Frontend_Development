module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	eslintIgnore: ['webpack/*.js', '.storybook/*.js'],
	extends: ['react-app', 'eslint-config-airbnb'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
			tsx: true,
		},
		ecmaVersion: 13,
		sourceType: 'module',
	},
	plugins: ['react', 'import', 'sort-destructure-keys'],
	rules: {
		'@typescript-eslint/comma-dangle': [
			2,
			{
				arrays: 'always-multiline',
				enums: 'always-multiline',
				exports: 'always-multiline',
				functions: 'never',
				generics: 'always-multiline',
				imports: 'always-multiline',
				objects: 'always-multiline',
				tuples: 'always-multiline',
			},
		],
		'@typescript-eslint/explicit-member-accessibility': [
			2,
			{ accessibility: 'no-public' },
		],
		'@typescript-eslint/indent': [
			2,
			'tab',
			{
				SwitchCase: 1,
				ignoredNodes: ['TSTypeParameterInstantiation'],
			},
		],
		'@typescript-eslint/lines-between-class-members': [
			2,
			'always',
			{ exceptAfterOverload: false },
		],
		'@typescript-eslint/naming-convention': 0,
		'@typescript-eslint/no-unused-vars': 2,
		'@typescript-eslint/quotes': [
			2,
			'single',
			{ allowTemplateLiterals: true },
		],
		'@typescript-eslint/space-before-function-paren': [
			2,
			{
				anonymous: 'always',
				asyncArrow: 'always',
				named: 'never',
			},
		],
		'array-callback-return': [
			2,
			{
				allowImplicit: false,
				checkForEach: false,
			},
		],
		'arrow-parens': 0,
		'class-methods-use-this': 1,
		'comma-dangle': 0,
		'consistent-return': 0,
		'implicit-arrow-linebreak': 0,
		'import/extensions': [
			2,
			'never',
			{
				json: 'always',
				scss: 'always',
				svg: 'always',
			},
		],
		'import/no-cycle': [2, { maxDepth: 1 }],
		'import/no-extraneous-dependencies': [2, { devDependencies: true }],
		'import/order': [
			2,
			{
				alphabetize: { order: 'asc' },
				'newlines-between': 'always-and-inside-groups',
				pathGroups: [
					{
						group: 'internal',
						pattern: '@sb/**/*',
					},
					{
						group: 'external',
						pattern: '@storybook/**/*',
					},
					{
						group: 'internal',
						pattern:
							'{utils,components,routes,hooks,mocks,App,steps,styles,icons,propTypes}/**/*',
					},
				],
				pathGroupsExcludedImportTypes: [],
			},
		],
		'import/prefer-default-export': 0,
		indent: 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/mouse-events-have-key-events': 0,
		'jsx-a11y/no-noninteractive-element-interactions': 0,
		'jsx-a11y/no-static-element-interactions': 0,
		'max-classes-per-file': 0,
		'max-len': [
			2,
			300,
			4,
			{
				ignoreComments: true,
				ignoreUrls: true,
			},
		],
		'multiline-ternary': [1, 'always-multiline'],
		'new-cap': [
			2,
			{ capIsNewExceptions: ['IMap', 'List', 'Map', 'PlotlyD3Locale'] },
		],
		'no-case-declarations': 0,
		'no-cond-assign': [2, 'except-parens'],
		'no-console': [2, { allow: ['warn', 'error'] }],
		'no-else-return': [2, { allowElseIf: true }],
		'no-mixed-operators': [2, { allowSamePrecedence: true }],
		'no-multiple-empty-lines': [2, { max: 1 }],
		'no-param-reassign': 0,
		'no-plusplus': 0,
		'no-tabs': 0,
		'no-undef': 0,
		'no-underscore-dangle': 0,
		'no-use-before-define': 0,
		'object-curly-newline': 0,
		'operator-linebreak': [
			1,
			'after',
			{
				overrides: {
					':': 'before',
					'?': 'before',
				},
			},
		],
		/* eslint-disable sort-keys */
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: [
					'block-like',
					'break',
					'const',
					'continue',
					'function',
					'let',
					'return',
					'switch',
					'var',
				],
			},
			{
				blankLine: 'always',
				prev: ['block-like', 'const', 'let', 'var'],
				next: '*',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
		],
		/* eslint-enable sort-keys */
		'prefer-destructuring': [
			2,
			{
				AssignmentExpression: {
					array: false,
					object: false,
				},
				VariableDeclarator: {
					array: false,
					object: true,
				},
			},
			{ enforceForRenamedProperties: false },
		],
		quotes: 0,
		'react/destructuring-assignment': 0,
		'react/forbid-prop-types': 1, // TODO: Improve proptypes
		'react/jsx-boolean-value': 0,
		'react/jsx-curly-spacing': [
			2,
			{
				children: true,
				when: 'never',
			},
		],
		'react/jsx-filename-extension': 0,
		'react/jsx-fragments': [2, 'element'],
		'react/jsx-indent': [2, 'tab'],
		'react/jsx-indent-props': [2, 'tab'],
		'react/jsx-key': 2,
		'react/jsx-props-no-spreading': 0,
		'react/jsx-sort-props': [2, { reservedFirst: false }],
		'react/no-access-state-in-setstate': 0,
		'react/no-array-index-key': 0,
		'react/no-did-mount-set-state': 2,
		'react/no-did-update-set-state': 2,
		'react/no-direct-mutation-state': 2,
		'react/no-unused-prop-types': 0,
		'react/prop-types': [2, { skipUndeclared: true }],
		'react/require-default-props': 0,
		'react/sort-comp': [
			2,
			{
				order: [
					'static-variables',
					'lifecycle',
					'instance-variables',
					'instance-methods',
					'render',
				],
			},
		],
		'react/sort-prop-types': [2, { ignoreCase: false }],
		'react/state-in-constructor': 0,
		'react/static-property-placement': 0,
		'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
		'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
		'sort-destructure-keys/sort-destructure-keys': 2,
		'sort-imports': [
			'error',
			{
				ignoreDeclarationSort: true,
			},
		],
		'sort-keys': [
			'error',
			'asc',
			{
				caseSensitive: true,
				natural: true,
			},
		],
		'space-before-function-paren': 0,
	},
	settings: {
		'import/resolver': {
			alias: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				map: [['@sb', '.storybook']],
			},
			node: {},
		},
		react: {
			version: 'detect',
		},
	},
};
