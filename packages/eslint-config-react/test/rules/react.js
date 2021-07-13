import React, { Component, ReactDOM, Fragment } from 'react';
import PropTypes from 'prop-types';
import createReactClass from 'create-react-class';

// `default-props-match-prop-types` - enforce all defaultProps have a corresponding non-required PropType
// ---------------------------------------------------------------------
// Bad
{
    const Div = () => <div />;

    Div.propTypes = {
        foo: PropTypes.string.isRequired,
    };

    Div.defaultProps.foo = 'bar';
}
// Also bad
{
    class Div extends Component {
        render() {
            return <div />;
        }
    }

    Div.propTypes = {
        foo: PropTypes.string.isRequired,
    };

    Div.defaultProps = {
        foo: 'bar',
    };
}
// Still bad
{
    class Div extends Component {
        static propTypes = {
            foo: PropTypes.string.isRequired,
        };

        static defaultProps = {
            foo: 'bar',
        };

        render() {
            return <div />;
        }
    }
}
// Good
{
    const Div = () => <div />;

    Div.propTypes = {
        foo: PropTypes.string.isRequired,
    };
}

// `forbid-foreign-prop-types` - forbid foreign propTypes
// ---------------------------------------------------------------------
// Bad
{
    class MyComponent extends Component {
        static propTypes = {
            withFoo: PropTypes.bool,
        };
    }

    class OtherComponent extends Component {
        static propTypes = {
            ...MyComponent.propTypes,
            withBar: PropTypes.bool,
        };
    }
}
// Good
{
    const myComponentPropTypes = {
        withFoo: PropTypes.bool,
    };

    class MyComponent extends Component {
        static propTypes = myComponentPropTypes;
    }

    class OtherComponent extends Component {
        static propTypes = {
            ...myComponentPropTypes,
            withBar: PropTypes.bool,
        };
    }
}

// `jsx-boolean-value` - enforce boolean attributes notation in JSX
// ---------------------------------------------------------------------
// Bad
{
    const component = <Component isLoading={ true } />;
}
// Good
{
    const component = <Component isLoading />;
}

// `jsx-closing-bracket-location` - validate closing bracket location in JSX
// ---------------------------------------------------------------------
// Bad
{
    const div = (
        <div
        />
    );
}
// Good
{
    const div = (
        <div />
    );
}

// `jsx-curly-spacing` - enforce or disallow spaces inside of curly braces in JSX attributes
// ---------------------------------------------------------------------
// Bad
{
    const children = 'foo';
    const component = <Component isLoading={false}>{children}</Component>;
}
// Good
{
    const children = 'foo';
    const component = <Component isLoading={ false }>{ children }</Component>;
}

// `jsx-equals-spacing` - enforce or disallow spaces around equal signs in JSX attributes
// ---------------------------------------------------------------------
// Bad
{
    const component = <Component isLoading = { false } />;
}
// Good
{
    const component = <Component isLoading={ false } />;
}

// `jsx-filename-extension` - restrict file extensions that may contain JSX
// ---------------------------------------------------------------------
// See file ./react-jsx-extension.js

// `jsx-fragments` - enforce shorthand or standard form for React fragments
// ---------------------------------------------------------------------
// Not advisable
{
    class MyComponent extends Component {
        render() {
            return (
                <Fragment>
                    <p>foo</p>
                    <p>bar</p>
                </Fragment>
            );
        }
    }
}
// Good
{
    class MyComponent extends Component {
        render() {
            return (
                <>
                    <p>foo</p>
                    <p>bar</p>
                </>
            );
        }
    }
}
// Also good (when key is needed)
{
    class MyComponent extends Component {
        render() {
            return (
                <Fragment key="1">
                    <p>foo</p>
                    <p>bar</p>
                </Fragment>
            );
        }
    }
}

// `jsx-handler-names` - enforce event handler naming conventions in JSX
// ---------------------------------------------------------------------
// Bad
{
    class MyComponent extends Component {
        render() {
            return <a href="/foo" onClick={ this.onClick }>bleh</a>;
        }

        renderFoo() {
            return <a href="/foo" onClick={ this._handleClick }>foo</a>;
        }
    }
}
// Good
{
    class MyComponent extends Component {
        render() {
            return <a href="/foo" onClick={ this.handleClick }>bleh</a>;
        }
    }
}

