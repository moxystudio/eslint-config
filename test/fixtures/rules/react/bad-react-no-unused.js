/* eslint no-unused-vars:2 */

import React, { Component } from 'react';

// React to be incorrectly marked as unused
// ---------------------------------------------------------------------
(function () {
    class MyComponent extends Component {
        render() {
            return <div>foo</div>;
        }
    }

    console.log(MyComponent);
})();  // Should not give an error

// Prevent variables used in JSX to be incorrectly marked as unused
// ---------------------------------------------------------------------
(function () {
    const isLoading = true;
    const component = <Component isLoading={ isLoading } />;

    console.log(isLoading, component);
})();  // Should not give an error
