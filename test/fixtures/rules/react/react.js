import React, { Component, ReactDOM } from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

// `display-name` - prevent missing displayName in a React component definition
// ---------------------------------------------------------------------
// Not active
(function () {
    class MyComponent extends Component {}
})();

// `forbid-component-props` - forbid certain props on Components
// ---------------------------------------------------------------------
// Not active
(function () {
    class MyComponent extends Component {}
    const a = <MyComponent style={ { color: 'red' } } />;
})();

// `forbid-elements` - forbid certain elements
// ---------------------------------------------------------------------
// Not active

// `forbid-foreign-prop-types` - forbid foreign propTypes
// ---------------------------------------------------------------------
// See file ./react-foreign-proptypes.js

// `forbid-prop-types` - forbid certain propTypes (forbid-prop-types)
// ---------------------------------------------------------------------
// Not active
Component.propTypes = {
    a: PropTypes.any,
    r: PropTypes.array,
    o: PropTypes.object,
};

// `jsx-boolean-value` - enforce boolean attributes notation in JSX
// ---------------------------------------------------------------------
// Bad
(function () {
    const component = <Component isLoading={ true } />;
})();
// Good
(function () {
    const component = <Component isLoading />;
})();

// `jsx-closing-bracket-location` - validate closing bracket location in JSX
// ---------------------------------------------------------------------
// Bad
(function () {
    const div = (
        <div
        />
    );
})();
// Good
(function () {
    const div = (
        <div />
    );
})();

// `jsx-curly-spacing` - enforce or disallow spaces inside of curly braces in JSX attributes
// ---------------------------------------------------------------------
// Bad
(function () {
    const component = <Component isLoading={false} />;
})();
// Good
(function () {
    const component = <Component isLoading={ false } />;
})();

// `jsx-equals-spacing` - enforce or disallow spaces around equal signs in JSX attributes
// ---------------------------------------------------------------------
// Bad
(function () {
    const component = <Component isLoading = { false } />;
})();
// Good
(function () {
    const component = <Component isLoading={ false } />;
})();

// `jsx-filename-extension` - restrict file extensions that may contain JSX
// ---------------------------------------------------------------------
// See file ./react-jsx-extension.js

// `jsx-first-prop-new-line` - configure the position of the first property
// ---------------------------------------------------------------------
// Not active
(function () {
    class MyComponent extends Component {}
    const a = <MyComponent personal={ false } />;
})();

// `jsx-handler-names` - enforce event handler naming conventions in JSX
// ---------------------------------------------------------------------
// Bad
(function () {
    class MyComponent extends Component {
        render() {
            return <a href="/foo" onClick={ this.onClick }>bleh</a>;
        }

        renderFoo() {
            return <a href="/foo" onClick={ this._handleClick }>foo</a>;
        }
    }
})();
// Good
(function () {
    class MyComponent extends Component {
        render() {
            return <a href="/foo" onClick={ this.handleClick }>bleh</a>;
        }
    }
})();

// `jsx-indent-props` - validate props indentation in JSX
// ---------------------------------------------------------------------
// Bad
(function () {
    const component = (
        <Component isLoading
        disabled />
    );
})();
// Good
(function () {
    const component = (
        <Component isLoading
            disabled />
    );
})();

// `jsx-indent` - validate JSX indentation
// ---------------------------------------------------------------------
// Bad
(function () {
    const component = (
      <Component isLoading />
    );
})();
// Good
(function () {
    const component = (
        <Component isLoading />
    );
})();

// `jsx-key` - detect missing key prop
// ---------------------------------------------------------------------
// Disencouraged
(function () {
    [1, 2, 3].map((item) => <Component item={ item } />);
})();
// Good
(function () {
    class MyComponent extends Component {}
    [1, 2, 3].map((item, index) => <MyComponent key={ index } item={ item } />);
})();

// `jsx-max-props-per-line` - limit maximum of props on a single line in JSX
// ---------------------------------------------------------------------
// Not active
(function () {
    const component = <Component rule="limit" error={ false } number={ 1 } nolimit />;
})();