// `jsx-indent-props` - validate props indentation in JSX
// ---------------------------------------------------------------------
// Bad
{
    const component = (
        <Component isLoading
        disabled />
    );
}
// Good
{
    const component = (
        <Component isLoading
            disabled />
    );
}

// `jsx-indent` - validate JSX indentation
// ---------------------------------------------------------------------
// Bad
{
    const component = (
      <Component isLoading />
    );
}
// Good
{
    const component = (
        <Component isLoading />
    );
}

// `jsx-key` - detect missing key prop
// ---------------------------------------------------------------------
// Not advisable
{
    class MyComponent extends Component {}

    [1, 2, 3].map((item) => <MyComponent item={ item } />);
}
// Good
{
    class MyComponent extends Component {}

    [1, 2, 3].map((item, index) => <MyComponent key={ index } item={ item } />);
}

// `jsx-no-bind` - no .bind() or Arrow Functions in JSX Props
// ---------------------------------------------------------------------
// Not advisable
{
    class MyComponent extends Component {
        render() {
            return <a href="/foo" onClick={ this.handleClick.bind(this) }>bleh</a>;
        }

        renderFoo() {
            return <a href="/foo" onClick={ (e) => this.handleClick(e) }>foo</a>;
        }
    }
}
// Good
{
    class MyComponent extends Component {
        constructor() {
            super();
            this.handleClick = this.handleClick.bind(this);
        }

        render() {
            return <a href="/foo" onClick={ this.handleClick }>bar</a>;
        }
    }
}

// `jsx-no-comment-textnodes` - prevent comments from being inserted as text nodes
// ---------------------------------------------------------------------
// Bad
{
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
}
// Good
{
    class MyComponent extends Component {
        render() {
            return (
                <div>
                    {'/* Comment */'}
                </div>
            );
        }
    }
}

// `jsx-no-duplicate-props` - prevent duplicate props in JSX
// ---------------------------------------------------------------------
// Bad
{
    const component = <Component isLoading isLoading />;
}
// Good
{
    const component = <Component isLoading className={ 'foo' } />;
}

// `jsx-no-target-blank` - prevent usage of unsafe target='_blank'
// ---------------------------------------------------------------------
// Not advisable
{
    const component = <a href="http://this.link/comes/from/user/input" target="_blank">foo</a>;
}
// Good
{
    const component = <a href="http://this.link/comes/from/user/input" target="_blank" rel="noreferrer">foo</a>;
}
// Also good
{
    const component = <a href="http://this.link/comes/from/user/input" target="_blank" rel="noopener">foo</a>;
}

// `jsx-no-undef` - disallow undeclared variables in JSX
// ---------------------------------------------------------------------
// Bad
{
    const component = <UndefinedComponent />;
}
// Good
{
    class DefinedComponent extends Component {}

    const component = <DefinedComponent />;
}

// `jsx-pascal-case` - enforce PascalCase for user-defined JSX components
// ---------------------------------------------------------------------
// Bad
{
    class My_Component extends Component {} // eslint-disable-line camelcase

    const foo = <My_Component />;
}
// Good
{
    class MyComponent extends Component {}

    const foo = <MyComponent />;
}

// `jsx-space-before-closing` - validate spacing before closing bracket in JSX
// ---------------------------------------------------------------------
// Bad
{
    const component = <div a z/>;
}
// Good
{
    const component = <div a z />;
}

// `jsx-tag-spacing` - validate whitespace in and around the JSX opening and closing brackets
// ---------------------------------------------------------------------
// Bad
{
    const b = < div />;
    const c = <div >foo</div>;
}
// Good
{
    const b = <div />;
    const c = <div>foo</div>;
}

// `jsx-uses-react` - prevent React to be incorrectly marked as unused
// ---------------------------------------------------------------------
// See file ./react-no-unused.js

// `jsx-uses-vars` - prevent variables used in JSX to be incorrectly marked as unused
// ---------------------------------------------------------------------
// See file ./react-no-unused.js

// `jsx-wrap-multilines` - prevent missing parentheses around multilines JSX
// ---------------------------------------------------------------------
// Bad
{
    const component = <div
        error />;
}
// Good
{
    const component = (<div
        error />);
}

// `no-children-prop` - prevent passing of children as props
// ---------------------------------------------------------------------
// Bad
{
    class MyComponent extends Component {}

    const a = <MyComponent children={ ['Child 1', 'Child 2'] } />;
}
// Good
{
    class MyComponent extends Component {}

    const a = (<MyComponent>
        { ['Child 1', 'Child 2'] }
    </MyComponent>);
}

