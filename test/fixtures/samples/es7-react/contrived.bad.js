// Made up sample.. not genuine

import React from 'react';
import createReactClass from 'create-react-class';

const MyComponent = createReactClass({
    componentWillMount() {
        this.setState({ name: 'André' });
    },

    render() {
        return (
            <a href="/foo" onClick={ () => this._handleClick() } onMouseEnter={ this.onMouseEnter }>
                Hello { this.state.name }
                <img src="http://domain.com/image.png" alt=""/>
            </a>
        );
    },

    _handleClick() {
        this.setState({ name: 'Cruz' });
    },
});

export default MyComponent;
