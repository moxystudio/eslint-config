// React plugin - https://github.com/yannickcr/eslint-plugin-react

'use strict';

module.exports = {
    'plugins': [
        'react',
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true,
        },
    },
    'rules': {
        // Prevent missing displayName in a React component definition
        'react/display-name': 0,
        // Forbid certain props on Components
        'react/forbid-component-props': 0,
        // Forbid certain elements
        'react/forbid-elements': 0,
        // Forbid foreign propTypes
        'react/forbid-foreign-prop-types': 2,
        // Forbid certain propTypes
        'react/forbid-prop-types': 0,
        // Enforce boolean attributes notation in JSX
        'react/jsx-boolean-value': [2, 'never'],
        // Validate closing bracket location in JSX
        'react/jsx-closing-bracket-location': [2, 'after-props'],
        // Enforce or disallow spaces inside of curly braces in JSX attributes
        'react/jsx-curly-spacing': [2, 'always'],
        // Enforce or disallow spaces around equal signs in JSX attributes
        'react/jsx-equals-spacing': [2, 'never'],
        // Restrict file extensions that may contain JSX
        'react/jsx-filename-extension': [2, { 'extensions': ['.js'] }],
        // Ensure correct position of the first property.
        'react/jsx-first-prop-new-line': 0,
        // Enforce event handler naming conventions in JSX
        'react/jsx-handler-names': [2, {
            'eventHandlerPrefix': 'handle',
            'eventHandlerPropPrefix': 'on',
        }],
        // Validate props indentation in JSX
        'react/jsx-indent-props': [2, 4],
        // Validate JSX indentation
        'react/jsx-indent': [2, 4],
        // Detect missing key prop
        'react/jsx-key': 1,
        // Limit maximum of props on a single line in JSX
        'react/jsx-max-props-per-line': 0,
        // No .bind() or Arrow Functions in JSX Props
        'react/jsx-no-bind': 1,
        // Prevent comments from being inserted as text nodes
        'react/jsx-no-comment-textnodes': 2,
        // Prevent duplicate props in JSX
        'react/jsx-no-duplicate-props': 2,
        // Prevent usage of unwrapped JSX strings
        'react/jsx-no-literals': 0,
        // Prevent usage of unsafe target='_blank'
        'react/jsx-no-target-blank': 1,
        // Disallow undeclared variables in JSX
        'react/jsx-no-undef': 2,
        // Enforce PasalCase for user-defined JSX components
        'react/jsx-pascal-case': 2,
        // Enforce props alphabetical sorting
        'react/jsx-sort-props': 0,
        // Enforce or forbid spaces before the closing bracket of self-closing JSX elements
        'react/jsx-tag-spacing': [2, {
            'closingSlash': 'never',
            'beforeSelfClosing': 'always',
            'afterOpening': 'never',
        }],
        // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-react': 2,
        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 2,
        // Prevent missing parentheses around multilines JSX
        'react/jsx-wrap-multilines': [2, {
            'declaration': true,
            'assignment': true,
            'return': true,
        }],
        // Prevent usage of Array index in keys
        'react/no-array-index-key': 0,
        // Prevent passing of children as props
        'react/no-children-prop': 2,
        // Prevent problem with children and props.dangerouslySetInnerHTML
        'react/no-danger-with-children': 2,
        // Prevent usage of dangerous JSX properties
        'react/no-danger': 0,
        // Prevent usage of deprecated methods
        'react/no-deprecated': 1,
        // Prevent usage of setState in componentDidMount
        'react/no-did-mount-set-state': 0,
        // Prevent usage of setState in componentDidUpdate
        'react/no-did-update-set-state': 0,
        // Prevent direct mutation of this.state
        'react/no-direct-mutation-state': 2,
        // Prevent usage of findDOMNode
        'react/no-find-dom-node': 0,
        // Prevent usage of isMounted
        'react/no-is-mounted': 2,
        // Prevent multiple component definition per file
        'react/no-multi-comp': 0,
        // Prevent usage of the return value of React.render
        'react/no-render-return-value': 2,
        // Prevent usage of setState
        'react/no-set-state': 0,
        // Prevent using string references
        'react/no-string-refs': 2,
        // Prevent invalid characters from appearing in markup
        'react/no-unescaped-entities': 2,
        // Prevent usage of unknown DOM property
        'react/no-unknown-property': 2,
        // Prevent definitions of unused prop types
        // comment: tried to enable it but was giving a lot of false positives..
        'react/no-unused-prop-types': 0,
        // Require ES6 class declarations over React.createClass
        'react/prefer-es6-class': [2, 'always'],
        // Enforce stateless components to be written as a pure function
        'react/prefer-stateless-function': 0,
        // Prevent missing props validation in a React component definition
        'react/prop-types': 2,
        // Prevent missing React when using JSX
        'react/react-in-jsx-scope': 2,
        // Enforce a defaultProps definition for every prop that is not a required prop
        'react/require-default-props': 0,
        // Restrict file extensions that may be required
        'react/require-extension': 0,
        // Enforce React components to have a shouldComponentUpdate method
        'react/require-optimization': 0,
        // Enforce ES5 or ES6 class for returning value in render function
        'react/require-render-return': 2,
        // Prevent extra closing tags for components without children
        'react/self-closing-comp': 2,
        // Enforce component methods order
        'react/sort-comp': [2, {
            'order': [
                'static-methods',
                'static-lifecycle',
                'instance-variables',
                'lifecycle',
                'render',
                '/^render.+$/',
                'everything-else',
                '/^handle.+$/',
            ],
            'groups': {
                'static-lifecycle': [
                    'displayName',
                    'propTypes',
                    'contextTypes',
                    'childContextTypes',
                    'defaultProps',
                    'getDerivedStateFromProps',
                ],
                'lifecycle': [
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
        // Enforce propTypes declarations alphabetical sorting
        'react/sort-prop-types': 0,
        // Enforce style prop value being an object
        'react/style-prop-object': 2,
        // Prevent void DOM elements (e.g. <img />, <br />) from receiving children
        'react/void-dom-elements-no-children': 2,
    },
};
