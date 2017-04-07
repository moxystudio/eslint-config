import React, { Component, PropTypes } from 'react';

// Prevent missing displayName in a React component definition
// ---------------------------------------------------------------------
(function () {
    class MyComponent extends Component {}
})();

// Forbid certain propTypes (forbid-prop-types)
// ---------------------------------------------------------------------
Component.propTypes = {
    a: PropTypes.any,
    r: PropTypes.array,
    o: PropTypes.object,
};  // Not active

// Enforce boolean attributes notation in JSX
// ---------------------------------------------------------------------
(function () {
    const component = <Component isLoading={ true } />
})();

// Validate closing bracket location in JSX
// ---------------------------------------------------------------------
(function () {
    const div = (
        <div
        />
    );
})();

// Enforce or disallow spaces inside of curly braces in JSX attributes
// ---------------------------------------------------------------------
(function () {
    const component = <Component isLoading={false} />;
})();

// Enforce or disallow spaces around equal signs in JSX attributes
// ---------------------------------------------------------------------
(function () {
    const component = <Component isLoading = { false } />;
})();

// Ensure correct position of the first property
// ---------------------------------------------------------------------
(function () {
    const component = (
        <Component isLoading
            disabled />
    );
})();  // Not active

// Enforce event handler naming conventions in JSX
// ---------------------------------------------------------------------
(function () {
    class MyComponent extends Component {
        render() {
            return <div onClick={ this._onClick }>bleh</div>;
        }

        _renderFoo() {
            return <div onClick={ this.handleClick }>foo</div>;
        }

        _renderBar() {
            return <div onClick={ this._handleClick }>bar</div>;
        }
    }
})();

// Validate props indentation in JSX
// ---------------------------------------------------------------------
(function () {
    const component = (
        <Component isLoading
        disabled />
    );
})();

// Validate JSX indentation
// ---------------------------------------------------------------------
(function () {
    const component = (
      <Component isLoading />
    );
})();  // Not active

// Detect missing key prop
// ---------------------------------------------------------------------
[1, 2, 3].map((item) => <Component item={ item } />);

// Limit maximum of props on a single line in JSX
// ---------------------------------------------------------------------
(function () {
    const component = <Component rule="limit" error={ false } number={ 1 } nolimit />
})();  // Not active

// No .bind() or Arrow Functions in JSX Props
// ---------------------------------------------------------------------
(function () {
    class MyComponent extends Component {
        constructor() {
            super();
            this._handleClick = this._handleClick.bind(this);
        }

        render() {
            return <div onClick={ this._handleClick.bind(this) }>bleh</div>;
        }

        _renderFoo() {
            return <div onClick={ (e) => this._handleClick(e) }>foo</div>;
        }

        _renderBar() {
            return <div onClick={ this._handleClick }>bar</div>;
        }
    }
})();

// Prevent duplicate props in JSX
// ---------------------------------------------------------------------
(function () {
    const component = <Component isLoading isLoading />;
})();

// Prevent usage of unwrapped JSX strings
// ---------------------------------------------------------------------
(function () {
    const component = <div>foo</div>;
})();  // Not active

// Disallow undeclared variables in JSX
// ---------------------------------------------------------------------
(function () {
    const component = <UndefinedComponent />;
})();

// Enforce PascalCase for user-defined JSX components
// ---------------------------------------------------------------------
(function () {
    class My_Component extends Component {}

    const foo = <My_Component />;
})();

// Enforce props alphabetical sorting
// ---------------------------------------------------------------------
(function () {
    const component = <Component a z />;
})();  // Not active

// Prevent missing parentheses around multilines JSX
// ---------------------------------------------------------------------
(function () {
    const component = <div
        error />;
})();

// Prevent usage of dangerous JSX properties
// ---------------------------------------------------------------------
(function () {
    const Hello = <div dangerouslySetInnerHTML={ { __html: 'Hello World' } } />;
})();  // Not active

// Prevent usage of deprecated methods
// ---------------------------------------------------------------------
React.render(<Component />, '#root');

// Prevent usage of setState in componentDidMount
// ---------------------------------------------------------------------
(function () {
    class MyComponent extends Component {
        componentDidMount() {
            this.setState({ error: true });
        }
    }
})();

// Prevent usage of setState in componentDidUpdate
// ---------------------------------------------------------------------
(function () {
    class MyComponent extends Component {
        componentDidUpdate() {
            this.setState({ error: true });
        }
    }
})();

// Prevent direct mutation of this.state
// ---------------------------------------------------------------------
(function () {
    class MyComponent extends Component {
        componentDidMount() {
            this.state.error = true;
        }
    }
})();

// Prevent usage of isMounted
// ---------------------------------------------------------------------
(function () {
    class MyComponent extends Component {
        _handleClick() {
            if (this.isMounted()) {
                console.log('foo');
            }
        }
    }
})();

// Allow usage of setState
// ---------------------------------------------------------------------
(function () {
    class MyComponent extends Component {
        componentWillReceiveProps(nextProps) {
            this.setState({ received: nextProps });
        }
    }
})();

// Prevent usage of unknown DOM property
// ---------------------------------------------------------------------
(function () {
    const div = <div class="style" />;
})();

// Require ES6 class declarations over React.createClass
// ---------------------------------------------------------------------
(function () {
    const MyComponent = React.createClass({});
})();

// Enforce stateless components to be written as a pure function
// ---------------------------------------------------------------------
(function () {
    class MyComponent extends Component {
        render() {
            return <div>Hello { this.props.name }</div>;
        }
    }

    MyComponent.propTypes = {
        name: PropTypes.string.isRequired,
    };
})();  // Not active

// Prevent missing props validation in a React component definition
// ---------------------------------------------------------------------
(function () {
    class MyComponent extends Component {
        render() {
            return <div>Hello { this.props.name }</div>;
        }
    }
})();

// Restrict file extensions that may be required
// ---------------------------------------------------------------------
(function () {
    const MyComponent = require('./MyComponent.jsx');
})();  // Not active

// Enforce ES5 or ES6 class for returning value in render function
// ---------------------------------------------------------------------
(function () {
    class MyComponent extends Component {
        render() {
            <div error />;
        }
    }
})();

// Prevent extra closing tags for components without children
// ---------------------------------------------------------------------
(function () {
    const component = <Component></Component>;
})();

// Enforce component methods order
// ---------------------------------------------------------------------
(function () {
    class MyComponent extends Component {
        _handleChange(e) {
            console.log(e);
        }

        render() {
            return 'foo';
        }
    }
})();

// Enforce propTypes declarations alphabetical sorting
// ---------------------------------------------------------------------
(function () {
    class MyComponent extends Component {}

    MyComponent.propTypes = {
        z: PropTypes.any,
        a: PropTypes.array,
        b: PropTypes.object,
    };
})();  // Not active