// `jsx-no-bind` - no .bind() or Arrow Functions in JSX Props
// ---------------------------------------------------------------------
// Disencouraged
(function () {
    class MyComponent extends Component {
        render() {
            return <a href="/foo" onClick={ this.handleClick.bind(this) }>bleh</a>;
        }

        renderFoo() {
            return <a href="/foo" onClick={ (e) => this.handleClick(e) }>foo</a>;
        }
    }
})();
// Good
(function () {
    class MyComponent extends Component {
        constructor() {
            super();
            this.handleClick = this.handleClick.bind(this);
        }

        render() {
            return <a href="/foo" onClick={ this.handleClick }>bar</a>;
        }
    }
})();

// `jsx-no-comment-textnodes` - prevent comments from being inserted as text nodes
// ---------------------------------------------------------------------
// Bad
(function () {
    class MyComponent extends Component {
        render() {
            return (
                <div>
                /* Comment */
                </div>
            );
        }

        renderFoo() {
            return (
                <div>
                // Comment
                </div>
            );
        }
    }
})();
// Good
(function () {
    class MyComponent extends Component {
        render() {
            return (
                <div>
                    {/* Comment */}
                </div>
            );
        }
    }
})();

// `jsx-no-duplicate-props` - prevent duplicate props in JSX
// ---------------------------------------------------------------------
// Bad
(function () {
    const component = <Component isLoading isLoading />;
})();
// Good
(function () {
    const component = <Component isLoading className={ 'foo' } />;
})();

// `jsx-no-literals` - prevent usage of unwrapped JSX strings
// ---------------------------------------------------------------------
// Not active
(function () {
    const component = <div>foo</div>;
})();

// `jsx-no-target-blank` - prevent usage of unsafe target='_blank'
// ---------------------------------------------------------------------
// Disencouraged
(function () {
    const component = <a href="http://this.link/comes/from/user/input" target="_blank">foo</a>;
})();
// Good
(function () {
    const component = <a href="http://this.link/comes/from/user/input" target="_blank" rel="noopener noreferrer">foo</a>;
})();

// `jsx-no-undef` - disallow undeclared variables in JSX
// ---------------------------------------------------------------------
// Bad
(function () {
    const component = <UndefinedComponent />;
})();
// Good
(function () {
    class DefinedComponent extends Component {}
    const component = <DefinedComponent />;
})();

// `jsx-pascal-case` - enforce PascalCase for user-defined JSX components
// ---------------------------------------------------------------------
// Bad
(function () {
    class My_Component extends Component {} // eslint-disable-line camelcase

    const foo = <My_Component />;
})();
// Good
(function () {
    class MyComponent extends Component {}

    const foo = <MyComponent />;
})();

// `jsx-sort-props` - enforce props alphabetical sorting
// ---------------------------------------------------------------------
// Not active
(function () {
    const component = <Component a z />;
})();

// `jsx-space-before-closing` - validate spacing before closing bracket in JSX
// ---------------------------------------------------------------------
// Bad
(function () {
    const component = <div a z/>;
})();
// Good
(function () {
    const component = <div a z />;
})();

// `jsx-tag-spacing` - validate whitespace in and around the JSX opening and closing brackets
// ---------------------------------------------------------------------
// Bad
(function () {
    const a = <div / >;
})();
// Good
(function () {
    const a = <div />;
})();

// `jsx-uses-react` - prevent React to be incorrectly marked as unused
// ---------------------------------------------------------------------
// See file ./react-no-unused.js

// `jsx-uses-vars` - prevent variables used in JSX to be incorrectly marked as unused
// ---------------------------------------------------------------------
// See file ./react-no-unused.js

// `jsx-wrap-multilines` - prevent missing parentheses around multilines JSX
// ---------------------------------------------------------------------
// Bad
(function () {
    const component = <div
        error />;
})();
// Good
(function () {
    const component = (<div
        error />);
})();

// `no-array-index-key` - prevent usage of Array index in keys
// ---------------------------------------------------------------------
// Not active
(function () {
    class MyComponent extends Component {}
    [1, 2, 3].map((thing, index) => (
        <MyComponent key={ index } />
    ));
})();

// `no-children-prop` - prevent passing of children as props
// ---------------------------------------------------------------------
// Bad
(function () {
    class MyComponent extends Component {}
    const a = <MyComponent children={ ['Child 1', 'Child 2'] } />;
})();
// Good
(function () {
    class MyComponent extends Component {}
    const a = (<MyComponent>
        { ['Child 1', 'Child 2'] }
    </MyComponent>);
})();

