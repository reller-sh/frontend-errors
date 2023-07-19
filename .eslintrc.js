const path = require('path');


const extensions = ['.js', '.ts', '.tsx', '.json', '.css', '.scss'];

const customHooksWithDeps = [
    'useUpdateOnlyEffect',
    'useSelector',
    'useAction',
];

module.exports = {
    env: {
        node: true,
        commonjs: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
    ],
    settings: {
        'import/extensions': extensions,
        'import/resolver': {
            alias: {
                map: [
                    ['Core', path.join(__dirname, 'src/core')],
                    ['Business', path.join(__dirname, 'src/business')],
                    ['Components', path.join(__dirname, 'src/components')],
                    ['src', path.join(__dirname, 'src')],
                    ['bootstrap', path.join(__dirname, 'bootstrap')],
                ],
                extensions,
            },
            node: {
                extensions,
            },
        },
        'import/core-modules': [
            'redux-saga/effects',
        ],
    },
    extends: [
        'next',
        'airbnb',
        'airbnb/hooks',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    globals: {
        window: true,
        document: true,
        __dirname: true,
        process: true,
        jest: true,
        describe: true,
        test: true,
        it: true,
        expect: true,
        beforeEach: true,
        File: true,
    },
    rules: {
        // TODO: remove img filtering rule in future
        '@next/next/no-img-element': ['off'],
        'jsx-a11y/label-has-associated-control': [
            2,
            {
                // labelComponents: ['FormLabel'],
                labelAttributes: ['label'],
                controlComponents: ['input'],
                depth: 1,
            }],
        'react/button-has-type': ['off'],
        camelcase: 'off',
        indent: 'off',
        'linebreak-style': 'off',
        'max-len': ['warn', {
            code: 100,
            tabWidth: 4,
            ignoreUrls: true,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        'arrow-parens': ['error', 'as-needed', {
            requireForBlockBody: false,
        }],
        'object-curly-newline': ['error', {
            multiline: true,
            consistent: true,
        }],
        curly: ['error', 'multi-or-nest'],
        'nonblock-statement-body-position': ['error', 'below'],
        'operator-linebreak': ['error', 'after', {
            overrides: {
                '?': 'before',
                ':': 'before',
            },
        }],

        'react/jsx-filename-extension': ['error', {
            extensions: ['.js', '.tsx'],
        }],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/sort-comp': ['error', {
            order: [
                'instance-variables',
                'static-methods',
                'lifecycle',
                'everything-else',
                'rendering',
            ],
            groups: {
                rendering: [
                    '/^render.+$/',
                    'render',
                ],
            },
        }],
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'react/no-children-prop': 'off',
        'react-hooks/exhaustive-deps': ['warn', {
            additionalHooks: `^(${customHooksWithDeps.join('|')})$`,
        }],
        'jsx-quotes': ['error', 'prefer-single'],
        'react/require-default-props': 'off',
        'no-restricted-syntax': 'off',
        'no-mixed-operators': 'off',
        'no-console': 'off',
        'no-shadow': 'off',
        'no-nested-ternary': 'off',
        'no-confusing-arrow': 'off',
        'no-underscore-dangle': 'off',
        'no-use-before-define': 'off',
        'no-multiple-empty-lines': ['error', {
            max: 2,
        }],
        'implicit-arrow-linebreak': 'off',

        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/indent': ['error', 4, {
            SwitchCase: 1,
        }],
        '@typescript-eslint/ban-ts-comment': 'off',

        'import/no-unresolved': ['warn', {
            commonjs: true,
            caseSensitive: true,
        }],
        'import/no-cycle': 'off',
        'import/newline-after-import': ['error', {
            count: 2,
        }],
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'import/order': ['warn', {
            groups: [
                ['builtin', 'external'],
                'internal',
                ['parent', 'sibling', 'index'],
            ],
            'newlines-between': 'always',
        }],
    },
    // overrides: [
    //     {
    //         files: [
    //             '**/*.stories.*',
    //         ],
    //         rules: {
    //             'import/no-anonymous-default-export': 'off',
    //         },
    //     },
    //     {
    //         files: [
    //             '**/*.stories.*',
    //         ],
    //         rules: {
    //             'import/no-anonymous-default-export': 'off',
    //         },
    //     },
    //     {
    //         files: [
    //             '**/*.stories.*',
    //         ],
    //         rules: {
    //             'import/no-anonymous-default-export': 'off',
    //         },
    //     },
    //     {
    //         files: ['*.ts', '*.tsx'],
    //         rules: {
    //             '@typescript-eslint/explicit-module-boundary-types': ['error'],
    //         },
    //     },
    // ],
};
