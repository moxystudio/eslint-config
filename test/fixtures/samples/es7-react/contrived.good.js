// Made up sample.. not genuine

import React, { PureComponent } from 'react';

class MyComponent extends PureComponent {
    constructor() {
        super();
        this.state = {};
        this._handleClick = this._handleClick.bind(this);
    }

    componentWillMount() {
        this.setState({ name: 'André' });
    }

    render() {
        return (
            <a href="/foo" onClick={ this._handleClick }>
                Hello { this.state.name }
                <img src="http://domain.com/image.png" alt="" />
            </a>
        );
    }

    _handleClick() {
        this.setState({ name: 'Cruz' });
    }
}

export default MyComponent;