// `jsx-no-danger-with-children` - prevent problem with children and props.dangerouslySetInnerHTML
// ---------------------------------------------------------------------
// Not active
(function () {
    const Hello = (<div dangerouslySetInnerHTML={ { __html: 'Hello World' } }>
        { ['Child 1', 'Child 2'] }
    </div>);
})();

// `jsx-no-danger` - prevent usage of dangerous JSX properties
// ---------------------------------------------------------------------
// Not active
(function () {
    const Hello = <div dangerouslySetInnerHTML={ { __html: 'Hello World' } } />;
})();

// `no-deprecated` - prevent usage of deprecated methods
// ---------------------------------------------------------------------
// Disencouraged
React.render(<Component />, '#root');
// Good
ReactDOM.render(<Component />, '#root');

// `no-did-mount-set-state` - prevent usage of setState in componentDidMount
// ---------------------------------------------------------------------
// Not active
(function () {
    class MyComponent extends Component {
        componentDidMount() {
            this.setState({ error: true });
        }
    }
})();

// `no-did-update-set-state` - prevent usage of setState in componentDidUpdate
// ---------------------------------------------------------------------
// Not active
(function () {
    class MyComponent extends Component {
        componentDidUpdate() {
            this.setState({ error: true });
        }
    }
})();

// `no-direct-mutation-state` - prevent direct mutation of this.state
// ---------------------------------------------------------------------
// Bad
(function () {
    class MyComponent extends Component {
        componentDidMount() {
            this.state.error = true;
        }
    }
})();
// Good
(function () {
    class MyComponent extends Component {
        componentDidMount() {
            this.setState({
                error: true,
            });
        }
    }
})();

// `no-find-dom-node` - prevent usage of findDOMNode
// ---------------------------------------------------------------------
// Not active

// `no-is-mounted` - prevent usage of isMounted
// ---------------------------------------------------------------------
// Bad
(function () {
    class MyComponent extends Component {
        constructor() {
            super();
            this.state = { counter: 0 };
        }

        componentDidMount() {
            setInterval(() => {
                if (this.isMounted()) {
                    this.setState({ counter: this.state.counter + 1 });
                }
            }, 1000);
        }
    }
})();
// Good
(function () {
    class MyComponent extends Component {
        constructor() {
            super();
            this.state = { counter: 0 };
        }

        componentDidMount() {
            this._interval = setInterval(() => {
                this.setState({ counter: this.state.counter + 1 });
            });
        }

        componentWillUnmount() {
            clearInterval(this._interval);
        }
    }
})();

// `no-multi-comp` - prevent multiple component definition per file
// ---------------------------------------------------------------------
// Not active

// `no-render-return-value` - prevent usage of the return value of React.render
// ---------------------------------------------------------------------
// Bad
(function () {
    class App extends Component {}
    const inst = ReactDOM.render(<App />, document.body);
})();
// Good
(function () {
    class App extends Component {}
    ReactDOM.render(<App />, document.body);
})();

// `no-set-state` - prevent usage of setState
// ---------------------------------------------------------------------
// Not active
(function () {
    class MyComponent extends Component {
        componentDidMount(nextProps) {
            this.setState({ received: nextProps });
        }
    }
})();

// `no-string-refs` - prevent using string references in ref attributes
// ---------------------------------------------------------------------
// Bad
(function () {
    class MyComponent extends Component {
        render() {
            return <div ref="hello">Hello</div>
        }
    }
})();
// Good
(function () {
    class MyComponent extends Component {
        constructor() {
            super();
            this.handleRef = this.handleRef.bind(this);
        }

        render() {
            return <div ref={ this.handleRef }>Hello</div>;
        }

        handleRef(ref) {
            this._ref = ref;
        }
    }
})();

// `no-unescaped-entities` - prevent invalid characters from appearing in markup
// ---------------------------------------------------------------------
// Bad
(function () {
    class MyComponent extends Component {}
    const comp = (<MyComponent
        name="name"
        type="string"
        foo="bar">
        x="y">
        { 'Body' }
    </MyComponent>);
})();
// Good
(function () {
    class MyComponent extends Component {}
    const comp = (<MyComponent
        name="name"
        type="string"
        foo="bar"
        x="y">
        { 'Body' }
    </MyComponent>);
})();

// `no-unknown-property` - prevent usage of unknown DOM property
// ---------------------------------------------------------------------
// Bad
(function () {
    const div = <div class="style" />;
})();
// Good
(function () {
    const div = <div className="style" />;
})();

