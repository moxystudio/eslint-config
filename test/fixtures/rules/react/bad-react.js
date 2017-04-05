var React = require('react');

/* =========== | Prevent missing displayName in a React component definition | =========== */

class ESLint extends React.Component {

} // not active

/* =================== // =================== */


/* =========== | Forbid certain propTypes (forbid-prop-types) | =========== */

Component.propTypes = {
  a: React.PropTypes.any,
  r: React.PropTypes.array,
  o: React.PropTypes.object
}; // not active

/* =================== // =================== */


/* =========== | Enforce boolean attributes notation in JSX | =========== */

var a = <div isLoading={ true } />

/* =================== // =================== */


/* =========== | Validate closing bracket location in JSX | =========== */

var b = <ESLint error
      />

/* =================== // =================== */


/* =========== | Enforce or disallow spaces inside of curly braces in JSX attributes | =========== */

var c = <ESLint rule={rule} />

/* =================== // =================== */


/* =========== | Enforce or disallow spaces around equal signs in JSX attributes | =========== */

var d =  <ESLint rule = { rule } />

/* =================== // =================== */


/* =========== | Ensure correct position of the first property | =========== */

var e = (<ESLint  // not active
    rule/>);

/* =================== // =================== */


/* =========== | Enforce event handler naming conventions in JSX | =========== */

var f = (<ESLint onChange={ this.onChange }/>);

/* =================== // =================== */


/* =========== | Validate props indentation in JSX | =========== */

var g = (<ESLint
rule/>);

/* =================== // =================== */


/* =========== | Validate JSX indentation | =========== */

var h = (
  <ESLint rule/>);

/* =================== // =================== */


/* =========== | Detect missing key prop | =========== */

var data = [1, 2, 3];
data.map((item, index) => <ESLint>index</ESLint>)

/* =================== // =================== */


/* =========== | Limit maximum of props on a single line in JSX | =========== */

var i = <ESLint rule="limit" error="false" number="1" nolimit="true"/> // not active

/* =================== // =================== */


/* =========== | No .bind() or Arrow Functions in JSX Props | =========== */

var i = <ESLint onChange={ this._handleChange.bind(this) }/> // not active

/* =================== // =================== */


/* =========== | Prevent duplicate props in JSX | =========== */

var j = <ESLint rule={ rule } rule={ rule }/> // not active

/* =================== // =================== */


/* =========== | Prevent usage of unwrapped JSX strings | =========== */

// var k = <ESLint />eslint</ESLint> // not active

/* =================== // =================== */


/* =========== | Disallow undeclared variables in JSX | =========== */

// var l = <ESLintUndefined rule={ newRule }/> // not active

/* =================== // =================== */


/* =========== | Enforce PasalCase for user-defined JSX components | =========== */

var m = <ES_Lint rule={ rule }/> // not active

/* =================== // =================== */


/* =========== | Enforce props alphabetical sorting | =========== */

var n = <ESLint variation={ 1 } rule={ rule }/> // not active

/* =================== // =================== */


/* =========== | React to be incorrectly marked as unused | =========== */

// If you don't make use of this var the eslint error will be thrown.
// var React = require('React');

/* =================== // =================== */


/* =========== | Prevent variables used in JSX to be incorrectly marked as unused | =========== */

var component = require('./Component');

/* =================== // =================== */


/* =========== | Prevent missing parentheses around multilines JSX | =========== */

var o = <div
    error/>;

/* =================== // =================== */


/* =========== | Prevent usage of dangerous JSX properties | =========== */

var Hello = <div dangerouslySetInnerHTML={ { __html: "Hello World" } } />; // not active

/* =================== // =================== */


/* =========== | Prevent usage of deprecated methods | =========== */

React.render(<ESLint />, root);

/* =================== // =================== */


/* =========== | Prevent usage of setState in componentDidMount | =========== */

class Test extends React.Component {
    componentDidMount() {
        this.setState({
            error: true,
        });
    }
}

/* =================== // =================== */


/* =========== | Prevent usage of setState in componentDidMount | =========== */

class Test extends React.Component {
    componentDidUpdate() {
        this.setState({
            error: true,
        });
    }
}

/* =================== // =================== */


/* =========== | Prevent direct mutation of this.state | =========== */

class Test extends React.Component {
    componentDidMount() {
        this.state.error = true;
    }
}

/* =================== // =================== */


/* =========== | Prevent usage of isMounted | =========== */

class Test extends React.Component {
    constructor() {
        if(this.isMounted()) {

        }
    }
}

/* =================== // =================== */


/* =========== | Prevent multiple component definition per file | =========== */

class Test extends React.Component {

}

/* =================== // =================== */


/* =========== | Allow usage of setState | =========== */

class Test extends React.Component {
    componentWillReceiveProps(nextProps) {
        this.setState({
            received: nextProps
        })
    }
}

/* =================== // =================== */


/* =========== | Prevent usage of unknown DOM property | =========== */

var p = <ESLint class="style" /> // ?

/* =================== // =================== */


/* =========== | Require ES6 class declarations over React.createClass | =========== */

var Component = React.createClass({

});

/* =================== // =================== */


/* =========== | Enforce stateless components to be written as a pure function | =========== */

var q = React.createClass({
  render: function() {
    return <div>Hello { this.props }</div>;
  }
});

/* =================== // =================== */


/* =========== | Prevent missing props validation in a React component definition | =========== */

var r = React.createClass({
  render: function() {
    return <div>Hello { this.props.name }</div>;
  }
});

/* =================== // =================== */


/* =========== | Prevent missing React when using JSX | =========== */

var s = <div error /> // already defined

/* =================== // =================== */


/* =========== | Restrict file extensions that may be required | =========== */

var file = require('./file.jsx'); // not active

/* =================== // =================== */


/* =========== | Restrict file extensions that may be required | =========== */

var file = require('./file.jsx'); // not active

/* =================== // =================== */


/* =========== | Enforce ES5 or ES6 class for returning value in render function | =========== */

class Test extends React.Component {
    render() {
        <div error />
    }
}

/* =================== // =================== */


/* =========== | Prevent extra closing tags for components without children | =========== */

var t = <ESLint error></ESLint>

/* =================== // =================== */


/* =========== | Enforce component methods order | =========== */

class Test extends React.Component {
    _handleChange(e) {
        console.log(e);
    }

    render() {

    }
}

/* =================== // =================== */


/* =========== | Enforce propTypes declarations alphabetical sorting | =========== */

Component.propTypes = {
  a: React.PropTypes.any,
  r: React.PropTypes.array,
  o: React.PropTypes.object
};  // not active

/* =================== // =================== */
