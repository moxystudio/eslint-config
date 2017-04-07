// Made up sample.. not genuine

import React from 'react';

const MyComponent = React.createClass({
    componentWillMount() {
        this.setState({ name: 'André' });
    },

    render() {
        return (
            <div onClick={ () => this._handleClick() } onMouseEnter={ this.onMouseEnter }>
                Hello { this.state.name }
                <img src="http://domain.com/image.png"/>
            </div>
        );
    },

    _handleClick() {
        this.setState({ name: 'Cruz' });
    },
});

export default MyComponent;