// `no-unused-prop-types` - prevent definitions of unused prop types
// ---------------------------------------------------------------------
// Not active
(function () {
    class MyComponent extends Component {
        render() {
            return <div />;
        }
    }

    MyComponent.propTypes = {
        name: PropTypes.string,
    };
})();

// `prefer-es6-class` - require ES6 class declarations over createReactClass
// ---------------------------------------------------------------------
// Bad
(function () {
    const MyComponent = createReactClass({});
})();
// Good
(function () {
    class MyComponent extends Component {}
})();

// `prefer-stateless-function` - enforce stateless components to be written as a pure function
// ---------------------------------------------------------------------
// Not active
(function () {
    class MyComponent extends Component {
        render() {
            return <div>Hello { this.props.name }</div>;
        }
    }

    MyComponent.propTypes = {
        name: PropTypes.string.isRequired,
    };
})();

// `prop-types` - prevent missing props validation in a React component definition
// ---------------------------------------------------------------------
// Bad
(function () {
    class MyComponent extends Component {
        render() {
            return <div>Hello { this.props.name }</div>;
        }
    }
})();
// Good
(function () {
    class MyComponent extends Component {
        render() {
            return <div>Hello { this.props.name }</div>;
        }
    }

    MyComponent.propTypes = {
        name: PropTypes.string,
    };
})();

// `react-in-jsx-scope` - prevent missing React when using JSX
// ---------------------------------------------------------------------
// See file ./react-missing-import.js

// `require-default-props` - enforce a defaultProps definition for every prop that is not a required prop
// ---------------------------------------------------------------------
// Not active
(function () {
    class MyComponent extends Component {
        render() {
            return <div>Hello { this.props.name }</div>;
        }
    }

    MyComponent.propTypes = {
        name: PropTypes.string,
    };
})();

// `require-extension` - restrict file extensions that may be required
// ---------------------------------------------------------------------
// Not active
(function () {
    const MyComponent = require('./MyComponent.jsx');
})();

// `require-optimization` - enforce React components to have a shouldComponentUpdate method
// ---------------------------------------------------------------------
// Not active, we use PureComponent's

// `require-render-return` - enforce ES5 or ES6 class for returning value in render function
// ---------------------------------------------------------------------
// Bad
(function () {
    class MyComponent extends Component {
        render() {
            const div = <div error />;
        }
    }
})();
// Good
(function () {
    class MyComponent extends Component {
        render() {
            return <div error />;
        }
    }
})();

// `self-closing-comp` - revent extra closing tags for components without children
// ---------------------------------------------------------------------
// Bad
(function () {
    const component = <Component></Component>;
})();
// Good
(function () {
    const component = <Component />;
})();

// `sort-comp` - enforce component methods order
// ---------------------------------------------------------------------
// Bad
(function () {
    class MyComponent extends Component {
        // Code below doesn't error out because we have two errors of the same rule.
        // They are shown one at a time.
        // static propTypes = {
        //     foo: PropTypes.string,
        // };

        handleChange(e) {
            console.log(e);
        }

        render() {
            return 'foo';
        }
    }
})();
// Good
(function () {
    class MyComponent extends Component {
        render() {
            return 'foo';
        }

        handleChange(e) {
            console.log(e);
        }

        // Example of good usage of static proptypes
        // static propTypes = {
        //     foo: PropTypes.string,
        // };
    }
})();

// `sort-prop-types` - enforce propTypes declarations alphabetical sorting
// ---------------------------------------------------------------------
// Not active
(function () {
    class MyComponent extends Component {}

    MyComponent.propTypes = {
        z: PropTypes.any,
        a: PropTypes.array,
        b: PropTypes.object,
    };
})();

// `style-prop-object` - enforce style prop value being an object
// ---------------------------------------------------------------------
// Bad
(function () {
    const div = <div style="color: 'red'">foo</div>;
})();
// Good
(function () {
    const div = <div style={ { color: 'red' } }>foo</div>;
})();

// `void-dom-elements-no-children` - prevent void DOM elements (e.g. <img />, <br />) from receiving children
// ---------------------------------------------------------------------
// Bad
(function () {
    class MyComponent extends Component {}
    const a = <img alt="">children</img>;
})();
// Good
(function () {
    class MyComponent extends Component {}
    const a = <img alt="" src="" />;
})();