// `no-deprecated` - prevent usage of deprecated methods
// ---------------------------------------------------------------------
// Not advisable
React.render(<Component />, '#root');
// Good
ReactDOM.render(<Component />, '#root');

// `no-direct-mutation-state` - prevent direct mutation of this.state
// ---------------------------------------------------------------------
// Bad
{
    class MyComponent extends Component {
        componentDidMount() {
            this.state.error = true;
        }
    }
}
// Good
{
    class MyComponent extends Component {
        componentDidMount() {
            this.setState({
                error: true,
            });
        }
    }
}

// `no-is-mounted` - prevent usage of isMounted
// ---------------------------------------------------------------------
// Bad
{
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
}
// Good
{
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
}

// `no-render-return-value` - prevent usage of the return value of React.render
// ---------------------------------------------------------------------
// Bad
{
    class App extends Component {}

    const inst = ReactDOM.render(<App />, document.body);
}
// Good
{
    class App extends Component {}

    ReactDOM.render(<App />, document.body);
}

// `no-string-refs` - prevent using string references in ref attributes
// ---------------------------------------------------------------------
// Bad
{
    class MyComponent extends Component {
        render() {
            return <div ref="hello">Hello</div>;
        }
    }
}
// Good
{
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
}

// `no-unescaped-entities` - prevent invalid characters from appearing in markup
// ---------------------------------------------------------------------
// Bad
{
    class MyComponent extends Component {}
    const comp = (<MyComponent
        name="name"
        type="string"
        foo="bar">
        x="y">
        { 'Body' }
    </MyComponent>);
}
// Good
{
    class MyComponent extends Component {}
    const comp = (<MyComponent
        name="name"
        type="string"
        foo="bar"
        x="y">
        { 'Body' }
    </MyComponent>);
}

// `no-unknown-property` - prevent usage of unknown DOM property
// ---------------------------------------------------------------------
// Bad
{
    const div = <div class="style" />;
}
// Good
{
    const div = <div className="style" />;
}

// `prefer-es6-class` - require ES6 class declarations over createReactClass
// ---------------------------------------------------------------------
// Bad
{
    const MyComponent = createReactClass({});
}
// Good
{
    class MyComponent extends Component {}
}

// `prop-types` - prevent missing props validation in a React component definition
// ---------------------------------------------------------------------
// Bad
{
    class MyComponent extends Component {
        render() {
            return <div>Hello { this.props.name }</div>;
        }
    }
}
// Good
{
    class MyComponent extends Component {
        render() {
            return <div>Hello { this.props.name }</div>;
        }
    }

    MyComponent.propTypes = {
        name: PropTypes.string,
    };
}

// `react-in-jsx-scope` - prevent missing React when using JSX
// ---------------------------------------------------------------------
// See file ./react-missing-import.js

// `require-render-return` - enforce ES5 or ES6 class for returning value in render function
// ---------------------------------------------------------------------
// Bad
{
    class MyComponent extends Component {
        render() {
            const div = <div error />;
        }
    }
}
// Good
{
    class MyComponent extends Component {
        render() {
            return <div error />;
        }
    }
}

// `self-closing-comp` - prevent extra closing tags for components without children
// ---------------------------------------------------------------------
// Bad
{
    const component = <Component></Component>;
}
// Good
{
    const component = <Component />;
}

// `sort-comp` - enforce component methods order
// ---------------------------------------------------------------------
// Bad
{
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
}
// Good
{
    class MyComponent extends Component {
        // Example of good usage of static prop-types
        static propTypes = {
            foo: PropTypes.string,
        };

        render() {
            return 'foo';
        }

        handleChange(e) {
            console.log(e);
        }
    }
}

// `style-prop-object` - enforce style prop value being an object
// ---------------------------------------------------------------------
// Bad
{
    const div = <div style="color: 'red'">foo</div>;
}
// Good
{
    const div = <div style={ { color: 'red' } }>foo</div>;
}

// `void-dom-elements-no-children` - prevent void DOM elements (e.g. <img />, <br />) from receiving children
// ---------------------------------------------------------------------
// Bad
{
    class MyComponent extends Component {}

    const a = <img alt="">children</img>;
}
// Good
{
    class MyComponent extends Component {}

    const a = <img alt="" src="" />;
}
