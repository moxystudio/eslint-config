/* eslint react/no-multi-comp:2 */

import React, { Component } from 'react';

// Prevent multiple component definition per file
// ---------------------------------------------------------------------
class MyComponent extends Component {
    render() {
        return 'foo';
    }
}

class MyComponent2 extends Component {
    render() {
        return 'bar';
    }
}
