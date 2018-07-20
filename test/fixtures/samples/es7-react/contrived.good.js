// Made up sample.. not genuine

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends PureComponent {
    constructor() {
        super();
        this.state = {};
        this.handleClick = this.handleClick.bind(this);
        this.storeRef = this.storeRef.bind(this);
    }

    componentDidMount() {
        this.setState({ name: 'André' });
    }

    render() {
        return (
            <a ref={ this.storeRef } href="/foo" onClick={ this.handleClick }>
                Hello { this.state.name }
                <img src="http://domain.com/image.png" alt="" />

                { this.props.message }
            </a>
        );
    }

    storeRef(ref) {
        this.ref = ref;
    }

    handleClick() {
        this.setState({ name: 'Cruz' });
    }
}

MyComponent.propTypes = {
    message: PropTypes.string.isRequired,
};

export default MyComponent;
