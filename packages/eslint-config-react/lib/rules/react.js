// React plugin - https://github.com/yannickcr/eslint-plugin-react

'use strict';

module.exports = {
    rules: {
        // Enforce all defaultProps have a corresponding non-required PropType
        'react/default-props-match-prop-types': 'error',
        // Forbid foreign propTypes
        'react/forbid-foreign-prop-types': 'error',
        // Enforce boolean attributes notation in JSX
        'react/jsx-boolean-value': ['error', 'never'],
        // Validate closing bracket location in JSX
        'react/jsx-closing-bracket-location': ['error', 'after-props'],
        // Enforce or disallow spaces inside of curly braces in JSX attributes
        'react/jsx-curly-spacing': ['error', { when: 'always', children: true }],
        // Enforce or disallow spaces around equal signs in JSX attributes
        'react/jsx-equals-spacing': ['error', 'never'],
        // Restrict file extensions that may contain JSX
        'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
        // Enforce shorthand or standard form for React fragments
        'react/jsx-fragments': ['warn', 'syntax'],
        // Enforce event handler naming conventions in JSX
        'react/jsx-handler-names': ['error', {
            eventHandlerPrefix: 'handle',
            eventHandlerPropPrefix: 'on',
        }],
        // Validate props indentation in JSX
        'react/jsx-indent-props': ['error', 4],
        // Validate JSX indentation
        'react/jsx-indent': ['error', 4],
        // Detect missing key prop
        'react/jsx-key': 'warn',
        // No .bind() or Arrow Functions in JSX Props
        'react/jsx-no-bind': 'warn',
        // Prevent comments from being inserted as text nodes
        'react/jsx-no-comment-textnodes': 'error',
        // Prevent duplicate props in JSX
        'react/jsx-no-duplicate-props': 'error',
        // Prevent usage of unsafe target='_blank'
        'react/jsx-no-target-blank': 'warn',
        // Disallow undeclared variables in JSX
        'react/jsx-no-undef': 'error',
        // Enforce PasalCase for user-defined JSX components
        'react/jsx-pascal-case': 'error',
        // Enforce or forbid spaces before the closing bracket of self-closing JSX elements
        'react/jsx-tag-spacing': ['error', {
            closingSlash: 'never',
            beforeClosing: 'never',
            beforeSelfClosing: 'always',
            afterOpening: 'never',
        }],
        // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-react': 'error',
        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 'error',
        // Prevent missing parentheses around multilines JSX
        'react/jsx-wrap-multilines': ['error', {
            declaration: true,
            assignment: true,
            return: true,
        }],
        // Prevent passing of children as props
        'react/no-children-prop': 'error',
        // Prevent problem with children and props.dangerouslySetInnerHTML
        'react/no-danger-with-children': 'error',
        // Prevent usage of deprecated methods
        'react/no-deprecated': 'warn',
        // Prevent direct mutation of this.state
        'react/no-direct-mutation-state': 'error',
        // Prevent usage of isMounted
        'react/no-is-mounted': 'error',
        // Prevent usage of the return value of React.render
        'react/no-render-return-value': 'error',
        // Prevent using string references
        'react/no-string-refs': 'error',
        // Prevent invalid characters from appearing in markup
        'react/no-unescaped-entities': 'error',
        // Prevent usage of unknown DOM property
        'react/no-unknown-property': 'error',
        // Require ES6 class declarations over React.createClass
        'react/prefer-es6-class': ['error', 'always'],
        // Prevent missing props validation in a React component definition
        'react/prop-types': 'error',
        // Prevent missing React when using JSX
        'react/react-in-jsx-scope': 'error',
        // Enforce ES5 or ES6 class for returning value in render function
        'react/require-render-return': 'error',
        // Prevent extra closing tags for components without children
        'react/self-closing-comp': 'error',
        // Enforce component methods order
        'react/sort-comp': ['error', {
            order: [
                'static-variables',
                'static-methods',
                'static-lifecycle',
                'instance-variables',
                'lifecycle',
                'render',
                '/^render.+$/',
                'everything-else',
                '/^handle.+$/',
            ],
            groups: {
                'static-lifecycle': [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'defaultProps',
                    'getDerivedStateFromProps',
                ],
                lifecycle: [
                    'mixins',
                    'statics',
                    'constructor',
                    'getDefaultProps',
                    'state',
                    'getInitialState',
                    'getChildContext',
                    'componentWillMount',
                    'UNSAFE_componentWillMount',
                    'componentDidMount',
                    'componentWillReceiveProps',
                    'UNSAFE_componentWillReceiveProps',
                    'shouldComponentUpdate',
                    'componentWillUpdate',
                    'UNSAFE_componentWillUpdate',
                    'getSnapshotBeforeUpdate',
                    'componentDidUpdate',
                    'componentDidCatch',
                    'componentWillUnmount',
                ],
            },
        }],
        // Enforce style prop value being an object
        'react/style-prop-object': 'error',
        // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
        'react/void-dom-elements-no-children': 'error',
    },
};
